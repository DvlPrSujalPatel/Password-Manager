import React from 'react';



const Navbar = () => {
  return (
    <nav className="flex justify-evenly text-white items-center px-4 h-14">
      <div className="logo font-bold text-2xl">
        <span className="text-blue-500">&lt;</span>
        <span className="text-gray-300">Pass</span>
        <span className="text-blue-500">Man/&gt;</span>
      </div>
      <ul>
        <li className="flex gap-4  font-bold">
          <a
            href="https://github.com/DvlPrSujalPatel/Password-Manager"
            className="hover:text-blue-300 "
          >
            <i class="fa-brands fa-github"></i> Github
          </a>
          <a
            href="https://www.linkedin.com/in/sujal-patel-4b62b0316/"
            className="hover:text-blue-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar