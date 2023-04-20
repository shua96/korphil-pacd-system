// stores/counter.js
import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', {
    state: () => {
        return {
            myName: 'Jan',
        }
    },
    actions: {
        alertThis() {
            alert('It Works!')
        },
    },
})