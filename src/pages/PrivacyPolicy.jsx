 import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { FaShieldAlt, FaLock, FaUserSecret, FaCookie, FaDatabase, FaEnvelope } from 'react-icons/fa';




const PrivacyPolicy = () => {

 
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

      useEffect(() => {
  window.scrollTo(0, 0);
}, []);



  return (
    <div className="min-h-[calc(100vh-64px)] py-12 px-4">
      <div className="max-w-4xl mx-auto">
         <div className="text-center mb-12">
          <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
            <FaShieldAlt className="text-4xl text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-base-content/60">Last Updated: {currentDate}</p>
        </div>

        <div className="card bg-base-100 shadow-lg p-6 md:p-8 space-y-8">
           <section>
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <FaUserSecret className="text-primary" />
              Introduction
            </h2>
            <p className="text-base-content/70 leading-relaxed">
              TaskManager ("we", "our", "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard 
              your information when you use our task management application.
            </p>
            <p className="text-base-content/70 leading-relaxed mt-2">
              Please read this privacy policy carefully. If you do not agree with the terms 
              of this privacy policy, please do not access the site or use our services.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <FaDatabase className="text-primary" />
              Information We Collect
            </h2>
            <p className="text-base-content/70 leading-relaxed mb-3">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-content/70 ml-4">
              <li><strong>Account Information:</strong> Name, email address, and profile information</li>
              <li><strong>Task Data:</strong> Tasks, descriptions, statuses, and related content you create</li>
              <li><strong>Usage Data:</strong> How you interact with our application</li>
              <li><strong>Device Information:</strong> Browser type, operating system, and device identifiers</li>
              <li><strong>Authentication Data:</strong> Firebase authentication information</li>
            </ul>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <FaDatabase className="text-primary" />
              How We Use Your Information
            </h2>
            <p className="text-base-content/70 leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-content/70 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and manage your tasks and account</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze usage trends to improve user experience</li>
              <li>Protect against unauthorized access and fraud</li>
            </ul>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <FaLock className="text-primary" />
              Data Storage and Security
            </h2>
            <p className="text-base-content/70 leading-relaxed mb-3">
              We take data security seriously and implement appropriate technical and 
              organizational measures to protect your information.
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-content/70 ml-4">
              <li>Your data is stored on secure MongoDB servers</li>
              <li>Authentication is handled through Firebase with industry-standard security</li>
              <li>Data is encrypted during transmission using SSL/TLS</li>
              <li>We regularly update our security practices to protect against emerging threats</li>
            </ul>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <FaCookie className="text-primary" />
              Cookies and Tracking
            </h2>
            <p className="text-base-content/70 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience 
              on our platform. Cookies help us understand how you use our application and 
              improve our services. You can control cookie preferences through your browser settings.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3">Third-Party Services</h2>
            <p className="text-base-content/70 leading-relaxed mb-3">
              We use the following third-party services to power our application:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-content/70 ml-4">
              <li><strong>Firebase:</strong> Authentication and user management</li>
              <li><strong>MongoDB:</strong> Data storage and management</li>
              <li><strong>Vercel/Netlify:</strong> Application hosting</li>
            </ul>
            <p className="text-base-content/70 leading-relaxed mt-3">
              These third-party services have their own privacy policies and data processing practices.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
            <p className="text-base-content/70 leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-content/70 ml-4">
              <li>Access and view your personal data</li>
              <li>Update or correct your information</li>
              <li>Delete your account and associated data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3">Data Retention</h2>
            <p className="text-base-content/70 leading-relaxed">
              We retain your information for as long as your account is active or as needed 
              to provide you with our services. If you delete your account, we will remove 
              your personal information from our database within a reasonable timeframe, 
              except as required by law.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3">Children's Privacy</h2>
            <p className="text-base-content/70 leading-relaxed">
              Our application is not intended for children under 13 years of age. We do not 
              knowingly collect personal information from children under 13. If we learn that 
              we have collected personal information from a child under 13, we will delete that 
              information immediately.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3">Changes to This Privacy Policy</h2>
            <p className="text-base-content/70 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <FaEnvelope className="text-primary" />
              Contact Us
            </h2>
            <p className="text-base-content/70 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-3 p-4 bg-base-200 rounded-lg">
              <p className="font-medium">TaskManager Support</p>
              <p className="text-base-content/60">Email: awtomatig@gmail.com</p>
              <p className="text-base-content/60">Website: https://taskmanager.com</p>
            </div>
          </section>

           <div className="text-center text-sm text-base-content/40 pt-4 border-t border-base-200">
            <p>By using TaskManager, you agree to this Privacy Policy.</p>
            <p className="mt-1">
              <Link to="/" className="link link-primary">Home</Link>
              {' • '}
              <Link to="/terms" className="link link-primary">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;