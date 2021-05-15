<script lang="ts">
    import type Rule from "../data/rule";
    import Input from "./Input.svelte";
    import Output from "./Output.svelte";
    let rules: Rule[] = [
        {
            type: 2,
            id_in_container: 1002,
            id_in_host: 1002,
        },
    ];
</script>

<div>
    <Input bind:rules />
    <Output bind:rules />
</div>
