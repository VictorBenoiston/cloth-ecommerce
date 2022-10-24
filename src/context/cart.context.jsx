import { createContext, useState, useEffect } from "react";


const addCartItem = (cartItems, productToAdd) => {
    // Find if cartItems contais productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    // If found, increment quantity

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem);
    }

    // Return new array with modified cartItems / new cart item.
    return [...cartItems, {...productToAdd, quantity: 1}];
}


const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // Check if quantity is equal to 1, if it is, remove that item from the cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id != cartItemToRemove.id);
    }

    // Return back caritems with matching quantity (reduced)
    return cartItems.map((cartItem) => 
    cartItem.id === cartItemToRemove.id
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem);
};


const clearCartItem = (cartItems, cartItemToClear) => {

    return cartItems.filter((cartItem) => cartItem.id != cartItemToClear.id);
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    itemsCounter: 0, //
    setCurrentQuantity: () => {}, //
    clearItemToCart: () => {},
    removeItemToCart: () => {}, 
    total: 0
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCounter, setitemsCounter] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const newCounter = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setitemsCounter(newCounter)
    }, [cartItems])

    useEffect(() => {
        const newTotal = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0)
        setCartTotal(newTotal)
    }, [cartItems])

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    };

    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    };

    const clearItemToCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    };


    const value = { isCartOpen, setIsCartOpen, addItemToCart, 
        cartItems, itemsCounter, setitemsCounter, removeItemToCart,
         clearItemToCart, cartTotal }

    return <CartContext.Provider value={value} >{children}</CartContext.Provider>
}



