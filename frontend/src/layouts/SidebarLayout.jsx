import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import Modal from '../components/Modal';

const Layout = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex">
            <Sidebar onAddClick={() => setIsModalOpen(true)} />
            <main className="w-dvh">
                <Outlet />
            </main>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <h2>Nuevo movimiento</h2>
            </Modal>
        </div>
    );
};

export default Layout;