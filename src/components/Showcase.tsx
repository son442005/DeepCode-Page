import React from 'react';
import { projects } from '../constants';
import { FadeUp } from './Anim'
import { useLang } from '../lang'

// Static list (no slider)

interface ProjectCardProps {
    p: { title: string, description: string, image: string };
    reverse?: boolean;
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

const ProjectCard: React.FC<ProjectCardProps> = ({ p, reverse }) => {
    const { lang } = useLang()
    const tp = translateProject(p, lang)
    const pills = lang === 'en'
        ? ['Seamless experience', 'Fast processing', 'Secure']
        : lang === 'vi'
            ? ['Trải nghiệm mượt mà', 'Xử lý nhanh', 'Bảo mật']
            : ['流畅体验', '快速处理', '安全']
    return (
        <div className="flex flex-col px-0 outline-none h-full mb-6 sm:mb-8">
            <div className={`grid md:grid-cols-2 gap-6 items-center`}>
                <div className={`relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="aspect-[16/9] w-full">
                        <img src={p.image} alt={tp.title} className="h-full w-full object-cover" />
                    </div>
                </div>
                <div className={`flex flex-col gap-3 sm:gap-4 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">{tp.title}</h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{tp.description}</p>
                    <div className="mt-1 grid gap-2">
                        <div className="flex items-start gap-2">
                            <svg className="h-5 w-5 flex-shrink-0 text-sky-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.07 7.07a1 1 0 01-1.415 0l-3.535-3.535a1 1 0 111.414-1.414l2.828 2.828 6.364-6.364a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span className="text-sm sm:text-base text-slate-800">{lang === 'en' ? 'Key features and solid architecture' : lang === 'vi' ? 'Tính năng nổi bật và kiến trúc vững chắc' : '关键功能与稳健架构'}</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <svg className="h-5 w-5 flex-shrink-0 text-sky-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.07 7.07a1 1 0 01-1.415 0l-3.535-3.535a1 1 0 111.414-1.414l2.828 2.828 6.364-6.364a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span className="text-sm sm:text-base text-slate-800">{lang === 'en' ? 'Optimized for speed and reliability' : lang === 'vi' ? 'Tối ưu tốc độ và độ tin cậy' : '针对速度与可靠性优化'}</span>
                        </div>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {pills.map((x) => (
                            <span key={x} className="px-3 py-1 rounded-full text-xs sm:text-sm bg-sky-50 text-sky-700 ring-1 ring-sky-200">{x}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export const Showcase: React.FC = () => {
    const { lang } = useLang()

    return (
        <section id="showcase" className="py-8 sm:py-10">
            <div className="flex flex-col gap-6 sm:gap-8 w-full">
                <FadeUp className="">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{lang === 'en' ? 'Projects' : lang === 'vi' ? 'Dự án tiêu biểu' : '代表性项目'}</h2>
                </FadeUp>

                <FadeUp className="relative w-full max-w-7xl mx-auto px-0 pb-4 sm:pb-6 lg:pb-8">
                    <>
                        {projects.map((p, i) => (
                            <ProjectCard key={p.title} p={p} reverse={i % 2 === 1} />
                        ))}
                    </>
                </FadeUp>
            </div>
        </section>
    );
};

export default Showcase;