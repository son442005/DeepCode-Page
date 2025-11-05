export type Feature = {
    title: string
    description: string
    icon: string
}

export type Testimonial = {
    quote: string
    author: string
    role: string
}
export type Project = {
    title: string
    description: string
    image: string // path under public/
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
        title: 'Tư vấn & Chiến lược',
        description: 'Đồng hành từ ý tưởng tới chiến lược công nghệ phù hợp.',
        icon: 'strategy',
    },
    {
        title: 'Thiết kế & Phát triển',
        description: 'Xây dựng sản phẩm hiệu suất cao, trải nghiệm mượt mà.',
        icon: 'dev',
    },
    {
        title: 'Triển khai & Vận hành',
        description: 'Cloud-native, CI/CD, bảo mật, theo dõi và tối ưu liên tục.',
        icon: 'deploy',
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
    { label: 'Khách hàng', href: '#testimonials' },
    { label: 'Liên hệ', href: '#contact' },
]


export const projects: Project[] = [
    {
        title: 'Nền tảng bán khoá học online',
        description: 'Là hệ thống kết nối giữa người sáng tạo nội dung giáo dục và đội ngũ tiếp thị liên kết',
        image: '/project-1.png',
    },
    {
        title: 'App gọi xe',
        description: 'Ứng dụng đa nền tảng trên cả IOS và Android, hệ thống điều phối thông minh kết nối tài xế và khách hàng',
        image: '/project-2.png',
    },
    {
        title: 'Nền tảng ELearning',
        description: 'Hệ thống học tập trực tuyến tích hợp đầy đủ tính năng từ quản lý nội dung, tương tác học viên đến đánh giá học tập',
        image: '/project-3.png',
    },
    {
        title: 'AI chatbot doanh nghiệp',
        description: 'Hỗ trợ khách hàng 24/7, tự động trả lời theo kiến thức ngành và học hỏi liên tục. Được huấn luyện từ dữ liệu doanh nghiệp, kịch bản chuyên ngành và mô hình NLP',
        image: '/project-4.png',
    },
    {
        title: 'Hồ sơ ý tế thông minh',
        description: 'OCR MyHealth giúp số hoá quản lý hồ sơ y tế, từ đơn thuốc đến phiếu xét nghiệm và hồ sơ bệnh án',
        image: '/project-5.png',
    },
]
export const partnerLogos = [
  { name: "SkySoft Technologies", src: "softsky.webp" },
  { name: "Ambassador Cruise", src: "Ambassador-Cruise-Logo.png" },
  { name: "MoMo", src: "momo.png" },
  { name: "VNPay", src: "VNPAY.webp" },
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
    profileImage: "/project-6.png", 
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