import React from 'react';
import Slider from "react-slick";
import { projects } from '../constants';
import { FadeUp } from './Anim'
import { useLang } from '../lang'

// --- Cấu hình Slider ---
var settings = {
    dots: false,
    infinite: true,
    speed: 500,

    autoplay: true,
    autoplaySpeed: 2000,

    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1280, // Màn hình rất lớn (xl)
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
    ]
};

interface ProjectCardProps {
    p: { title: string, description: string, image: string };
}

const translateProject = (p: { title: string, description: string }, lang: 'vi' | 'en') => {
    if (lang === 'vi') return p
    const map: Record<string, { t: string; d: string }> = {
        'Nền tảng bán khoá học online': { t: 'Online course sales platform', d: 'Connects education content creators with affiliate marketers.' },
        'App gọi xe': { t: 'Ride-hailing app', d: 'Cross-platform iOS/Android with intelligent dispatch connecting drivers and riders.' },
        'Nền tảng ELearning': { t: 'E‑Learning platform', d: 'End‑to‑end online learning with content management, learner interaction, and assessment.' },
        'AI chatbot doanh nghiệp': { t: 'Enterprise AI chatbot', d: '24/7 support, domain‑trained, learns continuously with NLP.' },
        'Hồ sơ ý tế thông minh': { t: 'Smart medical record', d: 'OCR MyHealth digitizes medical documents from prescriptions to lab results and records.' },
    }
    // Try by title first
    if (map[p.title]) return { title: map[p.title].t, description: map[p.title].d }
    return p
}

const ProjectCard: React.FC<ProjectCardProps> = ({ p }) => {
    const { lang } = useLang()
    const tp = translateProject(p, lang)
    return (
        <div className="flex flex-col px-3 outline-none h-full">
            <div className="h-full rounded-xl border border-slate-200 bg-white shadow flex flex-col cursor-pointer
                        transition duration-300 ease-in-out 
                        hover:-translate-y-1 hover:shadow-xl">
                <div className=" aspect-[9/3] w-full h-[250px] overflow-hidden rounded-t-xl bg-slate-100">
                    <img src={p.image} alt={tp.title} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1 p-4 flex flex-col">
                    <div className="font-semibold text-slate-900 leading-snug">{tp.title}</div>
                    <div className="mt-2 text-sm text-slate-700 line-clamp-3 overflow-hidden h-20 leading-relaxed">
                        {tp.description}
                    </div>
                </div>
            </div>
        </div>
    )
};

export const Showcase: React.FC = () => {
    const { lang } = useLang()
    return (
        <section id="showcase" className="py-10">
            <div className="flex flex-col gap-8 w-full">
                <FadeUp className="">
                    <h2 className="text-3xl font-bold text-slate-900">{lang === 'en' ? 'Projects' : 'Dự án tiêu biểu'}</h2>
                </FadeUp>

                <FadeUp className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Slider {...settings}>
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