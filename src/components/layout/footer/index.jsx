import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white ">
      <div className="container-sk py-5 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className=" text-start">
            <Image height={40} width={40} src="/assets/logo.svg" alt="Logo" />
            <p className="text-base md:w-1/2 font-normal leading-5 mt-2 md:mt-4">
              Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam
              unde quae qui quasi mollitia tenetur. Dicta explicabo est
              consectetur maxime quos fugit velit assumenda est.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-4 md:mt-0 md:text-left">
            <h1 className="text-2xl font-bold leading-7">Sign Up For Our Newsletter!</h1>
            <p className="text-base font-normal leading-5">
              Get notified about updates and be the first to get early access to
              new Podcast episodes.
            </p>
            <div className="relative flex items-center mt-4">
              <input
                className="w-full text-xl font-normal leading-5 rounded-md py-2 px-4"
                type="email"
                placeholder="Your email address"
              />
              <button className="absolute right-0 bg-primary rounded-r-md text-xl font-normal leading-5 px-6 py-2 h-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="py-5 grid grid-cols-1 md:grid-cols-4 justify-between gap-4 md:gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-base font-bold leading-5">Contact Us</p>
            <span className="text-xs font-normal leading-5">support@we5ive.com</span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base font-bold leading-5">About Us</p>
            <span className="text-xs font-normal leading-5">Contact Us</span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base font-bold leading-5">Privacy policy</p>
            <span className="text-xs font-normal leading-5">Terms & Condition</span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base font-bold leading-5">Social Link</p>
            <p className="flex gap-4 text-primary">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <p className="text-center py-2">© 2024 | We5ive</p>
      </div>
    </footer>
  );
}

export default Footer;
