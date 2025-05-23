"use client";

import React, { useState } from "react";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Mesajınız gönderildi!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section
            id="iletisim"
            className="relative z-10 flex justify-center items-center p-10 pt-[120px]" // Arka plan kaldırıldı
        >
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-gray-300 p-6 rounded-lg shadow-md space-y-4" // Kutucuk arka planı KALDI
            >
                <h2 className="text-2xl font-semibold text-center">İletişim Formu</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Ad Soyad"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-black"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="E-posta"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-black"
                />

                <textarea
                    name="message"
                    placeholder="Mesajınızı yazınız.."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-black"
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
                >
                    Gönder
                </button>
            </form>
        </section>
    );
};

export default Contact;
