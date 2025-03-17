import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
        updatedDate: '',
        lastFetch: null
    }),
    actions: {
        getCategories()  {
            return this.categories;
        },
        setCategories(categories) {
            this.categories = categories;
        },

        getUpdatedDate() {
            return this.updatedDate;
        },
        setUpdatedDate(updatedDate) {
            this.updatedDate = updatedDate;
        },

        getLastFetch() {
            return this.lastFetch;
        },

        setLastFetch() {
            this.lastFetch = new Date().getTime();
        }
    }
});
