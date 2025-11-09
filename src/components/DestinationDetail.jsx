import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles } from 'lucide-react';

const details = [
  {
    id: 'dest-0',
    title: 'Tokyo Skytree',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1887&auto=format&fit=crop',
    text: 'Menara observasi tertinggi dengan pemandangan Tokyo bercahaya neon. Nikmati suasana futuristik seperti memasuki kota dalam game open-world.',
  },
  {
    id: 'dest-1',
    title: 'Fushimi Inari, Kyoto',
    image: 'https://images.unsplash.com/photo-1646833240969-e8a4a6589a4f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGdXNoaW1pJTIwSW5hcmklMkMlMjBLeW90b3xlbnwwfDB8fHwxNzYyNjU1MjkzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    text: 'Gerbang torii berderet tak berujung yang membentuk lorong merah magis. Cocok untuk pencari petualangan dan foto dramatis.',
  },
  {
    id: 'dest-2',
    title: 'Gunung Fuji',
    image: 'https://images.unsplash.com/photo-1690251671978-da0a60bfe453?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHdW51bmclMjBGdWppfGVufDB8MHx8fDE3NjI2NTUyOTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    text: 'Siluet sempurna yang legendaris. Pemandangan dari danau Kawaguchiko menghadirkan ketenangan seperti cutscene epik.',
  },
  {
    id: 'dest-3',
    title: 'Arashiyama Bamboo Grove',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1930&auto=format&fit=crop',
    text: 'Jalan setapak bambu yang menenangkan dengan nuansa hijau kebiruan. Rasakan ambiance fantasi yang menyejukkan.',
  },
];

const DestinationDetail = () => {
  return (
    <section className="relative bg-[radial-gradient(ellipse_at_top_right,rgba(251,146,60,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.15),transparent_40%)] py-20">
      <div className="mx-auto max-w-6xl space-y-24 px-6">
        {details.map((d, idx) => (
          <motion.div
            id={d.id}
            key={d.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className={`grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-4 backdrop-blur lg:grid-cols-2 ${idx % 2 === 1 ? 'lg:direction-rtl' : ''}`}
          >
            <div className="relative h-72 w-full overflow-hidden rounded-2xl">
              <img src={d.image} alt={d.title} className="h-full w-full rounded-2xl object-cover transition duration-700 hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="space-y-3 p-2 text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-cyan-300">
                <MapPin className="h-3 w-3" /> Detail Destinasi
              </div>
              <h3 className="text-2xl font-bold sm:text-3xl">{d.title}</h3>
              <p className="text-white/80">{d.text}</p>
              <div className="pt-2 text-sm text-orange-300 inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Penerbangan langsung tersedia setiap hari.
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DestinationDetail;
