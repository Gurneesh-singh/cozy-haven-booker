
import { Navbar } from "@/components/Navbar";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-display mb-4 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Terms and Conditions
            </h1>
            <p className="text-gray-600">Last updated: April 2024</p>
          </div>

          <div className="space-y-12 text-gray-700">
            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeIn">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-display text-primary">1</span>
                </div>
                <h2 className="text-2xl font-display text-gray-800">Agreement to Terms</h2>
              </div>
              <p className="mb-4 leading-relaxed">
                By accessing or using Cozy Haven's services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeIn animation-delay-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-display text-primary">2</span>
                </div>
                <h2 className="text-2xl font-display text-gray-800">Booking and Reservations</h2>
              </div>
              <div className="space-y-6">
                {[
                  "All bookings are subject to availability and confirmation",
                  "Valid identification is required at check-in",
                  "Payment terms vary by property and rate type",
                  "Cancellation policies are property-specific"
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeIn animation-delay-400">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-display text-primary">3</span>
                </div>
                <h2 className="text-2xl font-display text-gray-800">User Responsibilities</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Provide accurate information",
                  "Maintain account security",
                  "Comply with local laws",
                  "Respect property rules",
                  "No unauthorized reselling",
                  "Report issues promptly"
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-display text-primary">4</span>
                </div>
                <h2 className="text-2xl font-display text-gray-800">Intellectual Property</h2>
              </div>
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6">
                <p className="leading-relaxed">
                  All content, including but not limited to logos, images, text, and software, is the property of Cozy Haven and is protected by intellectual property laws. Unauthorized use is prohibited.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-display text-primary">5</span>
                </div>
                <h2 className="text-2xl font-display text-gray-800">Limitation of Liability</h2>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="mb-4 leading-relaxed">
                  Cozy Haven shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {[
                    "Service interruptions",
                    "Data loss",
                    "Personal injury",
                    "Property damage"
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-display text-primary">6</span>
                </div>
                <h2 className="text-2xl font-display text-gray-800">Changes to Terms</h2>
              </div>
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl">
                <p className="leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of these changes.
                </p>
                <div className="text-sm text-gray-500 border-t pt-4 mt-4">
                  Last modified: April 2024
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-display text-primary">7</span>
                </div>
                <h2 className="text-2xl font-display text-gray-800">Contact Information</h2>
              </div>
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium mb-2">Email</p>
                    <p className="text-gray-600">legal@cozyhaven.com</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium mb-2">Phone</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium mb-2">Address</p>
                    <p className="text-gray-600">123 Legal Avenue, Termsville, ST 12345</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
