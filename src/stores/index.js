import { defineStore } from 'pinia'

const STORE_NAME = 'settings'

const getDefaultSettings = () => ({
    currentUserRole: 'NONE'
})

const getSettings = () => {
    const settings = localStorage.getItem(STORE_NAME)

    return settings ? JSON.parse(settings) : getDefaultSettings()
}

export const useStore = defineStore(STORE_NAME, {
    state: () => ({
        settings: getSettings(),
    }),
    actions: {
        updateSettings(partialSettings) {
            this.settings = {
                ...this.settings,
                ...partialSettings,
            }

            localStorage.setItem(STORE_NAME, JSON.stringify(this.settings))
        },
    },
})