import { SelectOptionsType } from "@/lib/types";
import React from "react";

import { DownArrow } from "../DownArrow";



export const SelectSort = ({
    options,
    defaultValue,
    onChange,
    isDisabled = false,
}: {
    options: SelectOptionsType[];
    defaultValue: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    isDisabled?: boolean;
}) => {
    return (
        <div className="inline-block relative w-48">
            <select
                disabled={isDisabled}
                onChange={onChange}
                defaultValue={defaultValue}
                className="block 
                    appearance-none
                     h-8 
                     w-full
                     bg-system-purple10
                     border-system-purple20
                     border
                     px-4 
                     py-1 
                     pr-8 
                     rounded-lg shadow leading-tight
                     focus:outline-none
                     focus:shadow-outline
                     text-gray-300"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <DownArrow />
        </div>

    );
};
