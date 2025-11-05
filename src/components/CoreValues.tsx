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
    return (
        <section id="values" className="">
            <div className="">
                <div className="rounded-3xl border border-[#E3D5B5] bg-[#F2E4C8] shadow-sm ">
                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight font-serif">Giá Trị Cốt Lõi</h2>
                    <div className="mt-10 grid lg:grid-cols-2 items-start">
                        {/* Left texts */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-semibold text-slate-900">Sáng Tạo</h3>
                                <p className="mt-2 text-slate-700">Không ngừng đổi mới, tìm tòi các giải pháp công nghệ tiên phong</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-slate-900">Hiệu Quả</h3>
                                <p className="mt-2 text-slate-700">Tối ưu quy trình, đảm bảo tiến độ và kết quả vượt kỳ vọng</p>
                            </div>
                        </div>

                        {/* Graphic flower + right texts */}
                        <div className="grid gap-10 lg:grid-cols-2 items-center">
                            {/* Flower - refined layout to match slide */}
                            <div className="relative mx-auto h-64 w-72">
                                {/* crosshair lines */}
                                <div className="absolute left-[60%] top-0 h-full w-px bg-white/80" />
                                <div className="absolute top-1/2 left-0 w-full h-px bg-white/80" />

                                {/* 4 clover petals around center (greens + orange) */}
                                <div className="absolute left-[32%] top-[16%] h-28 w-28 rounded-full bg-[#5E7A3E] flex items-center justify-center">
                                    <IconBulb />
                                </div>
                                <div className="absolute left-[50%] top-[16%] h-28 w-28 rounded-full bg-[#6D8146] flex items-center justify-center">
                                    <IconTarget />
                                </div>
                                <div className="absolute left-[32%] top-[48%] h-28 w-28 rounded-full bg-[#6B7F45] flex items-center justify-center">
                                    <IconHeart />
                                </div>
                                <div className="absolute left-[50%] top-[48%] h-28 w-28 rounded-full bg-[#C67A3A] flex items-center justify-center">
                                    <IconDiamond />
                                </div>

                                {/* right yellow circle overlapping center */}
                                <div className="absolute left-[74%] top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-[#D6A313] flex items-center justify-center">
                                    <IconShield />
                                </div>
                            </div>

                            {/* Right texts */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-semibold text-slate-900">Tận Tâm</h3>
                                    <p className="mt-2 text-slate-700">Đặt lợi ích khách hàng lên hàng đầu, cam kết đồng hành trong mọi dự án</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-slate-900">Chính Trực</h3>
                                    <p className="mt-2 text-slate-700">Minh bạch trong mọi hoạt động, giữ vững cam kết và lời hứa</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-slate-900">Chất Lượng</h3>
                                    <p className="mt-2 text-slate-700">Luôn hướng đến sự hoàn hảo trong từng dòng code và sản phẩm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="mt-12 text-slate-700">
                        Những giá trị cốt lõi này không chỉ là kim chỉ nam trong mọi hoạt động nội bộ mà còn là cam kết vững chắc của chúng tôi đối với khách hàng và đối tác.
                    </p>
                </div>
            </div>
        </section>
    )
}


