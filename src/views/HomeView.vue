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
            <q-input v-model="keyword" @update:model-value="searchByKey" filled type="search" placeholder="Search by Title...">
              <template v-slot:append>
                <q-icon name="search"></q-icon>
              </template>
            </q-input>
          </div>
          <div v-for="[i, movie] of data.entries()" :key="i" class="col col-md-8 q-my-sm" style="border: solid 1px #333; border-radius: 15px;">
                <div class="q-pa-md" @click="edit(i)">
                  <div class="text-h6 text-bold">{{movie.title}}</div>
                  <div class="q-my-sm">{{ movie.director }}</div>
                  <div class="text-right">{{ movie.genre }}</div>
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
import { useMoviesStore } from '../stores/movie'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
export default {
  setup () {
    const store = useMoviesStore();
    const router = useRouter();
    const keyword = ref('');
    const data = ref(JSON.parse(JSON.stringify(store.movies)));
    const searchByKey = () => {
      data.value = store.movies.filter((movie) => movie.title.toLowerCase().includes(keyword.value.toLowerCase()));
    }
    const edit = (i) => {
      router.push({name: 'edit', params: {id: i}})
    }

    return {
      edit,
      store,
      keyword,
      data,
      searchByKey,
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