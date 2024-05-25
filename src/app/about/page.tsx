import React from 'react';

const AboutPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative py-8 bg-white shadow-lg">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
            <p className="mb-4">EarT was founded with the mission to revolutionize the way people experience sound. We believe in the power of technology to enhance our daily lives, and our team of experts is dedicated to creating innovative products that redefine the audio industry.</p>
            <p className="mb-4">With a focus on quality, design, and user experience, we strive to deliver cutting-edge audio solutions that inspire and delight our customers. Whether you&#39;re a music lover, audiophile, or tech enthusiast, EarT has something for everyone.</p>
        </section>
        
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="mb-4">At EarT, our mission is to elevate the way people listen to music and audio content. We aim to push the boundaries of innovation and creativity, delivering products that exceed expectations and set new standards in the industry.</p>
            <p className="mb-4">We are committed to providing exceptional customer experiences and building lasting relationships with our community. By staying true to our values of integrity, passion, and excellence, we strive to make EarT the go-to brand for audio enthusiasts worldwide.</p>
        </section>
        
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
            <p className="mb-4">Meet the passionate individuals behind EarT:</p>
            <ul className="list-disc list-inside mb-4">
                <li>John Doe - CEO</li>
                <li>Jane Smith - Head of Product Development</li>
                <li>David Johnson - Chief Technology Officer</li>
                <li>Emily Williams - Marketing Director</li>
            </ul>
            <p className="mb-4">With a diverse team of experts from various backgrounds, we bring together unique perspectives and talents to drive innovation and achieve our goals.</p>
        </section>
        
        <section>
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="mb-4">If you have any questions or would like to learn more about EarT, please don&#39;t hesitate to get in touch:</p>
            <p className="mb-4">Email: info@eart.com</p>
            <p className="mb-4">Phone: (123) 456-7890</p>
        </section>
    </div>
  )
}

export default AboutPage;
