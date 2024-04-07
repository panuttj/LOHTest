import React, { useState } from 'react';
import ComponentLv3 from './ComponentLV3';
import PropTypes from 'prop-types';
import logo from '../assets/logo.png';
const ComponentLv2 = ({ navigation, categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('TH');

  const languageDropdown = () => {
    setIsOpen(!isOpen);
  };
  const menuDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const languageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return <div>
    <nav className="bg-white h-16 p-3 max-[640px]:p-2 max-[640px]:h-12 shadow-md">
      <div className="flex items-center mb-2 justify-between">
        <div className="flex w-auto max-[640px]:gap-x-2">
          <div className="flex items-center min-[640px]:hidden">
            <button aria-expanded={isMenuOpen}
              onClick={menuDropdown}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-slate-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="flex min-[640px]:hidden">
            {isMenuOpen && (
              <div className="absolute p-1.5 left-2 z-10 mt-6 w-28 bg-white rounded-md shadow-lg ">
                <div className="divide-y flex flex-col">
                  {navigation?.map((item, index) => {
                    return (
                      item.type === 'group' ?
                        <button key={index} type='button' className="text-xs p-1 text-left font-semibold text-green-600 hover:from-lime-100 hover:to-green-100 hover:underline hover:underline-green-500 hover:text-lime-500 ">
                          {item.translate}
                        </button> :
                        null
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <img className="h-9 w-auto max-[640px]:h-7" src={logo} />
          <div className="flex max-[640px]:hidden">
            {navigation?.map((item, index) => {
              return (
                item.type === 'group' ?
                  <button key={index} type='button' className="text-sm mr-2 ml-2 font-semibold text-green-600 hover:from-lime-100 hover:to-green-100 hover:underline hover:underline-green-500 hover:text-lime-500 ">
                    {item.translate}
                  </button> :
                  null
              );
            })}
          </div>
        </div>
        <div className="flex items-center w-3/5 justify-between max-[640px]:justify-end">
          <div className="flex w-1/2 max-[640px]:hidden">
            <input type="text" className="block w-full flex rounded-full bg-transparent border border-lime-400 py-1.5 pl-2.5 text-green-600 placeholder:text-gray-300
      focus:outline-none focus:border-green-600 focus:ring-green-600 focus:ring-1 sm:text-sm sm:leading-6" placeholder="search" />
            <button>
              <svg className="h-6 w-6 pl-1 stroke-lime-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>
          <div className="flex gap-x-3 ">
            <button className="flex items-center"
              aria-expanded={isOpen}
              onClick={languageDropdown}>
              <span className="text-xs font-semibold text-slate-500 pr-1">{selectedLanguage}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute p-1.5 z-10 mt-6 w-20 bg-white rounded-md shadow-lg ">
                <div className="divide-y flex flex-col">
                  <button type="button" className="text-sm p-0.5 font-semibold text-slate-500 hover:text-green-600 focus:outline-none" onClick={() => languageChange('TH')}>
                    TH
                  </button>
                  <button type="button" className="text-sm p-0.5 font-semibold text-slate-500 hover:text-green-600 focus:outline-none" onClick={() => languageChange('EN')}>
                    EN
                  </button>
                </div>
              </div>
            )}
            <button className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </button>
            <button className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-green-600">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div >
    </nav >
    <ComponentLv3 categories={categories} />
  </div>;
};
ComponentLv2.propTypes = {
  navigation: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};
export default ComponentLv2;
