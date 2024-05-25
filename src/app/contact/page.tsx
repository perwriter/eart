import React from 'react';

const ContactPage = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
            <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
            
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Contact Information</h2>
                <p className="mb-2"><strong>Address:</strong> 123 EarT Street, Suite 100, Tech City, TX 54321</p>
                <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
                <p className="mb-2"><strong>Email:</strong> support@eart.com</p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
                <form className="bg-white p-8 shadow-md rounded-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="name" 
                            type="text" 
                            placeholder="Your name" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="email" 
                            type="email" 
                            placeholder="Your email" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="message" 
                            rows={5} 
                            placeholder="Your message" 
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button 
                            className="bg-ecom hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            type="button"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
                <div className="w-full h-64">
                    <iframe 
                        className="w-full h-full border-0" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086548652521!2d144.9556512156463!3d-37.81721897975156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sVictoria!5e0!3m2!1sen!2sau!4v1532580128093" 
                        allowFullScreen 
                        title="Our Location"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
