import React, { useReducer } from 'react'
import Reducer from './Reducer'
import Data from './Data'

function Store() {
    const [store, setStore] = useReducer(Reducer, Data)
    return {store, setStore}
}

export default Store