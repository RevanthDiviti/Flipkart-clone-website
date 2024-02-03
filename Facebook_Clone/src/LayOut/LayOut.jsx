import React from 'react'
// Pages...........
import Login from '../pages/login/login'
import Signup from '../pages/signup/signup'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export default function LayOut(){
    const router = createBrowserRouter([
        {
            path:'/login',
            element: <Login/>
        },
        {
            path:'/signup',
            element: <Signup/>
        }
    ])
    return(
        <>
        <RouterProvider router={router}/>
        </>
    )
}