import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ClientPage } from '@/pages/ClientPage'
import { ClientsListPage } from '@/pages/ClientsListPage'
import { SideBar } from '@/features/app/view'


const routes = [
    {
        path: '/',
        component: ClientsListPage,
    },
    {
        path: '/client/:id',
        component: ClientPage,
    },
]

export const Routes = () => (
    <Router>
        <Switch>
            {routes.map((route) => {
                const Component = route.component
                return (
                    <Route key={route.path} path={route.path} exact>
                        <SideBar />
                        <Component />
                    </Route>
                )
            })}
        </Switch>
    </Router>
)

