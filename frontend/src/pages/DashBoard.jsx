import React from "react";

function DashBoard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full h-auto px-4 md:px-16">
      <h1 className="mb-4 text-2xl font-bold">Lista de movimientos</h1>
      <ul className="border border-solid w-full max-w-4xl">
        <li>Movimiento 1</li>
        <li>Movimiento 2</li>
        <li>Movimiento 3</li>
      </ul>
    </div>
  );
}

export default DashBoard;