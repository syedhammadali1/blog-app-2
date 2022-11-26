import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Posts from '../../Containers/Posts/Posts'
import { Users } from '../../Containers/Users/Users'
import { AuthenticatedRoutesConstant } from '../../util/constant'
import AdminLayout from '../Layouts/AdminLayout'

function AuthenticatedRoutes() {
    return (
        <Routes>
            <Route path='/' element={<AdminLayout />}>
                <Route path={AuthenticatedRoutesConstant.Home} element={<Users />}></Route>
                <Route path={AuthenticatedRoutesConstant.User} element={<Users />}></Route>
                <Route path={AuthenticatedRoutesConstant.Post} element={<Posts />}></Route>
            </Route>
        </Routes>



    )
}

export default AuthenticatedRoutes