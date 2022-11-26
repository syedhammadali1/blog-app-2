import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../Containers/Login/Login'
import Register from '../../Containers/Register/Register'
import { UnAuthenticatedRoutesConstant } from '../../util/constant'

export default function UnAuthenticatedRoutes() {
    return (
        <Routes>

            <Route path={UnAuthenticatedRoutesConstant.Login} element={<Login />}></Route>
            <Route path={UnAuthenticatedRoutesConstant.Register} element={<Register />}></Route>
        </Routes>


    )
}
