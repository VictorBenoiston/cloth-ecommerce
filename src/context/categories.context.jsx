import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'

// This import is done only when we have updates in our db.
import SHOP_DATA from '../shop-data.js'

export const CategoriesContext = createContext({
    categoriesMap: {}
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    /* 
    // --> 1st (setter)
    // This useEffect is only made when we have updates in our db.

    useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA)
    }, []) 

    */

    useEffect(() => {
        // --> 2nd (getter)
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
         getCategoriesMap();
    }, [])

    const value = { categoriesMap }
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}
