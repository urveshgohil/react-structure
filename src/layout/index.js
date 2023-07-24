import React from "react";
import { Route } from 'react-router-dom';
const WithLayout = ({ component: Component, layout: Layout, ...rest }) => (
    <Route
        {...rest}
        render={() => (
            <Layout>
                {Component}
                {/* <Component {...props} /> */}
            </Layout>
        )}
    />
);
const WithoutLayout = ({ component: Component, layout: AuthLayout, ...rest }) => (
    <Route
        {...rest}
        render={() => (
            <AuthLayout>
                {Component}
            </AuthLayout>
        )} />
);
export { WithLayout, WithoutLayout };