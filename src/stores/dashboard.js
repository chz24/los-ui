import { defineStore } from 'pinia'

const STORE_NAME = 'dashboard'
export const useDashboardStore = defineStore(STORE_NAME, {
    state: () => ({
        isDateMenuShown: false
    }),

    getters: {
        getIsDateMenuShown() {
            return this.isDateMenuShown
        }
    },

    actions: {
        updateIsDateMenuShown(isDateMenuShown) {
            this.isDateMenuShown = isDateMenuShown
        },
    },
})