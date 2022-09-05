import { fetchUser } from "../utils/fetchLocalStorageData"

const userInfo = fetchUser()

export const initalState = {
    user:userInfo,
    foodItems:null,
}