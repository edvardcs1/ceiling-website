import React from 'react';
import { useMeta } from '../components/SEO';

export const PrivacyPolicy = () => {
  useMeta('Privacy Policy', 'Privacy Policy for CM Acoustic LLC.');

  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>Last Updated: March 15, 2026</p>
          <p>
            At CM Acoustic LLC, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
          </p>
          
          <h2 className="text-2xl font-bold text-dark mt-8">1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and project details when you fill out our contact form or request an estimate.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to your inquiries and provide estimates.</li>
            <li>Communicate with you about your projects.</li>
            <li>Improve our website and services.</li>
            <li>Send you relevant updates or marketing materials (you can opt-out at any time).</li>
          </ul>

          <h2 className="text-2xl font-bold text-dark mt-8">3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to provide the services you requested (e.g., sharing details with necessary subcontractors).
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8">4. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at cmacoustic528@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};
