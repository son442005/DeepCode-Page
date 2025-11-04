import React from 'react';
import { staffStats} from "../constants";
const StaffStats: React.FC = () => {
    const titleColor = 'text-[#7B6E5B]'; 

    return (
        <section className={`bg-stone-50 py-16 md:py-24 pb-8 bg-background`}>
            <div className="px-6 lg:px-8">
                <div className="mb-16 md:mb-20">
                    <h1 className={`text-5xl font-serif font-medium ${titleColor} max-w-lg`}>
                        Nhân Sự Kỹ Thuật
                    </h1>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4 lg:gap-y-0">
                    
                    {staffStats.map((stat, index) => (
                        <div key={index} className="flex flex-col border-b border-gray-300 pb-8 
                                                    lg:border-r lg:border-b-0 lg:pb-0 lg:pr-8 
                                                    last:border-r-0 last:pr-0">
                            
                            <p className={`text-6xl font-bold ${titleColor} mb-2`}>
                                {stat.value}
                            </p>
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">
                                {stat.title}
                            </h2>
                            <p className="text-sm text-gray-600">
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