import { createContext } from "react";

const Context = createContext();

export const UserContext = ({ children }) => {
    const user = { name: "vity", ph: "3456789909809" };

    return (
        <Context.Provider value={user}>
            {children}
        </Context.Provider>
    );
};

export default Context;