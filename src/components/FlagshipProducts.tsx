import { ArrowRight, Smartphone, Database, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FlagshipProducts() {
  const products = [
    {
      title: "Digital Wallet",
      description: "Secure, white-label wallet solution for seamless P2P, merchant payments, and loyalty programs.",
      icon: <Smartphone className="w-8 h-8 text-white" />,
      color: "from-blue-600/90 to-blue-400/90",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Fineract Core Banking",
      description: "Modernize your legacy systems with our API-first, highly scalable core banking engine.",
      icon: <Database className="w-8 h-8 text-white" />,
      color: "from-slate-900/90 to-slate-700/90",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Digital Lending Platform",
      description: "Automated end-to-end digital lending with AI-driven risk assessment and fast approval workflows.",
      icon: <LineChart className="w-8 h-8 text-white" />,
      color: "from-cyan-700/90 to-cyan-500/90",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Flagship Products</h2>
            <p className="text-lg text-slate-600">
              Ready-to-deploy, customizable platforms designed to give your institution a competitive edge in the digital era.
            </p>
          </div>
          <Link to="/solutions" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
            View all products <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="flex flex-col rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} mix-blend-multiply`} />
                <div className="absolute inset-0 p-6 flex items-end">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
                    {product.icon}
                  </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{product.title}</h3>
                <p className="text-slate-600 mb-8 flex-1">
                  {product.description}
                </p>
                <Link to="/solutions" className="inline-flex items-center text-slate-900 font-medium group/link">
                  Learn more 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform text-blue-600" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
