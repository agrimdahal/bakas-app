//@ts-nocheck
"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import ContactPellet from "../../../../public/contactpellet.png";

export const ContactUs = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const formData = form.current;
    const newErrors = {};

    if (!formData.from_name.value.trim())
      newErrors.from_name = "Please enter name";
    if (!formData.from_number.value.trim())
      newErrors.from_number = "Please enter number";
    if (!formData.from_email.value.trim())
      newErrors.from_email = "Please enter email";
    if (!formData.message.value.trim())
      newErrors.message = "Please enter your query";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs
      .sendForm("service_7i9tpy8", "template_w31vcjo", form.current, {
        publicKey: "STgeyjh6pdJ7TGiL4",
      })
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="mt-10 lg:mt-20 w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-50 justify-center items-center mb-10 lg:mb-20">
      <div className="hidden lg:block  justify-center items-center w-full lg:w-1/2">
        <Image src={ContactPellet} alt={"contact"} />
      </div>
      <div className="w-full lg:w-1/2">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-[400px] max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.from_name && (
              <p className="text-red-500">{errors.from_name}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 font-semibold"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="from_number"
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.from_number && (
              <p className="text-red-500">{errors.from_number}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.from_email && (
              <p className="text-red-500">{errors.from_email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="query"
              className="block text-gray-700 font-semibold"
            >
              Query
            </label>
            <textarea
              id="query"
              name="message"
              rows="4"
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-green-400 text-white px-4 py-2 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-green-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
