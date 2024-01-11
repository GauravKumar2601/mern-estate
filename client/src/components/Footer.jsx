import React from "react";
import { FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="">
      <div className="bg-slate-200 p-28 text-center">
        <Link to="/">
          <h1 className="font-bold text-xl sm:text-4xl">
            <span className="text-slate-500">Delta</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <div className="mt-4 flex gap-2 justify-center items-center">
          <FaInstagram
            size={28}
            className="text-slate-600 cursor-pointer hover:text-slate-900"
          />
          <FaTwitter
            size={28}
            className="text-slate-600 cursor-pointer hover:text-slate-900"
          />
          <FaPinterest
            size={28}
            className="text-slate-600 cursor-pointer hover:text-slate-900"
          />
        </div>
      </div>
      <div className="bg-slate-600">
        <p className="text-center p-1 text-white">
          Copyright c 2024 Gaurav Kumar
        </p>
      </div>
    </footer>
  );
}
