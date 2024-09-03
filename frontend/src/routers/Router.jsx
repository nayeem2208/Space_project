import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useState } from 'react';
import LoginPage from '../users/Authentication/LoginPage.jsx';

export default function Router() {
  return (
    <Routes>
        <Route path='/check' element={<LoginPage/>}/>
    </Routes>
  )
}
