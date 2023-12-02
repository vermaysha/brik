<template>
    <div>
    <q-layout class="q-mx-auto width-mobile shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title class="q-py-md text-center">
            <q-btn class="btn-fixed-width float-right" color="secondary" label="Save"></q-btn>
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page class="q-pa-md">
          <div class="q-my-md">
            <q-input v-model="title" label="Label" placeholder="Input Title" :dense="dense"></q-input>
            <q-input v-model="director" label="Label" placeholder="Input Title" :dense="dense"></q-input>
            <div class="floating-label q-my-md">
                <textarea v-model="summary" class="full-width" placeholder="Input Sumary"></textarea>
                <label>Summary</label>
            </div>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                title : null,
                director : null,
                summary : null
            }
        },
    }
</script>

<style>
.width-mobile {
  max-width: 500px;
  max-height: 450px;
}
</style>