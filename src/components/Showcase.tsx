import React, { useRef, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from '../constants';
import { FadeUp } from './Anim'
import { useLang } from '../lang'

// --- Cấu hình Slider ---
// react-slick breakpoint: áp dụng khi màn hình <= breakpoint
// Breakpoints được xử lý từ lớn xuống nhỏ
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    adaptiveHeight: false, // tắt để đồng đều chiều cao
    slidesToShow: 3, // mặc định desktop lớn (> 1024px): 3
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    touchThreshold: 12,
    lazyLoad: 'ondemand',
    cssEase: 'ease-in-out',
    centerMode: false,
    variableWidth: false,
    centerPadding: '0px',
    responsive: [
        {
            breakpoint: 1280, // <= 1280px: vẫn 3 nhưng ẩn bớt arrow gây tràn
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
            }
        },
        {
            breakpoint: 1024, // <= 1024px: hiển thị 2 (tablet)
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                infinite: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 768, // <= 768px: hiển thị 1 (mobile)
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                pauseOnHover: true,
            }
        },
        {
            breakpoint: 480, // <= 480px: 1 slide, đảm bảo không tràn ngang
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            }
        }
    ]
};

interface ProjectCardProps {
    p: { title: string, description: string, image: string };
}

const translateProject = (p: { title: string, description: string }, lang: 'vi' | 'en' | 'zh') => {
    if (lang === 'vi') return p
    if (lang === 'en') {
        const map: Record<string, { t: string; d: string }> = {
            'Nền tảng bán khoá học online': { t: 'Online course sales platform', d: 'Connects education content creators with affiliate marketers.' },
            'App gọi xe': { t: 'Ride-hailing app', d: 'Cross-platform iOS/Android with intelligent dispatch connecting drivers and riders.' },
            'Nền tảng ELearning': { t: 'E‑Learning platform', d: 'End‑to‑end online learning with content management, learner interaction, and assessment.' },
            'AI chatbot doanh nghiệp': { t: 'Enterprise AI chatbot', d: '24/7 support, domain‑trained, learns continuously with NLP.' },
            'Hồ sơ ý tế thông minh': { t: 'Smart medical record', d: 'OCR MyHealth digitizes medical documents from prescriptions to lab results and records.' },
        }
        if (map[p.title]) return { title: map[p.title].t, description: map[p.title].d }
    }
    if (lang === 'zh') {
        const map: Record<string, { t: string; d: string }> = {
            'Nền tảng bán khoá học online': { t: '在线课程销售平台', d: '连接教育内容创作者和联盟营销人员。' },
            'App gọi xe': { t: '叫车应用', d: '跨平台iOS/Android应用，智能调度连接司机和乘客。' },
            'Nền tảng ELearning': { t: '电子学习平台', d: '端到端在线学习，包含内容管理、学习者互动和评估。' },
            'AI chatbot doanh nghiệp': { t: '企业AI聊天机器人', d: '24/7支持，领域训练，通过NLP持续学习。' },
            'Hồ sơ ý tế thông minh': { t: '智能医疗记录', d: 'OCR MyHealth将医疗文档从处方到实验室结果和记录数字化。' },
        }
        if (map[p.title]) return { title: map[p.title].t, description: map[p.title].d }
    }
    return p
}

const ProjectCard: React.FC<ProjectCardProps> = ({ p }) => {
    const { lang } = useLang()
    const tp = translateProject(p, lang)
    return (
        <div className="flex flex-col px-1 sm:px-3 outline-none h-full">
            <div className="h-full rounded-xl border border-slate-200 bg-white shadow flex flex-col cursor-pointer
                        transition duration-300 ease-in-out 
                        hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[16/9] w-full flex-shrink-0 overflow-hidden rounded-t-xl bg-slate-100">
                    <img src={p.image} alt={tp.title} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                    <div>
                        <div className="font-semibold text-base sm:text-lg text-slate-900 leading-snug mb-2">{tp.title}</div>
                        <div className="text-sm sm:text-base text-slate-700 leading-relaxed line-clamp-3">
                            {tp.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export const Showcase: React.FC = () => {
    const { lang } = useLang()
    const sliderRef = useRef<any>(null)

    useEffect(() => {
        const handleResize = () => {
            // Force react-slick reinitialize khi resize bằng cách gọi slickGoTo
            if (sliderRef.current) {
                try {
                    const currentSlide = sliderRef.current.innerSlider?.state?.currentSlide || 0
                    sliderRef.current.slickGoTo(currentSlide, false)
                } catch (e) {
                    // Nếu lỗi, chỉ cần gọi slickGoTo với slide hiện tại
                    sliderRef.current.slickGoTo(0, false)
                }
            }
        }

        // Debounce resize để tránh gọi quá nhiều
        let timeoutId: ReturnType<typeof setTimeout>
        const debouncedResize = () => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(handleResize, 250)
        }

        window.addEventListener('resize', debouncedResize)
        return () => {
            window.removeEventListener('resize', debouncedResize)
            clearTimeout(timeoutId)
        }
    }, [])

    // Force reflow on mount for small screens to ensure correct width calc
    useEffect(() => {
        const id = setTimeout(() => {
            try {
                if (window.innerWidth <= 1024) {
                    sliderRef.current?.slickSetOption('slidesToShow', 1, true)
                    sliderRef.current?.slickSetOption('slidesToScroll', 1, true)
                }
                sliderRef.current?.slickGoTo(0, true)
            } catch { }
        }, 0)
        return () => clearTimeout(id)
    }, [])

    return (
        <section id="showcase" className="py-8 sm:py-10">
            <div className="flex flex-col gap-6 sm:gap-8 w-full">
                <FadeUp className="">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{lang === 'en' ? 'Projects' : lang === 'vi' ? 'Dự án tiêu biểu' : '代表性项目'}</h2>
                </FadeUp>

                <FadeUp className="relative w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 overflow-visible">
                    <style>{`
                        .showcase-slider .slick-slide { padding-left: 0px; padding-right: 0px; }
                        .showcase-slider .slick-slide > div { width: 100%; height: 100%; }
                        .showcase-slider .slick-list { overflow: visible; }
                        .showcase-slider .slick-track { display: flex !important; align-items: stretch; }
                        .showcase-slider .slick-slide { height: auto !important; }
                    `}</style>
                    <Slider className="showcase-slider" ref={sliderRef} {...settings}>
                        {projects.map((p, i) => (
                            <ProjectCard key={p.title} p={p} />
                        ))}
                    </Slider>
                </FadeUp>
            </div>
        </section>
    );
};

export default Showcase;