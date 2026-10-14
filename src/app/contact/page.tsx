"use client";

import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
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
        <>
            <PageHeader title="Contact Us" description="Get in touch with our team" />
            <Container className="pb-20 lg:pb-28">
            <section id="contact">
                <div className="card max-w-xl mx-auto p-6 sm:p-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="form-field"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="form-field"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="form-label">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="form-field"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="form-label">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleInputChange}
                                className="form-field"
                                required
                            />
                        </div>

                        {submitMessage && (
                            <div className={`p-4 rounded-xl text-base ${submitMessage.includes('error') || submitMessage.includes('Sorry') ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
                                {submitMessage}
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary w-full"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            </Container>
        </>
    );
};

export default ContactPage;