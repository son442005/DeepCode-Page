export type Feature = {
    title: string
    description: string
    icon: string
    color?: string
}

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
        color: '#E0F2FE',
    },
    {
        title: 'Ứng Dụng Di Động',
        description: 'Phát triển ứng dụng iOS/Android đa nền tảng với UI/UX trực quan.',
        icon: 'mobile',
        color: '#E9FBE7',
    },
    {
        title: 'Trí Tuệ Nhân Tạo (AI)',
        description: 'Tư vấn và triển khai AI/ML, chatbot, OCR, khai phá dữ liệu.',
        icon: 'ai',
        color: '#FEF3C7',
    },
    {
        title: 'Blockchain',
        description: 'Xây dựng smart contract, ví, DApp và tích hợp chuỗi khối cho sản phẩm.',
        icon: 'blockchain',
        color: '#FCE7F3',
    },
]

export const stats = [
    { label: 'Dự án hoàn thành', value: '50+' },
    { label: 'Khách hàng doanh nghiệp', value: '30+' },
    { label: 'Tỉ lệ hài lòng', value: '98%' },
]

export const testimonials: Testimonial[] = [
    {
        quote: 'Deepcode giúp chúng tôi tăng tốc ra mắt sản phẩm chỉ trong 8 tuần.',
        author: 'Nguyễn Văn A',
        role: 'CTO, Acme Corp',
    },
]

export const nav = [
    { label: 'Giới thiệu', href: '#about' },
    { label: 'Tầm nhìn', href: '#vision' },
    { label: 'Dịch vụ', href: '#features' },
    { label: 'Dự án', href: '#showcase' },
    { label: 'Đôi Ngũ', href: '#ExpertProfile' },
    { label: 'Nhân Sự', href: '#StaffStats' },
    { label: 'Cam Kết', href: '#Commit' },
    { label: 'Khách hàng', href: '#ClientsPartners' },
]


export const projects: Project[] = [
    {
        title: 'Nền tảng bán khoá học online',
        description: 'Cosale.vn kết nối chuyên gia, nhà sáng tạo nội dung giáo dục và cộng tác viên affiliate; hỗ trợ học viên trực tuyến. Công nghệ: Back‑end Laravel, Front‑end VueJS + Bootstrap, CSDL MySQL/Redis; cổng thanh toán VNPay, MoMo.',
        image: `${import.meta.env.BASE_URL}project-1.png`,
    },
    {
        title: 'App gọi xe',
        description: 'Ứng dụng gọi xe đa nền tảng iOS/Android, điều phối thông minh kết nối tài xế với khách. Hỗ trợ nhiều phương thức thanh toán. Định hướng: Flutter front‑end, NodeJS back‑end, Google Maps API; xử lý >5.000 cuốc/ngày, phản hồi <2s.',
        image: `${import.meta.env.BASE_URL}project-2.png`,
    },
    {
        title: 'Nền tảng ELearning',
        description: 'Nền tảng học trực tuyến: Giáo viên tạo khóa học, tài liệu, bài học; giao bài và theo dõi tiến trình. Học sinh học bài, thảo luận, làm bài/kiểm tra và nhận phản hồi. Quản trị viên quản lý người dùng, phân quyền, theo dõi hoạt động và phân tích dữ liệu.',
        image: `${import.meta.env.BASE_URL}project-3.png`,
    },
    {
        title: 'AI chatbot doanh nghiệp',
        description: 'Chatbot doanh nghiệp hỗ trợ 24/7; trả lời tự động theo tri thức chuyên ngành; học hỏi qua từng tương tác. Quy trình: thu thập dữ liệu, xây dựng kịch bản, huấn luyện chuyên sâu. Công nghệ: NLP Python, RASA; xử lý TV Việt; tích hợp Facebook Messenger, Zalo, Website; phân tích cảm xúc.',
        image: `${import.meta.env.BASE_URL}project-4.png`,
    },
    {
        title: 'Hồ sơ ý tế thông minh',
        description: 'OCR MyHealth số hóa và quản lý hồ sơ y tế: đơn thuốc, kết quả xét nghiệm, bệnh án. AI + Computer Vision nhận dạng chữ bác sĩ với độ chính xác ~95%. Đã triển khai tại 15 bệnh viện và 50+ phòng khám. Công nghệ: TensorFlow, OpenCV, PyTorch.',
        image: `${import.meta.env.BASE_URL}project-5.png`,
    },
]
export const partnerLogos = [
    { name: "SkySoft Technologies", src: `${import.meta.env.BASE_URL}softsky.webp` },
    { name: "Ambassador Cruise", src: `${import.meta.env.BASE_URL}Ambassador-Cruise-Logo.png` },
    { name: "MoMo", src: `${import.meta.env.BASE_URL}momo.png` },
    { name: "VNPay", src: `${import.meta.env.BASE_URL}VNPAY.webp` },
];


export const clientTestimonial = {
    quote:
        "DeepCode đã giúp chúng tôi chuyển đổi toàn bộ vận hành lên nền tảng số, nâng cao hiệu suất, tiết kiệm chi phí và tạo lợi thế cạnh tranh vượt trội trong thị trường công nghệ.",
    author: "Ông Nguyễn Trương Giang",
    role: "Tổng Giám Đốc SkySoft",
};

export const commitments = [
    {
        title: "Bảo Mật Tuyệt Đối",
        description: "Bảo vệ dữ liệu khách hàng là ưu tiên hàng đầu với hệ thống bảo mật đa lớp và quy trình kiểm soát nghiêm ngặt.",
        iconBg: "bg-[#8BC34A]",
        iconText: "🛡️"
    },
    {
        title: "Phát Triển Linh Hoạt",
        description: "Áp dụng phương pháp Agile, đảm bảo thích ứng nhanh với yêu cầu thay đổi và theo sát nhu cầu khách hàng.",
        iconBg: "bg-[#FFC107]",
        iconText: "⚙️"
    },
    {
        title: "Bảo Hành Dài Hạn",
        description: "Cam kết bảo hành 6-12 tháng cho mọi sản phẩm, hỗ trợ kỹ thuật và nâng cấp liên tục.",
        iconBg: "bg-[#FF9800]",
        iconText: "✍️"
    },
    {
        title: "Thời Gian Phản Hồi",
        description: "Cam kết phản hồi mọi yêu cầu hỗ trợ trong vòng 2 giờ và khắc phục sự cố trong 24 giờ.",
        iconBg: "bg-[#4CAF50]",
        iconText: "🖥️"
    },
];

export const standards = [
    "ISO 9001:2015 - Hệ thống quản lý chất lượng",
    "ISO/IEC 27001 - Hệ thống quản lý an toàn thông tin",
    "CMMI Level 4 - Mô hình trưởng thành năng lực tích hợp",
];


export const expertData = {
    name: "Thạc sĩ Đinh Văn Đông",
    role: "Nhà sáng lập & Giám đốc Công nghệ",
    profileImage: `${import.meta.env.BASE_URL}project-6.png`,
    items: [
        { id: 1, title: "Học Vấn", details: ["Thạc sĩ Khoa học Máy tính, Đại học Bách Khoa Hà Nội (2018)", "Kỹ sư Công nghệ Thông tin, ĐH Bách Khoa Hà Nội (2014)"] },
        { id: 2, title: "Kinh Nghiệm", details: ["15+ năm kinh nghiệm trong lĩnh vực phát triển phần mềm", "Nguyên Vice Academic Director tại TEKY HOLDING (2020-2022)", "Giảng viên Khoa CNTT, BTEC FPT Hà Nội (2022-2025)"] },
        { id: 3, title: "Thành Tựu", details: ["Giám đốc trung tâm DeepCode, đào tạo về lập trình viên", "Mentor cho các cuộc thi khởi nghiệp, sáng tạo sinh viên", "Diễn giả tại nhiều hội thảo công nghệ quốc tế"] },
    ],
};


export const staffStats = [
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
];

export const contactItems = [
    {
        title: "Trụ Sở Chính",
        details: [
            "Tầng 2, nhà 2.1B5, khu CT2, KĐT thành phố giao lưu, 234 đường, Phường Phú Diễn, TP Hà Nội, Việt Nam"
        ],
        icon: "🏢"
    },
    {
        title: "Liên Hệ",
        details: [
            "Hotline: +84965741.051",
            "Email: info@deepcode.vn",
            "Website: www.deepcode.vn"
        ],
        icon: "📞"
    },
    {
        title: "Mạng Xã Hội",
        details: [
            "Facebook: fb/deepcode.vn"
        ],
        icon: "🐦"
    },
];