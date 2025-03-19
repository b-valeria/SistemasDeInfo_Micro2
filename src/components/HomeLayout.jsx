import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'

export default function HomeLayout() {
    return (
        <div className="min-h-screen bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/cc0cc787160ad26fba54087f89d90cc3881553fe')] bg-cover bg-center">
            <Navbar />
            <Outlet />
        </div>
    )
}
