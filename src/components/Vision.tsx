import { FadeUp } from './Anim'
import { useLang } from '../lang'

const Vision = () => {
    const { lang } = useLang()
    return (
        <section id="vision" className="pt-20 pb-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <FadeUp className="rounded-3xl border border-[#E3D5B5] bg-[#F2E4C8] shadow-sm p-8 sm:p-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">{lang === 'en' ? 'Vision' : lang === 'vi' ? 'Tầm Nhìn' : '愿景'}</h2>
                    <div className="mt-6 text-center">
                        <p className="mx-auto max-w-5xl text-xl sm:text-2xl leading-relaxed font-serif text-[#3D3A2C]">
                            {lang === 'en' ? 'Become a leading technology company in Vietnam and reach Southeast Asia in software development and AI applications by 2030.' : lang === 'vi' ? 'Trở thành công ty công nghệ hàng đầu Việt Nam và vươn tầm khu vực Đông Nam Á trong lĩnh vực phát triển phần mềm và ứng dụng trí tuệ nhân tạo vào năm 2030.' : '到2030年，成为越南领先的科技公司，在软件开发和人工智能应用方面扩展到东南亚。'}
                        </p>
                    </div>

                    <div className="mt-10 grid gap-8 lg:grid-cols-2">
                        <div className="rounded-[32px] border-[3px] border-[#5C6D3B] bg-[#F7ECD3] p-6 sm:p-8">
                            <h3 className="text-2xl font-serif font-semibold text-[#3D3A2C]">{lang === 'en' ? 'Strategic Directions' : lang === 'vi' ? 'Định Hướng Chiến Lược' : '战略方向'}</h3>
                            <ul className="mt-6 space-y-3 text-base text-[#3D3A2C]">
                                <li className="list-disc ml-6">{lang === 'en' ? 'Invest heavily in R&D for AI and Blockchain' : lang === 'vi' ? 'Đầu tư mạnh mẽ vào nghiên cứu và phát triển công nghệ AI, Blockchain' : '大力投资人工智能和区块链的研发'}</li>
                                <li className="list-disc ml-6">{lang === 'en' ? 'Expand to ASEAN markets from 2025' : lang === 'vi' ? 'Mở rộng thị trường sang các nước ASEAN từ năm 2025' : '从2025年开始扩展到东盟市场'}</li>
                                <li className="list-disc ml-6">{lang === 'en' ? 'Develop a comprehensive digital product ecosystem for SMEs' : lang === 'vi' ? 'Phát triển hệ sinh thái sản phẩm số toàn diện cho doanh nghiệp vừa và nhỏ' : '为中小企业开发全面的数字产品生态系统'}</li>
                            </ul>
                        </div>
                        <div className="rounded-[32px] border-[3px] border-[#5C6D3B] bg-[#F7ECD3] p-6 sm:p-8">
                            <h3 className="text-2xl font-serif font-semibold text-[#3D3A2C]">{lang === 'en' ? 'Desired Position' : lang === 'vi' ? 'Vị Thế Mong Muốn' : '目标地位'}</h3>
                            <ul className="mt-6 space-y-3 text-base text-[#3D3A2C]">
                                <li className="list-disc ml-6">{lang === 'en' ? 'Top 10 software development companies in Vietnam' : lang === 'vi' ? 'Top 10 công ty phát triển phần mềm tại Việt Nam' : '越南前10大软件开发公司'}</li>
                                <li className="list-disc ml-6">{lang === 'en' ? 'Leading in AI applications for healthcare and education' : lang === 'vi' ? 'Dẫn đầu về ứng dụng AI trong lĩnh vực y tế và giáo dục' : '在医疗和教育领域的人工智能应用方面处于领先地位'}</li>
                                <li className="list-disc ml-6">{lang === 'en' ? 'Trusted partner of global tech corporations' : lang === 'vi' ? 'Đối tác tin cậy của các tập đoàn công nghệ quốc tế' : '全球科技公司的可信合作伙伴'}</li>
                            </ul>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    )
}

export default Vision
