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
            'Nền tảng bán khoá học online': {
                t: 'Online course sales platform',
                d: 'Cosale.vn connects creators, experts and affiliate marketers; supports online learners. Stack: Laravel backend, VueJS + Bootstrap frontend, MySQL/Redis; payments via VNPay and MoMo.'
            },
            'App gọi xe': {
                t: 'Ride‑hailing app',
                d: 'Cross‑platform iOS/Android with intelligent dispatch connecting drivers and riders. Roadmap: Flutter frontend, NodeJS backend, Google Maps API; >5,000 rides/day, <2s response.'
            },
            'Nền tảng ELearning': {
                t: 'E‑Learning platform',
                d: 'Teachers create courses, materials and assignments; track learners. Students access lessons, discussions, quizzes and feedback. Admin manages users, roles, activity and analytics.'
            },
            'AI chatbot doanh nghiệp': {
                t: 'Enterprise AI chatbot',
                d: '24/7 support; domain‑knowledge answers and continuous learning. Pipeline: data collection, scenario design, deep training. Tech: NLP (Python, RASA), Vietnamese processing; integrates Messenger, Zalo, Website; sentiment analysis.'
            },
            'Hồ sơ ý tế thông minh': {
                t: 'Smart medical record (OCR MyHealth)',
                d: 'Digitizes medical records: prescriptions, lab results and charts. AI + Computer Vision reaches ~95% accuracy for handwriting. Deployed at 15 hospitals and 50+ clinics. Tech: TensorFlow, OpenCV, PyTorch.'
            },
            'BinanceBot Pro - Trading Bot AI': {
                t: 'BinanceBot Pro - AI Trading Bot',
                d: 'Leading automated trading tool for Binance exchange with advanced AI trading bot. Automates trading 24/7, smart risk management with automatic stop-loss and take-profit. Mobile app iOS/Android to track portfolio and control bot anytime, anywhere. Over 100 technical indicators and automatic pattern recognition. Tech: Node.js, React Native, Binance API, Machine Learning.'
            },
        }
        if (map[p.title]) return { title: map[p.title].t, description: map[p.title].d }
    }
    if (lang === 'zh') {
        const map: Record<string, { t: string; d: string }> = {
            'Nền tảng bán khoá học online': {
                t: '在线课程销售平台',
                d: 'Cosale.vn 连接教育内容创作者、专家与联盟推广者，并支持在线学员。技术栈：后端 Laravel，前端 VueJS + Bootstrap，数据库 MySQL/Redis；支付集成 VNPay、MoMo。'
            },
            'App gọi xe': {
                t: '叫车应用',
                d: '跨平台 iOS/Android，智能调度连接司机与乘客。规划：前端 Flutter，后端 NodeJS，集成 Google Maps API；日均 5,000+ 单，响应 <2 秒。'
            },
            'Nền tảng ELearning': {
                t: '电子学习平台',
                d: '教师创建课程与资料，布置作业并跟踪进度；学生学习课程、参与讨论、测验并获得反馈；管理员管理用户与权限，监控活动并做学习数据分析。'
            },
            'AI chatbot doanh nghiệp': {
                t: '企业 AI 聊天机器人',
                d: '7×24 支持；基于行业知识自动答复并持续学习。流程：数据收集、话术场景构建、深度训练。技术：NLP（Python、RASA）、越南语处理；集成 Messenger、Zalo、网站；情感分析。'
            },
            'Hồ sơ ý tế thông minh': {
                t: '智能医疗记录（OCR MyHealth）',
                d: '数字化处方、检验结果与病历等医疗文档。AI + 计算机视觉对医生手写识别准确率约 95%。已在 15 家医院与 50+ 家诊所部署。技术：TensorFlow、OpenCV、PyTorch。'
            },
            'BinanceBot Pro - Trading Bot AI': {
                t: 'BinanceBot Pro - AI 交易机器人',
                d: '币安交易所领先的自动化交易工具，配备先进的 AI 交易机器人。7×24 自动交易，智能风险管理，自动止损和止盈。iOS/Android 移动应用，随时随地跟踪投资组合并控制机器人。超过 100 个技术指标和自动模式识别。技术：Node.js、React Native、Binance API、机器学习。'
            },
        }
        if (map[p.title]) return { title: map[p.title].t, description: map[p.title].d }
    }
    return p
}

const getProjectBullets = (titleVi: string, lang: 'vi' | 'en' | 'zh') => {
    // Build bullet points per project and language
    const vi: Record<string, string[]> = {
        'Nền tảng bán khoá học online': [
            'Kết nối chuyên gia/creator với cộng tác viên affiliate',
            'Hỗ trợ học viên học trực tuyến hiệu quả',
            'Tích hợp thanh toán VNPay, MoMo'
        ],
        'App gọi xe': [
            'Đa nền tảng iOS/Android, trải nghiệm mượt',
            'Điều phối thông minh kết nối tài xế và khách',
            'Hỗ trợ nhiều phương thức thanh toán, phản hồi < 2s'
        ],
        'Nền tảng ELearning': [
            'Giáo viên tạo khóa, tài liệu, bài tập và theo dõi',
            'Học sinh học bài, thảo luận, làm bài và nhận phản hồi',
            'Quản trị viên quản lý người dùng, phân quyền, phân tích'
        ],
        'AI chatbot doanh nghiệp': [
            'Hỗ trợ khách hàng 24/7, trả lời tự động theo ngành',
            'Học liên tục từ dữ liệu doanh nghiệp và tương tác',
            'Tích hợp Messenger, Zalo, Website; phân tích cảm xúc'
        ],
        'Hồ sơ ý tế thông minh': [
            'Số hóa hồ sơ y tế: đơn thuốc, xét nghiệm, bệnh án',
            'Nhận dạng chữ bác sĩ ~95% bằng AI & Computer Vision',
            'Triển khai tại 15 bệnh viện và 50+ phòng khám'
        ],
        'BinanceBot Pro - Trading Bot AI': [
            'AI trading bot tự động giao dịch 24/7 trên Binance',
            'Quản lý rủi ro thông minh: stop-loss, take-profit tự động',
            'Mobile app iOS/Android, 10K+ users, $50M+ volume, 99.9% uptime'
        ],
    }
    const en: Record<string, string[]> = {
        'Nền tảng bán khoá học online': [
            'Connects experts/creators with affiliate marketers',
            'Supports effective online learning for students',
            'Integrated payments: VNPay, MoMo'
        ],
        'App gọi xe': [
            'Cross‑platform iOS/Android with smooth UX',
            'Intelligent dispatch linking drivers and riders',
            'Multiple payments, < 2s response time'
        ],
        'Nền tảng ELearning': [
            'Teachers create courses, materials, assignments, tracking',
            'Students learn, discuss, take quizzes and get feedback',
            'Admins manage users, roles and analytics'
        ],
        'AI chatbot doanh nghiệp': [
            '24/7 support with domain‑aware auto responses',
            'Continuous learning from enterprise data and interactions',
            'Integrates Messenger, Zalo, Website; sentiment analysis'
        ],
        'Hồ sơ ý tế thông minh': [
            'Digitizes medical records: prescriptions, labs, charts',
            '~95% doctor handwriting recognition via AI & CV',
            'Deployed in 15 hospitals and 50+ clinics'
        ],
        'BinanceBot Pro - Trading Bot AI': [
            'AI trading bot automates trading 24/7 on Binance',
            'Smart risk management: automatic stop-loss and take-profit',
            'Mobile app iOS/Android, 10K+ users, $50M+ volume, 99.9% uptime'
        ],
    }
    const zh: Record<string, string[]> = {
        'Nền tảng bán khoá học online': [
            '连接专家/创作者与联盟推广者',
            '支持学员高效在线学习',
            '集成支付：VNPay、MoMo'
        ],
        'App gọi xe': [
            '跨平台 iOS/Android，体验流畅',
            '智能调度连接司机与乘客',
            '多种支付方式，响应 < 2 秒'
        ],
        'Nền tảng ELearning': [
            '教师创建课程、资料与作业并跟踪进度',
            '学生学习课程、讨论交流、测验与反馈',
            '管理员管理用户、权限与数据分析'
        ],
        'AI chatbot doanh nghiệp': [
            '7×24 行业知识自动答复',
            '基于企业数据与互动持续学习',
            '集成 Messenger、Zalo、网站；情感分析'
        ],
        'Hồ sơ ý tế thông minh': [
            '医疗文档数字化：处方、检验、病历',
            'AI+视觉 ~95% 医生手写识别',
            '已在 15 家医院与 50+ 诊所部署'
        ],
        'BinanceBot Pro - Trading Bot AI': [
            'AI 交易机器人 7×24 自动交易于币安',
            '智能风险管理：自动止损与止盈',
            'iOS/Android 移动应用，10K+ 用户，$50M+ 交易量，99.9% 正常运行时间'
        ],
    }
    if (lang === 'vi' && vi[titleVi]) return vi[titleVi]
    if (lang === 'en' && en[titleVi]) return en[titleVi]
    if (lang === 'zh' && zh[titleVi]) return zh[titleVi]
    // Fallback to generic
    return lang === 'en'
        ? ['Key features and solid architecture', 'Optimized for speed and reliability']
        : lang === 'vi'
            ? ['Tính năng nổi bật và kiến trúc vững chắc', 'Tối ưu tốc độ và độ tin cậy']
            : ['关键功能与稳健架构', '针对速度与可靠性优化']
}

const getProjectPills = (titleVi: string, lang: 'vi' | 'en' | 'zh') => {
    const vi: Record<string, string[]> = {
        'Nền tảng bán khoá học online': ['Affiliate', 'Laravel/Vue', 'Thanh toán'],
        'App gọi xe': ['iOS/Android', 'Điều phối thông minh', '< 2s'],
        'Nền tảng ELearning': ['Quản lý khóa học', 'Tương tác', 'Đánh giá'],
        'AI chatbot doanh nghiệp': ['Hỗ trợ 24/7', 'RASA NLP', 'Tích hợp đa kênh'],
        'Hồ sơ ý tế thông minh': ['OCR ~95%', '15 BV + 50+ PK', 'TensorFlow/OpenCV'],
        'BinanceBot Pro - Trading Bot AI': ['AI Trading', '10K+ Users', 'Node.js/React Native'],
    }
    const en: Record<string, string[]> = {
        'Nền tảng bán khoá học online': ['Affiliate', 'Laravel/Vue', 'Payments'],
        'App gọi xe': ['iOS/Android', 'Smart dispatch', '< 2s'],
        'Nền tảng ELearning': ['Course mgmt', 'Interaction', 'Assessment'],
        'AI chatbot doanh nghiệp': ['24/7 support', 'RASA NLP', 'Omnichannel'],
        'Hồ sơ ý tế thông minh': ['OCR ~95%', '15 hospitals+50 clinics', 'TensorFlow/OpenCV'],
        'BinanceBot Pro - Trading Bot AI': ['AI Trading', '10K+ Users', 'Node.js/React Native'],
    }
    const zh: Record<string, string[]> = {
        'Nền tảng bán khoá học online': ['联盟推广', 'Laravel/Vue', '支付'],
        'App gọi xe': ['iOS/Android', '智能调度', '< 2 秒'],
        'Nền tảng ELearning': ['课程管理', '互动', '评测'],
        'AI chatbot doanh nghiệp': ['7×24', 'RASA NLP', '全渠道'],
        'Hồ sơ ý tế thông minh': ['OCR ~95%', '15 医院+50 诊所', 'TensorFlow/OpenCV'],
        'BinanceBot Pro - Trading Bot AI': ['AI 交易', '10K+ 用户', 'Node.js/React Native'],
    }
    if (lang === 'vi' && vi[titleVi]) return vi[titleVi]
    if (lang === 'en' && en[titleVi]) return en[titleVi]
    if (lang === 'zh' && zh[titleVi]) return zh[titleVi]
    return lang === 'en'
        ? ['Seamless', 'Fast', 'Secure']
        : lang === 'vi'
            ? ['Mượt mà', 'Nhanh', 'Bảo mật']
            : ['流畅', '快速', '安全']
}

const ProjectCard: React.FC<ProjectCardProps> = ({ p, reverse }) => {
    const { lang } = useLang()
    const tp = translateProject(p, lang)
    const pills = getProjectPills(p.title, lang)
    return (
        <div className="flex flex-col  outline-none h-full bg-gray-50 " >
            <div className={`grid md:grid-cols-2 gap-6 items-center p-6`}>
                <div className={` relative overflow-hidden bg-slate-100 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="aspect-[16/9] w-full">
                        <img src={p.image} alt={tp.title} className="h-full w-full object-cover " />
                    </div>
                </div>
                <div className={`flex flex-col gap-3 sm:gap-4 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-orange-500">{tp.title}</h3>
                    <p className="text-sm sm:text-base text-black leading-relaxed">{tp.description}</p>
                    <div className="mt-1 grid gap-2">
                        {getProjectBullets(p.title, lang).map((item) => (
                            <div key={item} className="flex items-start gap-2">
                                <svg className="h-5 w-5 flex-shrink-0 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.07 7.07a1 1 0 01-1.415 0l-3.535-3.535a1 1 0 111.414-1.414l2.828 2.828 6.364-6.364a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                <span className="text-sm sm:text-base text-blue-700 ">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {pills.map((x) => (
                            <span key={x} className="px-3 py-1  text-xs sm:text-sm bg-primary/10 text-primary ring-1 ring-primary/20">{x}</span>
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
        <section id="showcase" className=" w-[80%] bg-white py-7"   >
            <div className="flex flex-col gap-6 sm:gap-8 w-full ">
                <FadeUp className="">
                    <h2 className="text-4xl font-bold text-blue-800 text-center border-b-2 pb-2">{lang === 'en' ? 'Projects' : lang === 'vi' ? 'Dự án tiêu biểu ' : '代表性项目'} </h2>
                </FadeUp>

                <FadeUp className="flex flex-col gap-10 relative w-full max-w-7xl mx-auto px-2 pb-4 sm:pb-6 lg:pb-8">
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