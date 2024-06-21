import React, { FC, useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import Image from "next/image";
import Slider from "react-slick";

import SliderArrow from "../sliderArrow/SliderArrow";

import styles from "./ProductImages.module.scss";
import "react-medium-image-zoom/dist/styles.css";

interface ProductImagesProps {
    images: string[];
}

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SliderArrow kind="next" />,
    prevArrow: <SliderArrow kind="prev" />,
};

const ProductImages: FC<ProductImagesProps> = ({ images }) => {
    const [mainImage, setMainImage] = useState(images[0]);

    useEffect(() => {
        setMainImage(images[0]);
    }, [images]);

    return (
        <div>
            <Zoom>
                <Image
                    className={styles.mainImage}
                    src={mainImage}
                    width={400}
                    height={400}
                    alt="main product image"
                />
            </Zoom>
            <div className={styles.slider}>
                <Slider {...settings}>
                    {images.map((item) => (
                        <div className={styles.slider__item} key={item}>
                            <Image
                                key={item}
                                src={item}
                                width={100}
                                height={100}
                                alt="slider product image"
                                className={`${styles.sliderImage} ${
                                    item === mainImage ? styles.active : ""
                                }`}
                                onClick={() => setMainImage(item)}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProductImages;
