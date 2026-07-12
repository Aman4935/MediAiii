import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Is MediAI free to use?",
    answer:
      "Yes. MediAI provides essential healthcare features for learning and demonstration purposes.",
  },
  {
    question: "Is my medical data secure?",
    answer:
      "Yes. We prioritize user privacy and secure storage of uploaded reports.",
  },
  {
    question: "Can AI replace doctors?",
    answer:
      "No. MediAI is designed to assist users with healthcare information, not replace professional medical advice.",
  },
  {
    question: "Can I book appointments?",
    answer:
      "Yes. Users can book appointments through the integrated appointment module.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="uppercase tracking-widest text-blue-600 font-semibold">
            FAQ
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <motion.div
              key={index}
              layout
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <motion.div
                  animate={{
                    rotate: active === index ? 180 : 0,
                  }}
                >
                  <FaChevronDown />
                </motion.div>

              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    className="px-6 pb-6 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;