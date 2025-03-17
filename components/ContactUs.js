"use client";
import { React, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ContactUs = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle");
  const [formMessage, setFormMessage] = useState("");

  // Lazy load Facebook SDK only when user clicks the Facebook link
  const handleFacebookClick = (e) => {
    e.preventDefault();
    const loadFacebookAndRedirect = async () => {
      // Load the SDK
      await new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://connect.facebook.net/en_US/sdk.js";
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";
        script.onload = resolve;
        document.body.appendChild(script);
      });

      // After SDK loads, redirect to Facebook page
      window.location.href =
        "https://www.facebook.com/profile.php?id=61567398772169&mibextid=ZbWKwL";
    };

    loadFacebookAndRedirect();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Track phone call conversion when phone number is clicked
  const handlePhoneClick = () => {
    // Trigger Google Ads phone call conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16917143672/qxkRCPqN0qsaEPjA3II_'
      });
      console.log('[Tracking] Phone call conversion tracked');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint =
      "https://api.hsforms.com/submissions/v3/integration/submit/6187835/c9e0a8dc-5c29-43c1-9667-0f826c715d77";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: [
            { name: "full_name", value: formData.full_name },
            { name: "email", value: formData.email },
            { name: "message", value: formData.message },
          ],
        }),
      });

      if (response.ok) {
        // Track form submission conversion
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-16917143672/LaiLCKf31asaEPjA3II_'
          });
          console.log('[Tracking] Form submission conversion tracked');
        }
        
        // Redirect to success page
        router.push('/success');
      } else {
        setFormStatus("error");
        setFormMessage(
          "There was an issue with your submission. Please try again."
        );
      }
    } catch (error) {
      setFormStatus("error");
      setFormMessage(
        "There was an error submitting the form. Please check your internet connection and try again."
      );
    }
  };

  return (
    <section
      className="flex justify-center items-center min-h-screen p-6 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/contact-bg.webp')" }}
    >
      <div id="move-down" className="py-20">
        <div className="bg-opacity-90 backdrop-blur-md rounded-lg shadow-xl p-8 w-full max-w-5xl flex flex-col md:flex-row relative overflow-hidden">
          {/* Form Section */}
          <div className="flex-1 md:pr-8 z-10">
            <h1 className="text-2xl font-bold text-center text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-customYellow text-center mb-6">
              We are here for you! How can we help?
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customYellow"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customYellow"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Go ahead, we're listening..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customYellow h-32 resize-none"
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-customYellow text-white rounded-lg font-semibold hover:bg-customGray transition duration-300"
              >
                Submit
              </button>
            </form>

            {formStatus === "error" && (
              <p className="mt-4 font-semibold text-center text-red-600">
                {formMessage}
              </p>
            )}
          </div>

          {/* Contact Info Section */}
          <div className="flex-1 flex flex-col items-center justify-between mt-8 md:mt-0 md:pl-6">
            <div className="flex flex-col items-center">
              <Image
                src="/assets/images/contact-form-image.webp"
                alt="Contact Illustration"
                width={0}
                height={0}
                sizes="75vw"
                className="w-3/4 h-auto mb-4"
                loading="lazy"
              />

              <div className="text-customGray text-center font-bold mb-6 space-y-4">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-customYellow text-lg mr-2" />
                  <span>89 Church Road, Pukete, Hamilton 3200</span>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="text-customYellow text-lg mr-2" />
                  <Link
                    href="tel:021 246 3988"
                    className="hover:text-customYellow transition-colors"
                    onClick={handlePhoneClick}
                  >
                    021 246 3988
                  </Link>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-customYellow text-lg mr-2" />
                  <Link
                    href="mailto:digital@gdcgroup.co.nz"
                    className="hover:text-customYellow transition-colors"
                  >
                    digital@gdcgroup.co.nz
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Media Section - Optimized */}
            <div className="flex items-center space-x-2 mt-4">
              <span className="text-customGray text-lg font-semibold">
                Follow us on:
              </span>
              <Link
                href="https://www.facebook.com/profile.php?id=61567398772169&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook-link bg-customYellow text-white p-3 rounded-full hover:bg-customGray transition duration-300"
                prefetch={false}
              >
                <FaFacebookF />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;