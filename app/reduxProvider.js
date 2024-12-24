'use client'

import { Provider } from "react-redux"
import store from "@/redux/store"

// This component wraps the entire application with the Redux Provider,
// making the Redux store accessible to all child components.

const ReduxProvider = ({ children }) => {
    return <Provider store = {store}>{children}</Provider>
}

export default ReduxProvider;
