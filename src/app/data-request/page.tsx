import Container from "@/components/Container";
import Section from "@/components/Section";

const DataRequestPage = () => {
    return (
        <Container className="mt-12">
            <Section
                id="data-request"
                title="Data Request"
                description="Request your personal data or exercise your data rights"
            >
                <div className="max-w-lg mx-auto">
                    <form className="space-y-6" action="https://submit-form.com/YmcpcuoG8" method="POST">
                        <div>
                            <label htmlFor="name" className="block text-base font-semibold">
                                Full Name
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
                                Email Address
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
                            <label htmlFor="request-type" className="block text-base font-semibold">
                                Request Type
                            </label>
                            <select
                                id="request-type"
                                name="request-type"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-base py-2 px-4"
                                required
                            >
                                <option value="">Select a request type</option>
                                <option value="access">Access my data</option>
                                <option value="delete">Delete my data</option>
                                <option value="update">Update my data</option>
                                <option value="export">Export my data</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="details" className="block text-base font-semibold">
                                Additional Details
                            </label>
                            <textarea
                                name="details"
                                id="details"
                                rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-base py-3 px-4"
                                placeholder="Please provide any additional information that might help us process your request"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                Submit Request
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-sm text-gray-500">
                        <p>We will process your request within 30 days in accordance with applicable data protection laws.</p>
                    </div>
                </div>
            </Section>
        </Container>
    );
};

export default DataRequestPage; 