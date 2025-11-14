import React from 'react';
import { FadeUp } from './Anim'; // Assuming this is your animation component
import { useLang } from '../lang'; // Assuming this is your language hook

// Replaced your 'projects' constant with the data extracted from the PDF
// You might want to move this to a separate file like 'pdfProjectsData.js'
export const pdfProjects = [
    {
        projects: [
            {
                title: "Hệ thống Quản lý Khách hàng (CRM Platform)",
                description: "Ứng dụng web quản lý khách hàng, hợp đồng, chăm sóc và lịch sử giao dịch.",
                mainFeatures: "Tích hợp AI dự đoán hành vi khách hàng & chatbot chăm sóc tự động.",
                highlights: "Tích hợp công cụ phân tích dữ liệu người dùng và gợi ý sản phẩm bằng AI. Real-time update & thông báo đẩy qua WebSocket.",
                technologies: "ReactJS, Node.js, MongoDB, Express, Docker.",
                image: "https://via.placeholder.com/1200x675.png?text=CRM+Platform" // Placeholder image
            },
            {
                title: "Nền tảng Bán hàng & Thanh toán Online (Thương mại điện tử)",
                description: "Website thương mại điện tử đa nhà cung cấp, hỗ trợ thanh toán điện tử, ví nội bộ.",
                mainFeatures: "Tích hợp công cụ phân tích dữ liệu người dùng và gợi ý sản phẩm bằng AI.",
                highlights: "Real-time update & thông báo đẩy qua WebSocket.",
                technologies: "Next.js, NestJS, Stripe API, Redis cache.",
                image: "https://via.placeholder.com/1200x675.png?text=E-commerce+Platform" // Placeholder image
            },
            {
                title: "Ứng dụng Quản lý Dự án (Project Management WebApp)",
                description: "Giúp doanh nghiệp quản lý công việc, tiến độ, nhân sự theo mô hình Kanban hoặc Agile.",
                mainFeatures: "Tùy chỉnh dashboard theo vai trò người dùng.",
                highlights: "Tùy chỉnh dashboard theo vai trò người dùng.",
                technologies: "Vue.js, Firebase, TailwindCSS, GraphQL.",
                image: "https://via.placeholder.com/1200x675.png?text=Project+Management" // Placeholder image
            },
            {
                title: "Hệ thống Báo cáo dữ liệu động (Dynamic Dashboard System)",
                description: "Nền tảng trực quan hóa dữ liệu doanh nghiệp theo thời gian thực.",
                mainFeatures: "Tùy chỉnh dashboard theo vai trò người dùng.",
                highlights: "Tùy chỉnh dashboard theo vai trò người dùng.",
                technologies: "Python Flask, React, Chart.js, PostgreSQL.",
                image: "https://via.placeholder.com/1200x675.png?text=Dynamic+Dashboard" // Placeholder image
            },
            {
                title: "Hệ thống số hoá hồ sơ y tế OCR",
                description: "Số hóa hồ sơ y tế (chưa có mô tả chi tiết trong PDF)",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=Medical+OCR" // Placeholder image
            }
        ]
    },
    {
        category: "Ứng dụng mobile",
        projects: [
            {
                title: "Ứng dụng đặt vé xem phim (Movie Ticket Booking App)",
                description: "Ứng dụng giúp người dùng tra cứu lịch chiếu, chọn rạp, đặt vé, và thanh toán trực tuyến.",
                mainFeatures: "Giao diện module hóa, thanh toán nhiều dịch vụ, tích hợp bản đồ, hệ thống tích điểm, quét mã QR.",
                highlights: "N/A",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=Movie+Booking+App" // Placeholder image
            },
            {
                title: "Ứng dụng đặt vé show ca nhạc & sự kiện (Event & Concert Booking App)",
                description: "Nền tảng đặt vé cho các buổi biểu diễn âm nhạc, hội nghị, hội chợ, lễ hội...",
                mainFeatures: "Giao diện module hóa, thanh toán nhiều dịch vụ, tích hợp bản đồ, hệ thống tích điểm, quét mã QR.",
                highlights: "N/A",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=Event+Booking+App" // Placeholder image
            },
            {
                title: "Ứng dụng tiện ích đô thị (SmartLife / City Service App)",
                description: "Ứng dụng tổng hợp nhiều dịch vụ tiện ích: thanh toán hóa đơn, đặt taxi, gọi sửa chữa, mua vé xem phim, tra cứu lịch điện nước, v.v.",
                mainFeatures: "Giao diện module hóa, thanh toán nhiều dịch vụ, tích hợp bản đồ, hệ thống tích điểm, quét mã QR.",
                highlights: "N/A",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=City+Service+App" // Placeholder image
            },
            {
                title: "Ứng dụng quản lý vé & check-in QR (Ticket Management & QR Scanner)",
                description: "Ứng dụng cho nhân viên sự kiện, dùng để quét và xác thực vé nhanh chóng.",
                mainFeatures: "Phát hiện vé giả, kết nối real-time, dashboard theo dõi check-in, giao hàng nội khu.",
                highlights: "Token loyalty points để quy đổi ưu đãi, tạo nền tảng cho hệ sinh thái dịch vụ.",
                technologies: "Kotlin / Flutter, Firebase Authentication, Blockchain Layer 2 (nếu muốn token hóa điểm thưởng).",
                image: "https://via.placeholder.com/1200x675.png?text=Ticket+Scanner+App" // Placeholder image
            },
            {
                title: "Ứng dụng đặt đồ ăn, cà phê, dịch vụ tại sự kiện (Event Food & Service Ordering)",
                description: "Cho phép người dùng tại rạp phim hoặc show âm nhạc đặt đồ ăn, đồ uống ngay trong app.",
                mainFeatures: "Quản lý menu động, nạp/rút tiền, lưu phương thức thanh toán, lưu vé điện tử & giao dịch, tích điểm, xếp hạng thành viên.",
                highlights: "Tự động gợi ý combo phù hợp theo sự kiện và lịch chiếu.",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=Event+Food+Ordering" // Placeholder image
            },
            {
                title: "Ứng dụng ví điện tử mini (E-Wallet & Loyalty App)",
                description: "Ứng dụng ví điện tử mini (E-Wallet & Loyalty App).",
                mainFeatures: "Quản lý menu động, nạp/rút tiền, lưu phương thức thanh toán, lưu vé điện tử & giao dịch, tích điểm, xếp hạng thành viên.",
                highlights: "N/A",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=E-Wallet+App" // Placeholder image
            },
            {
                title: "Ứng dụng đặt vé toàn năng (All-in-One Booking App)",
                description: "App tích hợp đặt vé phim, show, du lịch, taxi, khách sạn – mô hình 'Super App mini'.",
                mainFeatures: "Chatbot hỗ trợ khách hàng 24/7.",
                highlights: "N/A",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=Super+App" // Placeholder image
            }
        ]
    },
    {
        category: "Blockchain & Web3",
        projects: [
            {
                title: "Nền tảng NFT Marketplace",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=NFT+Marketplace" // Placeholder image
            },
            {
                title: "Hệ thống Quản lý Chuỗi cung ứng (Supply Chain on Blockchain)",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=Blockchain+Supply+Chain" // Placeholder image
            },
            {
                title: "Smart Contract Audit Tool",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=Smart+Contract+Audit" // Placeholder image
            },
            {
                title: "Crypto Portfolio Tracker",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=Crypto+Portfolio+Tracker" // Placeholder image
            },
            {
                title: "Hệ thống định giá BĐS sử dụng công nghệ AI",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=AI+Real+Estate+Valuation" // Placeholder image
            },
            {
                title: "Hệ thống sử dụng blockchain ghi nhận và thanh toán trên nền tảng cloud server.",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=Blockchain+Cloud+Payments" // Placeholder image
            },
            {
                title: "Cổng thanh toán USDT",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=USDT+Payment+Gateway" // Placeholder image
            }
        ]
    },
    {
        category: "Bảo mật & An ninh mạng",
        projects: [
            {
                title: "Hệ thống phát hiện xâm nhập (AI Intrusion Detection System)",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=AI+Intrusion+Detection" // Placeholder image
            },
            {
                title: "Ứng dụng Kiểm thử xâm nhập tự động (Auto Pentest Platform)",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=Auto+Pentest+Platform" // Placeholder image
            },
            {
                title: "Passwordless Authentication System",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=Passwordless+Auth" // Placeholder image
            }
        ]
    },
    {
        category: "Trí tuệ nhân tạo (AI & Machine Learning)",
        projects: [
            {
                title: "Hệ thống định giá BĐS sử dụng công nghệ AI",
                description: "Dự báo doanh số và phân loại khách hàng dựa trên lịch sử mua hàng.",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "Scikit-learn, XGBoost, PowerBI.",
                image: "https://via.placeholder.com/1200x675.png?text=AI+Real+Estate+Valuation" // Placeholder image
            },
            {
                title: "Hệ thóng nhận DeepFake thay đổi khuôn mặt",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=DeepFake+Detection" // Placeholder image
            },
            {
                title: "Hệ thống chấm công tự động sử dụng xác thực khuôn mặt và định vị ngừoi dùng",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A",
                image: "https://via.placeholder.com/1200x675.png?text=AI+Timekeeping" // Placeholder image
            },
            {
                title: "Chatbot hỗ trợ khách hàng AI (AI Customer Support Chatbot)",
                description: "Chatbot tự động trả lời câu hỏi và xử lý yêu cầu khách hàng.",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "Python, NLP (spaCy, Transformers), FastAPI.",
                image: "https://via.placeholder.com/1200x675.png?text=AI+Chatbot" // Placeholder image
            },
            {
                title: "AI Dự báo doanh thu & hành vi khách hàng",
                description: "Dự báo doanh số và phân loại khách hàng dựa trên lịch sử mua hàng.",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "Scikit-learn, XGBoost, PowerBI.",
                image: "https://via.placeholder.com/1200x675.png?text=AI+Sales+Forecasting" // Placeholder image
            },
            {
                title: "AI Nhận diện khuôn mặt & hành vi",
                description: "Ứng dụng nhận diện nhân viên, khách hàng, hoặc phát hiện hành vi bất thường.",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "OpenCV, TensorFlow, YOLOv8, Flask.",
                image: "https://via.placeholder.com/1200x675.png?text=AI+Face+Recognition" // Placeholder image
            }
        ]
    }
];


// Interface for a single project from the PDF data
interface PdfProject {
    title: string;
    description: string;
    mainFeatures?: string;
    highlights?: string;
    technologies?: string;
    image?: string; // Add image property
}

// Interface for a category of projects
interface ProjectCategory {
    category: string;
    projects: PdfProject[];
}

interface ProjectCardProps {
    p: PdfProject;
    reverse?: boolean;
}

const translateProject = (p: PdfProject, lang: 'vi' | 'en' | 'zh') => {
    // This function needs to be significantly expanded to translate all titles, descriptions, etc.
    // For now, it will return the original Vietnamese text if no English/Chinese equivalent is explicitly defined.
    // You'll need to manually add translations for each project field here.

    const translations: Record<string, { en?: PdfProject; zh?: PdfProject }> = {
        // Example for one project. You'd need to fill this out for all of them.
        "Hệ thống Quản lý Khách hàng (CRM Platform)": {
            en: {
                title: "Customer Relationship Management (CRM Platform)",
                description: "Web application for managing customers, contracts, customer care, and transaction history.",
                mainFeatures: "AI-powered customer behavior prediction & automated chatbot support.",
                highlights: "Integrates user data analysis tools and AI-driven product suggestions. Real-time updates & WebSocket push notifications.",
                technologies: "ReactJS, Node.js, MongoDB, Express, Docker.",
                image: "https://via.placeholder.com/1200x675.png?text=CRM+Platform"
            },
            zh: {
                title: "客户关系管理（CRM）平台",
                description: "用于管理客户、合同、客户服务和交易历史的Web应用程序。",
                mainFeatures: "集成AI客户行为预测和自动聊天机器人支持。",
                highlights: "集成用户数据分析工具和AI驱动的产品建议。实时更新和WebSocket推送通知。",
                technologies: "ReactJS, Node.js, MongoDB, Express, Docker。",
                image: "https://via.placeholder.com/1200x675.png?text=CRM+Platform"
            }
        },
        // ... more translations for other projects
    };

    if (lang === 'en' && translations[p.title]?.en) {
        return { ...p, ...translations[p.title].en };
    }
    if (lang === 'zh' && translations[p.title]?.zh) {
        return { ...p, ...translations[p.title].zh };
    }
    return p; // Return original if no translation found or lang is vi
};


const getProjectBullets = (project: PdfProject, lang: 'vi' | 'en' | 'zh') => {
    const bullets: string[] = [];

    // Prioritize mainFeatures, then highlights, then technologies
    if (project.mainFeatures && project.mainFeatures !== 'N/A') {
        bullets.push(project.mainFeatures);
    }
    if (project.highlights && project.highlights !== 'N/A' && !bullets.includes(project.highlights)) {
        bullets.push(project.highlights);
    }
    if (project.technologies && project.technologies !== 'N/A' && !bullets.includes(project.technologies)) {
        bullets.push(project.technologies);
    }

    if (bullets.length === 0) {
        // Fallback if no specific features/highlights are present
        if (lang === 'en') return ['Key features and solid architecture', 'Optimized for speed and reliability'];
        if (lang === 'vi') return ['Tính năng nổi bật và kiến trúc vững chắc', 'Tối ưu tốc độ và độ tin cậy'];
        if (lang === 'zh') return ['关键功能与稳健架构', '针对速度与可靠性优化'];
    }

    return bullets;
};

const getProjectPills = (project: PdfProject, lang: 'vi' | 'en' | 'zh') => {
    // This function will extract keywords from technologies or main features
    const pills: string[] = [];

    if (project.technologies && project.technologies !== 'N/A') {
        project.technologies.split(',').forEach(tech => {
            const trimmedTech = tech.trim();
            if (trimmedTech) pills.push(trimmedTech);
        });
    }

    // You might want to add more logic here to extract keywords from mainFeatures or highlights
    // For simplicity, I'm just using technologies for now.

    if (pills.length === 0) {
        if (lang === 'en') return ['Seamless', 'Fast', 'Secure'];
        if (lang === 'vi') return ['Mượt mà', 'Nhanh', 'Bảo mật'];
        if (lang === 'zh') return ['流畅', '快速', '安全'];
    }
    return pills;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ p, reverse }) => {
    const { lang } = useLang();
    const tp = translateProject(p, lang); // Use the translation function
    const bullets = getProjectBullets(p, lang); // Get bullets based on PDF data
    const pills = getProjectPills(p, lang); // Get pills based on PDF data

    // Use a default image if none is provided
    const imageUrl = tp.image || "https://via.placeholder.com/1200x675.png?text=Project+Image";

    return (
        <div className="flex flex-col outline-none h-full mb-6 sm:mb-8 bg-gray-50 sm:p-6">
            <div className={`grid md:grid-cols-2 gap-6 items-center p-6`}>
                <div className={`shadow-3d-lg shadow-3d relative overflow-hidden bg-slate-100 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="aspect-[16/9] w-full">
                        <img src={imageUrl} alt={tp.title} className="h-full w-full object-cover" />
                    </div>
                </div>
                <div className={`flex flex-col gap-3 sm:gap-4 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-orange-500">{tp.title}</h3>
                    <p className="text-sm sm:text-base text-black leading-relaxed">{tp.description}</p>
                    <div className="mt-1 grid gap-2">
                        {bullets.map((item, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <svg className="h-5 w-5 flex-shrink-0 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.07 7.07a1 1 0 01-1.415 0l-3.535-3.535a1 1 0 111.414-1.414l2.828 2.828 6.364-6.364a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                <span className="text-sm sm:text-base text-blue-700 ">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {pills.map((x, index) => (
                            <span key={index} className="px-3 py-1 text-xs sm:text-sm bg-primary/10 text-primary ring-1 ring-primary/20">{x}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Showcase: React.FC = () => {
    const { lang } = useLang();

    return (
        <section id="showcase" className="w-[80%] bg-white py-7">
            <div className="flex flex-col gap-6 sm:gap-8 w-full ">
                <FadeUp className="">
                    <h2 className="text-4xl font-bold text-blue-800 text-center border-b-2 pb-2">
                        {lang === 'en' ? 'Projects' : lang === 'vi' ? 'Dự án tiêu biểu ' : '代表性项目'}
                    </h2>
                </FadeUp>

                <FadeUp className="flex flex-col gap-10 relative w-full max-w-7xl mx-auto px-2 pb-4 sm:pb-6 lg:pb-8">
                    {/* Iterate through categories and then projects within each category */}
                    {pdfProjects.map((categoryData, categoryIndex) => (
                        <div key={categoryIndex} className="mb-8">
                            <h3 className="text-3xl font-bold text-blue-700 mb-6 text-center">
                                {categoryData.category} {/* Display category title */}
                            </h3>
                            {categoryData.projects.map((project, projectIndex) => (
                                <ProjectCard key={project.title} p={project} reverse={(categoryIndex * 100 + projectIndex) % 2 === 1} />
                            ))}
                        </div>
                    ))}
                </FadeUp>
            </div>
        </section>
    );
};

export default Showcase;