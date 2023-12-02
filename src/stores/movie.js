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
        },
        /**
         * Searches for movies that include the given keyword in their title.
         *
         * @param {string} keyword - The keyword to search for.
         * @return {Array} - An array of movies that include the keyword in their title.
         */
        search(keyword) {
            return this.movies.filter((movie) => movie.title.includes(keyword))
        },
        /**
         * Deletes a movie from the list of movies.
         *
         * @param {number} id - The index of the movie to delete.
         * @return {undefined} The function doesn't return anything.
         */
        delete(id) {
            this.movies.splice(id, 1)
        },
        /**
         * Updates the movie with the given ID.
         *
         * @param {number} id - The ID of the movie to update.
         * @param {any} data - The updated movie data.
         */
        update(id) {
            this.movies[id] = data
        }
    }
})
  