import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../carousel.css';
import { Autoplay, Pagination, Navigation, Mousewheel } from 'swiper/modules';
import getNewsData from '../../services/API';

const Carousel = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const healthNews = await getNewsData();
        setArticles(healthNews);
      } catch (error) {
        console.error('Error fetching health news:', error);
      }
    };

    fetchArticles();
  }, []);

  const handleImageError = (index) => {
    const newArticles = [...articles];
    newArticles[index].thumbnail =
      '/images/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg';
    setArticles(newArticles);
  };

  const displayedArticles = articles.slice(0, 5);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        mousewheel={{
          invert: false,
          forceToAxis: true,
        }}
        navigation={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Mousewheel, Navigation]}
        className="mySwiper"
      >
        {displayedArticles.map((data, index) => (
          <SwiperSlide key={index}>
            <a href={data.link} target="_blank" rel="noreferrer">
              <img
                src={
                  data.thumbnail ||
                  '/images/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg'
                }
                alt={data.title}
                onError={() => handleImageError(index)}
              />
              <p className="absolute">{data.title}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
