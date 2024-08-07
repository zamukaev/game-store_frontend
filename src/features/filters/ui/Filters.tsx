import { FC } from "react";

import { OptionsType } from "@/shared/types/options";

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
    options: OptionsType;
    visible?: boolean;
    setOptions: (prev: any) => any;
}

const Filters: FC<FiltersProps> = (props) => {
    const { className, options, visible, setOptions } = props;
    const cls = `${styles.filters} ${
        visible ? styles.visible : " "
    } ${className} `;

    const hitsToggleHandle = () => {
        setOptions(
            (prev: OptionsType): OptionsType => ({ ...prev, hits: !prev.hits })
        );
    };

    const promotionToggleHandle = () => {
        setOptions(
            (prev: OptionsType): OptionsType => ({
                ...prev,
                promotion: !prev.promotion,
            })
        );
    };

    const inStockToggleHandle = () => {
        setOptions(
            (prev: OptionsType): OptionsType => ({
                ...prev,
                inStock: !prev.inStock,
            })
        );
    };

    return (
        <div data-testid="filters" className={cls}>
            <div className={styles.price}>
                <Headline Size={HeadlineSize.L} className={styles.title}>
                    Цена
                </Headline>
                <div className={styles.inputs}>
                    <InputPrice
                        type="priceFrom"
                        className={styles.priceItem}
                        placeholder="от 300₽"
                        setValue={setOptions}
                        value={options?.priceFrom}
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
                    <Headline Size={HeadlineSize.M} className={styles.title}>
                        Акция
                    </Headline>
                    <Switcher
                        isToggled={options.hits}
                        onToggle={hitsToggleHandle}
                    />
                </div>
                <div className={styles.hits}>
                    <Headline Size={HeadlineSize.M} className={styles.title}>
                        Хиты
                    </Headline>
                    <Switcher
                        isToggled={options.promotion}
                        onToggle={promotionToggleHandle}
                    />
                </div>
                <div className={styles.InStock}>
                    <Headline Size={HeadlineSize.M} className={styles.title}>
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
