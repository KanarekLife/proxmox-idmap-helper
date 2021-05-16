import type Rule from "../data/rule";
import { Type } from "../data/type";

const output_lines: string[] = [
    '# Generated with Proxmox LXC idmap helper created by Stanisław Nieradko'
];

export function getLXCConfiguration(rules: Rule[], offset: number = 10000): string {
    const map = getMapOfRules(rules);
    let textRules: TextRule[] = [];
    let groupOfUndefinedUsers: number[] = [];
    let groupOfUndefinedGroups: number[] = [];
    for (let id = 0; id < 65536; id++) {
        const rule = map.get(id);
        if (!rule) {
            groupOfUndefinedUsers.push(id);
            groupOfUndefinedGroups.push(id);
            continue;
        }
        if (rule.type == Type.Group) {
            groupOfUndefinedGroups = groupOfUndefinedGroups.filter(x => x !== rule.id_in_host);
            groupOfUndefinedUsers.push(id);
        }
        if (rule.type == Type.User) {
            groupOfUndefinedUsers = groupOfUndefinedUsers.filter(x => x !== rule.id_in_host);
            groupOfUndefinedGroups.push(id);
        }
        textRules = textRules.concat(getTextRulesFromRule(rule));
    }

    textRules = textRules
        .concat(generateSeries(groupOfUndefinedUsers).map(serie => generateTextRuleFromSerie('u', offset, serie)))
        .concat(generateSeries(groupOfUndefinedGroups).map(serie => generateTextRuleFromSerie('g', offset, serie)));

    return output_lines
        .concat(textRules
            .sort(sortTextRule)
            .map(getLinesFromTextRules))
        .join('\n');
}

export function getSubUidConfiguration(rules: Rule[]): string {
    const userRules = rules
        .filter(x => x.type == Type.User || x.type == Type.UserWithGroup);
    const uniqueUserRules = [...new Set(userRules)];
    const hostIds = uniqueUserRules.map(x => x.id_in_host);
    const lines = hostIds.map(x => `root:${x}:1`);
    return output_lines
        .concat('root:100000:65536')
        .concat(lines)
        .join('\n');
}

export function getSubGidConfiguration(rules: Rule[]): string {
    const userRules = rules
        .filter(x => x.type == Type.Group || x.type == Type.UserWithGroup);
    const uniqueUserRules = [...new Set(userRules)];
    const hostIds = uniqueUserRules.map(x => x.id_in_host);
    const lines = hostIds.map(x => `root:${x}:1`);
    return output_lines
        .concat('root:100000:65536')
        .concat(lines)
        .join('\n');
}

type Serie = {
    start: number,
    count: number
};

type TextRule = {
    type: string,
    start_host: number,
    start_container: number,
    count: number
};

function sortTextRule(a: TextRule, b: TextRule): number {
    return a.start_host - b.start_host;
}

function getLinesFromTextRules(textRule: TextRule): string {
    return `lxc.idmap: ${textRule.type} ${textRule.start_host} ${textRule.start_container} ${textRule.count}`;
}

function generateTextRuleFromSerie(type: string, offset: number, serie: Serie): TextRule {
    return {
        type,
        start_host: serie.start,
        start_container: serie.start + offset,
        count: serie.count
    };
}

function generateSeries(numbers: number[]): Serie[] {
    const output: Serie[] = [];
    let buffer = [];
    for (const number of numbers) {
        if (buffer.slice(-1)[0] == undefined || buffer.slice(-1)[0] + 1 != number) {
            if (buffer.length > 0) {
                output.push({ start: buffer[0], count: buffer.length });
            }
            buffer = [];
        }
        buffer.push(number);
    }
    if (buffer.length > 0) {
        output.push({ start: buffer[0], count: buffer.length });
    }
    return output;
}

function getMapOfRules(rules: Rule[]): Map<number, Rule> {
    const map = new Map<number, Rule>();
    for (const rule of rules) {
        map.set(rule.id_in_host, rule);
    }
    return map;
}

function getTextRulesFromRule(rule: Rule): TextRule[] {
    if (rule.type == Type.UserWithGroup) {
        return [
            {
                type: 'u', start_host: rule.id_in_host, start_container: rule.id_in_container, count: 1
            },
            { type: 'g', start_host: rule.id_in_host, start_container: rule.id_in_container, count: 1 }
        ];
    } else if (rule.type == Type.User) {
        return [
            {
                type: 'u', start_host: rule.id_in_host, start_container: rule.id_in_container, count: 1
            }
        ];
    } else if (rule.type == Type.Group) {
        return [
            {
                type: 'g', start_host: rule.id_in_host, start_container: rule.id_in_container, count: 1
            }
        ];
    } else {
        console.error('Invalid rule type found!', rule);
        alert('Invalid rule type found! Check console to find out what happened!');
    }
}