import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Logo from '@/assets/image/Logo.png';

const Preloader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;

    if (count < 100) {
      interval = setInterval(() => {
        setCount((prev) => {
          // Slow down the count increase as it approaches 100
          if (prev < 90) return prev +0.8; // Quick increase in the beginning
          if (prev < 98) return prev + 0.5; // Slower increase in the middle
          return prev + 0.1; // Slowest near the end
        });
      }, 30); // Base interval of 30ms
    } else {
      clearInterval(interval);
      setTimeout(() => setShowCircle(true), 500); // Delay before showing the circle
    }

    return () => clearInterval(interval); // Cleanup interval
  }, [count]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white"
      initial={{ opacity: 0  }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
            <motion.div
              className="w-32 h-32"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Image src={Logo} alt="Logo" width={200} height={200} />
            </motion.div>
        
      </AnimatePresence>
    </motion.div>
  );
};

export default Preloader;
