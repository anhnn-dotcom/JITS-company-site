import { motion } from 'motion/react';
import { BarChart3, TrendingDown, Activity } from 'lucide-react';

export default function Company() {
  const teamCategories = [
    {
      title: "",
      members: [
        { name: "Thai Dao", role: "CEO", email: "" },
        { name: "Kieu To Van", role: "COO", email: "" },
      ]
    },
    {
      title: "Solution Architect",
      members: [
        { name: "Chuong Le", role: "CTO", email: "chuongle@jitsinnovationlabs.com" },
      ]
    },
    {
      title: "Project Management",
      members: [
        { name: "Nguyen Duc Hoang", role: "Managing Director", email: "hoangnd@jitsinnovationlabs.com" },
        { name: "Nguyen Thi Tuyen", role: "Head of Deliver", email: "tuyennt@jitsinnovationlabs.com" },
        { name: "Nguyen Thao Linh", role: "Project Coordinator", email: "linhnt@jitsinnovationlabs.com" },
        { name: "Bui Thi Thao", role: "Product owner", email: "thaobt@jitsinnovationlabs.com" },
        { name: "Nguyen Duy Hieu", role: "Product owner", email: "hieund@jitsinnovationlabs.com" },
        { name: "Truong Cong Toan", role: "Product owner", email: "toantc@jitsinnovationlabs.com" },
      ]
    },
    {
      title: "Development",
      members: [
        { name: "Le Duc Anh", role: "Senior Developer", email: "tuyennt@jitsinnovationlabs.com" },
        { name: "Pham Thanh Tu", role: "Team Leader", email: "tupt@jitsinnovationlabs.com" },
        { name: "Dang Duy Bao Khanh", role: "Developer", email: "khanhddb@jitsinnovationlabs.com" },
        { name: "Dang Huu Thanh", role: "Developer", email: "thanhdt@jitsinnovationlabs.com" },
        { name: "Le Sy Duc", role: "Developer", email: "ducls@jitsinnovationlabs.com" },
        { name: "Le Anh Quan", role: "Developer", email: "quanla@jitsinnovationlabs.com" },
        { name: "Le Tien Dat", role: "Developer", email: "datlt@jitsinnovationlabs.com" },
        { name: "Pham Duc Hai", role: "Developer", email: "haipd@jitsinnovationlabs.com" },
        { name: "Nguyen Thanh Sang", role: "Developer", email: "sangnt@jitsinnovationlabs.com" },
        { name: "Phan Tien Dung", role: "Developer", email: "dungpt@jitsinnovationlabs.com" },
        { name: "Bui Thi Phuong Thao", role: "Developer", email: "thaobtp@jitsinnovationlabs.com" },
        { name: "Nguyen Van Cuong", role: "Developer", email: "cuongnv@jitsinnovationlabs.com" },
        { name: "Nguyen Thi Mung", role: "Test Lead", email: "mungnt@jitsinnovationlabs.com" },
        { name: "Pham Thi Bich Huong", role: "Tester", email: "huongptb@jitsinnovationlabs.com" },
        { name: "Le Thi Phuong Linh", role: "Tester", email: "linhltp@jitsinnovationlabs.com" },
        { name: "Ban Thi Mai", role: "Tester", email: "maibt@jitsinnovationlabs.com" },
        { name: "Pham Thi Bich Ngoc", role: "Tester", email: "ngocptb@jitsinnovationlabs.com" },
        { name: "Mai Thi Tam", role: "Tester", email: "tammt@jitsinnovationlabs.com" },
        { name: "Vu Thi Thanh", role: "Tester", email: "thanhvt@jitsinnovationlabs.com" },
      ]
    },
    {
      title: "Business Operation",
      members: [
        { name: "Nguyen Thi Tuyet Mai", role: "HR", email: "maintt@jitsinnovationlabs.com" },
        { name: "Nguyen Quoc Thang", role: "System Engineers", email: "thangtq@jitsinnovationlabs.com" },
        { name: "Nguyen Tuan Hung", role: "System Engineer", email: "hungnt@jitsinnovationlabs.com" },
        { name: "Nguyen Duc Anh", role: "System Engineer", email: "anhnd@jitsinnovationlabs.com" },
      ]
    }
  ];

  return (
    <main className="pt-20 bg-white">
      {/* Hero Image */}
      <section className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
        <img 
          src="https://picsum.photos/seed/jits-team/1920/1080" 
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
              src="https://picsum.photos/seed/world-map/1200/600" 
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
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=400`}
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
