
import { Navbar } from "@/components/Navbar";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-display mb-8 text-gray-900">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-display mb-4 text-gray-800">1. Introduction</h2>
              <p className="mb-4">
                At Cozy Haven, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4 text-gray-800">2. Information We Collect</h2>
              <h3 className="text-xl mb-3 text-gray-800">2.1 Personal Information</h3>
              <p className="mb-4">We may collect personal information that you provide to us, including but not limited to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Name and contact details</li>
                <li>Payment information</li>
                <li>Travel preferences and history</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl mb-3 text-gray-800">2.2 Automatically Collected Information</h3>
              <p className="mb-4">When you visit our website, we automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Device information</li>
                <li>Usage data</li>
                <li>IP address</li>
                <li>Browser type</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4 text-gray-800">3. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for various purposes, including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Processing your bookings and transactions</li>
                <li>Providing customer support</li>
                <li>Sending you relevant updates and promotional materials</li>
                <li>Improving our services and user experience</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4 text-gray-800">4. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4 text-gray-800">5. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4 text-gray-800">6. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p>Email: privacy@cozyhaven.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Privacy Street, Securityville, ST 12345</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4 text-gray-800">7. Updates to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
              </p>
              <p className="text-sm text-gray-500">Last updated: April 2024</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
