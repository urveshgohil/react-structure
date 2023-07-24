import React from 'react';
import { Switch } from 'react-router-dom';
import { WithLayout, WithoutLayout } from './layout';
import { Layout, AuthLayout } from './layout/layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


const AppRoutes = () => {
    return (
        <>
            <Switch>

                {/* Layout */}
                <WithLayout exact path="/" component={<Home appSuccess="success" />} layout={Layout} />
                <WithLayout path="/dashboard" component={<Dashboard />} layout={Layout} />

                {/* WithoutLayout */}
                <WithoutLayout exact path="/sign-in" layout={AuthLayout} component={<SignIn appSuccess="success ok" />} />
                <WithoutLayout path="/sign-up" component={<SignUp />} layout={AuthLayout} />
            </Switch>
        </>
    )
}
export default AppRoutes;