<script lang="ts">
    import type Rule from "../data/rule";
    import Input from "./Input.svelte";
    let rules: Rule[] = [];
</script>

<div>
    <Input bind:rules />
</div>
