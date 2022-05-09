import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png'
const Header = () => {

  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(" ");
  // }
  // const [navbar, setNavbar] = useState(false)

  //   const changeBackground = () => {
  //       if (window.scrollY >= 80) {
  //           setNavbar(true)
  //       }
  //       else {
  //           setNavbar(false)
  //       }

  //   }
  //   window.addEventListener('scroll', changeBackground);

    const [user] = useAuthState(auth);

  return (
    <>
    <header className='bg-rose-500 h-20 '>
      <Disclosure as="nav" className="">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-1 flex  items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                      <img
                        className=" lg:block h-20 w-auto"
                        src={logo}
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden sm:block sm:ml-auto">
                      <div className="flex items-center space-x-4">
                        <Link to="/">
                          <span
                            className="text-gray-300 hover:bg-rose-700 hover:text-white block
                              px-3 py-2 rounded-md text-base font-medium"
                          >
                            Home
                          </span>
                        </Link>
                        <Link to="/blogs">
                          <span
                            className="text-gray-300 hover:bg-rose-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                          >
                            Blog
                          </span>
                        </Link>

                       

                        {user ? (
                          <Link to="/manageitems">
                            <span
                              className="text-gray-300 hover:bg-rose-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                            >
                              Manage Items
                            </span>
                          </Link>
                        ) : (
                          <span></span>
                        )}    

                        {user ? (
                          <Link to="/myitems">
                            <span
                              className="text-gray-300 hover:bg-rose-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                            >
                              MyItems
                            </span>
                          </Link>
                        ) : (
                          <span></span>
                        )}


                        <Link to="/contact">
                          <span
                            className="text-gray-300 hover:bg-rose-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                          >
                            Contact Us
                          </span>
                        </Link>

                        
                        {!user ? (
                          <Link to="/register">
                            <span
                              className="text-gray-300 hover:bg-rose-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                            >
                              Register
                            </span>
                          </Link>
                        ) : (
                          <span></span>
                        )}

                        {!user ? (
                          <Link to="/login">
                            <span
                              className="text-gray-300 hover:bg-rose-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                            >
                              Login
                            </span>
                          </Link>
                        ) : (
                          <button
                            className="text-gray-300 hover:bg-rose-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => signOut(auth)}
                          >
                            Logout
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Disclosure.Button>
                    {/* "text-gray-300 hover:bg-gray-700 hover:text-white", "block
                    px-3 py-2 rounded-md text-base font-medium" */}
                    <Link to="/">
                      <span
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                      >
                        Home
                      </span>
                    </Link>
                    <Link to="/blog">
                      <span
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                      >
                        Blog
                      </span>
                    </Link>

                    {user ? (
                      <Link to="/manageinventory">
                        <span
                          className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                        >
                          Manage-Inventory
                        </span>
                      </Link>
                    ) : (
                      <span></span>
                    )}
                    {user ? (
                      <Link to="/myitems">
                        <span
                          className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                        >
                          MyItems
                        </span>
                      </Link>
                    ) : (
                      <span></span>
                    )}

                    {!user ? (
                      <Link to="/register">
                        <span
                          className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                        >
                          Register
                        </span>
                      </Link>
                    ) : (
                      <span></span>
                    )}

                    {!user ? (
                      <Link to="/login">
                        <span
                          className="text-gray-300 hover:bg-gray-700 hover:text-white block
                    px-3 py-2 rounded-md text-base font-medium"
                        >
                          Login
                        </span>
                      </Link>
                    ) : (
                      <button
                        className=" text-gray-300 hover:bg-gray-700 hover:text-white "
                        onClick={() => signOut(auth)}
                      >
                        Logout
                      </button>
                    )}
                  </Disclosure.Button>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    </header>
    
    </>
  );
};

export default Header;
























// import React from 'react';
// import { Fragment } from 'react'

// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
// import { Disclosure, Menu, Transition } from '@headlessui/react';


// const navigation = [
//   {name: 'Home', href:'/', current: true},
//   { name: 'Manage Items', href: '/manage-items', current: false },
//   { name: 'Add Items', href: '/add-items', current: false },
//   { name: 'Blogs', href: '/blogs', current: false },
//   { name: 'Contact Us', href: '/contact-us', current: false },
//   { name: 'Login', href: '/login', current: false },


// ]
// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }
// const Header = () => {
//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       {({ open }) => (
//         <>
//           <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//             <div className="relative flex items-center justify-between h-16">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <MenuIcon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex-shrink-0 flex items-center">

//                   <img
//                     className="block lg:hidden h-8 w-auto"
//                     src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                     alt="Workflow"
//                   />
                 
//                   <p className="hidden text-lg text-white lg:block h-8 w-auto"
//                   >WareHouse</p>
//                 </div>
//                 <div className="hidden sm:block sm:ml-6">
//                   <div className="flex space-x-4">
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                           'px-3 py-2 rounded-md text-sm font-medium'
//                         )}
//                         aria-current={item.current ? 'page' : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                 <button
//                   type="button"
//                   className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                 >
//                   <span className="sr-only">View notifications</span>
//                   <BellIcon className="h-6 w-6" aria-hidden="true" />
//                 </button>

//                 {/* Profile dropdown */}
//                 <Menu as="div" className="ml-3 relative">
//                   <div>
//                     <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
//                       <span className="sr-only">Open user menu</span>
//                       <img
//                         className="h-8 w-8 rounded-full"
//                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                         alt=""
//                       />
//                     </Menu.Button>
//                   </div>
//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-100"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="transform opacity-0 scale-95"
//                   >
//                     <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                           >
//                             Your Profile
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                           >
//                             Settings
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                           >
//                             Sign out
//                           </a>
//                         )}
//                       </Menu.Item>
//                     </Menu.Items>
//                   </Transition>
//                 </Menu>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                     'block px-3 py-2 rounded-md text-base font-medium'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// };

// export default Header;