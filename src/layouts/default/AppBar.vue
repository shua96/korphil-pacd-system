<template>
  <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false" app fixed clipped color="#4D68AF"
    light>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-list-item prepend-avatar="src/assets/logo.png" title="TESDA-PACD" style="color: white;" @click.stop="rail = !rail"
      nav>
      <template v-slot:append>
        <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav style="color: white;">
      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-view-dashboard" title="DASHBOARD"
            style="color: white;"></v-list-item>
        </template>
        <v-list-item v-for="([title, icon, path], i) in admins" :key="i" :title="title" :prepend-icon="icon"
          :value="title" :to="path" style="color: white;"></v-list-item>
      </v-list-group>
      <v-list-item prepend-icon="mdi-frequently-asked-questions" title="FAQ LIST" to="/faqlist"
        style="color: white;"></v-list-item>
      <v-list-item prepend-icon="mdi-database" title="CLIENT DATA" to="/clientdata" style="color: white;"></v-list-item>
      <v-list-item prepend-icon="mdi-folder-account-outline" title="ASSESSMENT DATA" to="/assessmentdata"
        style="color: white;"></v-list-item>
      <v-list-item prepend-icon="mdi-poll" title="SUMMARY REPORT" to="/summaryreport" style="color: white;"></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar>

    <v-app-bar-title>{{ $route.meta.title || "Default title" }}
    </v-app-bar-title>
    <profile />

  </v-app-bar>

  <v-main
    style="--v-layout-left:56px; --v-layout-right:0px; --v-layout-top:0px; --v-layout-bottom:0px; background-color: #F7F7FB;"></v-main>
</template>
<script setup>
import profile from '@/components/profile.vue'
  //
</script>
<script>
export default {
  data() {
    return {
      admins: [
        ['Walkin Client', 'mdi-account-multiple-outline', '/walkin-dashboard'],
        ['Assessment Client', 'mdi-cog-outline', '/assessment-dashboard'],
      ],
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard' },
        { title: 'FAQ LIST', icon: 'mdi-frequently-asked-questions' },
        { title: 'CLIENT DATA', icon: 'mdi-database' },
        { title: 'SUMMARY REPORT', icon: 'mdi-poll' },
      ],
      rail: true,
    }
  },
}
</script>


<style>
.v-list-item.v-list-item--link.v-list-item--nav.v-theme--light {
  padding-top: 6px;
  padding-bottom: 10px;
}
</style>