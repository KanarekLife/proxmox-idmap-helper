<script lang="ts">
    import type Rule from "../data/rule";
    import LxcConfigOutput from "./Output/LxcConfigOutput.svelte";
    import SubGidConfigOutput from "./Output/SubGidConfigOutput.svelte";
    import SubUidConfigOutput from "./Output/SubUidConfigOutput.svelte";

    export let rules: Rule[];
</script>

<section class="section">
    <h1 class="title">Output</h1>

    <LxcConfigOutput {rules} />
    <SubUidConfigOutput {rules} />
    <SubGidConfigOutput {rules} />
</section>
