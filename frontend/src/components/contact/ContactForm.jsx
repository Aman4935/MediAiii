import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { sendContactMessage } from "../../services/contactService";
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.subject ||
    !formData.message
  ) {
    return toast.error("Please fill all fields");
  }

  try {
    const response = await sendContactMessage(formData);

    if (response.success) {
      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Something went wrong"
    );

  }
};


  return (
    <section className="py-24 bg-white">

      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-widest text-blue-600 font-semibold">

            Send Message

          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">

            Get In Touch

          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">

            We'd love to hear your ideas,
            suggestions and feedback.

          </p>

        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl shadow-xl p-10 mt-14"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="font-medium">

                Full Name

              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            <div>

              <label className="font-medium">

                Email Address

              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

          </div>

          <div className="mt-6">

            <label className="font-medium">

              Subject

            </label>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Message subject"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <div className="mt-6">

            <label className="font-medium">

              Message

            </label>

            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-2xl font-semibold text-lg hover:scale-[1.02] transition duration-300"
          >

            Send Message

          </button>

        </motion.form>

      </div>

    </section>
  );
}

export default ContactForm;