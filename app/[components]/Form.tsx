"use client";

import { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  service: string;
  location: "Sweden" | "Other";
  otherLocation: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    service: "",
    location: "Sweden",
    otherLocation: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "location" && value === "Sweden"
        ? { otherLocation: "" }
        : {}),
    }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (formData.name.trim().length < 6) {
      newErrors.name = "Name must be at least 6 characters long";
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service category";
    }

    if (
      formData.location === "Other" &&
      !formData.otherLocation.trim()
    ) {
      newErrors.otherLocation = "Please specify your location";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-10 pt-15 pb-25 bg-green-section/40" id="form">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md sm:max-w-lg lg:max-w-xl
                   bg-white p-6 sm:p-8 lg:p-10
                   rounded-xl shadow-md
                   flex flex-col gap-4 sm:gap-5 lg:gap-6"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center font-main text-display-text">
          Schedule A Consultation / Contact Us
        </h2>

        {/* Name */}
        <div className="flex flex-col">
          <label className="text-sm sm:text-base font-medium text-display-text font-schib">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-display-text font-schib"
          />
          {errors.name && (
            <span className="text-red-500 text-sm mt-1">{errors.name}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm sm:text-base font-medium text-display-text font-schib">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-display-text font-schib"
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">{errors.email}</span>
          )}
        </div>

        {/* Service Category */}
        <div className="flex flex-col">
          <label className="text-sm sm:text-base font-medium text-display-text font-schib">
            Service Category
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="mt-1 p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-display-text font-schib"
          >
            <option value="">Select a service</option>
            <option value="Interior design">Interior design</option>
            <option value="Furniture design">Furniture design</option>
            <option value="Styling & decoration">Styling & decoration</option>
            <option value="Planning and consultation">
              Planning and consultation
            </option>
          </select>
          {errors.service && (
            <span className="text-red-500 text-sm mt-1">
              {errors.service}
            </span>
          )}
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <label className="text-sm sm:text-base font-medium text-display-text font-schib">Location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-display-text font-schib"
          >
            <option value="Sweden">Sweden</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Conditional Other Location */}
        {formData.location === "Other" && (
          <div className="flex flex-col">
            <label className="text-sm sm:text-base font-medium text-display-text font-schib">
              Other
            </label>
            <input
              type="text"
              name="otherLocation"
              value={formData.otherLocation}
              onChange={handleChange}
              className="mt-1 p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-display-text font-schib"
            />
            {errors.otherLocation && (
              <span className="text-red-500 text-sm mt-1">
                {errors.otherLocation}
              </span>
            )}
          </div>
        )}

        <button
          type="submit"
          className="mt-4 py-2 sm:py-3
                     bg-black text-white
                     rounded-md
                     text-sm sm:text-base
                     hover:opacity-90 transition-all duration-75 ease-in font-schib font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
