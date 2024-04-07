import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusIcon, MinusIcon, PhotoIcon } from '@heroicons/react/20/solid';

const ComponentLv3 = ({ categories }) => {
  const [titleCategories, setTitleCategories] = useState();
  const [subTitleCategories, setSubTitleCategories] = useState();
  const [activeButton, setActiveButton] = useState(null);
  const [activeChildButton, setActiveChildButton] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [subTitleChild, setSubTitleChild] = useState();

  useEffect(() => {
    if (categories && categories.length > 0) {
      setTitleCategories(categories[0]);
      setActiveButton(categories[0]);
    }
  }, [categories]);


  const categoriesTitle = (data) => {
    setTitleCategories(data);
    setActiveButton(data);
    setSubTitleCategories();
    setSubTitleChild();
    setActiveChildButton();
  };

  const subCategoriesTitle = (data) => {
    if (subTitleCategories?.id === data.id) {
      setIsOpen(false);
      setSubTitleCategories();
    } else {
      setIsOpen(true);
      setSubTitleCategories(data);
    }
  };

  const subTitleCategoriesChild = (data) => {
    setSubTitleChild(data);
    setActiveChildButton(data);
  };

  return (
    <div className="flex flex-row fixed w-full h-screen overflow-scroll divide-x divide-slate-300">
      <div className="flex flex-col w-1/3 mt-2 max-[640px]:w-2/3 ">
        <span className="p-2 ml-3 h-auto text-lg font-semibold text-slate-700">Sub Categories</span>
        <hr className="border-t border-slate-300 my-2" />
        {titleCategories?.child?.map((childItem, childIndex) => {
          return (
            <div key={childIndex} className="pl-5 pr-5 flex flex-col max-[640px]:p-0 ">
              <button className="text-sm font-semibold text-slate-500 hover:text-green-600"
                onClick={() => subCategoriesTitle(childItem)}
              >
                <div className="flex w-full flex-row items-center p-4 justify-between max-[640px]:p-2 max-[640px]:text-xs ">
                  {childItem.title}
                  {isOpen && subTitleCategories?.title === childItem.title ? <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    :
                    <PlusIcon className="h-4 w-4" aria-hidden="true" />
                  }
                </div>
              </button>
              {isOpen && subTitleCategories?.title === childItem.title && subTitleCategories?.child?.map((subChildItem, subChildIndex) => {
                return (
                  <div key={subChildIndex} className="flex ml-10 max-[640px]:ml-5 ">
                    <button className={`text-sm text-left font-semibold max-[640px]:text-xs ${activeChildButton?.id === subChildItem.id ? "text-green-600 " : "text-slate-500"}`}
                      onClick={() => subTitleCategoriesChild(subChildItem)}
                    >{subChildItem.title}</button>
                  </div>
                );
              })}
              <hr className="border-t 11/12 border-slate-300" />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col w-5/6 overflow-scroll ">
        <div className="mb-20">
          <div className="flex flex-row flex-wrap ">
            <span className="p-2 text-2xl mt-2 font-bold text-slate-600">
              Categories
            </span>
            {categories?.map((item, index) => {
              return (
                <div key={index} className="pl-5">
                  <button
                    className={`flex text-md pt-2 pb-2 mt-4 w-40 max-[640px]:p-1 max-[640px]:text-xs font-semibold border border-green-600 bg-gradient-to-l from-lime-50 rounded-full justify-center text-green-800 ${activeButton?.title === item.title && " text-white bg-gradient-to-r from-lime-400 to-green-600 "} hover:text-white hover:from-lime-400 hover:to-green-600`}
                    onClick={() => categoriesTitle(item)}
                  >
                    {item.title}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="p-5 mt-5">
            {subTitleChild?.child?.length === 0 && <span className="text-sm font-semibold text-slate-600 p-5 mt-5">No Data Found</span>}
            {subTitleChild?.child?.map((subTitleChildItem, subTitleChildIndex) => {
              return (
                <div key={subTitleChildIndex}>
                  <span className="text-sm font-semibold ml-1 underline max-[640px]:text-xs text-green-600">
                    {subTitleChildItem.title}
                  </span>
                  <div className="flex gap-x-3 flex-wrap ">
                    {subTitleChildItem.child.length === 0 ?
                      <div className="h-60 w-52 max-[640px]:h-52 max-[640px]:w-44 mt-4 mb-4 rounded-2xl shadow-md bg-white border">
                        <div className="flex h-3/4 justify-center items-center">
                          <PhotoIcon className="h-1/2 w-1/2" />
                        </div>
                        <div className="p-2 text-sm max-[640px]:text-xs font-semibold">
                          ProductName
                        </div>
                      </div> :
                      <div className="flex gap-x-3 flex-wrap ">
                        {subTitleChildItem.child?.map((subChildItemChild, subChildItemChildIndex) => {
                          return (
                            <div key={subChildItemChildIndex} className="mt-3">
                              <button className="text-xs font-semibold ml-1 border rounded-full p-2 max-[640px]:text-xs">
                                {subChildItemChild.title}
                              </button>
                              <div className="h-60 w-52 mt-4 mb-4 max-[640px]:h-52 max-[640px]:w-44 rounded-2xl shadow-md bg-white border ">
                                <div className="flex h-3/4 justify-center items-center">
                                  <PhotoIcon className="h-1/2 w-1/2" />
                                </div>
                                <div className="p-2 text-sm max-[640px]:text-xs font-semibold">
                                  ProductName
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    }
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div >
  );
};

ComponentLv3.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default ComponentLv3;
