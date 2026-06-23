// src/pages/TermsOfService.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { FaFileContract, FaCheckCircle, FaUser, FaLock, FaGavel, FaHandshake } from 'react-icons/fa';

const TermsOfService = () => {
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
            <FaFileContract className="text-4xl text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-base-content/60">Last Updated: {currentDate}</p>
        </div>

        <div className="card bg-base-100 shadow-lg p-6 md:p-8 space-y-8">
           <section>
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <FaHandshake className="text-primary" />
              Acceptance of Terms
            </h2>
            <p className="text-base-content/70 leading-relaxed">
              By using TaskManager ("we", "our", "us"), you agree to comply with and be bound 
              by these Terms of Service. If you do not agree to these terms, please do not 
              use our application.
            </p>
            <p className="text-base-content/70 leading-relaxed mt-2">
              These terms apply to all users of the TaskManager application, including 
              visitors, registered users, and anyone else who accesses the service.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <FaUser className="text-primary" />
              User Accounts
            </h2>
            <p className="text-base-content/70 leading-relaxed mb-3">
              To use certain features of our application, you must create an account. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-content/70 ml-4">
              <li>Provide accurate and complete information when creating your account</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
              <li>Be responsible for all activities that occur under your account</li>
              <li>You must be at least 13 years old to create an account</li>
            </ul>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <FaCheckCircle className="text-primary" />
              User Responsibilities
            </h2>
            <p className="text-base-content/70 leading-relaxed mb-3">
              As a user of TaskManager, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-content/70 ml-4">
              <li>Use the application for lawful purposes only</li>
              <li>Not upload or share inappropriate or offensive content</li>
              <li>Respect the intellectual property rights of others</li>
              <li>Not attempt to gain unauthorized access to the system</li>
              <li>Not interfere with or disrupt the service or servers</li>
              <li>Not use the service to harass, abuse, or harm others</li>
            </ul>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <FaLock className="text-primary" />
              Intellectual Property
            </h2>
            <p className="text-base-content/70 leading-relaxed">
              The TaskManager application, including its design, logo, text, graphics, and 
              software, is the property of TaskManager and is protected by copyright, 
              trademark, and other intellectual property laws.
            </p>
            <p className="text-base-content/70 leading-relaxed mt-2">
              You may not copy, modify, distribute, sell, or lease any part of our service 
              without our prior written consent. However, you retain ownership of the data 
              and content you create within the application.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3">User Data</h2>
            <p className="text-base-content/70 leading-relaxed mb-3">
              You retain all rights to the data you create within TaskManager. By using our service, you grant us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-content/70 ml-4">
              <li>The right to store, process, and display your data as necessary to provide our services</li>
              <li>The right to use anonymized data for analytics and service improvement</li>
              <li>The right to delete your data upon account termination</li>
            </ul>
            <p className="text-base-content/70 leading-relaxed mt-3">
              You can export or delete your data at any time through your account settings.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <FaGavel className="text-primary" />
              Prohibited Activities
            </h2>
            <p className="text-base-content/70 leading-relaxed mb-3">
              You are prohibited from using our service to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-content/70 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Upload malicious code or viruses</li>
              <li>Share unauthorized commercial content</li>
              <li>Impersonate others or provide false information</li>
              <li>Attempt to bypass security measures</li>
            </ul>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3">Termination</h2>
            <p className="text-base-content/70 leading-relaxed">
              We reserve the right to suspend or terminate your account at our discretion 
              if you violate these Terms of Service. You may also delete your account at 
              any time through the application settings.
            </p>
            <p className="text-base-content/70 leading-relaxed mt-2">
              Upon termination, we will delete your personal data within a reasonable 
              timeframe, except as required by law.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3">Disclaimer of Warranties</h2>
            <p className="text-base-content/70 leading-relaxed">
              TaskManager is provided on an "as is" and "as available" basis. We make no 
              warranties, expressed or implied, regarding the operation or availability 
              of our service.
            </p>
            <p className="text-base-content/70 leading-relaxed mt-2">
              While we strive to maintain high standards of security and reliability, we 
              do not guarantee that the service will be error-free or uninterrupted.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
            <p className="text-base-content/70 leading-relaxed">
              To the maximum extent permitted by law, TaskManager shall not be liable for 
              any indirect, incidental, special, consequential, or punitive damages arising 
              from your use of our service.
            </p>
            <p className="text-base-content/70 leading-relaxed mt-2">
              This includes, but is not limited to, loss of data, loss of profits, or any 
              other damages resulting from the use or inability to use our service.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3">Changes to Terms</h2>
            <p className="text-base-content/70 leading-relaxed">
              We may update these Terms of Service from time to time. We will notify you 
              of any changes by posting the new terms on this page and updating the 
              "Last Updated" date.
            </p>
            <p className="text-base-content/70 leading-relaxed mt-2">
              Your continued use of the service after any changes constitutes your 
              acceptance of the updated terms.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3">Governing Law</h2>
            <p className="text-base-content/70 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance 
              with the laws of the jurisdiction in which TaskManager operates, without 
              regard to its conflict of law provisions.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <FaHandshake className="text-primary" />
              Contact Us
            </h2>
            <p className="text-base-content/70 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-3 p-4 bg-base-200 rounded-lg">
              <p className="font-medium">TaskManager Support</p>
              <p className="text-base-content/60">Email: awtomatig@gmail.com</p>
              <p className="text-base-content/60">Website: https://taskmanager.com</p>
            </div>
          </section>

           <div className="text-center text-sm text-base-content/40 pt-4 border-t border-base-200">
            <p>By using TaskManager, you agree to these Terms of Service.</p>
            <p className="mt-1">
              <Link to="/" className="link link-primary">Home</Link>
              {' • '}
              <Link to="/privacy" className="link link-primary">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;