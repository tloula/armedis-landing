"use client";

import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { siteDetails } from "@/data/siteDetails";
import Botpoison from "@botpoison/browser";
import axios from "axios";
import { useState } from "react";

const botpoison = new Botpoison({
  publicKey: siteDetails.botpoisonDataRequestPublicKey
});

const DataRequestPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        "request-type": "",
        details: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
            await axios.post("https://submit-form.com/YmcpcuoG8", {
                ...formData,
                _botpoison: solution
            });

            setSubmitMessage("Thank you! Your request has been submitted successfully.");
            setFormData({
                name: "",
                email: "",
                "request-type": "",
                details: ""
            });
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitMessage("Sorry, there was an error submitting your request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <PageHeader title="Data Request" description="Request your data be updated, exported, or deleted" />
            <Container className="pb-20 lg:pb-28">
            <section id="data-request">
                <div className="card max-w-xl mx-auto p-6 sm:p-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="form-label">
                                Full Name
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
                                Email Address
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
                            <label htmlFor="request-type" className="form-label">
                                Request Type
                            </label>
                            <select
                                id="request-type"
                                name="request-type"
                                value={formData["request-type"]}
                                onChange={handleInputChange}
                                className="form-field"
                                required
                            >
                                <option value="">Select a request type</option>
                                <option value="update">Update my data</option>
                                <option value="export">Export my data</option>
                                <option value="delete-data">Delete my data</option>
                                <option value="delete-account">Delete my account</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="details" className="form-label">
                                Additional Details
                            </label>
                            <textarea
                                name="details"
                                id="details"
                                rows={4}
                                value={formData.details}
                                onChange={handleInputChange}
                                className="form-field"
                                placeholder="Please provide any additional information that might help us process your request"
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
                                {isSubmitting ? "Submitting..." : "Submit Request"}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-sm text-gray-500">
                        <p>We will process your request within 30 days in accordance with applicable data protection laws.</p>
                    </div>
                    <div className="mt-6 text-sm text-gray-500">
                        <p>If you choose to delete your account, all of your data will be deleted except for purchase history, which we retain in Stripe and/or RevenueCat for legal and bookkeeping purposes.</p>
                    </div>
                </div>
            </section>
            </Container>
        </>
    );
};

export default DataRequestPage;