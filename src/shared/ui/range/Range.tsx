"use client";

import React, { FC, useState } from "react";
import ReactSlider from "react-slider";

import { OptionsType } from "@/configs/options";

import styles from "./styles.module.scss";

export interface RangeProps {
    value: number[];
    setValue: (value: any) => void;
}

const Range: FC<RangeProps> = (props) => {
    const { value, setValue } = props;
    const priceTo = 100000;

    // const [value, setValue] = useState([0, priceTo]);

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
                onAfterChange={(e) => onChange(e)}
                value={value}
                max={priceTo}
                data-testid="range"
            />
        </div>
    );
};

export default Range;

{
    /* <Col sm="12" className="flex gap-[20px]">
    <TextField
        type="number"
        placeholder="Цена от"
        value={test[0]}
        name="priceTo"
        onChange={(e: any) => onChangeMin(e.target.value)}
    />
    <TextField
        placeholder="Цена до"
        value={test[1]}
        name="priceFrom"
        onChange={(e: any) => onChangeMax(e.target.value)}
        type="number"
    />
</Col>; */
}
