import {createContext} from "react"

const CartContext =createContext([])

export default function CartContextProvider ({children}) {
    const [myCart, setMyCard] = useState ([])
    
    return <CartContext.Provider value={[]}>
        {children}
    </CartContext.Provider>
}