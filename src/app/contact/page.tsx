"use client";

import Container from "@/components/Container";
import Section from "@/components/Section";
import { siteDetails } from "@/data/siteDetails";
import Botpoison from "@botpoison/browser";
import axios from "axios";
import { useState } from "react";

const botpoison = new Botpoison({
  publicKey: siteDetails.botpoisonContactPublicKey
});

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            // Process Botpoison challenge
            const { solution } = await botpoison.challenge();

            // Submit form with Botpoison solution
            await axios.post("https://submit-form.com/u2tUZTEKe", {
                ...formData,
                _botpoison: solution
            });

            setSubmitMessage("Thank you! Your message has been sent successfully.");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitMessage("Sorry, there was an error sending your message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Container className="mt-12">
            <Section
                id="contact"
                title="Contact Us"
                description="Get in touch with our team"
            >
                <div className="max-w-lg mx-auto">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-base font-semibold">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-base py-2 px-4"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-base font-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-base py-2 px-4"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-base font-semibold">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-base py-2 px-4"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-base font-semibold">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-base py-3 px-4"
                                required
                            />
                        </div>

                        {submitMessage && (
                            <div className={`p-4 rounded-md ${submitMessage.includes('error') || submitMessage.includes('Sorry') ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
                                {submitMessage}
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </Section>
        </Container>
    );
};

export default ContactPage;