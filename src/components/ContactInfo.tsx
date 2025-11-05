import React from 'react';
import { contactItems } from "../constants";
const meetingImage = `${import.meta.env.BASE_URL}project-7.jpg`;
import { FadeUp } from './Anim'
import { useLang } from '../lang'

const ContactInfo: React.FC = () => {
    const { lang } = useLang()
    return (
        <section id="ContactInfo" className={`p-20 bg-stone-50 bg-[#F9F5EC rounded-3xl `}>
            <div className="">

                <header className="mb-12">
                    <h1 className={`text-5xl font-serif font-medium text-[#7B6E5B]`}>
                        {lang === 'en' ? 'Contact Information' : 'Thông Tin Liên Hệ'}
                    </h1>
                </header>
                <FadeUp className="flex flex-col lg:flex-row gap-10">

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
                                        {lang === 'en' ? (
                                            item.title === 'Trụ Sở Chính' ? 'Headquarters' :
                                                item.title === 'Liên Hệ' ? 'Contact' :
                                                    item.title === 'Mạng Xã Hội' ? 'Social Media' : item.title
                                        ) : item.title}
                                    </h2>
                                    {item.details.map((detail, detailIndex) => {
                                        const display = (() => {
                                            if (lang === 'en') {
                                                if (item.title === 'Trụ Sở Chính' && detailIndex === 0) {
                                                    return '2nd Floor, Building 21B5, CT2 Urban Area, 234 Street, Phu Dien Ward, Hanoi, Vietnam'
                                                }
                                                // Keep labels English-like for contact/social
                                                if (detail.startsWith('Hotline')) return detail.replace('Hotline', 'Hotline')
                                                if (detail.startsWith('Email')) return detail.replace('Email', 'Email')
                                                if (detail.startsWith('Website')) return detail.replace('Website', 'Website')
                                                if (detail.startsWith('Facebook')) return detail
                                            }
                                            return detail
                                        })()
                                        return (
                                            <p key={detailIndex} className="text-base text-gray-700 leading-relaxed">
                                                {display.includes('@') || display.includes('www.') ? (
                                                    <a
                                                        href={display.includes('@') ? `mailto:${display.split(': ')[1]}` : (display.includes('www.') ? `http://${display.split(': ')[1]}` : display)}
                                                        className="hover:underline text-blue-600"
                                                    >
                                                        {display}
                                                    </a>
                                                ) : (
                                                    display
                                                )}
                                            </p>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeUp>
            </div>
        </section>
    );
};

export default ContactInfo;