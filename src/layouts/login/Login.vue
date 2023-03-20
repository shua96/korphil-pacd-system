<!-- <template>
    <v-sheet width="300" class="mx-auto">
        <v-form @submit.prevent>
            <v-text-field v-model="firstName" label="First name" :rules="firstNameRules"></v-text-field>
            <v-text-field v-model="lastName" label="Last name" :rules="lastNameRules"></v-text-field>
            <v-btn @click="submitForm" :disabled="isSubmitDisabled" type="submit" block class="mt-2">
                Submit
            </v-btn>
        </v-form>
    </v-sheet>
</template>
  
<script>
export default {
    data: () => ({
        firstName: "",
        firstNameRules: [
            (value) => {
                if (!value && this.isSubmitDisabled) {
                    return "First name is required.";
                }
                if (value?.length > 3) return true;
                return "First name must be at least 3 characters.";
            },
        ],
        lastName: "",
        lastNameRules: [
            (value) => {
                if (/[^0-9]/.test(value)) return true;
                return "Last name can not contain digits.";
            },
        ],
    }),
    computed: {
        isSubmitDisabled() {
            return !this.firstName || !this.lastName;
        },
    },
    methods: {
        submitForm() {
            if (this.checkForms()) {
                this.$router.push("/dashboard");
            }
        },
        checkForms() {
            if (this.firstName === "admin" && this.lastName === "admin") {
                return true;
            } else {
                return false;
            }
        },
    },
};
</script>
   -->

<template>
    <v-layout
        style="z-index: 1000; background-image: url(src/assets/DSC_0070.JPG); height: fit-content;height: -webkit-fill-available;height: 100vh;  background-size: cover;">
        <v-card class="mx-16" title="Hello World">

            <v-form @submit.prevent class="ma-5">
                <v-text-field v-model="firstName" label="First name" :rules="firstNameRules"></v-text-field>
                <v-text-field v-model="lastName" label="Last name" :rules="lastNameRules"
                    append-inner-icon="eye"></v-text-field>
                <v-btn @click="submitForm" :disabled="isSubmitDisabled" type="submit" block class="mt-2">
                    Submit
                </v-btn>
            </v-form>
        </v-card>
    </v-layout>
</template>
<script>
export default {
    data: () => ({
        firstName: "",
        firstNameRules: [
            (value) => {
                if (!value && this.isSubmitDisabled) {
                    return "First name is required.";
                }
                if (value?.length > 3) return true;
                return "First name must be at least 3 characters.";
            },
        ],
        lastName: "",
        lastNameRules: [
            (value) => {
                if (/[^0-9]/.test(value)) return true;
                return "Last name can not contain digits.";
            },
        ],
    }),
    computed: {
        isSubmitDisabled() {
            return !this.firstName || !this.lastName;
        },
    },
    methods: {
        submitForm() {
            if (this.checkForms()) {
                this.$router.push("/dashboard");
            }
        },
        checkForms() {
            if (this.firstName === "admin" && this.lastName === "admin") {
                return true;
            } else {
                return false;
            }
        },
    },
};
</script>

<style>
.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated.mx-16 {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.v-card {
    height: 500px;
    width: 400px;
}


.v-layout {
    --v-scrollbar-offset: 0px;
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>