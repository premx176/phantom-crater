export default function ContactPage() {
  return (
    <main className="min-h-screen bg-inner-glow text-white flex flex-col justify-center items-center px-6 pt-24 selection:bg-white/30 selection:text-white">
      <div className="w-full max-w-2xl text-center space-y-12">
        <div>
          <h2 className="text-6xl md:text-8xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] mb-4">Contact Us</h2>
          <p className="text-2xl text-white/60 font-light">Get in touch to order your CAT today.</p>
        </div>

        <div className="flex flex-col space-y-6">
          <a href="tel:+918766891845" className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/20 p-8 shadow-neon-white hover:shadow-neon-white-hover transition-all flex items-center justify-center hover:-translate-y-2">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-3xl font-bold text-white tracking-widest relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">+91 8766891845</span>
          </a>
          <a href="mailto:premsalve547@gmail.com" className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/20 p-8 shadow-neon-white hover:shadow-neon-white-hover transition-all flex items-center justify-center hover:-translate-y-2">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-xl md:text-2xl font-light text-white tracking-wider relative z-10">premsalve547@gmail.com</span>
          </a>
        </div>
      </div>
    </main>
  );
}
