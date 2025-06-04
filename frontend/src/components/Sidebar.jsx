import React from "react";
import CrearIcon from "./icons/CrearIcon"; // Asegúrate de que la ruta sea correcta

const Sidebar = () => {
  return (
    <aside className="flex flex-col text-center w-48 h-dvh bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold">Sidebar</h2>
      <nav className="flex flex-auto justify-center items-center">
        <ul>
          <li className="flex items-center gap-2 p-2 hover:bg-gray-700 cursor-pointer">
            <CrearIcon />
            Añadir
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;