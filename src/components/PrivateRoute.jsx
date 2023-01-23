import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Spinner from './Spinner'
import {useAuthStatus} from '../hooks/useAuthStatus'

export default function PrivateRoute() {
    const {loggedIn, checkingStatus} = useAuthStatus()
    if (checkingStatus) {
       return <Spinner />;
    }
    
  return  loggedIn ? <Outlet /> : <Navigate to={"/sign-in"} />
}
