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
            {
                name: 'Cupcake',
                calories: 305,
            },
            {
                name: 'Cupcake',
                calories: 305,
            },
            {
                name: 'Cupcake',
                calories: 305,
            },
            {
                name: 'Cupcake',
                calories: 305,
            },
            {
                name: 'ian',
                calories: 305,
            },
        ],
    }),

    actions: {
        async login() {
            try {
                await axios.get('/sanctum/csrf-cookie');
                let response = await axios.post('/api/login', this.credentials);
                this.user = await response.data;
                console.log(this.user);
                router.push('/dashboard');
            } catch (error) {
                console.log(error);
                alert("Invalid credentials");
            }
        },

        async logout() {
            await axios.post('/api/logout',);
            this.user = null;
            router.push('/')
        },

        async loginCheck() {
            try {
                await axios.get('/sanctum/csrf-cookie');
                let response = await axios.get('/api/user');
                this.user = await response.data;
            } catch (error) {
                this.user = null;
            }
        }
    }

})