import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 py-14  px-10 ">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
               <Link to='/'>
                Book Haven
               </Link>
                <p className="mb-7 text-base text-body-color dark:text-dark-6">
                  Sed ut perspiciatis undmnis is iste natus error sit amet
                  voluptatem totam rem aperiam.
                </p>
                <p className="flex items-center text-sm font-medium text-dark dark:text-white">
                  <span className="mr-3 text-primary">
                   {/* phoneIcon */}
                   <Link><FaPhoneVolume></FaPhoneVolume></Link>
                  </span>
                  <span>+015 365 25465 </span>
                </p>
              </div>
            </div>

            <LinkGroup header="Resources">
              <NavLink link="/#" label="SaaS Development" />
              <NavLink link="/#" label="Our Products" />
              <NavLink link="/#" label="User Flow" />
              <NavLink link="/#" label="User Strategy" />
            </LinkGroup>
            <LinkGroup header="Company">
              <NavLink link="/#" label="About TailGrids" />
              <NavLink link="/#" label="Contact & Support" />
              <NavLink link="/#" label="Success History" />
              <NavLink link="/#" label="Setting & Privacy" />
            </LinkGroup>
            <LinkGroup header="Quick Links">
              <NavLink link="/#" label="Premium Support" />
              <NavLink link="/#" label="Our Services" />
              <NavLink link="/#" label="Know Our Team" />
              <NavLink link="/#" label="Download App" />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
                  Follow Us On
                </h4>
                <div className="mb-6 flex items-center text-black space-x-4 text-xl">
                 <Link><FaLinkedin></FaLinkedin></Link>
                 <Link><FaFacebook></FaFacebook></Link>
                 <Link><FaTwitterSquare></FaTwitterSquare></Link>
                 <Link><GrInstagram></GrInstagram></Link>
                </div>
                <p className="text-base text-body-color dark:text-dark-6">
                  &copy; 2025 Book Have
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};
