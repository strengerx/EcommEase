import useMeta from "../hooks/useMeta"

const About = () => {
    const metadata = {
        title: "EcommEase - Our Story",
        description: "Learn about our mission and values shaping your shopping journey."
    }

    useMeta(metadata)

    return (<div className="bg-slate-100 min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-slate-800 text-center mb-8">About EcommEase</h1>

            <div className="bg-slate-200 p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-2xl font-semibold text-slate-800 mb-4">Our Mission</h2>
                <p className="text-slate-800">
                    At EcommEase, our mission is to provide a seamless and enjoyable online shopping experience for our customers. We believe in quality, affordability, and exceptional customer service.
                </p>
            </div>

            <div className="bg-slate-200 p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-2xl font-semibold text-slate-800 mb-4">Our Story</h2>
                <p className="text-slate-800">
                    EcommEase was founded with the vision of creating a user-friendly platform that brings the best products from around the world right to your doorstep. We started as a small team with big dreams and have grown into a trusted name in the e-commerce industry.
                </p>
            </div>

            <div className="bg-slate-200 p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-2xl font-semibold text-slate-800 mb-4">Our Values</h2>
                <ul className="list-disc list-inside text-slate-800">
                    <li>Customer Satisfaction: Our customers are at the heart of everything we do.</li>
                    <li>Quality Products: We curate only the best products for our customers.</li>
                    <li>Innovation: We continuously strive to improve and innovate our platform.</li>
                    <li>Integrity: We believe in transparency and honesty in all our dealings.</li>
                </ul>
            </div>

            <div className="bg-slate-200 p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-2xl font-semibold text-slate-800 mb-4">Meet the Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col items-center">
                        <img src="team-member1.jpg" alt="Team Member 1" className="w-32 h-32 object-cover rounded-full mb-4" />
                        <h3 className="text-xl font-semibold text-slate-800">John Doe</h3>
                        <p className="text-slate-800">Founder & CEO</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="team-member2.jpg" alt="Team Member 2" className="w-32 h-32 object-cover rounded-full mb-4" />
                        <h3 className="text-xl font-semibold text-slate-800">Jane Smith</h3>
                        <p className="text-slate-800">Chief Operating Officer</p>
                    </div>
                    {/* Add more team members as needed */}
                </div>
            </div>

            <div className="bg-slate-200 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-slate-800 mb-4">Contact Us</h2>
                <p className="text-slate-800 mb-4">
                    We would love to hear from you! If you have any questions, feedback, or suggestions, please feel free to reach out to us.
                </p>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-slate-800">Name</label>
                        <input type="text" id="name" className="w-full p-2 border border-slate-300 rounded" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-slate-800">Email</label>
                        <input type="email" id="email" className="w-full p-2 border border-slate-300 rounded" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-slate-800">Message</label>
                        <textarea id="message" className="w-full p-2 border border-slate-300 rounded"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-slate-800 text-white py-2 rounded">Send Message</button>
                </form>
            </div>
        </div>
    </div>);
};

export default About