import React from "react";

const Modal = ({ isOpen, onClose, children}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center text-black z-50">
            <div className="bg-blue-400 bg-opacity-50 rounded-2xl shadow-lg p-6 max-w-md w-full relative">
                <button
                    className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
                    onClick={onClose}
                    >
                        &times;
                    </button>
                    {children}
            </div>
        </div>
    );
};

export default Modal;