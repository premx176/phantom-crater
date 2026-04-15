export default function AboutPage() {
  return (
    <main className="min-h-screen bg-inner-glow text-white flex flex-col justify-center items-center px-6 text-center pt-24 selection:bg-white/30 selection:text-white">
      <div className="max-w-4xl bg-white/5 border border-white/20 backdrop-blur-lg rounded-[3rem] p-12 md:p-20 shadow-neon-white fade-in">
        <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] mb-8">About Us</h2>
        <div className="space-y-6 text-xl md:text-2xl text-white/80 font-light leading-relaxed">
          <p>
            We are <strong className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">MG WHEELS</strong>, building affordable electric bikes for India.
          </p>
          <p>
            Focused on non-RTO segment vehicles with ICAT approval, specifically designed for delivery, shopping, and fast daily commuting.
          </p>
          <div className="pt-8 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-2xl mb-4 shadow-neon-white">1</div>
              <p className="font-medium text-white">Low-Cost Mobility</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-2xl mb-4 shadow-neon-white">2</div>
              <p className="font-medium text-white">Durable EV Solutions</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-2xl mb-4 shadow-neon-white">3</div>
              <p className="font-medium text-white">Eco-Friendly Transport</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
