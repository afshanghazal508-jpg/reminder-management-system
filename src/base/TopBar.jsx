// import { useEffect, useRef, useState } from "react";
// import { FiKey, FiLogOut, FiMenu } from "react-icons/fi";
// import { GiOrganigram } from "react-icons/gi";
// import { Link } from "react-router-dom";
// import useAuth from "../auth/useAuth";



// export default function TopBar({ toggleSidebar }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const {logedOut}=useAuth();
//   const menuref = useRef();
//   useEffect(() => {
//     const close = (e) => {
//       if (menuref.current && !menuref.current.contains(e.target)) {
//         setMenuOpen(false)
//       }
//     };
//     document.addEventListener("click", close);
//     return () =>
//       document.removeEventListener("click", close);
//   }, []
//   );

//   function toggleMenu() {
//     setMenuOpen(!menuOpen);
//   }

//   function closeMenu() {
//     setMenuOpen(false);
//   }

//   return (
//     <div className="fixed top-0 left-0 w-full h-14 bg-white shadow-md flex items-center justify-between px-4 z-50">
//       <div className="flex items-center">
//         <button onClick={toggleSidebar} className="text-2xl text-white bg-sky-400 p-2 cursor-pointer rounded-sm hover:bg-sky-300">
//           <FiMenu />
//         </button>

//         {/* <Link to={"/home"} className="ms-2 flex items-center gap-1"> */}
//         {/* <img className='h-9 rounded-md ring-2 ring-gray-300'
//             onError={({ currentTarget }) => {
//               currentTarget.onerror = null; // prevents looping
//             }}
//           /> */}
//         <div className="hadow-sm rounded-xl px-2 py-2 w-full flex items-center justify-items-end bg-gray-50 font-extrabold"> Coders Academy </div>
//         <button onClick={() => logedOut()}>
//           Logout
//         </button>
//         <p className="ms-1 text-lg max-w-3xl mx-auto sm:text-lg text-gray-700 italic flex flex-col">
//           <span className='text-sky-500 font-semibold '></span>
//         </p>
//         {/* </Link> */}
//       </div>

//       <div className="relative"
//         ref={menuref}
//       >
//         <button onClick={toggleMenu} className="text-2xl text-gray-700 cursor-pointer border border-gray-500 hover:border-sky-400 rounded-full">
//         </button>

//         {menuOpen && (
//           <div className="absolute right-0 mt-3 w-48 border-t-2 border-t-gray-300 bg-white border-b-4 border-sky-400 hover:shadow-2xl rounded-b-md shadow-lg z-50">
//             <Link
//               to="/remindars"
//               className="flex items-center px-4 py-2  hover:bg-sky-200 cursor-pointer"
//               onClick={closeMenu}
//             >
//               <GiOrganigram className="mr-2 text-blue-700" />
//               Reminder
//             </Link>
//             <Link to="/chagePassword"
//               className="flex items-center px-4 py-2 hover:bg-sky-200 cursor-pointer"
//               onClick={closeMenu}
//             >
//               <FiKey className="mr-2 text-purple-500" />
//               Settings
//             </Link>
//             <div
//               className="flex items-center px-4 py-2 hover:bg-sky-200 cursor-pointer"
//               onClick={() => { closeMenu(); logedOut(); }}
//             >
//               <FiLogOut className="mr-2 text-red-500" />
//               Logout
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { FiKey, FiLogOut, FiMenu } from "react-icons/fi";
import { GiOrganigram } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../auth/useAuth";
import { useToast } from "../toast/ToastProvider";



export default function TopBar({ toggleSidebar }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logedOut } = useAuth();
  const menuref = useRef();
  const toast = useToast()
  useEffect(() => {
    const close = (e) => {
      if (menuref.current && !menuref.current.contains(e.target)) {
        setMenuOpen(false)
      }
    };
    document.addEventListener("click", close);
    return () =>
      document.removeEventListener("click", close);
  }, []
  );

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }
  return (
    <div className="fixed top-0 left-0 w-full h-16 md:h-16 bg-[#071220]/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg flex items-center justify-between px-6 z-50">

      {/* Left Section */}
      <div className="flex items-center gap-2 md:gap-4 min-w-0">

        <button
          onClick={toggleSidebar}
          className="
          flex items-center justify-center
          h-10 w-10 md:h-11 md:w-11
          rounded-xl
          bg-gradient-to-br from-cyan-500 to-blue-600
          text-white
          shadow-lg
          hover:scale-105
          transition-all
          duration-300
        "
        >
          <FiMenu size={22} />
        </button>

        <div className="flex flex-col min-w-0">

          <h1 className="
    text-xs
    sm:text-sm
    md:text-xl
    font-bold
    text-white
    tracking-wide
    whitespace-nowrap
">
            Reminder Management
          </h1>

        </div>

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 md:gap-4">

        <button
          onClick={async () => {
            try {
              await logedOut();
              toast.open("Logout successful ✨", "green");
            } catch (err) {
              toast.open("Logout failed ❌", "red");
            }
          }}
          className="
          group
          flex
          items-center
          gap-2
          px-3 md:px-4 py-2
          rounded-xl
          bg-[#0D2340]
          border
          border-cyan-500/20
          text-white
          hover:bg-red-500/10
          hover:border-red-500/30
          hover:text-red-400
          transition-all
          duration-300
        "
        >
          <FiLogOut
            size={18}
            className="group-hover:rotate-12 transition-transform duration-300"
          />
          <span className="hidden md:block font-medium">
            Logout
          </span>
        </button>

        <div
          className="relative"
          ref={menuref}
        >

         <button
    className="
    hidden md:flex
    items-center
    gap-2
    px-4
    py-2
    rounded-xl
    bg-[#0D2340]
    border border-cyan-500/20
    text-white
    "
>
            <div className="h-3 w-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
          </button>

          {menuOpen && (

            <div className="  absolute  right-0  mt-3 w-52 md:w-60  overflow-hidden  rounded-2xl  bg-[#071220]  border  border-cyan-500/20  shadow-2xl  backdrop-blur-xl  z-50">

              <div className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600">

                <h3 className="font-semibold text-white">
                  Quick Menu
                </h3>

              </div>

              <Link
                to="/remindars"
                className="
                flex
                items-center
                gap-3
                px-4
                py-3
                text-white
                hover:bg-cyan-500/10
                transition-all
              "
                onClick={closeMenu}
              >
                <GiOrganigram className="text-cyan-400 text-lg" />
                <span>Reminder</span>
              </Link>

              <Link
                to="/chagePassword"
                className="
                flex
                items-center
                gap-3
                px-4
                py-3
                text-white
                hover:bg-cyan-500/10
                transition-all
              "
                onClick={closeMenu}
              >
                <FiKey className="text-purple-400 text-lg" />
                <span>Settings</span>
              </Link>

              <div
                className="
                flex
                items-center
                gap-3
                px-4
                py-3
                text-white
                hover:bg-red-500/10
                hover:text-red-400
                cursor-pointer
                transition-all
              "
                onClick={async () => {
                  closeMenu();

                  try {
                    await logedOut();
                    toast.open("Logout successful ✨", "green");
                  } catch {
                    toast.open("Logout failed ❌", "red");
                  }
                }}
              >
                <FiLogOut className="text-red-400 text-lg" />
                <span>Logout</span>
              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}