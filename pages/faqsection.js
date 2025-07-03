'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is Snabbit?",
      answer: "Snabbit is a professional home cleaning service that provides trained experts for various household tasks including deep cleaning, regular maintenance, and specialized services."
    },
    {
      id: 2,
      question: "How do I book a service with Snabbit?",
      answer: "You can book a service through our mobile app available on Google Play Store and App Store, or through our website. Simply select your service, choose a time slot, and confirm your booking."
    },
    {
      id: 3,
      question: "Can we get multiple tasks done in one booking?",
      answer: "Yes, you can combine multiple cleaning tasks in a single booking. Our experts are trained to handle various household cleaning requirements efficiently."
    },
    {
      id: 4,
      question: "How can I trust the Experts sent by Snabbit?",
      answer: "All our experts are thoroughly background verified, trained, and insured. We maintain strict quality standards and provide customer support throughout the service."
    },
    {
      id: 5,
      question: "What if I need to cancel or reschedule my booking?",
      answer: "You can easily cancel or reschedule your booking through the app or by contacting our customer support. Please check our cancellation policy for any applicable charges."
    },
    {
      id: 6,
      question: "What should I do if I have a problem with my service?",
      answer: "If you face any issues with the service, please contact our customer support immediately. We offer service guarantee and will resolve any concerns promptly."
    },
    {
      id: 7,
      question: "How quickly can I get an Expert to my home?",
      answer: "We offer same-day service based on availability. You can check available time slots in the app and book the most convenient option for you."
    },
    {
      id: 8,
      question: "Do you offer regular or subscription-based services?",
      answer: "Yes, we offer both one-time services and regular subscription plans. You can choose weekly, bi-weekly, or monthly cleaning subscriptions at discounted rates."
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* FAQ Section - Exactly like screenshot */}
        <div className="bg-gray-100 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#5D0F36] mb-4">
              FAQs
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-2xl shadow-sm">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl"
                >
                  <span className="text-lg md:text-xl font-medium text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <div className={`transform transition-transform duration-200 flex-shrink-0 ${openFaq === faq.id ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-pink-500" />
                  </div>
                </button>
                
                {openFaq === faq.id && (
                  <div className="px-8 pb-6">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed mt-4 text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}