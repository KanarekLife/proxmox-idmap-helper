<script lang="ts">
    import type Rule from "../data/rule";
    import type { Type } from "../data/type";

    export let rules: Rule[];

    let typeOfNewRule: Type;
    let hostIdOfNewRule: number;
    let containerIdOfNewRule: number;

    function createNewRule() {
        let valid = true;
        if (typeOfNewRule == -1) {
            createDangerNotification("Type of rule wasn't specified.");
            valid = false;
        }
        if (
            !hostIdOfNewRule ||
            typeof hostIdOfNewRule != "number" ||
            hostIdOfNewRule < 0 ||
            hostIdOfNewRule > 65534
        ) {
            createDangerNotification(
                "H_ID must be a numeric value between 0 and 65534 (inclusive)."
            );
            valid = false;
        }
        if (
            !containerIdOfNewRule ||
            typeof containerIdOfNewRule != "number" ||
            containerIdOfNewRule < 0 ||
            containerIdOfNewRule > 65534
        ) {
            createDangerNotification(
                "C_ID must be a numeric value between 0 and 65534 (inclusive)."
            );
            valid = false;
        }

        if (valid) {
            rules = [
                ...rules,
                {
                    type: typeOfNewRule,
                    id_in_host: hostIdOfNewRule,
                    id_in_container: containerIdOfNewRule,
                },
            ];
            typeOfNewRule = -1;
            hostIdOfNewRule = undefined;
            containerIdOfNewRule = undefined;
        }
    }
    function removeRule(rule: Rule) {
        rules = rules.filter((x) => x !== rule);
    }
    function updateRule(rule: Rule) {}
    function createDangerNotification(content: string) {
        const notification = document.createElement("div");
        notification.classList.add("notification", "is-danger");
        document.querySelector(".notifications").appendChild(notification);
        const closeButton = document.createElement("button");
        closeButton.classList.add("delete");
        closeButton.addEventListener("click", () => {
            notification.remove();
        });
        notification.innerText = content;
        notification.appendChild(closeButton);
    }
</script>

<section class="section">
    <h1 class="title">Input</h1>
    <h2 class="subtitle">Enter which uids or gids you want to pass:</h2>

    <div class="notifications" />

    <div class="table-container">
        <table class="table is-bordered is-striped is-fullwidth">
            <thead>
                <th>Type</th>
                <th
                    ><abbr title="UID or GID in your proxmox host">H_ID</abbr
                    ></th
                >
                <th />
                <th
                    ><abbr title="Desired UID or GID in your container"
                        >C_ID</abbr
                    ></th
                >
                <th />
            </thead>
            <tbody>
                {#each rules as rule (rule)}
                    <tr>
                        <td>
                            <select bind:value={rule.type}>
                                <option value="0">User</option>
                                <option value="1"
                                    >User Without User Group</option
                                >
                                <option value="2">Group</option>
                            </select>
                        </td>
                        <td
                            ><input
                                type="number"
                                min="0"
                                max="65534"
                                bind:value={rule.id_in_host}
                            /></td
                        >
                        <td>➡️</td>
                        <td
                            ><input
                                type="number"
                                min="0"
                                max="65534"
                                bind:value={rule.id_in_container}
                            /></td
                        >
                        <td
                            ><button
                                class="button is-danger"
                                on:click={(_) => removeRule(rule)}
                                >Remove</button
                            ></td
                        >
                    </tr>
                {/each}
                <tr>
                    <td>
                        <select bind:value={typeOfNewRule}>
                            <option value="-1">Choose type of new rule</option>
                            <option value="0">User</option>
                            <option value="1">User Without User Group</option>
                            <option value="2">Group</option>
                        </select>
                    </td>
                    <td>
                        <input
                            type="number"
                            placeholder="GID / UID in host for new rule"
                            min="0"
                            max="65534"
                            bind:value={hostIdOfNewRule}
                        />
                    </td>
                    <td>➡️</td>
                    <td>
                        <input
                            type="number"
                            min="0"
                            max="65534"
                            placeholder="GID / UID in container for new rule"
                            bind:value={containerIdOfNewRule}
                        />
                    </td>
                    <td
                        ><button
                            class="button is-success"
                            on:click={createNewRule}>Add</button
                        ></td
                    >
                </tr>
            </tbody>
        </table>
    </div>
</section>
