import {createContext} from "react"
//context is created for a "Cart Total" that is added
//to in increments of menu item prices and can be reset to
//0
export const CartTotal = createContext({
    total: 0,
    setTotal: () => {},
    })