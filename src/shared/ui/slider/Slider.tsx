import React, { FC } from "react";
import Slider from "react-slick";

import { Product } from "@/shared/types/product";

import ProductCard from "../productCard/ProductCard";
import SliderArrow from "../sliderArrow/SliderArrow";
import ProductCardLoader from "../productCard/ProductCardLoader";

import { Headline, HeadlineSize } from "..";

import styles from "./styles.module.scss";

interface SliderBlockProps {
    title: string;
    items: Product[];
    loading: boolean;
}

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SliderArrow kind="next" />,
    prevArrow: <SliderArrow kind="prev" />,
};

const SliderBlock: FC<SliderBlockProps> = ({ title, items, loading }) => {
    return (
        <div className={styles.container}>
            <Headline Size={HeadlineSize.L} className={styles.title}>
                {title}
            </Headline>
            {loading ? (
                <div className={styles.loader}>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <ProductCardLoader key={index} />
                    ))}
                </div>
            ) : (
                <Slider {...settings}>
                    {items.map((item) => (
                        <ProductCard key={item._id} product={item} />
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default SliderBlock;
