import { Menu, X } from "lucide-react";
import Link from "./Link";
import { useState } from "react";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];



const NavBar = () => {
     const [open, setOpen] = useState(false);
     const links = navLinks.map(route => <Link  key={route.id} route={route}></Link>)
    return (
        <nav className="flex justify-between mr-10">
        <span className='flex' onClick={() => setOpen(!open)}>
               { 

               open ? <X className="md:hidden"></X> : <Menu className="md:hidden"></Menu>

               }
               <ul className={`md:hidden absolute duration-1000 ${open ? 'top-8' : '-top-40'} bg-amber-400 text-black`}>
                  {
                    links
                  }
               </ul>
               <h1 className="ml-6">My Navbar</h1>
               </span>
               <ul className="md:flex hidden">
               {
                  links
               }
               </ul>
                <button>Sign In</button>
              {/* <ul className="flex">
                  {
                     navLinks.map(route =>  <li className="mr-10">
                        <a href={route.path}>{route.name}</a></li>) 
                  }
              </ul> */}
            {/* <ul className="flex">
                <li className="mr-10"><a href="/">Home</a></li>
                <li className="mr-10"><a href="/">About</a></li>
                <li className="mr-10"><a href="/">Blog</a></li>

            </ul> */}
        </nav>
    );
};

export default NavBar;