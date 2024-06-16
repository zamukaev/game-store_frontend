"use client";
import React, { FC, useMemo } from "react";
import ReactSlider from "react-slider";

import { OptionsType } from "@/shared/types/options";

import styles from "./styles.module.scss";

export interface RangeProps {
    value: number[];
    setValue: (value: any) => void;
}

const Range: FC<RangeProps> = (props) => {
    const { value, setValue } = props;
    const priceTo: number = useMemo(() => value[1], []);

    const onChange = (value: any) => {
        const newPosition = value.slice();
        newPosition[0] = value[0];
        newPosition[1] = value[1];
        setValue((prev: OptionsType) => ({
            ...prev,
            priceFrom: newPosition[0],
            priceTo: newPosition[1],
        }));
    };

    // изменение через инпут -
    const onChangeMin = (value: any) => {
        const newPosition = value.slice();
        newPosition[0] = value;
        setValue(newPosition);
    };

    // изменение через инпут +
    const onChangeMax = (value: any) => {
        const newPosition = value.slice();
        newPosition[1] = value;
        setValue(newPosition);
    };

    return (
        <div className={styles.range}>
            <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[0, 30000]}
                ariaLabel={["Lower thumb", "Upper thumb"]}
                ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                pearling
                minDistance={10}
                onChange={(e) => onChange(e)}
                value={value}
                max={priceTo}
                data-testid="range"
            />
        </div>
    );
};

export default Range;
