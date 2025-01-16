import { motion } from 'framer-motion';
import { FaClipboardCheck, FaBell, FaChartLine } from 'react-icons/fa';

const UserOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 p-4"
    >
      <motion.div 
        className="p-10 bg-gradient-to-br from-violet-600 via-blue-600 to-indigo-700 rounded-3xl shadow-2xl text-white relative overflow-hidden"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full translate-y-32 -translate-x-32 blur-2xl" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Welcome Back! 👋
          </h1>
          <p className="text-blue-100 text-xl font-light tracking-wide">
            Your personal dashboard for seamless fine management and reporting
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100/20"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-lg">
              <FaClipboardCheck size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Pay Fines</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Quick and secure payment processing for all your outstanding fines.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-8 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-100/20"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-xl shadow-lg">
              <FaBell size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Report Issues</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Direct line to our support team for immediate assistance and issue resolution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="p-8 bg-gradient-to-br from-white to-violet-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-violet-100/20"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-violet-500 to-violet-600 text-white rounded-xl shadow-lg">
              <FaChartLine size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Track Progress</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Monitor your payment history and track the status of your reports.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UserOverview;
