import React from 'react'
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import { Home, Browse, Signin, Signup } from './pages'
import * as ROUTES from './constants/routes'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {

  const { user } = useAuthListener();

  return (
    // De code hieronder is zodat alle pages de goede URL hebben doormiddel van React Router
    <Routes>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact path={ROUTES.HOME}>
        <Home/>
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact path={ROUTES.SIGN_UP}>
        <Signup/>
        </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact path={ROUTES.SIGN_IN}>
        <Signin/>
        </IsUserRedirect>
        <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
        <Browse/>
      </ProtectedRoute>
    </Routes>
  )
}
