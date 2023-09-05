import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

export default function LayoutA() {
  return (
    <div className="bg-neutral-100 h-screen flex flex-row w-screen overflow-x-hidden">
      <SideBar />
      <Outlet />
    </div>
  );
}
