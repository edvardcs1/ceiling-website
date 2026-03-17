import React from 'react';
import { useMeta } from '../components/SEO';

export const TermsOfService = () => {
  useMeta('Terms of Service', 'Terms of Service for CM Acoustic LLC.');

  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>Last Updated: March 15, 2026</p>
          
          <h2 className="text-2xl font-bold text-dark mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the CM Acoustic LLC website, you agree to comply with and be bound by these Terms of Service.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8">2. Use of the Website</h2>
          <p>
            You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the website.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8">3. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of CM Acoustic LLC and is protected by copyright and other intellectual property laws.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8">4. Estimates and Contracts</h2>
          <p>
            Any estimates provided through the website are preliminary and subject to change based on a physical inspection and a formal signed contract. All construction work is governed by the terms of the specific project contract.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8">5. Limitation of Liability</h2>
          <p>
            CM Acoustic LLC shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of the website or services.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8">6. Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of Arizona.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Your continued use of the website constitutes acceptance of the updated terms.
          </p>
        </div>
      </div>
    </div>
  );
};
