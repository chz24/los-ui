import { defineStore } from 'pinia'

const STORE_NAME = 'storage'

const getDefaultSettings = () => ({
    currentUser: null
})

const getSettings = () => {
    const settings = localStorage.getItem(STORE_NAME)

    return settings ? JSON.parse(settings) : getDefaultSettings()
}

export const useStorageStore = defineStore(STORE_NAME, {
    state: () => ({
        settings: getSettings(),
    }),

    getters: {
        hasLoggedIn() {
            return this.settings.currentUser !== null
        }
    },

    actions: {
        updateSettings(partialSettings) {
            this.settings = partialSettings

            localStorage.setItem(STORE_NAME, JSON.stringify(this.settings))
        },
    },
})