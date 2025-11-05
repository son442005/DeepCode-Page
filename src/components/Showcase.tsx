import React from 'react';
import Slider from "react-slick";
import { projects } from '../constants'; 

// --- Cấu hình Slider ---
var settings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    
    autoplay: true, 
    autoplaySpeed: 2000,
    
    slidesToShow: 3, 
    slidesToScroll: 1, 

    responsive: [
        {
            breakpoint: 1024, 
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1280, // Màn hình rất lớn (xl)
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
    ]
};

interface ProjectCardProps {
    p: { title: string, description: string, image: string }; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ p }) => (
    <div className="flex flex-col px-3 outline-none h-full"> 
        <div className="h-full rounded-xl border border-slate-200 bg-white shadow flex flex-col cursor-pointer
                        transition duration-300 ease-in-out 
                        hover:-translate-y-1 hover:shadow-xl"> 
            <div className=" aspect-[9/3] w-full h-[250px] overflow-hidden rounded-t-xl bg-slate-100">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
            </div>
            <div className="flex-1 p-4 flex flex-col">
                <div className="font-semibold text-slate-900 leading-snug">{p.title}</div>
                <div className="mt-2 text-sm text-slate-700 line-clamp-3 overflow-hidden h-20 leading-relaxed">
                    {p.description}
                </div>
            </div>
        </div>
    </div>
);

export const Showcase: React.FC = () => {
    return (
        <section id="showcase" className="py-10" >
            <div className=" flex-col flex gap-8 ">
                <div className="">
                    <h2 className="text-3xl font-bold text-slate-900">Dự án tiêu biểu</h2>
                </div>
                
                <div className="relative w-[1250px] ">
                    <Slider {...settings} >
                        {projects.map((p, i) => (
                            <ProjectCard key={p.title} p={p} />
                        ))}
                    </Slider>
                </div>
                
                
            </div>
        </section>
    );
};

export default Showcase;