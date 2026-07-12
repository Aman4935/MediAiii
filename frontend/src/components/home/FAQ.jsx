import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is my medical data secure?",
    answer:
      "Yes. MediAI uses JWT authentication and secure cloud storage to protect your medical reports.",
  },
  {
    question: "How does AI analyze my reports?",
    answer:
      "Your uploaded reports are processed using Gemini AI to generate easy-to-understand health insights.",
  },
  {
    question: "Can I download my reports anytime?",
    answer:
      "Absolutely. You can securely view and download your uploaded reports whenever you need them.",
  },
  {
    question: "Can I book doctor appointments?",
    answer:
      "Yes. MediAI allows you to schedule and manage appointments with doctors directly from your dashboard.",
  },
  {
    question: "Is MediAI free to use?",
    answer:
      "The current version is free for learning and demonstration purposes.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            FAQ
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 mt-5">
            Everything you need to know about MediAI.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="border rounded-2xl overflow-hidden shadow-sm"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <h3 className="font-semibold text-lg">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              <AnimatePresence>

                {open === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    className="overflow-hidden"
                  >

                    <p className="px-6 pb-6 text-gray-600 leading-7">
                      {faq.answer}
                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;