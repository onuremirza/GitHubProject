import React from 'react';

export default function Mail() {
  return (
    <div method="POST" encType="multipart/form-data" className="flex items-center justify-center h-screen w-screen">
      <form className=" w-4/6">
        <div className="grid md:grid-cols-2 gap-4 text-gray-200">
          <div>
            <p>Name</p>
            <input
              className="bg-white/10 pl-1 w-full border border-white/50 focus:outline-none"
              type="text"
              name="Name"
              required
            />
          </div>
          <div>
            <p>Email</p>
            <input
              className="bg-white/10 pl-1 w-full border border-white/50 focus:outline-none"
              type="email"
              name="Email"
              required
            />
          </div>
          <div>
            <p>Phone</p>
            <input
              className="bg-white/10 pl-1 w-full border border-white/50 focus:outline-none"
              type="text"
              name="Phone"
              required
            />
          </div>
          <div>
            <p>Subject</p>
            <input
              className="bg-white/10 pl-1 w-full border border-white/50 focus:outline-none"
              type="text"
              name="Subject"
              required
            />
          </div>
          <div className="md:col-start-1 md:col-end-3 h-24">
            <p>Message</p>
            <textarea
              rows={5}
              className="bg-white/10 pl-1 w-full h-5/6 border border-white/50 focus:outline-none"
              type="text"
              name="Message"
              required
            />
          </div>
          <button className="md:col-start-1 md:col-end-3 bg-white/20 hover:bg-white/40 hover:text-gray-100 duration-500 w-full h-full">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
