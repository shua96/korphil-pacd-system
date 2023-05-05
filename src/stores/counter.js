// stores/counter.js
import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', {
    state: () => {
        return {
            myName: 'Jan',
        }
    },
    actions: {
        deleteItem(item) {
            this.editedIndex = this.data.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },
    },
})