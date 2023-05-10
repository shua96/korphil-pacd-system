import router from '@/router';
import axios from 'axios'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        name: '',
        user: null,
        credentials: {
            email: '',
            password: '',
        },

        items: [
            {
                name: 'Frozen Yogurt',
                calories: 159,
            },
            {
                name: 'Ice cream sandwich',
                calories: 237,
            },
            {
                name: 'Eclair',
                calories: 262,
            },
            {
                name: 'Cupcake',
                calories: 305,
            },
        ],
    }),

    actions: {
        async login() {
            await axios.get('/sanctum/csrf-cookie');
            let response = await axios.post('/api/login', this.credentials);
            router.push('/dashboard')
            this.user = await response.data
        },

        async logout() {
            await axios.post('/api/logout',);
            this.user = null;
            router.push('/login')
        }
    }

})