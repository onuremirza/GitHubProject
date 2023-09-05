import React from 'react';
import { RiAdminFill } from 'react-icons/ri';
import { AiOutlineLogout } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { SIDEBAR_LINKS, SIDEBAR_BOTTOM_LINKS } from '../lib/consts/Navigation';

const linkClasses =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';
const linkClassesRes = 'hover:bg-gray-200 rounded-full p-4';

export default function Sidebar() {
  return (
    <div>
      <div className="hidden md:flex flex-col h-screen w-60 bg-neutral-900 p-3 text-white">
        <div className="flex gap-2 items-center px-1 py-3">
          <RiAdminFill size={24} />
          <span className="text-neutral-100 text-lg">Admin Panel</span>
        </div>
        <div className="flex-1 py-8 flex-col flex text-lg gap-0.5">
          {SIDEBAR_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
        </div>
        <div className=" flex flex-col ga-0.5 pt-2 border-t border-neutral-700">
          {SIDEBAR_BOTTOM_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
          <div className={classNames('text-red-500', linkClasses)}>
            <span className="text-xl">
              <AiOutlineLogout />
            </span>
            Logout
          </div>
        </div>
      </div>
      <div className="fixed md:hidden flex flex-row z-10 bottom-2 right-1/2 translate-x-1/2 bg-white/50 rounded-full p-2 gap-2">
        {SIDEBAR_LINKS.map((item) => (
          <LinkCheck key={item.key} item={item} />
        ))}
        {SIDEBAR_BOTTOM_LINKS.map((item) => (
          <LinkCheck key={item.key} item={item} />
        ))}
        <div className={classNames('text-red-500', linkClassesRes)}>
          <span className="text-xl">
            <AiOutlineLogout />
          </span>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(pathname == item.path ? 'bg-neutral-600 text-white' : 'text-neutral-400', linkClasses)}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}

function LinkCheck({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(pathname == item.path ? 'bg-gray-300 text-black' : ' text-black', linkClassesRes)}
    >
      <span className="text-2xl text-black">{item.icon}</span>
    </Link>
  );
}
