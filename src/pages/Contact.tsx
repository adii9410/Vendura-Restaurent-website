import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const validateForm = () => {
    if (!formData.name.trim()) return false;
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) return false;
    if (!formData.message.trim()) return false;
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setModalMessage('Message sent successfully! Thank you.');
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill all fields correctly');
    }
  };

  const handleBookTable = () => {
    if (validateForm()) {
      const tableNumber = Math.floor(Math.random() * 100) + 1;
      setModalMessage(`Your table #${tableNumber} has been booked! We look forward to serving you.`);
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in your contact details first');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-white focus:bg-white/20 focus:ring-0 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-white focus:bg-white/20 focus:ring-0 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-white focus:bg-white/20 focus:ring-0 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-400 text-black py-2 px-4 rounded-md hover:bg-green-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-6">Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <span> Near metro station,New Delhi</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-green-400" />
                  <span>+91 123-456-7890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-green-400" />
                  <span>https://vendurabyadi.netlify.app</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-green-400" />
                  <div>
                    <p>Mon-Fri: 10:00 AM - 10:00 PM</p>
                    <p>Sat-Sun: 10:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Reservations</h3>
              <p className="text-gray-300 mb-4">
                For parties of 6 or more, please call us directly to make a reservation.
                We recommend booking at least two days in advance.
              </p>
              <button 
                onClick={handleBookTable}
                className="bg-green-400 text-black py-2 px-4 rounded-md hover:bg-green-500 transition-colors"
              >
                Book a Table
              </button>
            </div>
          </motion.div>
        </div>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-900 p-6 rounded-lg max-w-md w-full text-center"
            >
              <h3 className="text-xl font-bold mb-4">Success!</h3>
              <p className="text-gray-300 mb-6">{modalMessage}</p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-green-400 text-black px-6 py-2 rounded-md hover:bg-green-500 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
