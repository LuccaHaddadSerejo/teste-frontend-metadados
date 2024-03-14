import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export interface iStyledCarouselProps {
  carouselVariation?: string;
}

export const StyledCarousel = styled(Swiper)`
  width: 100%;
  max-width: 800px;
`;

export const StyledSlideDetail = styled(SwiperSlide)`
  img {
    width: 100%;
    object-fit: contain;

    @media (min-width: 768px) {
      object-fit: fill;
      min-height: 100%;
    }

    @media (min-width: 1440px) {
      object-fit: contain;
      min-height: auto;
    }
  }
`;

export const StyledSlideMain = styled(SwiperSlide)`
  max-height: 312px;
  img {
    width: 100%;
    object-fit: contain;

    @media (min-width: 768px) {
      object-fit: fill;
      min-height: 100%;
    }

    @media (min-width: 1440px) {
      object-fit: contain;
      min-height: auto;
    }
  }
`;
