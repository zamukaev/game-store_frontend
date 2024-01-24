import { FC, useState } from "react";

import { OptionsType } from "@/configs/options";

import {
    InputPrice,
    Switcher,
    Range,
    Headline,
    HeadlineSize,
} from "@/shared/ui";

import styles from "./styles.module.scss";

interface FiltersProps {
    className?: string;
}

const Filters: FC<FiltersProps> = (props) => {
    const { className } = props;
    const cls = `${styles.filters} ${className}`;
    const [options, setOptions] = useState<OptionsType>({
        priceFrom: 0,
        priceTo: 100000,
        hits: false,
        promotion: false,
        inStock: false,
    });

    const hitsToggleHandle = () => {
        setOptions((prev) => ({ ...prev, hits: !prev.hits }));
    };

    const promotionToggleHandle = () => {
        setOptions((prev) => ({ ...prev, promotion: !prev.promotion }));
    };

    const inStockToggleHandle = () => {
        setOptions((prev) => ({ ...prev, inStock: !prev.inStock }));
    };

    return (
        <div data-testid="filters" className={cls}>
            <div className={styles.price}>
                <Headline Size={HeadlineSize.S} className={styles.title}>
                    Цена
                </Headline>
                <div className={styles.inputs}>
                    <InputPrice
                        type="priceFrom"
                        className={styles.priceItem}
                        placeholder="от 300₽"
                        setValue={setOptions}
                        value={options.priceFrom}
                    />

                    <InputPrice
                        type="priceTo"
                        placeholder="до 5000₽"
                        setValue={setOptions}
                        value={options.priceTo}
                    />
                </div>
                <Range
                    value={[options.priceFrom, options.priceTo]}
                    setValue={setOptions}
                />
            </div>
            <div className={styles.options}>
                <div className={styles.promotion}>
                    <Headline Size={HeadlineSize.S} className={styles.title}>
                        Акция
                    </Headline>
                    <Switcher
                        isToggled={options.hits}
                        onToggle={hitsToggleHandle}
                    />
                </div>
                <div className={styles.hits}>
                    <Headline Size={HeadlineSize.S} className={styles.title}>
                        Хиты
                    </Headline>
                    <Switcher
                        isToggled={options.promotion}
                        onToggle={promotionToggleHandle}
                    />
                </div>
                <div className={styles.InStock}>
                    <Headline Size={HeadlineSize.S} className={styles.title}>
                        В наличии
                    </Headline>
                    <Switcher
                        isToggled={options.inStock}
                        onToggle={inStockToggleHandle}
                    />
                </div>
            </div>
        </div>
    );
};

export default Filters;
