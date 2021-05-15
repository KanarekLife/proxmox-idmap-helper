import type Rule from "../data/rule";
import { Type } from "../data/type";

export default function parseIdMap(rules: Rule[]): string {
    const offset = 10000;
    const map = getMapOfRules(rules);
    let output_lines: string[] = [
        '# Generated with Proxmox LXC idmap helper created by Stanisław Nieradko'
    ];
    let groupOfUndefinedUsers: number[] = [];
    let groupOfUndefinedGroups: number[] = [];
    for (let id = 0; id < 65535; id++) {
        const rule = map.get(id);
        if (!rule) {
            groupOfUndefinedUsers.push(id);
            groupOfUndefinedGroups.push(id);
            continue;
        }
        if (rule.type === Type.Group) {
            groupOfUndefinedGroups = groupOfUndefinedGroups.filter(x => x !== rule.id_in_host);
            groupOfUndefinedUsers.push(id);
        }
        if (rule.type === Type.User) {
            groupOfUndefinedUsers = groupOfUndefinedUsers.filter(x => x !== rule.id_in_host);
            groupOfUndefinedGroups.push(id);
        }
        output_lines = output_lines.concat(getLinesFromRule(rule));
    }

    for (const undefinedSerieOfUsers of generateSeries(groupOfUndefinedUsers)) {
        output_lines.push(`lxc.idmap: u ${undefinedSerieOfUsers.start} ${undefinedSerieOfUsers.start + offset} ${undefinedSerieOfUsers.count}`);
    }
    for (const undefinedSerieOfGroups of generateSeries(groupOfUndefinedGroups)) {
        output_lines.push(`lxc.idmap: g ${undefinedSerieOfGroups.start} ${undefinedSerieOfGroups.start + offset} ${undefinedSerieOfGroups.count}`);
    }

    return output_lines.sort().join('\n');
}
type Serie = {
    start: number,
    count: number
};

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

function getLinesFromRule(rule: Rule): string[] {
    if (rule.type == Type.UserWithGroup) {
        return [
            `lxc.idmap: u ${rule.id_in_container} ${rule.id_in_host}`,
            `lxc.idmap: g ${rule.id_in_container} ${rule.id_in_host}`
        ];
    } else if (rule.type == Type.User) {
        return [`lxc.idmap: u ${rule.id_in_container} ${rule.id_in_host}`];
    } else if (rule.type == Type.Group) {
        return [`lxc.idmap: g ${rule.id_in_container} ${rule.id_in_host}`];
    } else {
        console.error('Invalid rule type found!', rule);
        alert('Invalid rule type found! Check console to find out what happened!');
    }
}