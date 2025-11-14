import React from 'react';
import { useLang } from '../lang';
import { FadeUp } from './Anim';

const FounderProfile: React.FC = () => {
    const { lang } = useLang();

    const name = lang === 'en' ? 'Tuan Tu' : lang === 'vi' ? 'Tuấn Tú' : '团图';
    const role = lang === 'en'
        ? 'Founder - 90s Homestay & Dreamy Coffee & Show'
        : lang === 'vi'
            ? 'Founder - 90s Homestay & Mơ Màng Coffee & Show'
            : '创始人 - 90s Homestay & 梦幻咖啡与秀';

    const description = lang === 'en'
        ? 'Entrepreneur passionate about Fashion, Hospitality & Tourism. Founder of multiple successful homestay and villa projects including Galaxy Villa, Lux House, Carefree Villa, Leisurely Villa, Enchanted Sky, and more.'
        : lang === 'vi'
            ? 'Doanh nhân đam mê Thời Trang - Nghỉ Dưỡng - Du Lịch. Nhà sáng lập của nhiều dự án homestay và villa thành công như Galaxy Villa, Lux House, Nhởn Nhơ, Thảnh Thơi, Mê Mẩn Sky, và nhiều dự án khác.'
            : '热衷于时尚、酒店和旅游的企业家。多个成功的民宿和别墅项目的创始人，包括Galaxy Villa、Lux House、无忧别墅、悠闲别墅、迷人天空等。';

    const getProjects = (): string[] => {
        if (lang === 'en') {
            return [
                'Galaxy Villa',
                'Lux House',
                'Carefree Villa',
                'Leisurely Villa',
                'Enchanted Sky',
                'Dreamy Villa',
                'Dreamy House',
                'Floating Villa',
                'Sunset Villa',
                'Dreamy Show',
                'Dawn Homestay'
            ];
        } else if (lang === 'zh') {
            return [
                'Galaxy Villa',
                'Lux House',
                '无忧别墅',
                '悠闲别墅',
                '迷人天空',
                '梦幻别墅',
                '梦幻屋',
                '漂浮别墅',
                '黄昏别墅',
                '梦幻秀',
                '黎明民宿'
            ];
        } else {
            // Vietnamese
            return [
                'Galaxy Villa',
                'Lux House',
                'Nhởn Nhơ',
                'Thảnh Thơi',
                'Mê Mẩn Sky',
                'Mộng Mơ',
                'Mơ Màng House',
                'Bồng Bềnh',
                'Hoàng Hôn',
                'Mơ Màng Show',
                'Bình Minh Homestay'
            ];
        }
    };

    const projects = getProjects();

    const slogan = lang === 'en'
        ? 'Fashion - Hospitality - Tourism is Passion'
        : lang === 'vi'
            ? 'Thời Trang - Nghỉ Dưỡng - Du Lịch Là Đam Mê'
            : '时尚 - 酒店 - 旅游是激情';

    const sectionTitle = lang === 'en'
        ? 'Founder'
        : lang === 'vi'
            ? 'Nhà Sáng Lập'
            : '创始人';

    return (
        <section id="founderProfile" aria-label="Founder Profile" className="w-[80%] lg:w-[80%] mx-auto flex flex-col bg-white p-4">
            <div className="">
                <div className="py-8 sm:py-12 lg:p-14 rounded-xl">
                    <header className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-orange-500 border-b-2 border-orange-300 pb-4">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                            {sectionTitle}
                        </h1>
                    </header>
                    <FadeUp className="flex flex-col lg:flex-row lg:gap-12 items-center mt-8 lg:mt-10">
                        {/* Left side - Image */}
                        <div className="w-full lg:w-2/5 flex justify-center mb-8 lg:mb-0">
                            <div className="relative w-full max-w-sm">
                                <img
                                    src={`${import.meta.env.BASE_URL}anh-Tu.jpg`}
                                    alt={name}
                                    className="w-full h-auto rounded-2xl shadow-3d-lg object-cover"
                                />
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="w-full lg:w-3/5">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">{name}</h2>
                                    <p className="text-lg sm:text-xl text-blue-600 font-semibold mb-4">{role}</p>
                                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">{description}</p>
                                    <p className="text-lg font-semibold text-orange-600 italic">"{slogan}"</p>
                                </div>

                                <div className="mt-6">
                                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                                        {lang === 'en' ? 'Projects & Ventures' : lang === 'vi' ? 'Dự án & Đầu tư' : '项目与投资'}
                                    </h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {projects.map((project, index) => (
                                            <div
                                                key={index}
                                                className="px-4 py-2 bg-orange-50 border border-orange-200 rounded-lg text-sm font-medium text-orange-700 text-center"
                                            >
                                                {project}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <a
                                        href="https://tvalleyvilla.com/tuantu/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-base group"
                                    >
                                        <span>
                                            {lang === 'en' ? 'Visit Profile' : lang === 'vi' ? 'Xem Trang Cá Nhân' : '访问个人资料'}
                                        </span>
                                        <svg
                                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
};

export default FounderProfile;

