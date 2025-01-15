import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => (
  <nav className="bg-gray-800 text-white p-4">
    <ul className="flex space-x-4">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/cart">Carrinho</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
