import React from 'react';
import { expertData } from "../constants";
import { useLang } from '../lang'
interface ExpertProfileTailwindProps { }
const ExpertProfileTailwind: React.FC<ExpertProfileTailwindProps> = () => {
    const { lang } = useLang()
    const name = lang === 'en' ? 'MSc. Dinh Van Dong' : lang === 'vi' ? expertData.name : '丁文东硕士'
    const role = lang === 'en' ? 'Founder & Chief Technology Officer' : lang === 'vi' ? expertData.role : '创始人兼首席技术官'
    const titleMap: Record<string, Record<string, string>> = {
        'Học Vấn': { en: 'Education', zh: '教育背景' },
        'Kinh Nghiệm': { en: 'Experience', zh: '经验' },
        'Thành Tựu': { en: 'Achievements', zh: '成就' },
    }
    const translateDetail = (d: string): string => {
        if (lang === 'vi') return d
        if (lang === 'en') {
            return d
                .replace('Thạc sĩ Khoa học Máy tính, Đại học Bách Khoa Hà Nội (2018)', 'MSc in Computer Science, Hanoi University of Science and Technology (2018)')
                .replace('Kỹ sư Công nghệ Thông tin, ĐH Bách Khoa Hà Nội (2014)', 'BSc in Information Technology, HUST (2014)')
                .replace('15+ năm kinh nghiệm trong lĩnh vực phát triển phần mềm', '15+ years of experience in software development')
                .replace('Nguyên Vice Academic Director tại TEKY HOLDING (2020-2022)', 'Former Vice Academic Director at TEKY HOLDING (2020-2022)')
                .replace('Giảng viên Khoa CNTT, BTEC FPT Hà Nội (2022-2025)', 'Lecturer, IT Faculty, BTEC FPT Hanoi (2022-2025)')
                .replace('Giám đốc trung tâm DeepCode, đào tạo về lập trình viên', 'Director of DeepCode Training Center for Software Engineering')
                .replace('Mentor cho các cuộc thi khởi nghiệp, sáng tạo sinh viên', 'Mentor for startup and student innovation competitions')
                .replace('Diễn giả tại nhiều hội thảo công nghệ quốc tế', 'Speaker at various international tech conferences')
        }
        if (lang === 'zh') {
            return d
                .replace('Thạc sĩ Khoa học Máy tính, Đại học Bách Khoa Hà Nội (2018)', '计算机科学硕士，河内科技大学（2018年）')
                .replace('Kỹ sư Công nghệ Thông tin, ĐH Bách Khoa Hà Nội (2014)', '信息技术工程师，河内科技大学（2014年）')
                .replace('15+ năm kinh nghiệm trong lĩnh vực phát triển phần mềm', '在软件开发领域拥有15年以上经验')
                .replace('Nguyên Vice Academic Director tại TEKY HOLDING (2020-2022)', '前TEKY HOLDING学术副总监（2020-2022年）')
                .replace('Giảng viên Khoa CNTT, BTEC FPT Hà Nội (2022-2025)', 'BTEC FPT河内信息技术学院讲师（2022-2025年）')
                .replace('Giám đốc trung tâm DeepCode, đào tạo về lập trình viên', 'DeepCode培训中心主任，软件工程培训')
                .replace('Mentor cho các cuộc thi khởi nghiệp, sáng tạo sinh viên', '创业和大学生创新竞赛导师')
                .replace('Diễn giả tại nhiều hội thảo công nghệ quốc tế', '多个国际技术会议演讲者')
        }
        return d
    }
    return (
        <section id="ExpertProfile" aria-label="About Us">
            <div className="shadow-3d-lg rounded-3xl p-16 font-sans bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800 ">

                <header className="flex justify-between  ">
                    <h1 className="text-4xl font-bold text-gray-700">{lang === 'en' ? 'Expert Team' : lang === 'vi' ? 'Đội Ngũ Chuyên Gia' : '专家团队'}</h1>
                </header>

                <section className="flex flex-col lg:flex-row lg:gap-16  item-center mt-10">

                    <div className="lg:w-1/3 w-full">
                        <img
                            src={expertData.profileImage}
                            alt={name}
                            className="shadow-3d-lg shadow-3d-hover mt-10 w-full h-auto object-cover block border border-gray-300 text-center "
                        />
                    </div>

                    <div className="lg:w-2/3 w-full pt-5 relative">
                        <h2 className="text-3xl font-bold text-gray-800 mt-0">{name}</h2>
                        <p className="text-lg text-gray-600 mb-8">{role}</p>

                        <div className="flex flex-col gap-8 pl-10 relative">

                            <div className={` absolute top-4 bottom-4 left-[56px] w-0.5 bg-primary z-0`}></div>

                            {expertData.items.map((item, index) => (
                                <div key={item.id} className="flex  gap-5 relative z-10 items-center">

                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-bold text-lg flex justify-center items-center mt-1`}>
                                        {item.id}
                                    </div>

                                    <div className="flex-1 pt-1 ">
                                        <h3 className={`text-xl font-bold text-primary mb-1`}>{lang === 'en' ? (titleMap[item.title]?.en || item.title) : lang === 'vi' ? item.title : (titleMap[item.title]?.zh || item.title)}</h3>
                                        {item.details.map((detail, detailIndex) => (
                                            <p key={detailIndex} className="text-sm leading-relaxed mb-1">
                                                <span dangerouslySetInnerHTML={{
                                                    __html: translateDetail(detail)
                                                        .replace(
                                                            /(MSc in Computer Science|BSc in Information Technology|15\+ years of experience|Former Vice Academic Director|Lecturer|Director of DeepCode Training Center|Mentor|Speaker|计算机科学硕士|信息技术工程师|15年以上经验|前TEKY HOLDING学术副总监|讲师|DeepCode培训中心主任|导师|演讲者)/g,
                                                            '<strong>$1</strong>'
                                                        )
                                                }} />
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default ExpertProfileTailwind;