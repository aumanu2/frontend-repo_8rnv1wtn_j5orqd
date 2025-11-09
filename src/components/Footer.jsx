import React from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black py-10 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.25),transparent_60%)] blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-2">
          <Plane className="h-5 w-5 text-orange-400" />
          <span className="font-semibold">Ayuk Keliling</span>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-sm text-white/70">
          © {new Date().getFullYear()} Ayuk Keliling. Terinspirasi nuansa fantasi Genshin Impact.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
