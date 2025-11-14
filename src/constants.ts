export type Feature = {
    title: string
    description: string
    icon: string
    color?: string
}
const getAssetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`
export const ICONS: Record<string, { src: string; alt: string }> = {
  ai: {
    src: getAssetUrl('ai-icon-modified.png'),
    alt: 'Artificial Intelligence'
  },
  web: {
    src: getAssetUrl('web-icon-modified.png'),
    alt: 'Website Development'
  },
  mobile: {
    src: getAssetUrl('app-icon-modified (1).png'),
    alt: 'Mobile Apps'
  },
  blockchain: {
    src: getAssetUrl('blockchain-icon-modified.png'),
    alt: 'Blockchain'
  }
};

export const site = {
    company: 'HLGera',
    tagline: 'Công nghệ phần mềm cho doanh nghiệp',
    hero: {
        headline: 'Tăng trưởng nhanh với giải pháp phần mềm hiện đại',
        subheading: 'Tư vấn, thiết kế và phát triển phần mềm theo nhu cầu doanh nghiệp.',
        primaryCta: 'Liên hệ tư vấn',
        secondaryCta: 'Tìm hiểu thêm',
    },
}

export const features: Feature[] = [
    {
        title: 'Phát Triển Website',
        description: 'Thiết kế và xây dựng website hiện đại, tối ưu trải nghiệm, SEO và hiệu năng.',
        icon: 'web',
        color: '#DBEAFE', // ví dụ một màu nền
    },
    {
        title: 'Ứng Dụng Di Động',
        description: 'Phát triển ứng dụng iOS/Android đa nền tảng với UI/UX trực quan.',
        icon: 'mobile',
        color: '#E9D5FF',
    },
    {
        title: 'Trí Tuệ Nhân Tạo (AI)',
        description: 'Tư vấn và triển khai AI/ML, chatbot, OCR, khai phá dữ liệu.',
        icon: 'ai',
        color: '#FED7AA',
    },
    {
        title: 'Blockchain',
        description: 'Xây dựng smart contract, ví, DApp và tích hợp chuỗi khối cho sản phẩm.',
        icon: 'blockchain',
        color: '#C7D2FE',
    },
]

export type Testimonial = {
    quote: string
    author: string
    role: string
}

export type Project = {
    title: string
    description: string
    image: string
}

export type Partner = {
    name: string
    src: string
}

export type Commitment = {
    title: string
    description: string
    iconBg: string
    iconText: string
}

export type ExpertItem = {
    id: number
    title: string
    details: string[]
}

export type ExpertData = {
    name: string
    role: string
    profileImage: string
    items: ExpertItem[]
}

export type Stat = {
    value: string
    title: string
    description: string
}

export type ContactItem = {
    title: string
    details: string[]
    icon: string
}

// Base URL helper


export const stats = [
    { label: 'Dự án hoàn thành', value: '50+' },
    { label: 'Khách hàng doanh nghiệp', value: '30+' },
    { label: 'Tỉ lệ hài lòng', value: '98%' },
]

export const testimonials: Testimonial[] = [
    {
        quote: 'HLGera giúp chúng tôi tăng tốc ra mắt sản phẩm chỉ trong 8 tuần.',
        author: 'Nguyễn Văn A',
        role: 'CTO, Acme Corp',
    },
]

export const nav = [
    { label: 'Giới thiệu', href: '#about' },
    { label: 'Tầm nhìn', href: '#vision' },
    { label: 'Dịch vụ', href: '#features' },
    { label: 'Dự án', href: '#showcase' },
    { label: 'Đội Ngũ', href: '#ExpertProfile' },
    { label: 'Nhân Sự', href: '#StaffStats' },
    { label: 'Cam Kết', href: '#Commit' },
    { label: 'Khách hàng', href: '#ClientsPartners' },
]

export const projects: Project[] = [
    {
        title: 'Nền tảng bán khoá học online',
        description: 'Cosale.vn kết nối chuyên gia, nhà sáng tạo nội dung giáo dục và cộng tác viên affiliate; hỗ trợ học viên trực tuyến. Công nghệ: Back‑end Laravel, Front‑end VueJS + Bootstrap, CSDL MySQL/Redis; cổng thanh toán VNPay, MoMo.',
        image: getAssetUrl('course-selling.jpg'),
    },
    {
        title: 'App gọi xe',
        description: 'Ứng dụng gọi xe đa nền tảng iOS/Android, điều phối thông minh kết nối tài xế với khách. Hỗ trợ nhiều phương thức thanh toán. Định hướng: Flutter front‑end, NodeJS back‑end, Google Maps API; xử lý >5.000 cuốc/ngày, phản hồi <2s.',
        image: getAssetUrl('ride-hailing.png'),
    },
    {
        title: 'Nền tảng ELearning',
        description: 'Nền tảng học trực tuyến: Giáo viên tạo khóa học, tài liệu, bài học; giao bài và theo dõi tiến trình. Học sinh học bài, thảo luận, làm bài/kiểm tra và nhận phản hồi. Quản trị viên quản lý người dùng, phân quyền, theo dõi hoạt động và phân tích dữ liệu.',
        image: getAssetUrl('e-learning_app.jpg'),
    },
    {
        title: 'AI chatbot doanh nghiệp',
        description: 'Chatbot doanh nghiệp hỗ trợ 24/7; trả lời tự động theo tri thức chuyên ngành; học hỏi qua từng tương tác. Quy trình: thu thập dữ liệu, xây dựng kịch bản, huấn luyện chuyên sâu. Công nghệ: NLP Python, RASA; xử lý TV Việt; tích hợp Facebook Messenger, Zalo, Website; phân tích cảm xúc.',
        image: getAssetUrl('ai-chatbots.png'),
    },
    {
        title: 'Hồ sơ y tế thông minh',
        description: 'OCR MyHealth số hóa và quản lý hồ sơ y tế: đơn thuốc, kết quả xét nghiệm, bệnh án. AI + Computer Vision nhận dạng chữ bác sĩ với độ chính xác ~95%. Đã triển khai tại 15 bệnh viện và 50+ phòng khám. Công nghệ: TensorFlow, OpenCV, PyTorch.',
        image: getAssetUrl('all-health-records.webp'),
    },
    {
        title: 'BinanceBot Pro - Trading Bot AI',
        description: 'Tool trading tự động hàng đầu cho sàn Binance với AI trading bot tiên tiến. Tự động hóa giao dịch 24/7, quản lý rủi ro thông minh với stop-loss và take-profit tự động. Ứng dụng mobile iOS/Android để theo dõi portfolio và điều khiển bot mọi lúc mọi nơi. Hơn 100 chỉ báo kỹ thuật và pattern recognition tự động. Công nghệ: Node.js, React Native, Binance API, Machine Learning.',
        image: getAssetUrl('binance_trading_bot.png'),
    },
]

export const partnerLogos: Partner[] = [
    { name: "SkySoft Technologies", src: getAssetUrl('softsky.webp') },
    { name: "Ambassador Cruise", src: getAssetUrl('Ambassador-Cruise-Logo.png') },
    { name: "MoMo", src: getAssetUrl('momo.png') },
    { name: "VNPay", src: getAssetUrl('VNPAY.webp') },
]

export const clientTestimonial = {
    quote: "HLGera đã giúp chúng tôi chuyển đổi toàn bộ vận hành lên nền tảng số, nâng cao hiệu suất, tiết kiệm chi phí và tạo lợi thế cạnh tranh vượt trội trong thị trường công nghệ.",
    author: "Ông Nguyễn Trương Giang",
    role: "Tổng Giám Đốc SkySoft",
}

export const commitments: Commitment[] = [
    {
        title: "Bảo Mật Tuyệt Đối",
        description: "Bảo vệ dữ liệu khách hàng là ưu tiên hàng đầu với hệ thống bảo mật đa lớp và quy trình kiểm soát nghiêm ngặt.",
        iconBg: "bg-[#10B981]",
        iconText: "🛡️"
    },
    {
        title: "Phát Triển Linh Hoạt",
        description: "Áp dụng phương pháp Agile, đảm bảo thích ứng nhanh với yêu cầu thay đổi và theo sát nhu cầu khách hàng.",
        iconBg: "bg-[#F59E0B]",
        iconText: "⚙️"
    },
    {
        title: "Bảo Hành Dài Hạn",
        description: "Cam kết bảo hành 6-12 tháng cho mọi sản phẩm, hỗ trợ kỹ thuật và nâng cấp liên tục.",
        iconBg: "bg-[#0EA5E9]",
        iconText: "✍️"
    },
    {
        title: "Thời Gian Phản Hồi",
        description: "Cam kết phản hồi mọi yêu cầu hỗ trợ trong vòng 2 giờ và khắc phục sự cố trong 24 giờ.",
        iconBg: "bg-[#8B5CF6]",
        iconText: "🖥️"
    },
]

export const standards = [
    "ISO 9001:2015 - Hệ thống quản lý chất lượng",
    "ISO/IEC 27001 - Hệ thống quản lý an toàn thông tin",
    "CMMI Level 4 - Mô hình trưởng thành năng lực tích hợp",
]

export const expertData: ExpertData = {
    name: "Thạc sĩ Đinh Văn Đông",
    role: "Nhà sáng lập & Giám đốc Công nghệ",
    profileImage: getAssetUrl('expert.png'),
    items: [
        { 
            id: 1, 
            title: "Học Vấn", 
            details: [
                "Thạc sĩ Khoa học Máy tính, Đại học Bách Khoa Hà Nội (2018)", 
                "Kỹ sư Công nghệ Thông tin, ĐH Bách Khoa Hà Nội (2014)"
            ] 
        },
        { 
            id: 2, 
            title: "Kinh Nghiệm", 
            details: [
                "15+ năm kinh nghiệm trong lĩnh vực phát triển phần mềm", 
                "Nguyên Vice Academic Director tại TEKY HOLDING (2020-2022)", 
                "Giảng viên Khoa CNTT, BTEC FPT Hà Nội (2022-2025)"
            ] 
        },
        { 
            id: 3, 
            title: "Thành Tựu", 
            details: [
                "Giám đốc trung tâm HLGera, đào tạo về lập trình viên", 
                "Mentor cho các cuộc thi khởi nghiệp, sáng tạo sinh viên", 
                "Diễn giả tại nhiều hội thảo công nghệ quốc tế"
            ] 
        },
    ],
}

export const staffStats: Stat[] = [
    {
        value: '20+',
        title: 'Nhân Sự',
        description: 'Đội ngũ trẻ với độ tuổi trung bình 28, tràn đầy nhiệt huyết và sáng tạo',
    },
    {
        value: '85%',
        title: 'Chuyên Gia Kỹ Thuật',
        description: 'Tỉ lệ nhân sự kỹ thuật có chứng chỉ quốc tế và kinh nghiệm trên 3 năm',
    },
    {
        value: '2',
        title: 'Thạc Sĩ',
        description: 'Các chuyên gia cao cấp với bằng cấp từ các trường đại học hàng đầu',
    },
    {
        value: '24/7',
        title: 'Hỗ Trợ Kỹ Thuật',
        description: 'Đội ngũ kỹ thuật viên luôn sẵn sàng hỗ trợ khách hàng mọi lúc mọi nơi',
    },
]

export const contactItems: ContactItem[] = [
    {
        title: "Trụ Sở Chính",
        details: [
            "208 Đường Vạn Phúc, Vạn Phúc, Hà Đông, Hà Nội, Việt Nam"
        ],
        icon: "🏢"
    },
    {
        title: "Liên Hệ",
        details: [
            "Hotline: +848 1444 8877",
            "hlgcongnghe.vn@gmail.com",
            "Website: https://www.hlg68.com/"
        ],
        icon: "📞"
    },
    {
        title: "Mạng Xã Hội",
        details: [
            "Facebook: www.facebook.com/hlgvietnam68"
        ],
        icon: "🐦"
    },
]



export const pdfProjects = [
    {
        category: "Web App & Ứng dụng doanh nghiệp",
        projects: [
            {
                title: "Hệ thống Quản lý Khách hàng (CRM Platform)",
                description: "Ứng dụng web quản lý khách hàng, hợp đồng, chăm sóc và lịch sử giao dịch.",
                mainFeatures: "Tích hợp AI dự đoán hành vi khách hàng & chatbot chăm sóc tự động.",
                highlights: "Tích hợp công cụ phân tích dữ liệu người dùng và gợi ý sản phẩm bằng AI. Real-time update & thông báo đẩy qua WebSocket.",
                technologies: "ReactJS, Node.js, MongoDB, Express, Docker."
            },
            {
                title: "Nền tảng Bán hàng & Thanh toán Online (Thương mại điện tử)",
                description: "Website thương mại điện tử đa nhà cung cấp, hỗ trợ thanh toán điện tử, ví nội bộ.",
                mainFeatures: "Tích hợp công cụ phân tích dữ liệu người dùng và gợi ý sản phẩm bằng AI.",
                highlights: "Real-time update & thông báo đẩy qua WebSocket.",
                technologies: "Next.js, NestJS, Stripe API, Redis cache."
            },
            {
                title: "Ứng dụng Quản lý Dự án (Project Management WebApp)",
                description: "Giúp doanh nghiệp quản lý công việc, tiến độ, nhân sự theo mô hình Kanban hoặc Agile.",
                mainFeatures: "Tùy chỉnh dashboard theo vai trò người dùng.",
                highlights: "Tùy chỉnh dashboard theo vai trò người dùng.",
                technologies: "Vue.js, Firebase, TailwindCSS, GraphQL."
            },
            {
                title: "Hệ thống Báo cáo dữ liệu động (Dynamic Dashboard System)",
                description: "Nền tảng trực quan hóa dữ liệu doanh nghiệp theo thời gian thực.",
                mainFeatures: "Tùy chỉnh dashboard theo vai trò người dùng.",
                highlights: "Tùy chỉnh dashboard theo vai trò người dùng.",
                technologies: "Python Flask, React, Chart.js, PostgreSQL."
            },
            {
                title: "Hệ thống số hoá hồ sơ y tế OCR",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A"
            }
        ]
    },
    {
        category: "Ứng dụng mobile",
        projects: [
            {
                title: "Ứng dụng đặt vé xem phim (Movie Ticket Booking App)",
                description: "Ứng dụng giúp người dùng tra cứu lịch chiếu, chọn rạp, đặt vé, và thanh toán trực tuyến.",
                mainFeatures: "Giao diện module hóa: người dùng chọn tính năng mình quan tâm. Thanh toán nhiều dịch vụ trong 1 app. Tích hợp bản đồ (Google Maps API) hiển thị dịch vụ gần bạn. Hệ thống tích điểm, phần thưởng & khuyến mãi chéo. Quét mã QR online/offline.",
                highlights: "N/A",
                technologies: "N/A"
            },
            {
                title: "Ứng dụng đặt vé show ca nhạc & sự kiện (Event & Concert Booking App)",
                description: "Nền tảng đặt vé cho các buổi biểu diễn âm nhạc, hội nghị, hội chợ, lễ hội...",
                mainFeatures: "Giao diện module hóa: người dùng chọn tính năng mình quan tâm. Thanh toán nhiều dịch vụ trong 1 app. Tích hợp bản đồ (Google Maps API) hiển thị dịch vụ gần bạn. Hệ thống tích điểm, phần thưởng & khuyến mãi chéo. Quét mã QR online/offline.",
                highlights: "N/A",
                technologies: "N/A"
            },
            {
                title: "Ứng dụng tiện ích đô thị (SmartLife / City Service App)",
                description: "Ứng dụng tổng hợp nhiều dịch vụ tiện ích: thanh toán hóa đơn, đặt taxi, gọi sửa chữa, mua vé xem phim, tra cứu lịch điện nước, v.v.",
                mainFeatures: "Giao diện module hóa: người dùng chọn tính năng mình quan tâm. Thanh toán nhiều dịch vụ trong 1 app. Tích hợp bản đồ (Google Maps API) hiển thị dịch vụ gần bạn. Hệ thống tích điểm, phần thưởng & khuyến mãi chéo. Quét mã QR online/offline.",
                highlights: "N/A",
                technologies: "N/A"
            },
            {
                title: "Ứng dụng quản lý vé & check-in QR (Ticket Management & QR Scanner)",
                description: "Ứng dụng cho nhân viên sự kiện, dùng để quét và xác thực vé nhanh chóng.",
                mainFeatures: "Phát hiện vé giả, vé đã sử dụng. Kết nối real-time với server. Dashboard cho ban tổ chức xem lượt check-in theo thời gian thực. Giao hàng nội khu (trong rạp hoặc khu sự kiện). Tích hợp thanh toán nhanh & theo dõi đơn hàng.",
                highlights: "Token loyalty points để quy đổi ưu đãi, tạo nền tảng cho hệ sinh thái dịch vụ.",
                technologies: "Kotlin / Flutter, Firebase Authentication, Blockchain Layer 2 (nếu muốn token hóa điểm thưởng)."
            },
            {
                title: "Ứng dụng đặt đồ ăn, cà phê, dịch vụ tại sự kiện (Event Food & Service Ordering)",
                description: "Cho phép người dùng tại rạp phim hoặc show âm nhạc đặt đồ ăn, đồ uống ngay trong app.",
                mainFeatures: "Quản lý menu động cho từng sự kiện. Nạp tiền, rút tiền, lưu phương thức thanh toán. Lưu vé điện tử & giao dịch. Tích điểm, xếp hạng thành viên. Giao diện module plug-in (microservices). Tích hợp API từ các đối tác (Traveloka, CGV, TicketBox...).",
                highlights: "Tự động gợi ý combo phù hợp theo sự kiện và lịch chiếu.",
                technologies: "N/A"
            },
            {
                title: "Ứng dụng ví điện tử mini (E-Wallet & Loyalty App)",
                description: "Ứng dụng ví điện tử mini (E-Wallet & Loyalty App).",
                mainFeatures: "Quản lý menu động cho từng sự kiện. Nạp tiền, rút tiền, lưu phương thức thanh toán. Lưu vé điện tử & giao dịch. Tích điểm, xếp hạng thành viên. Giao diện module plug-in (microservices). Tích hợp API từ các đối tác (Traveloka, CGV, TicketBox...).",
                highlights: "N/A",
                technologies: "N/A"
            },
            {
                title: "Ứng dụng đặt vé toàn năng (All-in-One Booking App)",
                description: "App tích hợp đặt vé phim, show, du lịch, taxi, khách sạn – mô hình 'Super App mini'.",
                mainFeatures: "Chatbot hỗ trợ khách hàng 24/7.",
                highlights: "N/A",
                technologies: "N/A"
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
                technologies: "N/A"
            },
            {
                title: "Hệ thống Quản lý Chuỗi cung ứng (Supply Chain on Blockchain)",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A"
            },
            {
                title: "Smart Contract Audit Tool",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A"
            },
            {
                title: "Crypto Portfolio Tracker",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A"
            },
            {
                title: "Hệ thống định giá BĐS sử dụng công nghệ AI",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A"
            },
            {
                title: "Hệ thống sử dụng blockchain ghi nhận và thanh toán trên nền tảng cloud server.",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A"
            },
            {
                title: "Cổng thanh toán USDT",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A"
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
                technologies: "N/A"
            },
            {
                title: "Ứng dụng Kiểm thử xâm nhập tự động (Auto Pentest Platform)",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A"
            },
            {
                title: "Passwordless Authentication System",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A"
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
                technologies: "Scikit-learn, XGBoost, PowerBI."
            },
            {
                title: "Hệ thóng nhận DeepFake thay đổi khuôn mặt",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A"
            },
            {
                title: "Hệ thống chấm công tự động sử dụng xác thực khuôn mặt và định vị ngừoi dùng",
                description: "N/A",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "N/A"
            },
            {
                title: "Chatbot hỗ trợ khách hàng AI (AI Customer Support Chatbot)",
                description: "Chatbot tự động trả lời câu hỏi và xử lý yêu cầu khách hàng.",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "Python, NLP (spaCy, Transformers), FastAPI."
            },
            {
                title: "AI Dự báo doanh thu & hành vi khách hàng",
                description: "Dự báo doanh số và phân loại khách hàng dựa trên lịch sử mua hàng.",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "Scikit-learn, XGBoost, PowerBI."
            },
            {
                title: "AI Nhận diện khuôn mặt & hành vi",
                description: "Ứng dụng nhận diện nhân viên, khách hàng, hoặc phát hiện hành vi bất thường.",
                mainFeatures: "N/A",
                highlights: "N/A",
                technologies: "OpenCV, TensorFlow, YOLOv8, Flask."
            }
        ]
    }
];



