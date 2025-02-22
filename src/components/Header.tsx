import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur py-2">
      <div>
        <Link to={"/"}>
          <img src="/logo.png" alt="Klimate Logo" className="h-14" />
        </Link>
        <div>
          {/*   search */}
          {/* theme toggle */}
        </div>
      </div>
    </header>
  );
};

export default Header;
