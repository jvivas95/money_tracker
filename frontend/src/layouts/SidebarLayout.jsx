import React from 'react';
import Sidebar from '../components/Sidebar'; // Cambia a '../components/Sidebar' si lo mueves
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="w-dvh">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;