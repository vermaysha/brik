import { defineStore } from 'pinia'

/** @type {import('pinia').StoreDefinition} */
export const useMoviesStore = defineStore('movies', {
    /**
     * Generates the state object for the movies.
     *
     * @return {Object} The state object containing the movies.
     */
    state: () => ({
        movies: [
            {
                title: 'Power Ranger',
                director: 'Dean Israelite',
                summary: 'odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ',
                genres: ['Action', 'Fantasy', 'Sci-Fi'],
            },
            {
                title: 'Frozen',
                director: 'Chris Buck',
                summary: 'odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ',
                genres: ['Animation'],
            },
        ]
    }),
    actions: {
        /**
         * Pushes the given data to the movies array.
         *
         * @param {type} data - The data to be pushed to the movies array.
         * @return {type} - No return value.
         */
        push(data) {
            this.movies.push(data)
        }
    }
})
  