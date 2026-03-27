import { motion } from 'motion/react';

const logos = [
  { name: 'Ayabank', src: '/assets/client-logos/ayabank.e9928342.png' },
  { name: 'Cuc Khi Tuong', src: '/assets/client-logos/cuc-khi-tuong-thuy-van.de814eb4.png' },
  { name: 'Goldwell', src: '/assets/client-logos/goldwell-logo.d4906d1d.jpg' },
  { name: 'Medcom', src: '/assets/client-logos/medcom.ec67f429.png' },
  { name: 'Mobifone', src: '/assets/client-logos/mobifone.ca06bc01.jpg' },
  { name: 'Napas', src: '/assets/client-logos/napas-payment-logo.7b516581.png' },
  { name: 'Supermind', src: '/assets/client-logos/supermind-logo.f2b49b6f.png' },
  { name: 'Tour', src: '/assets/client-logos/tour.04483eb1.png' },
  { name: 'DH Mo Dia Chat', src: '/assets/client-logos/truong-dai-hoc-mo-dia-chat.79f094f7.jpg' },
  { name: 'Vietnam Airlines', src: '/assets/client-logos/vietnam-airline-logo.599df2db.png' },
  { name: 'Viettel', src: '/assets/client-logos/viettel-logo.139c8f82.jpg' },
  { name: 'Vinaphone', src: '/assets/client-logos/vinaphone.fc07b68b.png' },
  { name: 'VNN', src: '/assets/client-logos/vnn.2ac70522.png' },
];

// Triplicate the array for extra safety in the infinite loop
const duplicatedLogos = [...logos, ...logos, ...logos];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-slate-50 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
          Trusted by leading financial institutions and enterprises worldwide
        </h2>
      </div>
      
      <div className="relative flex overflow-hidden group py-4">
        {/* Gradient masks for smooth fade on edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center w-max flex-nowrap"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {duplicatedLogos.map((logo, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 flex items-center justify-center h-16 opacity-90 hover:opacity-100 transition-all duration-300 cursor-pointer px-12 md:px-16"
            >
              <img 
                src={logo.src} 
                alt={`${logo.name} logo`} 
                className="h-full w-auto object-contain transition-all duration-300 mix-blend-multiply"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
