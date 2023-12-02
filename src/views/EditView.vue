<template>
    <div>
    <q-layout class="q-mx-auto width-mobile shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title class="q-py-md text-center">
            <q-btn class="btn-fixed-width float-right" color="red" label="Delete" @click="deleteMovie"></q-btn>
            <q-btn class="btn-fixed-width float-right" color="secondary" label="Update" @click="update"></q-btn>
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page class="q-pa-md">
          <div class="q-my-md">
            <q-input v-model="title" label="Title" placeholder="Input Title" :dense="true"></q-input>
            <q-input v-model="director" label="Director" placeholder="Input Director" :dense="true"></q-input>
            <q-input v-model="summary" label="Summary" placeholder="Input Summary" :dense="true" type="textarea"></q-input>
            <div class="q-gutter-sm">
              <q-checkbox v-model="genres" val="Drama" label="Drama" color="teal" />
              <q-checkbox v-model="genres" val="Action" label="Action" color="orange" />
              <q-checkbox v-model="genres" val="Animation" label="Animation" color="red" />
              <q-checkbox v-model="genres" val="Sci-Fi" label="Sci-Fi" color="cyan" />
              <q-checkbox v-model="genres" val="Horror" label="Horror" color="cyan" />
            </div>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useMoviesStore } from '../stores/movie'
import { useRouter } from 'vue-router'

export default {
    setup() {
      const store = useMoviesStore();
      const router = useRouter();

      const title = ref(null);
      const director = ref(null);
      const summary = ref(null);
      const genres = ref([]);

      onMounted(() => {
        const id = router.currentRoute.value.params.id

        if (!store.movies[id]) {
            alert('Movie not found');
            return;
        }

        const row = store.movies[id]

        title.value = row.title;
        director.value = row.director;
        summary.value = row.summary;
        genres.value = row.genres;
      })


      const update = () => {
        if (!title.value || !director.value || !summary.value || !genres.value.length) {
          alert('Please fill in all fields');
          return;
        }

        const id = router.currentRoute.value.params.id

        if (!store.movies[id]) {
            alert('Movie not found');
            return;
        }

        store.movies[id] = {
          title: title.value,
          director: director.value,
          summary: summary.value,
          genres: genres.value
        }
        
        store.$patch({
            movies: store.movies
        })
        router.push({name: 'home'});
      }

      const deleteMovie = () => {
        const id = router.currentRoute.value.params.id

        if (!store.movies[id]) {
            alert('Movie not found');
            return;
        }

        store.movies.splice(id, 1);
        
        store.$patch({
            movies: store.movies
        })
        router.push({name: 'home'});
      }

      return {
        update,
        deleteMovie,
        title,
        director,
        summary,
        genres,
      }
    }
}
</script>

<style>
.width-mobile {
  max-width: 500px;
  max-height: 450px;
}
</style>