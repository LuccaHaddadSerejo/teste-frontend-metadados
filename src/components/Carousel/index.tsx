import { StyledCarousel, StyledSlideMain, StyledSlideDetail } from "./style";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import defaultImage from "../../assets/imgs/image-not-found-icon.svg";

interface iCarouselProps {
  images: string[];
  isDetail: boolean;
}

const Carousel = ({ images, isDetail }: iCarouselProps) => {
  return (
    <StyledCarousel
      modules={[Navigation, Pagination]}
      navigation
      centeredSlides={true}
      pagination={{ clickable: true }}
      slidesPerView={1}>
      {images.map((image: string, i: number) =>
        isDetail ? (
          <StyledSlideDetail key={i}>
            <img
              src={image}
              alt={`Slide ${i}`}
              onError={(e) => {
                e.currentTarget.src = defaultImage;
              }}
            />
          </StyledSlideDetail>
        ) : (
          <StyledSlideMain key={i}>
            <img
              src={image}
              alt={`Slide ${i}`}
              onError={(e) => {
                e.currentTarget.src = defaultImage;
              }}
            />
          </StyledSlideMain>
        )
      )}
    </StyledCarousel>
  );
};

export default Carousel;
