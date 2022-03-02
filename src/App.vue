<script>
export default {
  name: "App",
  data: () => ({
    drawer: true,
    items: [
      { text: 'Home', icon: 'mdi-home', route: { name: 'Home' } },
      { text: 'Dashboard', icon: 'mdi-account', route: { name: 'protected' } },
      { text: 'About', icon: 'mdi-flag', route: { name: 'About' } },
    ]
  })
}
</script>

<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-system-bar></v-system-bar>
      <v-list>
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
          title="John Leider"
          subtitle="john@vuetifyjs.com"
        >
          <template v-slot:append>
            <v-list-item-avatar right>
              <v-btn size="small" variant="text" icon="mdi-menu-down"></v-btn>
            </v-list-item-avatar>
          </template>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          active-color="primary"
          :to="item.route"
        >
          <v-list-item-avatar left>
            <v-icon :icon="item.icon"></v-icon>
          </v-list-item-avatar>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="$route.path"></component>
          </transition>
        </router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>