"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const SuccessPage = () => {
  return (
    <section className="flex justify-center items-center min-h-screen p-6 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/contact-bg.webp')" }}>
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-xl p-8 w-full max-w-2xl text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-customGray mb-2">Thank You!</h1>
          <p className="text-xl text-customGray mb-6">
            Your message has been successfully submitted.
          </p>
          <p className="text-lg text-customGray mb-8">
            We appreciate your interest and will get back to you as soon as possible.
          </p>
          <Link href="/" className="inline-block py-3 px-6 bg-customYellow text-white rounded-lg font-semibold hover:bg-customGray transition duration-300">
            Return to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;