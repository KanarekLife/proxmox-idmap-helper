<script lang="ts">
    import type Rule from "../data/rule";
    import Input from "./Input.svelte";
    import Output from "./Output.svelte";
    let rules: Rule[] = [];
</script>

<div>
    <Input bind:rules />
    <Output bind:rules />
</div>
