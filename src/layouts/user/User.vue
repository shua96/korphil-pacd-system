<!-- <template>
  <v-card class="mx-auto" max-width="448">
    <v-layout>
      <v-app-bar color="primary" density="compact">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Photos</v-app-bar-title>

        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-card :width="350" style="display: flex; flex-direction: column;" class="pa-5">
                <v-avatar class="mx-auto" size="x-large">
                  <v-img src="@/assets/gammai-removebg-preview.png"></v-img>
                </v-avatar>
                <v-card-title class="mx-auto">Login As Admin</v-card-title>
                <v-text-field variant="outlined" clearable prepend-inner-icon="mdi-account-outline" v-model="firstName"
                  label="Username" :rules="firstNameRules"></v-text-field>
                <v-text-field variant="outlined" clearable prepend-inner-icon="mdi-lock-outline" v-model="lastName"
                  label="Last name" :rules="lastNameRules"></v-text-field>
                <v-btn @click="submitForm" :disabled="isSubmitDisabled" type="submit" color="primary">Login</v-btn>
              </v-card>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <h1>Hello World, This Is The User Side!</h1>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
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
        if (value?.length >= 3) return true;
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
      else if (!this.lastNameRules(value)) {
        alert("Required")
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
  <v-card class="mx-auto" max-width="448">
    <v-layout>
      <v-app-bar color="primary" density="compact">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Photos</v-app-bar-title>


        <v-menu min-width="200px" rounded>
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
              <v-avatar color="brown" size="large">
                <span class="text-h5">{{ user.initials }}</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-card-text>
              <div class="mx-auto text-center">
                <v-avatar color="brown">
                  <span class="text-h5">{{ user.initials }}</span>
                </v-avatar>
                <h3>{{ user.fullName }}</h3>
                <p class="text-caption mt-1">
                  {{ user.email }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn rounded variant="text">
                  Edit Account
                </v-btn>
                <v-divider class="my-3"></v-divider>
                <v-btn rounded variant="text">
                  Disconnect
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-menu>

      </v-app-bar>
      <v-main>
        <v-container fluid>
          <h1>Hello World, This Is The User Side!</h1>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    user: {
      initials: 'JD',
      fullName: 'John Doe',
      email: 'john.doe@doe.com',
    },
  }),
}
</script>