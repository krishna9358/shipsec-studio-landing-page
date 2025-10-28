"use client";

import { motion } from "framer-motion";
import { Building2, Quote } from "lucide-react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { TestimonialsMarquee } from "./ui/testimonials-marquee";
import { Boxes } from "./ui/background-boxes";

const testimonials = [
  {
    quote:
      "We have always had a wonderful experience with Aseem and his team. Their professionalism and timely updates have reassured me of good work. When we had a crucial feature going live, SecureMyOrg conducted timely and thorough testing, ensuring a secure launch and providing us with nuclei templates to keep any upcoming similar features secure as well. Their efficiency and comprehensive reporting exceeded our expectations and also fortified our confidence in their services. They have been an invaluable partner in safeguarding Cloudanix.",
    name: "Sujay Maheshwari",
    designation: "Founder, Cloudanix (YC)",
    src: "https://api.dicebear.com/7.x/initials/svg?seed=Sujay%20Maheshwari",
  },
  {
    quote:
      "I have worked with Aseem in Blinkit (Grofers) and I feel very proud to get to know him, such a hard-working and all-rounder in his role. His overall presence has really a positive impact in and outside the team. He dives into unknown problems and always comes up with a solid breakthrough in not much time. He is a developer who can do security which gives him an edge over many others there.",
    name: "Avinash Jain",
    designation: "Security, Microsoft Identity Platform",
    src: "https://api.dicebear.com/7.x/initials/svg?seed=Avinash%20Jain",
  },
  {
    quote:
      "We were referred to Aseem by one of our employees who had happened to know Aseem. To begin with, Aseem helped us understand our security posture. He helped put the basics in place, gave us valuable inputs and was part of the discussions when we chose our ISMS platform in the process of getting audited for various standards and certifications. He also helped with execution of our VAPT (Vulnerability Assessment and Penetration Test) and subsequent work on risk mitigations from the findings. SecureMyOrg and Aseem have been a valuable asset for Berrybox. We achieved all this in a very short span of time in about a month.",
    name: "Sreekar Obulampalli",
    designation: "Founder, BerryBox Benefits",
    src: "https://api.dicebear.com/7.x/initials/svg?seed=Sreekar%20Obulampalli",
  },
  {
    quote:
      "I have worked with Aseem for a year. He has a great technical skillset combined with being an excellent problem solver which has helped a lot to solve the Security challenge in the organization. One of the great impressions that has always been shown constantly is the calmness, and creativity that is reflected in every challenge.",
    name: "Kenny Gotama",
    designation: "Product Security, Gojek",
    src: "https://api.dicebear.com/7.x/initials/svg?seed=Kenny%20Gotama",
  },
  {
    quote:
      "We worked with SecureMyOrg for our VAPT. Aseem was very easy to work with, super friendly and happy to accommodate our requests. His report was easy to understand and insightful. Great experience overall.",
    name: "Vineet Ahuja",
    designation: "Founder & CTO, UniBloom",
    src: "https://api.dicebear.com/7.x/initials/svg?seed=Vineet%20Ahuja",
  },
  {
    quote:
      "Securing our AWS infrastructure was a daunting task until we partnered with SecureMyOrg. Their standout expert, Aseem, delivered not just advice but actionable solutions that significantly enhanced our security posture. With deep knowledge of AWS best practices and a keen eye for detail, Aseem transformed our approach to cloud security, making complex concepts understandable and manageable. Thanks to SecureMyOrg and Aseem, we’re not just more secure; we’re also more confident in our ability to protect our data and our clients. Their expertise is unparalleled, and their guidance has been invaluable. We highly recommend their services to anyone seeking to fortify their AWS cloud infrastructure.",
    name: "Yuvaraj Sekhar",
    designation: "Founder & CTO, NearPark",
    src: "https://api.dicebear.com/7.x/initials/svg?seed=Yuvaraj%20Sekhar",
  },
];

export function CEOQuoteSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <Boxes className="absolute inset-0 "/>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDQwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xNiAzNmMtMi4yMSAwLTQtMS43OS00LTRzMS43OS00IDQtNCA0IDEuNzkgNCA0LTEuNzkgNC00IDR6bTQwIDBjLTIuMjEgMC00LTEuNzktNC00czEuNzktNCA0LTQgNCAxLjc5IDQgNC0xLjc5IDQtNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>

      <div className=" mx-auto  relative  text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center z-[9999]"
        >
          {/* <Quote className="w-16 h-16 text-blue-400 mx-auto mb-8 opacity-50" /> */}
          <h2 className="text-6xl font-bold tracking-tight sm:text-7xl mb-10 transform -rotate-6 z-[9999]">
          Love Letters to  <br />  <span className="text-blue-400">Shipsec AI</span>
        </h2>
        <br></br>

          {/* Desktop carousel */}
          {/* <div className="hidden md:block">
            <AnimatedTestimonials testimonials={testimonials} autoplay={true}/>
          </div> */}

          {/* Marquee for wider, continuous scroll */}
          <div className="mt-10">
            <TestimonialsMarquee testimonials={testimonials} speed={150}  />
          </div>


          <div className="flex flex-col items-center gap-6">
            {/* <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-sky-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                <img
                  src="/image-aseem.webp"
                  alt="Brendon Geils"
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}

            {/* <div className="text-center">
              <p className="text-xl font-bold text-white mb-1">Aseem Shrey</p>
              <p className="text-slate-400 mb-4">CEO, Shipsec AI</p>

              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <Building2 className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">Shipsec AI</span>
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
