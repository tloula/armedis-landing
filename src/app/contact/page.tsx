import Container from "@/components/Container";
import Section from "@/components/Section";

const ContactPage = () => {
    return (
        <Container className="mt-12">
            <Section
                id="contact"
                title="Contact Us"
                description="Get in touch with our team"
            >
                <div className="max-w-lg mx-auto">
                    <form className="space-y-6" action="https://submit-form.com/u2tUZTEKe" method="POST">
                        <div>
                            <label htmlFor="name" className="block text-base font-semibold">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
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
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-base py-3 px-4"
                                required
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </Section>
        </Container>
    );
};

export default ContactPage; 