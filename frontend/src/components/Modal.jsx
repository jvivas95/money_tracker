import React from "react";

const Modal = ({ isOpen, onClose, children}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full relative">
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