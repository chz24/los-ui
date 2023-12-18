import {defineStore, storeToRefs} from 'pinia'
import { useStorageStore } from "@/stores/storage.js";

const STORE_NAME = 'reservation'
export const useReservationStore = defineStore(STORE_NAME, {
    state: () => ({
        reservations: [{
            userId: "1291820a-1ecd-4a62-afbb-5986504155ae",
            date: "2023-12-12",
            orderLunch: true
        }]
    }),

    getters: {
        getCurrentUserReservations() {
            const storageStore = useStorageStore()
            const {settings} = storeToRefs(storageStore)

            return this.reservations.filter(reservation => reservation.userId === settings.value.id)
        }
    },

    actions: {
        addReservations(reservation) {
            this.reservations.push(reservation)
        },

        editReservation(userId, reservation) {

        },

        removeReservation(userId, date) {

        }
    },
})