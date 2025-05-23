// import React, { useState } from "react";
// import NavBarLogo from "./NavBarLogo";
// import NavBarLinks from "./NavBarLinks";
// import NavBarBtn from "./NavBarBtn";
// import { GiHamburgerMenu } from "react-icons/gi";

// const NavBarMain = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
//   return (
//     <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
//       <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px]">
//         <NavBarLogo />
//         <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block `}>
//           <NavBarLinks />
//         </div>

//         <NavBarBtn />
//       </div>
//       <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange">
//         <button
//           className="text-2xl p-3 border border-orange rounded-full text-white "
//           onClick={toggleMenu}
//         >
//           <GiHamburgerMenu />
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default NavBarMain;
import React, { useState } from "react";
import NavBarLogo from "./NavBarLogo";
import NavBarLinks from "./NavBarLinks";
import NavBarBtn from "./NavBarBtn";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 px-4 max-w-[1300px]">
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-black border border-orange rounded-full p-4">
        <NavBarLogo />
        <div className="hidden lg:flex items-center gap-6">
          <NavBarLinks />
          <NavBarBtn />
        </div>
        <button
          className="lg:hidden text-white text-3xl p-2 border border-orange rounded-full"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-black border border-orange mt-2 p-6 rounded-xl gap-6">
          <NavBarLinks isMobile={true} />
          <NavBarBtn />
        </div>
      )}
    </nav>
  );
};

export default NavBarMain;
