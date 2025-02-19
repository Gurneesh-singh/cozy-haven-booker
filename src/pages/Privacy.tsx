
import { Navbar } from "@/components/Navbar";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-display mb-4 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Privacy Policy
            </h1>
            <p className="text-gray-600">Last updated: April 2024</p>
          </div>
          
          <div className="space-y-12 text-gray-700">
            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeIn">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-display text-primary">1</span>
                </div>
                <h2 className="text-2xl font-display text-gray-800">Introduction</h2>
              </div>
              <p className="mb-4 leading-relaxed">
                At Cozy Haven, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeIn animation-delay-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-display text-primary">2</span>
                </div>
                <h2 className="text-2xl font-display text-gray-800">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl mb-3 text-gray-800 font-display">2.1 Personal Information</h3>
                  <p className="mb-4">We may collect personal information that you provide to us, including but not limited to:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Name and contact details",
                      "Payment information",
                      "Travel preferences and history",
                      "Communication preferences"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl mb-3 text-gray-800 font-display">2.2 Automatically Collected Information</h3>
                  <p className="mb-4">When you visit our website, we automatically collect certain information, including:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Device information",
                      "Usage data",
                      "IP address",
                      "Browser type"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeIn animation-delay-400">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-display text-primary">3</span>
                </div>
                <h2 className="text-2xl font-display text-gray-800">How We Use Your Information</h2>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-4">
                  {[
                    "Processing your bookings and transactions",
                    "Providing customer support",
                    "Sending you relevant updates and promotional materials",
                    "Improving our services and user experience",
                    "Complying with legal obligations"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-display text-primary">4</span>
                </div>
                <h2 className="text-2xl font-display text-gray-800">Data Security</h2>
              </div>
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6">
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the internet is 100% secure.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-display text-primary">5</span>
                </div>
                <h2 className="text-2xl font-display text-gray-800">Your Rights</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Access your personal information",
                  "Correct inaccurate data",
                  "Request deletion of your data",
                  "Object to data processing",
                  "Withdraw consent"
                ].map((right, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{right}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-display text-primary">6</span>
                </div>
                <h2 className="text-2xl font-display text-gray-800">Contact Us</h2>
              </div>
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium mb-2">Email</p>
                    <p className="text-gray-600">privacy@cozyhaven.com</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium mb-2">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium mb-2">Address</p>
                    <p className="text-gray-600">123 Privacy Street, Securityville, ST 12345</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-display text-primary">7</span>
                </div>
                <h2 className="text-2xl font-display text-gray-800">Updates to This Policy</h2>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="mb-4 leading-relaxed">
                  We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
                </p>
                <div className="text-sm text-gray-500 border-t pt-4 mt-4">
                  Last updated: April 2024
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
