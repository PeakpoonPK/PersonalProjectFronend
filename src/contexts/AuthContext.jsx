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
                    setTimeout(() => {
                        setInitialLoading(false)
                    }, 1000);

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

    const editProfile = async (updateProfile) => {
        console.log('first')
        try {
            const res = await axios.patch('/user', updateProfile)
            setAuthUser(({ ...authUser, ...res.data.updateProfile, }))

            Swal.fire({
                icon: 'success',
                title: 'Update Profile SuccessFul!'
            })

        } catch (err) {
            console.log(err)
        }
    }

    const AddPet = async (addMyPet) => {
        try {
            const res = await axios.post('/pets/add', addMyPet)
            setAuthUser(({ ...authUser, ...res.data.pets }))
            Swal.fire({
                icon: 'success',
                title: 'Add Pet SuccessFul!'
            })
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <AuthContext.Provider value={{ login, authUser, logout, initialLoading, register, editProfile, AddPet }}>{children}</AuthContext.Provider>
    )
}
