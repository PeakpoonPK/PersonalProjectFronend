import { createContext, useState } from 'react'
import axios from '../config/axios'
import { addAccessToken } from '../utils/localStorage'

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState({});
    const login = async credential => {
        // console.log(credential)
        try {
            const res = await axios.post('/auth/login', credential);
            addAccessToken(res.data.accessToken);
            setAuthUser(res.data.user)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
    )
}
