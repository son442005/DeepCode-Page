import React from 'react';
import { staffStats} from "../constants";
const StaffStats: React.FC = () => {
    const titleColor = 'text-[#7B6E5B]'; 

    return (
        <section id="StaffStats" className={`p-20 bg-stone-50 text-gray-800 rounded-3xl `}>
            <div className="flex flex-col gap-12">
                <div className="">
                    <h1 className={`text-5xl font-serif font-medium ${titleColor}`}>
                        Nhân Sự Kỹ Thuật
                    </h1>
                </div>
                <div className=" grid grid-cols-1 lg:grid-cols-4 ">
                    
                    {staffStats.map((stat, index) => (
                        <div key={index} className="flex flex-col border-b border-gray-300 pb-8 
                                                    lg:border-r lg:border-b-0 lg:pb-0 lg:pr-8 
                                                    last:border-r-0 last:pr-0 text-center p-3">
                            
                            <p className={` text-6xl font-bold ${titleColor} mb-2`}>
                                {stat.value}
                            </p>
                            <h2 className=" text-xl font-semibold text-gray-700 mb-2">
                                {stat.title}
                            </h2>
                            <p className="text-sm text-gray-600 ">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-16 pt-8 border-t border-gray-300">
                    <p className="text-base text-gray-600 max-w-4xl">
                        DeepCode đầu tư mạnh mẽ vào việc phát triển nhân lực thông qua các chương trình đào tạo nội bộ, cơ hội tham gia các khóa học quốc tế và môi trường làm việc khuyến khích sáng tạo và đổi mới.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default StaffStats;