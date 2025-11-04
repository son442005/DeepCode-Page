import React from 'react';
import {expertData} from "../constants";
interface ExpertProfileTailwindProps {}
const ExpertProfileTailwind: React.FC<ExpertProfileTailwindProps> = () => {
    return (
        <div className="max-w-7xl mx-auto p-8 font-sans bg-stone-50 text-gray-800">
            
            <header className="flex justify-between items-start mb-10">
                <h1 className="text-4xl font-bold text-gray-700">Đội Ngũ Chuyên Gia</h1>
            </header>
            
            <section className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

                <div className="lg:w-1/3 w-full">
                    <img 
                        src={expertData.profileImage} 
                        alt={expertData.name} 
                        className=" mt-10 w-full h-auto object-cover block shadow-lg rounded-xl border border-gray-300 text-center "
                    />
                </div>

                <div className="lg:w-2/3 w-full pt-5 relative">
                    <h2 className="text-3xl font-bold text-gray-800 mt-0">{expertData.name}</h2>
                    <p className="text-lg text-gray-600 mb-8">{expertData.role}</p>

                    <div className="flex flex-col gap-8 pl-10 relative">
                        
                        <div className={`absolute top-4 bottom-4 left-[46px] w-0.5 bg-orange-600 z-0`}></div>
                        
                        {expertData.items.map((item, index) => (
                            <div key={item.id} className="flex items-start gap-5 relative z-10">
                                
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-orange-600 text-white font-bold text-lg flex justify-center items-center mt-1`}>
                                    {item.id}
                                </div>
                                
                                <div className="flex-1 pt-1">
                                    <h3 className={`text-xl font-bold text-orange-600 mb-1`}>{item.title}</h3>
                                    {item.details.map((detail, detailIndex) => (
                                        <p key={detailIndex} className="text-sm leading-relaxed mb-1">
                                            <span dangerouslySetInnerHTML={{
                                                __html: detail.replace(
                                                    /(Thạc sĩ Khoa học Máy tính|Kỹ sư Công nghệ Thông tin|15\+ năm kinh nghiệm|Vice Academic Director|Giảng viên Khoa CNTT|Giám đốc trung tâm DeepCode|Mentor|Diễn giả)/g, 
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
    );
};

export default ExpertProfileTailwind;