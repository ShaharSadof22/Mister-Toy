import { ToyApp } from './pages/ToyApp.jsx'
import { ToyDetails } from './pages/ToyDetails.jsx'
import { Sighin } from './pages/Sighin.jsx'
import { Login } from './pages/Login.jsx'
import { ToyEdit } from './pages/ToyEdit.jsx'
import { About } from './pages/About.jsx'
import { Statistics } from './pages/Statistics.jsx'

export default [
    {
        path: '/toy/details/:toyId',
        component: ToyDetails
    },
    {
        path: '/toy/edit/:toyId?',
        component: ToyEdit
    },
    {
        path: '/toy/statistics',
        component: Statistics
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/sighin',
        component: Sighin
    },
    {
        path: '/toy',
        component: ToyApp
    },
    {
        path: '/',
        component: About
    }
]
