import Link from "next/link";
import React from "react";

function Navbar({ page, setPage }: any) {
  return (
    <div className="flex justify-between px-10 h-[100px]  drop-shadow-xl items-center">
      <h1 className="text-white font-bold text-xl">BUILDSO DEFI</h1>
      <div className="flex space-x-10">
        <Link
          onClick={() => setPage("Chart")}
          className={`text-white px-4 py-2 rounded-xl ${
            page === "Chart"
              ? "bg-gradient-to-r from-violet-500 to-fuchsia-500"
              : ""
          }`}
          href="/"
        >
          Chart
        </Link>
        <Link
          onClick={() => setPage("Swap")}
          className={`text-white px-4 py-2 rounded-xl ${
            page === "Swap"
              ? "bg-gradient-to-r from-violet-500 to-fuchsia-500"
              : ""
          }`}
          href="/"
        >
          Swap
        </Link>
      </div>
      <w3m-button />
    </div>
  );
}

export default Navbar;
