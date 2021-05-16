<script lang="ts">
    import type Rule from "../../data/rule";
    import { getSubUidConfiguration } from "../../services/idmap_service";

    export let rules: Rule[];

    $: output = getSubUidConfiguration(rules);
</script>

<section class="section">
    <h1 class="title">SubUid Configuration</h1>
    <h2 class="subtitle">
        Paste this code into <code>/etc/subuid</code>
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
