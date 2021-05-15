<script lang="ts">
    import type Rule from "../data/rule";
    import Input from "./Input.svelte";
    import Output from "./Output.svelte";
    let rules: Rule[] = [
        {
            type: 0,
            id_in_container: 996,
            id_in_host: 996,
        },
    ];
</script>

<div>
    <Input bind:rules />
    <Output bind:rules />
</div>
