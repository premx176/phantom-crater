export default function AboutPage() {
  const sections = [
    {
      title: "Our Mission",
      content: "At MG WHEELS, we are driven by a simple mission — to make electric mobility affordable, practical, and accessible to every Indian household and business."
    },
    {
      title: "Sustainable Mobility for All",
      content: "We specialize in designing and delivering high-performance electric two-wheelers in the non-RTO segment, making it easier for customers to adopt eco-friendly transportation without the complexity of registration and high running costs. Our vehicles are engineered to serve real-world needs — from daily commuting to heavy-duty delivery and shopping applications."
    },
    {
      title: "Focus on Durability & Efficiency",
      content: "What sets MG WHEELS apart is our focus on combining durability with efficiency. Built using high-quality materials like high carbon steel frames and powered by advanced BLDC motors, our e-bikes are designed for long life, high load capacity, and consistent performance. Whether it’s urban mobility or commercial usage, our products are made to perform under demanding conditions."
    },
    {
      title: "Compliance & Safety",
      content: "We are proud to offer models that are ICAT (Government of India) approved, ensuring compliance with safety and quality standards. Our battery technology, including Lithium-Iron-Phosphate (LiFePO4) and advanced Graphene batteries, provides longer life cycles, faster charging, and enhanced safety — giving our customers reliability they can trust."
    },
    {
      title: "Innovation Meets Affordability",
      content: "At MG WHEELS, innovation meets affordability. With extremely low running costs — as low as a few rupees per charge — our vehicles eliminate fuel expenses and significantly reduce maintenance, making them a smart financial decision for the future."
    },
    {
      title: "Driving a Movement",
      content: "Beyond products, we are building a movement towards sustainable transportation. Our goal is not just to sell vehicles, but to empower individuals and businesses with cleaner, smarter mobility solutions. As we continue to grow, MG WHEELS remains committed to quality, customer satisfaction, and continuous innovation — shaping the future of electric mobility in India."
    }
  ];

  return (
    <main className="min-h-screen bg-inner-glow text-white flex flex-col items-center px-6 pt-32 pb-24 selection:bg-white/30 selection:text-white overflow-x-hidden">
      <div className="max-w-4xl w-full space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-white/50 font-light tracking-widest uppercase">
            Shaping the Future In India
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 md:p-12 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-500"
            >
              <div className="absolute -left-4 top-10 w-1 h-12 bg-white shadow-neon-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
                {section.title}
              </h2>
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Core Values / Stats Footer */}
        <div className="pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-black/40 backdrop-blur-md p-10 rounded-[3rem] border border-white/5">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-2xl mx-auto shadow-neon-white">1</div>
            <p className="font-bold text-white uppercase tracking-tighter">ICAT Approved</p>
            <p className="text-sm text-white/40">Government Certified Safety</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-2xl mx-auto shadow-neon-white">2</div>
            <p className="font-bold text-white uppercase tracking-tighter">High Durability</p>
            <p className="text-sm text-white/40">Carbon Steel Frames</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-2xl mx-auto shadow-neon-white">3</div>
            <p className="font-bold text-white uppercase tracking-tighter">Low Running Cost</p>
            <p className="text-sm text-white/40">Affordable Urban Mobility</p>
          </div>
        </div>

      </div>
    </main>
  );
}
