import React from 'react';
import { staffStats } from "../constants";
import { FadeUp } from './Anim'
import { useLang } from '../lang'
const StaffStats: React.FC = () => {
    const titleColor = 'text-slate-800';
    const { lang } = useLang()

    const tTitle = (v: string) => {
        if (lang === 'vi') return v
        if (lang === 'en') {
            if (v === 'Nhân Sự') return 'Headcount'
            if (v === 'Chuyên Gia Kỹ Thuật') return 'Technical Experts'
            if (v === 'Thạc Sĩ') return 'Masters'
            if (v === 'Hỗ Trợ Kỹ Thuật') return '24/7 Technical Support'
        }
        if (lang === 'zh') {
            if (v === 'Nhân Sự') return '人员'
            if (v === 'Chuyên Gia Kỹ Thuật') return '技术专家'
            if (v === 'Thạc Sĩ') return '硕士'
            if (v === 'Hỗ Trợ Kỹ Thuật') return '24/7技术支持'
        }
        return v
    }
    const tDesc = (v: string) => {
        if (lang === 'vi') return v
        if (lang === 'en') {
            return v
                .replace('Đội ngũ trẻ với độ tuổi trung bình 28, tràn đầy nhiệt huyết và sáng tạo', 'Young team with average age 28, full of energy and creativity')
                .replace('Tỉ lệ nhân sự kỹ thuật có chứng chỉ quốc tế và kinh nghiệm trên 3 năm', 'Ratio of engineers with international certifications and 3+ years experience')
                .replace('Các chuyên gia cao cấp với bằng cấp từ các trường đại học hàng đầu', 'Senior experts with degrees from top universities')
                .replace('Đội ngũ kỹ thuật viên luôn sẵn sàng hỗ trợ khách hàng mọi lúc mọi nơi', 'Technical engineers ready to support customers anytime, anywhere')
        }
        if (lang === 'zh') {
            return v
                .replace('Đội ngũ trẻ với độ tuổi trung bình 28, tràn đầy nhiệt huyết và sáng tạo', '平均年龄28岁的年轻团队，充满活力和创造力')
                .replace('Tỉ lệ nhân sự kỹ thuật có chứng chỉ quốc tế và kinh nghiệm trên 3 năm', '拥有国际认证和3年以上经验的技术人员比例')
                .replace('Các chuyên gia cao cấp với bằng cấp từ các trường đại học hàng đầu', '拥有顶尖大学学位的高级专家')
                .replace('Đội ngũ kỹ thuật viên luôn sẵn sàng hỗ trợ khách hàng mọi lúc mọi nơi', '技术工程师随时准备为客户提供支持')
        }
        return v
    }

    return (
        <section id="StaffStats" className={`p-6 sm:p-12 lg:p-20 bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800  `}>
            <div className="flex flex-col gap-8 sm:gap-12">
                <div className="">
                    <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-medium ${titleColor}`}>
                        {lang === 'en' ? 'Technical Team' : lang === 'vi' ? 'Nhân Sự Kỹ Thuật' : '技术团队'}
                    </h1>
                </div>
                <FadeUp className=" grid grid-cols-1 lg:grid-cols-4 ">

                    {staffStats.map((stat, index) => (
                        <div key={index} className="flex flex-col border-b border-gray-300 pb-8 
                                                    lg:border-r lg:border-b-0 lg:pb-0 lg:pr-8 
                                                    last:border-r-0 last:pr-0 text-center p-3">

                            <p className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${titleColor} mb-2`}>
                                {stat.value}
                            </p>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
                                {tTitle(stat.title)}
                            </h2>
                            <p className="text-sm text-gray-600 ">
                                {tDesc(stat.description)}
                            </p>
                        </div>
                    ))}
                </FadeUp>
                <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-gray-300">
                    <p className="text-sm sm:text-base text-gray-600 max-w-4xl">
                        {lang === 'en' ? 'DeepCode strongly invests in people development through internal training programs, opportunities to attend international courses, and a workplace that encourages creativity and innovation.' : lang === 'vi' ? 'DeepCode đầu tư mạnh mẽ vào việc phát triển nhân lực thông qua các chương trình đào tạo nội bộ, cơ hội tham gia các khóa học quốc tế và môi trường làm việc khuyến khích sáng tạo và đổi mới.' : 'DeepCode通过内部培训计划、参加国际课程的机会以及鼓励创造力和创新的工作场所，大力投资于人员发展。'}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default StaffStats;