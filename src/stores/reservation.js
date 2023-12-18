import { defineStore } from 'pinia'

const STORE_NAME = 'reservation'
export const useReservationStore = defineStore(STORE_NAME, {
    state: () => ({
        region: "",
        floor: "",
        wing: "",
        distance: 0,
        transportation: "",
        checkedDays: [],
        orderLunch: false,
        recurringEnabled: false,
        exclude: []
    }),

    getters: {
        getOrderLunch() {
            return this.orderLunch
        }
    },

    actions: {
        updateData(region, floor, wing, distance, transportation, checkedDays, orderLunch) {
            this.region = region
            this.floor = floor
            this.wing = wing
            this.distance = distance
            this.transportation = transportation
            this.checkedDays = checkedDays
            this.orderLunch = orderLunch
        },
    },
})