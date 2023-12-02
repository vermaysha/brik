<template>
    <div>
    <q-layout class="q-mx-auto width-mobile shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title class="q-py-md text-center">
            <q-btn class="btn-fixed-width float-right" color="secondary" label="Save" @click="save"></q-btn>
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
import { ref } from 'vue'
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

      /**
       * Saves the form data to the store and redirects to the home page.
       *
       * @return {undefined} No return value.
       */
      const save = () => {
        if (!title.value || !director.value || !summary.value || !genres.value.length) {
          alert('Please fill in all fields');
          return;
        }
        
        store.push({
          title: title.value,
          director: director.value,
          summary: summary.value,
          genres: genres.value
        })
        
        router.push({name: 'home'});
      }

      return {
        save,
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