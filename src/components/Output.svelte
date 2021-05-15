<script lang="ts">
    import type Rule from "../data/rule";
    import parseIdMap from "../services/idmap_service";

    export let rules: Rule[];

    $: output = parseIdMap(rules);
</script>

<section class="section">
    <h1 class="title">Output</h1>
    <h2 class="subtitle">
        Copy your output and paste it into your <code
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
