import React from 'react';
import { commitments, standards } from "../constants";
import { FadeUp } from './Anim'
import { useLang } from '../lang'

const QualityCommitment: React.FC = () => {
    const bgColor = 'bg-gradient-to-br from-[#fc4a1a] to-[#f7b733]';
    const titleColor = 'text-black';

    const { lang } = useLang()
    return (
        <section id='Commit' className={`px-4 py-5 sm:px-6  md:px-8 md:py-16 lg:p-20 overflow-x-hidden w-[80%] bg-white`}>
            <div className="">

                <header className="flex justify-between items-start mb-8 sm:mb-10 md:mb-12">
                    <h1 className={`text-3xl sm:text-4xl md:text-5xl leading-tight font-serif font-medium break-words hyphens-auto ${titleColor}`}>
                        {lang === 'en' ? 'Quality Commitment' : lang === 'vi' ? 'Cam Kết Chất Lượng' : '质量承诺'}
                    </h1>
                </header>

                <FadeUp className="flex flex-col lg:flex-row gap-12 lg:gap-20 bg-white p-10 rounded-xl">

                    <div className="lg:w-1/2 space-y-8 lg:border-r border-white/30 g:pr-10  ">
                        {commitments.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex justify-center items-center text-white font-bold ${item.iconBg}`}>
                                    {item.iconText}
                                </div>

                                <div className="flex-1 pt-0.5">
                                    <h2 className="text-lg font-bold text-gray-700 mb-1 break-words hyphens-auto">
                                        {lang === 'en' ? (
                                            item.title === 'Bảo Mật Tuyệt Đối' ? 'Absolute Security' :
                                                item.title === 'Phát Triển Linh Hoạt' ? 'Agile Development' :
                                                    item.title === 'Bảo Hành Dài Hạn' ? 'Long-term Warranty' :
                                                        item.title === 'Thời Gian Phản Hồi' ? 'Response Time' : item.title
                                        ) : lang === 'vi' ? item.title : (
                                            item.title === 'Bảo Mật Tuyệt Đối' ? '绝对安全' :
                                                item.title === 'Phát Triển Linh Hoạt' ? '敏捷开发' :
                                                    item.title === 'Bảo Hành Dài Hạn' ? '长期保修' :
                                                        item.title === 'Thời Gian Phản Hồi' ? '响应时间' : item.title
                                        )}
                                    </h2>
                                    <p className="text-sm text-black break-words hyphens-auto">
                                        {lang === 'en' ? (
                                            item.title === 'Bảo Mật Tuyệt Đối' ? 'Protecting customer data is our top priority with multi-layer security and rigorous controls.' :
                                                item.title === 'Phát Triển Linh Hoạt' ? 'Agile methods ensure rapid adaptation to changes and customer needs.' :
                                                    item.title === 'Bảo Hành Dài Hạn' ? '6–12 month warranty for every product, with ongoing technical support and upgrades.' :
                                                        item.title === 'Thời Gian Phản Hồi' ? 'We respond to support requests within 2 hours and resolve incidents within 24 hours.' : item.description
                                        ) : lang === 'vi' ? item.description : (
                                            item.title === 'Bảo Mật Tuyệt Đối' ? '通过多层安全和严格控制保护客户数据是我们的首要任务。' :
                                                item.title === 'Phát Triển Linh Hoạt' ? '敏捷方法确保快速适应变化和客户需求。' :
                                                    item.title === 'Bảo Hành Dài Hạn' ? '每个产品提供6-12个月保修，并提供持续的技术支持和升级。' :
                                                        item.title === 'Thời Gian Phản Hồi' ? '我们在2小时内响应支持请求，并在24小时内解决事件。' : item.description
                                        )}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="lg:w-1/2 pt-4 lg:pt-0">
                        <p className="text-base text-black mb-4 break-words hyphens-auto">
                            {lang === 'en' ? 'HLGera adopts international standards in software development:' : lang === 'vi' ? 'HLGera áp dụng các tiêu chuẩn quốc tế trong quy trình phát triển phần mềm:' : 'HLGera在软件开发中采用国际标准：'}
                        </p>

                        <ul className="list-disc pl-5 space-y-2 text-black break-words hyphens-auto">
                            {standards.map((standard, index) => (
                                <li key={index} className="text-sm">
                                    {lang === 'en' && standard.startsWith('ISO 9001') && 'ISO 9001:2015 - Quality management system'}
                                    {lang === 'en' && standard.startsWith('ISO/IEC 27001') && 'ISO/IEC 27001 - Information security management'}
                                    {lang === 'en' && standard.startsWith('CMMI') && 'CMMI Level 4 - Capability Maturity Model Integration'}
                                    {lang === 'vi' && standard}
                                    {lang === 'zh' && standard.startsWith('ISO 9001') && 'ISO 9001:2015 - 质量管理体系'}
                                    {lang === 'zh' && standard.startsWith('ISO/IEC 27001') && 'ISO/IEC 27001 - 信息安全管理体系'}
                                    {lang === 'zh' && standard.startsWith('CMMI') && 'CMMI Level 4 - 能力成熟度模型集成'}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
};

export default QualityCommitment;