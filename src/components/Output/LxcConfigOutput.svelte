<script lang="ts">
    import type Rule from "../../data/rule";

    import { getLXCConfiguration } from "../../services/idmap_service";

    export let rules: Rule[];
    $: output = getLXCConfiguration(rules);
</script>

<section class="section">
    <h1 class="title">LXC Configuration</h1>
    <h2 class="subtitle">
        Paste this code into <code
            >/etc/pve/lxc/&lbrace;container_id&rbrace;.conf</code
        >
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
