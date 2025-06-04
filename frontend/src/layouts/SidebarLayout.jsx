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
                <h2 className='text-center text-2xl'>NUEVO MOVIMIENTO</h2>
                <form className="flex flex-col gap-4 mt-4 space-y-3">
                    <div>
                        <label>Concepto</label>
                        <input
                            type='text'
                            className='w-full h-fit p-2 border border-gray-300 rounded bg-blue-300 text-black'
                        />
                    </div>
                                        <div>
                        <label>Importe</label>
                        <input
                            type='text'
                            className='w-full h-fit p-2 border border-gray-300 rounded bg-blue-300 text-black'
                        />
                    </div>
                    <div className='justify-between flex'>
                        <button className='bg-green-300 text-black hover:bg-emerald-400 transition duration-500 p-2 border rounded'>Añadir</button>
                        <button className='bg-red-300 text-black hover:bg-rose-400 transition duration-500 p-2 border rounded'>Cancelar</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default Layout;