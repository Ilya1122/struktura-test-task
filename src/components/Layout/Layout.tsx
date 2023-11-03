import { Outlet } from "react-router-dom"

import Footer from "../Footer"
import Header from "../Header"

import "./index.scss"

const Layout = () => (
    <>
        <Header />
            <main className="page">
                <Outlet />
            </main>
        <Footer />
    </>
  )

export default Layout
