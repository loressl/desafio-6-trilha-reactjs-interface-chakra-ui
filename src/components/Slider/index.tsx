import { Swiper, SwiperProps } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar, A11y } from 'swiper';
import { ReactNode } from "react";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Scrollbar, A11y]);

interface SliderProps {
    settings: SwiperProps
    children?: ReactNode
}

export function Slider ({ settings, children}: SliderProps) {
    return(
        <Swiper {...settings}>
            {children}
        </Swiper>
    )
}