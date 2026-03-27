import { motion } from 'motion/react';
import { BarChart3, TrendingDown, Activity } from 'lucide-react';

export default function Company() {
  const teamCategories = [
    {
      title: "",
      members: [
        { name: "Thai Dao", role: "CEO", email: "", image: "/assets/member/thaidao.png" },
        { name: "Kieu To Van", role: "COO", email: "", image: "/assets/member/kieutovan.png" },
      ]
    },
    {
      title: "Solution Architect",
      members: [
        { name: "Chuong Le", role: "CTO", email: "chuongle@jitsinnovationlabs.com", image: "/assets/member/chuongla.jpeg" },
      ]
    },
    {
      title: "Project Management",
      members: [
        { name: "Nguyen Duc Hoang", role: "Managing Director", email: "hoangnd@jitsinnovationlabs.com", image: "/assets/member/hoangnd.d43484e2.jpeg" },
        { name: "Nguyen Thi Tuyen", role: "Head of Deliver", email: "tuyennt@jitsinnovationlabs.com", image: "/assets/member/tuyennt.cd2509ab.jpeg" },
        { name: "Truong Cong Toan", role: "Product owner", email: "toantc@jitsinnovationlabs.com", image: "/assets/member/toantc.def0228e.jpeg" },
      ]
    },
    {
      title: "Development",
      members: [
        { name: "Le Duc Anh", role: "Senior Developer", email: "tuyennt@jitsinnovationlabs.com", image: "/assets/member/anhld.fda3568f.jpeg" },
        { name: "Dang Duy Bao Khanh", role: "Developer", email: "khanhddb@jitsinnovationlabs.com", image: "/assets/member/khanhddb.a8a273d4.jpeg" },
        { name: "Dang Huu Thanh", role: "Developer", email: "thanhdt@jitsinnovationlabs.com", image: "/assets/member/thanhdh.b058b292.jpeg" },
        { name: "Nguyen Thi Mung", role: "Test Lead", email: "mungnt@jitsinnovationlabs.com", image: "/assets/member/mungnt.e0bfa135.jpeg" },
      ]
    },
    {
      title: "Business Operation",
      members: [
        { name: "Nguyen Quoc Thang", role: "System Engineers", email: "thangtq@jitsinnovationlabs.com", image: "/assets/member/thangnq.jpeg" },
      ]
    }
  ];

  return (
    <main className="pt-20 bg-white">
      {/* Hero Image */}
      <section className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
        <img
          src="public/assets/AboutUs2.7f58fb66.jpg"
          alt="JITS Team working together"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </section>

      {/* About Us */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">About Us</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-16">
            JITS InnovationLab is a leading technology & outsourcing company providing digital banking platforms, point of sale, streaming, and integration solution. Our team has many years of experience with core banking implementation and customization for enterprise clients, we helped numerous banks and micro finances enhance their products, digitalization is smoothly transitioning with the latest technology and remarkably detail business analytics.
          </p>

          {/* Map Image Placeholder */}
          <div className="w-full max-w-3xl mx-auto aspect-video relative">
            <img
              src="public/assets/member/location.f8c9aa55.png"
              alt="Global Presence Map"
              className="w-full h-full object-contain opacity-80 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Values / Mission / Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Core Value */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#eef5ff] rounded-3xl p-10 text-center flex flex-col items-center"
            >
              <BarChart3 className="w-24 h-24 text-[#00a0d2] mb-8" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Core Value</h3>
              <h4 className="text-xl font-bold text-slate-900 mb-6">Our Core Value</h4>
              <p className="text-slate-600 leading-relaxed">
                With constant efforts, JITS InnovationLab has been and is a reliable partner for many businesses around the world. We are committed to providing customers with optimal solutions in terms of both cost and quality.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#eef5ff] rounded-3xl p-10 text-center flex flex-col items-center"
            >
              <TrendingDown className="w-24 h-24 text-[#ff4d4f] mb-8" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Mission</h3>
              <h4 className="text-xl font-bold text-slate-900 mb-6">Our Mission</h4>
              <p className="text-slate-600 leading-relaxed">
                In order to provide the best experience, our mission is to improve the customer's business results with optimal solutions and reasonable costs.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#eef5ff] rounded-3xl p-10 text-center flex flex-col items-center"
            >
              <Activity className="w-24 h-24 text-[#00a0d2] mb-8" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Vision</h3>
              <h4 className="text-xl font-bold text-slate-900 mb-6">Our Vision</h4>
              <p className="text-slate-600 leading-relaxed">
                Continuously cultivating and developing cutting-edge technology solutions, JITS InnovationLab focuses on creating groundbreaking and influential products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Team</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We work together, play together and improve together. JITS InnovationLab focuses on building the best environment for talented members to grow to their full potential.
            </p>
          </div>

          <div className="space-y-20">
            {teamCategories.map((category, idx) => (
              <div key={idx}>
                {category.title && (
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-2 h-8 bg-[#00a0d2]"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{category.title}</h3>
                  </div>
                )}

                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ${!category.title ? 'justify-center sm:flex' : ''}`}>
                  {category.members.map((member, mIdx) => (
                    <motion.div
                      key={mIdx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className={`bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow ${!category.title ? 'w-full sm:w-64' : ''}`}
                    >
                      <div className="aspect-square bg-slate-100 relative">
                        <img
                          src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=400`}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h4>
                        <p className="text-sm font-medium text-slate-600 mb-2">{member.role}</p>
                        {member.email && (
                          <p className="text-xs text-slate-500 break-all">{member.email}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
