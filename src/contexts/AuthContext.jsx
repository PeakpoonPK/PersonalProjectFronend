import { createContext, useState } from 'react'
import axios from '../config/axios'
import { addAccessToken, getAccessToken, removeAccessToken } from '../utils/localStorage'
import { useEffect } from 'react';
import Swal from 'sweetalert2'





export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState(null);

    const [initialLoading, setInitialLoading] = useState(true);

    useEffect(() => {
        if (getAccessToken()) {
            axios.get('/auth/me')
                .then(res => {
                    setAuthUser(res.data.user)
                }).finally(() => {
                    setInitialLoading(false)
                });
        }
        else {
            setInitialLoading(false)
        }
    }, []);

    const login = async credential => {
        // console.log(credential)
        try {

            const res = await axios.post('/auth/login', credential);
            addAccessToken(res.data.accessToken);
            setAuthUser(res.data.user)
        } catch (err) {
            return (err.response.data.message)
        }
    }

    const register = async registerInputObject => {
        try {

            const res = await axios.post('/auth/register', registerInputObject);
            addAccessToken(res.data.accessToken);
            setAuthUser(res.data.user);
            Swal.fire({
                icon: 'success',
                title: 'Register successFul!'
            })
        } catch (err) {
            console.log(err)
        }
    }

    const logout = () => {
        removeAccessToken();
        setAuthUser(null)
    }

    console.log(authUser)
    return (
        <AuthContext.Provider value={{ login, authUser, logout, initialLoading, register }}>{children}</AuthContext.Provider>
    )
}
