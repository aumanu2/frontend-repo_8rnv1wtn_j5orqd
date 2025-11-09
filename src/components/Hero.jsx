import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Plane, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* RGB aurora overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen">
        <div className="absolute -top-24 left-0 h-[60%] w-[60%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,0,102,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,190,255,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,170,0,0.35),transparent_60%)] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-md"
        >
          <Plane className="h-4 w-4 text-orange-400" />
          <span className="tracking-wide">Ayuk Keliling • Japan Air Travel</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 bg-gradient-to-br from-white via-orange-200 to-orange-500 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Jelajahi Jepang Lewat Udara
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-balance text-base text-white/80 sm:text-lg"
        >
          Nuansa fantasi bergaya Genshin dengan interaksi 3D dan cahaya RGB. Siap mengudara bersama Ayuk Keliling!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#destinations" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-white shadow-lg shadow-orange-500/30 transition-transform hover:-translate-y-0.5">
            Jelajahi Destinasi
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a href="#booking" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-md transition hover:bg-white/15">
            Pesan Tiket
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
