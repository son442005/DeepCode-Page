import React from 'react';
import { contactItems } from "../constants";
const meetingImage = `${import.meta.env.BASE_URL}project-7.jpg`;

import { FadeUp } from './Anim'
import { useLang } from '../lang'

const ContactInfo: React.FC = () => {
    const { lang } = useLang()

    const getDisplayText = (item: typeof contactItems[0], detail: string, detailIndex: number) => {
        if (lang === 'en') {
            if (item.title === 'Trụ Sở Chính' && detailIndex === 0) {

                return '208, Van Phuc, Ha Dong, Hanoi'

                return '208 Van Phuc Street, Van Phuc, Ha Dong, Hanoi, Vietnam'

            }
            if (detail.startsWith('Hotline')) return detail.replace('Hotline', 'Hotline')
            if (detail.startsWith('Email')) return detail.replace('Email', 'Email')
            if (detail.startsWith('Website')) return detail.replace('Website', 'Website')
            if (detail.startsWith('Facebook')) return detail
        }
        if (lang === 'zh') {
            if (item.title === 'Trụ Sở Chính' && detailIndex === 0) {

                return '越南河内市河东区万福208号'

                return '越南河内市河东区万福街208号'

            }
            if (detail.startsWith('Hotline')) return detail.replace('Hotline', '热线')
            if (detail.startsWith('Email')) return detail.replace('Email', '邮箱')
            if (detail.startsWith('Website')) return detail.replace('Website', '网站')
            if (detail.startsWith('Facebook')) return detail.replace('Facebook', 'Facebook')
        }
        return detail
    }

    const getTitle = (item: typeof contactItems[0]) => {
        if (lang === 'en') {
            if (item.title === 'Trụ Sở Chính') return 'Headquarters'
            if (item.title === 'Liên Hệ') return 'Contact'
            if (item.title === 'Mạng Xã Hội') return 'Social Media'
        }
        if (lang === 'zh') {
            if (item.title === 'Trụ Sở Chính') return '总部'
            if (item.title === 'Liên Hệ') return '联系方式'
            if (item.title === 'Mạng Xã Hội') return '社交媒体'
        }
        return item.title
    }

    return (
        <section id="ContactInfo" className="p-6 sm:p-12 lg:p-20 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl ">
            <div className="space-y-10 sm:space-y-12 lg:space-y-16">
                {/* Header */}
                <header className="">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-slate-800 mb-3">
                        {lang === 'en' ? 'Contact Information' : lang === 'vi' ? 'Thông Tin Liên Hệ' : '联系信息'}
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
                        {lang === 'en'
                            ? 'Get in touch with us. We are here to help you with your software development needs.'
                            : lang === 'vi'
                                ? 'Liên hệ với chúng tôi. Chúng tôi sẵn sàng hỗ trợ bạn với nhu cầu phát triển phần mềm.'
                                : '与我们联系。我们随时准备帮助您满足软件开发需求。'}
                    </p>
                </header>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column: Image and Map */}
                    <div className="space-y-6">
                        <FadeUp>
                            <div className="relative shadow-3d-md hover:shadow-3d-lg transition-all duration-300 overflow-hidden rounded-2xl group">
                                <img
                                    src={meetingImage}
                                    alt={lang === 'en' ? 'DeepCode Meeting Room' : lang === 'vi' ? 'Phòng họp DeepCode' : 'DeepCode会议室'}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                            </div>
                        </FadeUp>
                    </div>

                    {/* Right Column: Contact Cards */}
                    <div className="space-y-6">
                        {contactItems.map((item, index) => (
                            <FadeUp key={index}>
                                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-3d hover:shadow-3d-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl shadow-3d-sm hover:shadow-3d transition-all duration-300">
                                            <span className="text-primary">{item.icon}</span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h2 className="text-xl font-bold text-slate-800 mb-3">
                                                {getTitle(item)}
                                            </h2>
                                            <div className="space-y-2">
                                                {item.details.map((detail, detailIndex) => {
                                                    const display = getDisplayText(item, detail, detailIndex)
                                                    const isLink = display.includes('@') || display.includes('www.') || display.includes('fb/')

                                                    return (
                                                        <div key={detailIndex} className="flex items-start gap-2">
                                                            <svg
                                                                className="w-5 h-5 flex-shrink-0 text-primary mt-0.5"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            {isLink ? (
                                                                <a
                                                                    href={
                                                                        display.includes('@')
                                                                            ? `mailto:${display.split(': ')[1] || display}`
                                                                            : display.includes('www.')
                                                                                ? `http://${display.split(': ')[1] || display}`
                                                                                : display.includes('fb/')
                                                                                    ? `https://${display.split(': ')[1] || display}`
                                                                                    : display
                                                                    }
                                                                    className="text-primary hover:text-primary/80 hover:underline transition-colors break-words"
                                                                    target={display.includes('@') ? undefined : '_blank'}
                                                                    rel={display.includes('@') ? undefined : 'noopener noreferrer'}
                                                                >
                                                                    {display}
                                                                </a>
                                                            ) : (
                                                                <p className="text-base text-slate-700 leading-relaxed break-words">
                                                                    {display}
                                                                </p>
                                                            )}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;