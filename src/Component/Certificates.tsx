import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, X } from 'lucide-react';
import { certificates } from '../data/data';

const Certificates: React.FC = () => {
  // State to manage modal visibility and selected image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Open modal with the selected certificate image
  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  // Handle Escape key to close modal
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certificates & Credentials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized
            certifications from leading platforms and organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {(certificates || []).map((certificate) => (
            <div
              key={certificate.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-gold-500 text-white p-2 rounded-full">
                    <Award size={20} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {certificate.title}
                </h3>

                <p className="text-gold-600 dark:text-gold-400 font-semibold mb-3">
                  {certificate.issuer}
                </p>

                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>Issued in {certificate.date}</span>
                </div>

                {certificate.credentialId && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Credential ID: {certificate.credentialId}
                  </div>
                )}

                <button
                  onClick={() => openModal(certificate.image)}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all duration-200"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Verify Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Benefits */}
        <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Why Certifications Matter
            </h3>
            <p className="text-gold-100 max-w-3xl mx-auto">
              These certifications represent my commitment to staying current with industry best practices,
              latest tools, and emerging trends in digital marketing and design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h4 className="font-semibold mb-2">Industry Recognition</h4>
              <p className="text-gold-100 text-sm">
                Validated expertise from leading industry platforms
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="text-white" size={24} />
              </div>
              <h4 className="font-semibold mb-2">Latest Knowledge</h4>
              <p className="text-gold-100 text-sm">
                Up-to-date with current tools and best practices
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-white" size={24} />
              </div>
              <h4 className="font-semibold mb-2">Continuous Learning</h4>
              <p className="text-gold-100 text-sm">
                Commitment to professional development and growth
              </p>
            </div>
          </div>
        </div>

        {/* Full-Screen Modal */}
        {isModalOpen && selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative max-w-5xl w-full h-full flex items-center justify-center p-4">
              <img
                src={selectedImage}
                alt="Certificate"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;