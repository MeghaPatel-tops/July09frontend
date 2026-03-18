import { createContext, useState } from "react";

export const ProductFilter = createContext('all');

export function ProductFilterProvider({children}){
    const [filterCat,setFilterCat]= useState('all');

    return(
        <ProductFilter.Provider value={{filterCat,setFilterCat}}>
            {children}
        </ProductFilter.Provider>
    )
}