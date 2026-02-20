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
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
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
      newErrors.name = "Namnet måste vara minst 6 tecken långt";
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Ange en giltig e-postadress";
    }

    if (!formData.service) {
      newErrors.service = "Vänligen välj en servicekategori";
    }

    if (formData.location === "Other" && !formData.otherLocation.trim()) {
      newErrors.otherLocation = "Vänligen ange din plats";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    const subject = encodeURIComponent(
      "Formulärinlämning från Anna Katarinas inredningssajt:",
    );

    const body = encodeURIComponent(
      `En användare skickade in följande information för vidare uppföljning

      Namn: ${formData.name}
      Tjänstekategori: ${formData.service}
      E-post: ${formData.email}

      Deras plats:
      ${formData.location}

      Deras plats (om inte Sverige) ,
      ${formData.otherLocation}
      `,
    );

    const mailtoLink = `mailto:info@annakatarinainterior.se?subject=${subject}&body=${body}`;

    // Triggered directly by user submit → correct browser behavior
    window.location.href = mailtoLink;

    // Reset form data
    // setFormData({
    //   name: "",
    //   email: "",
    //   service: "",
    //   location: "Sweden",
    //   otherLocation: "",
    // });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 mt-10 pt-15 pb-25 bg-green-section/40"
      id="form"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md sm:max-w-lg lg:max-w-xl
                   bg-white p-6 sm:p-8 lg:p-10
                   rounded-xl shadow-md
                   flex flex-col gap-4 sm:gap-5 lg:gap-6"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center font-main text-display-text">
          Boka en konsultation / Kontakta oss
        </h2>

        {/* Name */}
        <div className="flex flex-col">
          <label className="text-sm sm:text-base font-medium text-display-text font-schib">
            Namn
          </label>
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
          <label className="text-sm sm:text-base font-medium text-display-text font-schib">
            E-post
          </label>
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
            Tjänstekategori
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="mt-1 p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-display-text font-schib"
          >
            <option value="">Välj en tjänst</option>
            <option value="KulorKonsultation">KulorKonsultation</option>
            <option value="Stylingkonsultation">Stylingkonsultation</option>
            <option value="Inredningsuppdrag">Inredningsuppdrag</option>
            <option value="Möbelrum">Möbelrum</option>
          </select>
          {errors.service && (
            <span className="text-red-500 text-sm mt-1">{errors.service}</span>
          )}
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <label className="text-sm sm:text-base font-medium text-display-text font-schib">
            Plats
          </label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-display-text font-schib"
          >
            <option value="Sweden">Sverige</option>
            <option value="Other">Andra</option>
          </select>
        </div>

        {/* Conditional Other Location */}
        {formData.location === "Other" && (
          <div className="flex flex-col">
            <label className="text-sm sm:text-base font-medium text-display-text font-schib">
              Andra
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
          framlägga
        </button>
      </form>
    </div>
  );
}
