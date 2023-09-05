import React from 'react';

export default function () {
  return (
    <div className="flex h-screen w-screen justify-center items-center bg-neutral-300">
      <div className="bg-neutral-600 shadow-lg shadow-neutral-600 w-1/2 h-1/4">
        <form action="_POST" className="flex flex-col gap-4 justify-center items-center h-full w-full text-white">
          <h1>Admin Panel Giriş</h1>
          <div className="w-full flex justify-center">
            <input type="text" name="id" className="rounded-xl bg-white/25 pl-2 w-1/2 p-1" placeholder="Username" />
          </div>
          <div className="w-full text-center">
            <input
              type="password"
              name="password"
              className="rounded-xl bg-white/25 pl-2 w-1/2 p-1"
              placeholder="Password"
            />
          </div>

          <button className="bg-white/25 hover:scale-125 duration-500 border-gray-50 w-1/2 rounded-xl p-1">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
