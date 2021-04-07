import React from "react";
import {StoreType} from "./outside/redux-store";

//const StoreContext = React.createContext(StoreType); //что тут должно быть??
const StoreContext = React.createContext<StoreType | null>(null) as React.Context<StoreType>;

type ProviderPropsType = {
    store: StoreType
    children: JSX.Element;
}

export const Provider = (props: ProviderPropsType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext;