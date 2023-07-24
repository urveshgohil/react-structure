import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Layout = (props) => {
    return (
        <>
            <Header />
            <main className="app-main d-flex flex-column flex-1">
                {props.children}
            </main>
            <Footer />
        </>
    )
}
const AuthLayout = (props) => {
    return (
        <>
            <main className="app-main d-flex flex-column flex-1">
                {props.children}
            </main>
        </>
    )
}
export { Layout, AuthLayout };