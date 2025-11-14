// src/components/Features.tsx

// Import ICONS cùng với features từ constants
import { features, ICONS } from '../constants';
import { useLang } from '../lang';
import { FadeUp, SlideIn } from './Anim';

// Component để hiển thị biểu tượng
const Icon = ({ name }: { name: string }) => {
  const icon = ICONS[name]; // Sử dụng ICONS đã import
  if (!icon) {
    // Trả về một placeholder và ghi log cảnh báo nếu biểu tượng không tìm thấy
    console.warn(`Icon '${name}' not found in ICONS object. Check constants.ts and public folder.`);
    return <div className="h-6 w-6 bg-slate-700" />;
  }
  return <img src={icon.src} alt={icon.alt} className="h-36 w-36 object-contain" />;
};

export const Features = () => {
  const { lang } = useLang(); // Sử dụng hook ngôn ngữ

  // Hàm để lấy tiêu đề dịch vụ dựa trên icon và ngôn ngữ
  const getTitle = (icon: string, defaultTitle: string) => {
    if (lang === 'en') {
      switch (icon) {
        case 'web': return 'Website Development';
        case 'mobile': return 'Mobile Apps';
        case 'ai': return 'Artificial Intelligence (AI)';
        case 'blockchain': return 'Blockchain';
        default: return defaultTitle;
      }
    } else if (lang === 'zh') {
      switch (icon) {
        case 'web': return '网站开发';
        case 'mobile': return '移动应用';
        case 'ai': return '人工智能 (AI)';
        case 'blockchain': return '区块链';
        default: return defaultTitle;
      }
    }
    // Ngôn ngữ mặc định (ví dụ: tiếng Việt) hoặc nếu không có bản dịch cụ thể
    switch (icon) {
      case 'web': return 'Phát triển Website';
      case 'mobile': return 'Ứng dụng Di động';
      case 'ai': return 'Trí tuệ Nhân tạo (AI)';
      case 'blockchain': return 'Blockchain';
      default: return defaultTitle;
    }
  };

  // Hàm để lấy mô tả dịch vụ dựa trên icon và ngôn ngữ
  const getDescription = (icon: string, defaultDescription: string) => {
    if (lang === 'en') {
      switch (icon) {
        case 'web': return 'Designing and building modern websites with optimized UX, SEO and performance.';
        case 'mobile': return 'Developing cross-platform iOS/Android apps with intuitive UI/UX.';
        case 'ai': return 'Consulting and implementing AI/ML, chatbots, OCR and data mining.';
        case 'blockchain': return 'Building smart contracts, wallets, DApps and blockchain integrations.';
        default: return defaultDescription;
      }
    } else if (lang === 'zh') {
      switch (icon) {
        case 'web': return '设计和构建具有优化用户体验、SEO和性能的现代网站。';
        case 'mobile': return '开发具有直观UI/UX的跨平台iOS/Android应用。';
        case 'ai': return '咨询和实施AI/ML、聊天机器人、OCR和数据挖掘。';
        case 'blockchain': return '构建智能合约、钱包、DApp和区块链集成。';
        default: return defaultDescription;
      }
    }
    // Ngôn ngữ mặc định (ví dụ: tiếng Việt) hoặc nếu không có bản dịch cụ thể
    switch (icon) {
      case 'web': return 'Thiết kế và xây dựng các trang web hiện đại với UX, SEO và hiệu suất tối ưu.';
      case 'mobile': return 'Phát triển ứng dụng iOS/Android đa nền tảng với UI/UX trực quan.';
      case 'ai': return 'Tư vấn và triển khai AI/ML, chatbot, OCR và khai thác dữ liệu.';
      case 'blockchain': return 'Xây dựng hợp đồng thông minh, ví, DApp và tích hợp blockchain.';
      default: return defaultDescription;
    }
  };

  return (
    <section id="features" className="w-full md:w-[80%] bg-white mt-0">
      <div className="mx-auto max-w-7xl p-9 sm:px-6 lg:px-8 ">
        <FadeUp className="max-w-2xl text-black">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold">
            {lang === 'en' ? 'Services' : lang === 'vi' ? 'Dịch vụ' : '服务'}
          </h2>
          <p className="mt-2 sm:mt-3 text-xm sm:text-base items-center border-b-2 border-secondary/50 pb-4">
            {lang === 'en'
              ? 'Comprehensive technology solutions for businesses.'
              : lang === 'vi'
                ? 'Giải pháp công nghệ toàn diện cho doanh nghiệp.'
                : '为企业提供全面的技术解决方案。'}
          </p>
        </FadeUp>
        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2">
          {features.map((f, index) => (
            <SlideIn
              key={f.title}
              direction={index % 2 === 0 ? 'left' : 'right'}
              className="feature-block  p-4 sm:p-6  ring-1 ring-slate-200/50 bg-blue-50"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Điều chỉnh kích thước của div bao quanh icon bằng các lớp Tailwind hợp lệ */}
                <div className="flex 
                  h-16 w-16   
                  sm:h-20 sm:w-20
                  lg:h-24 lg:w-24 
                  items-center justify-centerring-1 ring-slate-200/50 "
                >
                  <Icon name={f.icon} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                  {getTitle(f.icon, f.title)}
                </h3>
              </div>
              <p className="mt-2 sm:mt-3 text-slate-800 text-xm sm:text-base">
                {getDescription(f.icon, f.description)}
              </p>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
};