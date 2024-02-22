import React, { useEffect } from "react";
import CardsList from "../../components/products/CardsList";
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";

export default function HomePage() {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      // Настройки Swiper здесь
    });

    // Убедитесь, что вы чистите Swiper при размонтировании компонента
    return () => {
      swiper.destroy();
    };
  }, []);
  return (
    <>
      <CardsList />
    </>
  );
}
