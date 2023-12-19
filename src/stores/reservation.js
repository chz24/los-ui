import {defineStore, storeToRefs} from 'pinia'
import { useStorageStore } from "@/stores/storage.js";

const STORE_NAME = 'reservation'

const getDefaultSettings = () => ([
    {
    userId: "1291820a-1ecd-4a62-afbb-5986504155ae",
    date: "2023-12-12",
    orderLunch: true
    }
  ])

const getReservations = () => {
    const reservations = localStorage.getItem(STORE_NAME)

    return reservations ? JSON.parse(reservations) : null
}

export const useReservationStore = defineStore(STORE_NAME, {
    state: () => ({
        reservations: [{
            userId: "1291820a-1ecd-4a62-afbb-5986504155ae",
            date: "2023-12-12",
            orderLunch: true
        }]
    }),

    getters: {
        getAllReservations() {
            return this.reservations
        },
        getCurrentUserReservations() {
            const storageStore = useStorageStore()
            const {settings} = storeToRefs(storageStore)
            if (this.reservations !== null) {
                return this.reservations.filter(reservation => reservation.userId === settings.value.id)
            }
            return null
        }
    },

    actions: {
        addReservations(reservation) {
            this.reservations.push(reservation)
            localStorage.setItem(STORE_NAME, JSON.stringify(this.reservations))
        },

        editReservation(userId, reservation) {

        },

        removeReservation(userId, date) {

        }
    },
})