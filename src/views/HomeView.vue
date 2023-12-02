<template>
  <div>
    <q-layout class="q-mx-auto width-mobile shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title class="q-py-md text-center">Movie Collection</q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page class="q-pa-md">
          <div class="q-my-md">
            <q-input v-model="search" filled type="search" placeholder="Search by Title...">
              <template v-slot:append>
                <q-icon name="search"></q-icon>
              </template>
            </q-input>
          </div>
          <div v-for="n in 3" :key="n" class="col col-md-8 q-my-sm" style="border: solid 1px #333; border-radius: 15px;">
                <div class="q-pa-md">
                  <div class="text-h6 text-bold">{{title}}</div>
                  <div class="q-my-sm">{{ director }}</div>
                  <div class="text-right">{{ genre }}</div>
                </div>
          </div>
          <router-link to="/add" class="absolute-bottom-right q-mr-md">
            <span class="material-icons md-48">
            add_circle_outline
            </span>
          </router-link>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      search: null
    }
  },
  setup () {
    return {
      title: 'Power Ranger',
      director: 'Dean Israelite',
      genre: 'Action / Sci-Fi'
    }
  }
}
</script>
<style>
.width-mobile {
  max-width: 500px;
  max-height: 450px;
}
.md-48 {
  font-size: 48px !important;
}
</style>