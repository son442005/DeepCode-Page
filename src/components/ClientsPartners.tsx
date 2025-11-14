import { clientTestimonial, partnerLogos } from "../constants";
import React from "react";
import { FadeUp } from './Anim'
import { useLang } from '../lang'
const ClientsPartners: React.FC = () => {
  const { lang } = useLang()
  return (
    <section id="ClientsPartners" className="px-3 w-full md:w-[80%] bg-white ">
      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16 p-4 rounded-xl">
        <FadeUp className=" text-center ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-orange-500">
            {lang === 'en' ? 'Clients & Partners' : lang === 'vi' ? 'Khách Hàng & Đối Tác' : '客户与合作伙伴'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-blue-400 max-w-3xl mx-auto px-4">
            {lang === 'en' ? 'We accompany pioneering businesses, working closely in every process to deliver strategic and effective digital solutions.' : lang === 'vi' ? 'Đồng hành cùng những doanh nghiệp tiên phong, sâu sát trong mọi quy trình để tạo ra giải pháp số mang tính chiến lược và hiệu quả.' : '我们陪伴先锋企业，在每个流程中密切合作，提供战略性和有效的数字解决方案。'}
          </p>
        </FadeUp>

        <FadeUp className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 items-center">
          {partnerLogos.map((logo, i) => (
            <div key={i} className="flex justify-center">
              <div className="w-full max-w-[180px] rounded-xl bg-white border border-gray-200 shadow-sm px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-center">
                <img src={logo.src} alt={logo.name} className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
              </div>
            </div>
          ))}
        </FadeUp>

        <FadeUp className="relative max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200">
          <span className="absolute -top-3 sm:-top-5 left-4 sm:left-8 text-4xl sm:text-5xl lg:text-6xl text-primary/30">"</span>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 italic leading-relaxed">
            {lang === 'en' ? 'HLGera helped us digitize our operations end-to-end, improving efficiency, reducing costs, and gaining a strong competitive advantage.' : lang === 'vi' ? clientTestimonial.quote : 'HLGera帮助我们端到端数字化运营，提高效率，降低成本，并获得了强大的竞争优势。'}
          </p>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-lg font-semibold text-gray-900">
              {lang === 'en' ? 'Nguyen Truong Giang' : lang === 'vi' ? clientTestimonial.author : '阮长江先生'}
            </p>
            <p className="text-sm text-gray-600">{lang === 'en' ? 'CEO SkySoft' : lang === 'vi' ? clientTestimonial.role : 'SkySoft首席执行官'}</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default ClientsPartners;
