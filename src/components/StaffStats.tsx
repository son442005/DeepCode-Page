import React from 'react';
import { staffStats } from "../constants";
import { FadeUp } from './Anim'
import { useLang } from '../lang'
const StaffStats: React.FC = () => {
    const titleColor = 'text-[#7B6E5B]';
    const { lang } = useLang()

    const tTitle = (v: string) => {
        if (lang === 'vi') return v
        if (v === 'Nhân Sự') return 'Headcount'
        if (v === 'Chuyên Gia Kỹ Thuật') return 'Technical Experts'
        if (v === 'Thạc Sĩ') return 'Masters'
        if (v === 'Hỗ Trợ Kỹ Thuật') return '24/7 Technical Support'
        return v
    }
    const tDesc = (v: string) => {
        if (lang === 'vi') return v
        return v
            .replace('Đội ngũ trẻ với độ tuổi trung bình 28, tràn đầy nhiệt huyết và sáng tạo', 'Young team with average age 28, full of energy and creativity')
            .replace('Tỉ lệ nhân sự kỹ thuật có chứng chỉ quốc tế và kinh nghiệm trên 3 năm', 'Ratio of engineers with international certifications and 3+ years experience')
            .replace('Các chuyên gia cao cấp với bằng cấp từ các trường đại học hàng đầu', 'Senior experts with degrees from top universities')
            .replace('Đội ngũ kỹ thuật viên luôn sẵn sàng hỗ trợ khách hàng mọi lúc mọi nơi', 'Technical engineers ready to support customers anytime, anywhere')
    }

    return (
        <section id="StaffStats" className={`p-20 bg-stone-50 text-gray-800 rounded-3xl `}>
            <div className="flex flex-col gap-12">
                <div className="">
                    <h1 className={`text-5xl font-serif font-medium ${titleColor}`}>
                        {lang === 'en' ? 'Technical Team' : 'Nhân Sự Kỹ Thuật'}
                    </h1>
                </div>
                <FadeUp className=" grid grid-cols-1 lg:grid-cols-4 ">

                    {staffStats.map((stat, index) => (
                        <div key={index} className="flex flex-col border-b border-gray-300 pb-8 
                                                    lg:border-r lg:border-b-0 lg:pb-0 lg:pr-8 
                                                    last:border-r-0 last:pr-0 text-center p-3">

                            <p className={` text-6xl font-bold ${titleColor} mb-2`}>
                                {stat.value}
                            </p>
                            <h2 className=" text-xl font-semibold text-gray-700 mb-2">
                                {tTitle(stat.title)}
                            </h2>
                            <p className="text-sm text-gray-600 ">
                                {tDesc(stat.description)}
                            </p>
                        </div>
                    ))}
                </FadeUp>
                <div className="mt-16 pt-8 border-t border-gray-300">
                    <p className="text-base text-gray-600 max-w-4xl">
                        {lang === 'en' ? 'DeepCode strongly invests in people development through internal training programs, opportunities to attend international courses, and a workplace that encourages creativity and innovation.' : 'DeepCode đầu tư mạnh mẽ vào việc phát triển nhân lực thông qua các chương trình đào tạo nội bộ, cơ hội tham gia các khóa học quốc tế và môi trường làm việc khuyến khích sáng tạo và đổi mới.'}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default StaffStats;