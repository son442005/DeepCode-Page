import React from 'react';
import { contactItems } from "../constants";
const meetingImage = `${import.meta.env.BASE_URL}project-7.jpg`;

import { FadeUp } from './Anim';
import { useLang } from '../lang';

const ContactInfo: React.FC = () => {
  const { lang } = useLang();

  const getDisplayText = (item: typeof contactItems[0], detail: string, detailIndex: number) => {
    const isHeadOffice = item.title === 'Trụ Sở Chính' && detailIndex === 0;

    if (lang === 'en') {
      if (isHeadOffice) return '208 Van Phuc Street, Van Phuc Ward, Ha Dong District, Hanoi, Vietnam';
      if (detail.startsWith('Hotline')) return detail.replace('Hotline', 'Hotline');
      if (detail.startsWith('Email')) return detail.replace('Email', 'Email');
      if (detail.startsWith('Website')) return detail.replace('Website', 'Website');
      if (detail.startsWith('Facebook')) return detail;
      return detail;
    }

    if (lang === 'zh') {
      if (isHeadOffice) return '越南河内市河东区万福街208号';
      if (detail.startsWith('Hotline')) return detail.replace('Hotline', '热线');
      if (detail.startsWith('Email')) return detail.replace('Email', '邮箱');
      if (detail.startsWith('Website')) return detail.replace('Website', '网站');
      if (detail.startsWith('Facebook')) return detail.replace('Facebook', 'Facebook');
      return detail;
    }

    return detail;
  };

  const getTitle = (item: typeof contactItems[0]) => {
    if (lang === 'en') {
      if (item.title === 'Trụ Sở Chính') return 'Headquarters';
      if (item.title === 'Liên Hệ') return 'Contact';
      if (item.title === 'Mạng Xã Hội') return 'Social Media';
    }
    if (lang === 'zh') {
      if (item.title === 'Trụ Sở Chính') return '总部';
      if (item.title === 'Liên Hệ') return '联系方式';
      if (item.title === 'Mạng Xã Hội') return '社交媒体';
    }
    return item.title;
  };

  return (
    <section
      id="ContactInfo"
      className="px-4 py-10 sm:px-8 sm:py-12 lg:px-20 lg:py-20 bg-gradient-to-br from-[#fc4a1a] to-[#007BFF]/10 rounded-3xl"
    >
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12 lg:space-y-16 bg-white/90 backdrop-blur-md px-4 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-16 rounded-2xl shadow-2xl">
        {/* Header */}
        <header className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-slate-800 mb-3">
            {lang === 'en'
              ? 'Contact Information'
              : lang === 'vi'
              ? 'Thông Tin Liên Hệ'
              : '联系信息'}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto sm:mx-0">
            {lang === 'en'
              ? 'Get in touch with us. We are here to help you with your software development needs.'
              : lang === 'vi'
              ? 'Liên hệ với chúng tôi. Chúng tôi sẵn sàng hỗ trợ bạn với nhu cầu phát triển phần mềm.'
              : '与我们联系。我们随时准备帮助您满足软件开发需求。'}
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <FadeUp className="order-2 lg:order-1">
            <div className="relative shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl group aspect-[16/9] sm:aspect-[4/3]">
              <img
                src={meetingImage}
                alt={lang === 'en' ? 'HLGera Meeting Room' : lang === 'vi' ? 'Phòng họp HLGera' : 'HLGera会议室'}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
            </div>
          </FadeUp>

          {/* Right Column */}
          <div className="space-y-6 order-1 lg:order-2">
            {contactItems.map((item, index) => (
              <FadeUp key={index}>
                <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl sm:text-2xl text-blue-600 shadow-inner">
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">
                        {getTitle(item)}
                      </h2>
                      <div className="space-y-2">
                        {item.details.map((detail, detailIndex) => {
                          const display = getDisplayText(item, detail, detailIndex);
                          const isLink = display.includes('@') || display.includes('www.') || display.includes('fb/');

                          return (
                            <div key={detailIndex} className="flex items-start gap-2">
                              <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-blue-600 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
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
                                  className="text-blue-600 hover:text-blue-500 hover:underline transition-colors break-words"
                                  target={display.includes('@') ? undefined : '_blank'}
                                  rel={display.includes('@') ? undefined : 'noopener noreferrer'}
                                >
                                  {display}
                                </a>
                              ) : (
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed break-words">
                                  {display}
                                </p>
                              )}
                            </div>
                          );
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
