<script lang="ts">
    import type Rule from "../../data/rule";
    import { getSubGidConfiguration } from "../../services/idmap_service";

    export let rules: Rule[];

    $: output = getSubGidConfiguration(rules);
</script>

<section class="section">
    <h1 class="title">SubGid Configuration</h1>
    <h2 class="subtitle">
        Paste this code into <code>/etc/subgid</code>
    </h2>

    <code>
        {output}
    </code>
</section>

<style>
    code {
        display: block;
        white-space: pre-wrap;
    }
</style>
