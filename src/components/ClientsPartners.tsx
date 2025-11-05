import { clientTestimonial, partnerLogos } from "../constants";
import React from "react";
const ClientsPartners: React.FC = () => {
  return (
    <section className="p-20 bg-stone-50 from-[#F8F4EB] to-[#F4EFE4]">
      <div className="flex flex-col gap-16">
        <div className=" text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#6E5C43]">
            Khách Hàng & Đối Tác
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Đồng hành cùng những doanh nghiệp tiên phong, sâu sát trong mọi quy trình để tạo ra giải pháp số mang tính chiến lược và hiệu quả.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4  items-center">
          {partnerLogos.map((logo, i) => (
            <div key={i} className="flex justify-center opacity-80 hover:opacity-100 transition">
              <img src={logo.src} alt={logo.name} className="h-10 md:h-12 object-contain" />
            </div>
          ))}
        </div>

        <div className="relative max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-gray-200">
          <span className="absolute -top-5 left-8 text-6xl text-[#BFA98A]">“</span>

          <p className="text-xl md:text-2xl text-gray-800 italic leading-relaxed">
            {clientTestimonial.quote}
          </p>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-lg font-semibold text-gray-900">
              {clientTestimonial.author}
            </p>
            <p className="text-sm text-gray-600">{clientTestimonial.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsPartners;
