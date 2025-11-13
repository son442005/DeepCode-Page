import { useLang } from '../lang'

const IconBulb = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-white/90" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12c1 1 1 2 1 3h6c0-1 0-2 1-3a7 7 0 0 0-4-12z" />
    </svg>
)

const IconTarget = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-white/90" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
    </svg>
)

const IconHeart = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-white/90" fill="currentColor">
        <path d="M12 21s-7-4.35-9.33-8A5.33 5.33 0 0 1 12 6.67 5.33 5.33 0 0 1 21.33 13c-2.33 3.65-9.33 8-9.33 8z" />
    </svg>
)

const IconShield = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-white/90" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-4z" />
    </svg>
)

const IconDiamond = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-white/90" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 7-7 11L5 10l7-7z" />
    </svg>
)

export const CoreValues = () => {
    const { lang } = useLang()
    return (
        <section id="values" className="">
            <div className="">
                <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-primary/5 to-secondary/10 shadow-sm ">
                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight font-serif">{lang === 'en' ? 'Core Values' : lang === 'vi' ? 'Giá Trị Cốt Lõi' : '核心价值观'}</h2>
                    <div className="mt-10 grid lg:grid-cols-2 items-start">
                        {/* Left texts */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-semibold text-slate-900">{lang === 'en' ? 'Innovation' : lang === 'vi' ? 'Sáng Tạo' : '创新'}</h3>
                                <p className="mt-2 text-slate-700">{lang === 'en' ? 'Continuously innovating and exploring pioneering technology solutions' : lang === 'vi' ? 'Không ngừng đổi mới, tìm tòi các giải pháp công nghệ tiên phong' : '不断创新，探索前沿技术解决方案'}</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-slate-900">{lang === 'en' ? 'Efficiency' : lang === 'vi' ? 'Hiệu Quả' : '效率'}</h3>
                                <p className="mt-2 text-slate-700">{lang === 'en' ? 'Optimize processes, ensure progress and results exceed expectations' : lang === 'vi' ? 'Tối ưu quy trình, đảm bảo tiến độ và kết quả vượt kỳ vọng' : '优化流程，确保进度和结果超出预期'}</p>
                            </div>
                        </div>

                        {/* Graphic flower + right texts */}
                        <div className="grid gap-10 lg:grid-cols-2 items-center">
                            {/* Flower - refined layout to match slide */}
                            <div className="relative mx-auto h-64 w-72">
                                {/* crosshair lines */}
                                <div className="absolute left-[60%] top-0 h-full w-px bg-white/80" />
                                <div className="absolute top-1/2 left-0 w-full h-px bg-white/80" />

                                {/* 4 clover petals around center (harmonious colors) */}
                                <div className="absolute left-[32%] top-[16%] h-28 w-28 rounded-full bg-primary flex items-center justify-center shadow-lg">
                                    <IconBulb />
                                </div>
                                <div className="absolute left-[50%] top-[16%] h-28 w-28 rounded-full bg-accent flex items-center justify-center shadow-lg">
                                    <IconTarget />
                                </div>
                                <div className="absolute left-[32%] top-[48%] h-28 w-28 rounded-full bg-primary flex items-center justify-center shadow-lg">
                                    <IconHeart />
                                </div>
                                <div className="absolute left-[50%] top-[48%] h-28 w-28 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                                    <IconDiamond />
                                </div>

                                {/* right circle overlapping center */}
                                <div className="absolute left-[74%] top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                                    <IconShield />
                                </div>
                            </div>

                            {/* Right texts */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-semibold text-slate-900">{lang === 'en' ? 'Dedication' : lang === 'vi' ? 'Tận Tâm' : '专注'}</h3>
                                    <p className="mt-2 text-slate-700">{lang === 'en' ? 'Put customer interests first, committed to accompanying in every project' : lang === 'vi' ? 'Đặt lợi ích khách hàng lên hàng đầu, cam kết đồng hành trong mọi dự án' : '将客户利益放在首位，承诺在每个项目中陪伴'}</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-slate-900">{lang === 'en' ? 'Integrity' : lang === 'vi' ? 'Chính Trực' : '正直'}</h3>
                                    <p className="mt-2 text-slate-700">{lang === 'en' ? 'Transparent in all activities, maintaining commitments and promises' : lang === 'vi' ? 'Minh bạch trong mọi hoạt động, giữ vững cam kết và lời hứa' : '在所有活动中保持透明，维护承诺和诺言'}</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-slate-900">{lang === 'en' ? 'Quality' : lang === 'vi' ? 'Chất Lượng' : '质量'}</h3>
                                    <p className="mt-2 text-slate-700">{lang === 'en' ? 'Always aiming for perfection in every line of code and product' : lang === 'vi' ? 'Luôn hướng đến sự hoàn hảo trong từng dòng code và sản phẩm' : '始终追求每一行代码和产品的完美'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="mt-12 text-slate-700">
                        {lang === 'en' ? 'These core values are not only the guiding principles in all internal activities but also our firm commitment to customers and partners.' : lang === 'vi' ? 'Những giá trị cốt lõi này không chỉ là kim chỉ nam trong mọi hoạt động nội bộ mà còn là cam kết vững chắc của chúng tôi đối với khách hàng và đối tác.' : '这些核心价值观不仅是我们所有内部活动的指导原则，也是我们对客户和合作伙伴的坚定承诺。'}
                    </p>
                </div>
            </div>
        </section>
    )
}


