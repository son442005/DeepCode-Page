import React from 'react';
import {contactItems} from "../constants";
const meetingImage = "/project-7.jpg";

const ContactInfo: React.FC = () => {
    return (
        <section id="ContactInfo" className={`p-20 bg-stone-50 bg-[#F9F5EC rounded-3xl `}>
            <div className="">
                
                <header className="mb-12">
                    <h1 className={`text-5xl font-serif font-medium text-[#7B6E5B]`}>
                        Thông Tin Liên Hệ
                    </h1>
                </header>
                <div className="flex flex-col lg:flex-row gap-10">
                    
                    <div className="lg:w-1/2 w-full shadow-lg overflow-hidden rounded-lg">
                        <img 
                            src={meetingImage} 
                            alt="Phòng họp DeepCode" 
                            className="w-full h-full object-cover max-h-[450px]"
                        />
                    </div>

                    <div className="lg:w-1/2 w-full space-y-12 pt-4">
                        
                        {contactItems.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                
                                <div className={`flex-shrink-0 w-8 h-8 flex justify-center items-center text-xl text-[#7B6E5B]`}>
                                    {item.icon}
                                </div>
                                
                                <div className="flex-1">
                                    <h2 className={`text-lg font-bold text-[#7B6E5B] mb-1`}>
                                        {item.title}
                                    </h2>
                                    {item.details.map((detail, detailIndex) => (
                                        <p key={detailIndex} className="text-base text-gray-700 leading-relaxed">
                                            {detail.includes('@') || detail.includes('www.') ? (
                                                <a 
                                                    href={detail.includes('@') ? `mailto:${detail.split(': ')[1]}` : (detail.includes('www.') ? `http://${detail.split(': ')[1]}` : detail)} 
                                                    className="hover:underline text-blue-600"
                                                >
                                                    {detail}
                                                </a>
                                            ) : (
                                                detail
                                            )}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;