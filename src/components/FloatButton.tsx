import React, { useState } from 'react';
import { useLang } from '../lang';

export const FloatButton: React.FC = () => {
    const { lang } = useLang();
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleTelegram = () => {
        window.open('https://t.me/your_telegram', '_blank');
        setIsOpen(false);
    };

    const handleZalo = () => {
        window.open('https://zalo.me/your_zalo', '_blank');
        setIsOpen(false);
    };

    const handleMessage = () => {
        const contactEl = document.querySelector('#ContactInfo') || document.querySelector('#contact');
        if (contactEl) {
            contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Menu buttons */}
            <div className={`absolute bottom-20 right-0 flex flex-col gap-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                {/* Telegram Button */}
                <button
                    onClick={handleTelegram}
                    aria-label="Telegram"
                    className="w-12 h-12 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center outline-none focus:outline-none hover:scale-110"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-7 h-7 drop-shadow-sm"
                    >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.193l-1.87 8.815c-.139.625-.518.775-1.048.481l-2.89-2.13-1.395 1.34c-.151.151-.282.282-.576.282l.206-2.92 5.342-4.826c.234-.207-.05-.323-.362-.116l-6.597 4.15-2.844-.894c-.618-.193-.635-.618.132-.928l11.132-4.287c.516-.193.966.119.797.904z" />
                    </svg>
                </button>

                {/* Zalo Button */}
                <button
                    onClick={handleZalo}
                    aria-label="Zalo"
                    className="w-12 h-12 bg-[#0068FF] hover:bg-[#0052CC] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center outline-none focus:outline-none hover:scale-110"
                >
                    <img
                        src={`${import.meta.env.BASE_URL}zalo-icon.svg`}
                        alt="Zalo"
                        className="w-8 h-8 object-contain brightness-0 invert drop-shadow-sm"
                    />
                </button>

                {/* Message Button - Facebook Messenger */}
                <button
                    onClick={handleMessage}
                    aria-label={lang === 'en' ? 'Message' : lang === 'vi' ? 'Tin nhắn' : '消息'}
                    className="w-12 h-12 bg-[#0084FF] hover:bg-[#0066CC] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center outline-none focus:outline-none hover:scale-110"
                >
                    <img
                        src={`${import.meta.env.BASE_URL}mes-icon.svg`}
                        alt={lang === 'en' ? 'Message' : lang === 'vi' ? 'Tin nhắn' : '消息'}
                        className="w-8 h-8 object-contain drop-shadow-sm"
                        style={{ filter: 'brightness(0) invert(1)' }}
                    />
                </button>
            </div>

            {/* Main Float Button */}
            <button
                onClick={handleToggle}
                aria-label={lang === 'en' ? 'Contact us' : lang === 'vi' ? 'Liên hệ' : '联系我们'}
                className={`w-14 h-14 sm:w-16 sm:h-16 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center outline-none focus:outline-none ${isOpen ? 'rotate-45' : ''}`}
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300"
                >
                    {isOpen ? (
                        <path d="M18 6L6 18M6 6l12 12" />
                    ) : (
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    )}
                </svg>
                <span className="sr-only">{lang === 'en' ? 'Contact us' : lang === 'vi' ? 'Liên hệ' : '联系我们'}</span>
            </button>
        </div>
    );
};

