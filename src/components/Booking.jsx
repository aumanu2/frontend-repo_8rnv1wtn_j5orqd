import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Calendar, Users, Plane } from 'lucide-react';

const Booking = () => {
  const [form, setForm] = useState({ name: '', email: '', date: '', pax: 1, destination: 'Tokyo Skytree' });
  const [status, setStatus] = useState({ loading: false, done: false, error: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, done: false, error: '' });

    try {
      // open prefilled email using mailto
      const subject = encodeURIComponent(`Booking Ayuk Keliling • ${form.destination}`);
      const body = encodeURIComponent(
        `Halo Ayuk Keliling,%0D%0A%0D%0ASaya ingin memesan tiket ke ${form.destination}.%0D%0A` +
        `Nama: ${form.name}%0D%0A` +
        `Email: ${form.email}%0D%0A` +
        `Tanggal: ${form.date}%0D%0A` +
        `Jumlah Penumpang: ${form.pax}%0D%0A%0D%0ATerima kasih!`
      );
      window.location.href = `mailto:booking@ayukkeliling.travel?subject=${subject}&body=${body}`;
      setStatus({ loading: false, done: true, error: '' });
    } catch (err) {
      setStatus({ loading: false, done: false, error: 'Gagal membuka email client.' });
    }
  };

  return (
    <section id="booking" className="relative bg-gradient-to-b from-black to-[#0b0b12] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute right-10 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.25),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold sm:text-4xl">Pesan Tiket Udara ke Jepang</h2>
          <p className="mt-3 text-white/80">Sistem pemesanan via email—cepat, aman, dan langsung terhubung ke tim Ayuk Keliling.</p>

          <div className="mt-6 space-y-3 text-white/80">
            <div className="flex items-center gap-3"><Plane className="h-5 w-5 text-orange-400" /> Penerbangan langsung setiap hari</div>
            <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-cyan-300" /> Konfirmasi cepat via email</div>
          </div>
        </motion.div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm">Nama Lengkap</label>
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Nama Anda" className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-orange-400" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="email@domain.com" className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-orange-400" />
            </div>
            <div>
              <label className="mb-1 block text-sm">Tanggal Berangkat</label>
              <div className="relative">
                <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 pr-10 outline-none focus:border-orange-400" />
                <Calendar className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm">Penumpang</label>
              <div className="relative">
                <input type="number" min="1" name="pax" value={form.pax} onChange={handleChange} required className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 pr-10 outline-none focus:border-orange-400" />
                <Users className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm">Destinasi</label>
              <select name="destination" value={form.destination} onChange={handleChange} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-orange-400">
                <option>Tokyo Skytree</option>
                <option>Fushimi Inari, Kyoto</option>
                <option>Gunung Fuji</option>
                <option>Arashiyama Bamboo Grove</option>
              </select>
            </div>
          </div>

          <button type="submit" disabled={status.loading} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:scale-[1.01] disabled:opacity-60">
            <Send className="h-4 w-4" /> {status.loading ? 'Mengirim...' : 'Kirim via Email'}
          </button>

          {status.done && <p className="mt-3 text-center text-sm text-green-300">Silakan cek aplikasi email Anda untuk mengirim pemesanan.</p>}
          {status.error && <p className="mt-3 text-center text-sm text-red-300">{status.error}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Booking;
