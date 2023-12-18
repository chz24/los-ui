import {defineStore} from 'pinia'
import {v4 as uuidv4} from 'uuid';

const STORE_NAME = 'user'
export const useUserStore = defineStore(STORE_NAME, {
    state: () => ({
        registeredUsers: [{
            id: "3ad52046-5496-4e66-8140-c98741bf8872",
            name: "POGS",
            role: "ADMIN",
        },
        {
            id: "1291820a-1ecd-4a62-afbb-5986504155ae",
            name: "Steven Kristian",
            role: "EMPLOYEE",
            region: "Sarana Jaya",
            floor: "15",
            wing: "B",
            distance: 20,
            transportation: "Car",
            checkedDays: ["Tuesday", "Wednesday"],
            defaultOrderLunch: true
        }]
    }),

    getters: {
        getUsers() {
            return this.registeredUsers
        },
    },

    actions: {
        addNewUser(userData) {
            userData['id'] = uuidv4()

            this.registeredUsers.push(userData)
        },
    },
})