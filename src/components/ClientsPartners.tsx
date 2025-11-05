import { clientTestimonial, partnerLogos } from "../constants";
import React from "react";
import { FadeUp } from './Anim'
import { useLang } from '../lang'
const ClientsPartners: React.FC = () => {
  const { lang } = useLang()
  return (
    <section id="ClientsPartners" className="p-20 bg-stone-50 from-[#F8F4EB] to-[#F4EFE4] rounded-3xl">
      <div className="flex flex-col gap-16">
        <FadeUp className=" text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#6E5C43]">
            {lang === 'en' ? 'Clients & Partners' : 'Khách Hàng & Đối Tác'}
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            {lang === 'en' ? 'We accompany pioneering businesses, working closely in every process to deliver strategic and effective digital solutions.' : 'Đồng hành cùng những doanh nghiệp tiên phong, sâu sát trong mọi quy trình để tạo ra giải pháp số mang tính chiến lược và hiệu quả.'}
          </p>
        </FadeUp>

        <FadeUp className="grid grid-cols-2 sm:grid-cols-4  items-center">
          {partnerLogos.map((logo, i) => (
            <div key={i} className="flex justify-center opacity-80 hover:opacity-100 transition">
              <img src={logo.src} alt={logo.name} className="h-10 md:h-12 object-contain" />
            </div>
          ))}
        </FadeUp>

        <FadeUp className="relative max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-gray-200">
          <span className="absolute -top-5 left-8 text-6xl text-[#BFA98A]">“</span>

          <p className="text-xl md:text-2xl text-gray-800 italic leading-relaxed">
            {lang === 'en' ? 'DeepCode helped us digitize our operations end-to-end, improving efficiency, reducing costs, and gaining a strong competitive advantage.' : clientTestimonial.quote}
          </p>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-lg font-semibold text-gray-900">
              {lang === 'en' ? 'Nguyen Truong Giang' : clientTestimonial.author}
            </p>
            <p className="text-sm text-gray-600">{lang === 'en' ? 'CEO SkySoft' : clientTestimonial.role}</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default ClientsPartners;
