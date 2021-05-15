import type { Type } from "./type";

export default class Rule {
    type: Type;
    id_in_host: number;
    id_in_container: number;
}