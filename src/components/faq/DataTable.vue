<template>
    <v-container>
        <v-table class="table" style="box-shadow: 4px 4px 4px 2px #888;">
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" @change="selectAllRows" />
                    </th>
                    <th class="text-left">
                        Assessment and Certification
                        <v-icon @click="editItem(item)" size="small">mdi-square-edit-outline</v-icon>
                    </th>
                    <th class="text-left">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in question" :key="item.name" @mouseover="hoveredRow = item" @mouseleave="hoveredRow = null"
                    :class="{ 'highlight': item === hoveredRow }">
                    <td>
                        <input type="checkbox" v-model="item.selected" />
                    </td>
                    <td>{{ item.name }}</td>
                    <td>
                        <v-icon @click="editItem(item)">mdi-square-edit-outline</v-icon>
                        <v-icon @click="deleteItem(item)" color="red">mdi-trash-can-outline</v-icon>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            question: [
                {
                    name: 'Lorem Sample Data',
                    selected: false,
                },
                {
                    name: 'Ipsum Sample Data',
                    selected: false,
                },
            ],
            hoveredRow: null,
        }
    },
    methods: {
        selectAllRows(event) {
            const isChecked = event.target.checked;
            this.question.forEach(item => {
                item.selected = isChecked;
            });
        },
        editItem(item) {
            // handle edit action here
            alert("Test");
        },
        deleteItem(item) {
            const confirmed = confirm(`Are you sure you want to delete ${item.name}?`);
            if (confirmed) {
                const index = this.question.indexOf(item);
                this.question.splice(index, 1);
            }
        }

    }
}
</script>
<style>
.highlight {
    background-color: #f5f5f5;
}

.table {
    border-radius: 15px;
    padding: 16px;
}

.v-main {
    flex: 1 0 auto;
    max-width: 100%;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    padding-left: var(--v-layout-left);
    padding-right: var(--v-layout-right);
    padding-top: var(--v-layout-top);
    padding-bottom: var(--v-layout-bottom);
    background-color: #F7F7FB;
}
</style>
