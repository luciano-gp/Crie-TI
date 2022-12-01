import { createContext, FunctionComponent, ReactElement, useState } from "react";
interface IProps {
    children: ReactElement
}
export interface IAppContext {
    email: string;
    password: string;
    saveUser: (email: string, password: string) => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppProvider: FunctionComponent<IProps> = ({ children }) => {
    
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const saveUser = (email: string, password: string) => {
        setUser({
            email: email,
            password: password
        })
    }

    return (
        <AppContext.Provider value={{
            email: user.email,
            password: user.password,
            saveUser: saveUser,
        } as IAppContext}>
            {children}
        </AppContext.Provider>
    )
}