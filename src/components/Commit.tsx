import React from 'react';
import { commitments, standards } from "../constants";

const QualityCommitment: React.FC = () => {
    const bgColor = 'bg-[#F9F5EC]'; 
    const titleColor = 'text-[#7B6E5B]'; 

    return (
        <section className={`py-16 md:py-24  mt-12 bg-stone-50  ${bgColor}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                <header className="flex justify-between items-start mb-12">
                    <h1 className={`text-5xl font-serif font-medium ${titleColor}`}>
                        Cam Kết Chất Lượng
                    </h1>
                </header>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    
                    <div className="lg:w-1/2 space-y-8">
                        {commitments.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex justify-center items-center text-white font-bold ${item.iconBg}`}>
                                    {item.iconText}
                                </div>
                                
                                <div className="flex-1 pt-0.5">
                                    <h2 className="text-lg font-bold text-gray-700 mb-1">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="lg:w-1/2 pt-4 lg:pt-0">
                        <p className="text-base text-gray-700 mb-4 ">
                            DeepCode áp dụng các tiêu chuẩn quốc tế trong quy trình phát triển phần mềm:
                        </p>
                        
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            {standards.map((standard, index) => (
                                <li key={index} className="text-sm">
                                    {standard}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualityCommitment;