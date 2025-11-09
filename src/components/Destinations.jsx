import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, MapPin, Stars } from 'lucide-react';

const destinations = [
  {
    title: 'Tokyo Skytree',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1887&auto=format&fit=crop',
    desc: 'Panorama kota futuristik, lampu neon, dan dunia modern ala anime.',
  },
  {
    title: 'Fushimi Inari, Kyoto',
    image: 'https://images.unsplash.com/photo-1646833240969-e8a4a6589a4f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGdXNoaW1pJTIwSW5hcmklMkMlMjBLeW90b3xlbnwwfDB8fHwxNzYyNjU1MjkzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    desc: 'Ribuan torii merah dengan nuansa petualangan fantasi.',
  },
  {
    title: 'Gunung Fuji',
    image: 'https://images.unsplash.com/photo-1690251671978-da0a60bfe453?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHdW51bmclMjBGdWppfGVufDB8MHx8fDE3NjI2NTUyOTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    desc: 'Ikon megah Jepang—pemandangan epik seperti poster game.',
  },
  {
    title: 'Arashiyama Bamboo Grove',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1930&auto=format&fit=crop',
    desc: 'Lorong bambu mistis dengan cahaya hijau kebiruan yang damai.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6 } }),
};

const Destinations = () => {
  return (
    <section id="destinations" className="relative w-full bg-gradient-to-b from-black via-[#0b0b12] to-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.25),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <Navigation className="h-4 w-4 text-cyan-300" />
            <span>Destinasi Pilihan</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Rasa Genshin, Cita Jepang</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Empat halaman destinasi—masing-masing memperlihatkan satu tempat ikonik dengan detail singkat.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <motion.a
              href={`#dest-${i}`}
              key={d.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur transition hover:scale-[1.02]"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img src={d.image} alt={d.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="relative z-10 p-4">
                <h3 className="text-lg font-semibold">{d.title}</h3>
                <p className="mt-1 text-sm text-white/70">{d.desc}</p>
                <div className="mt-3 inline-flex items-center gap-2 text-xs text-cyan-300">
                  <MapPin className="h-3 w-3" />
                  Lihat detail
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
