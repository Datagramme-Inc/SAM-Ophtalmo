import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface DecimalInputProps {
  value: number;
  onChange: (value: string) => void;
  maxDecimals?: number;
  min?: number;
  max?: number;
  step?: number;
  customDecimalOptions?: number[];
}

const generateOptions = (min: number, max: number, step: number) => {
  const options = [];
  for (let i = min; i <= max; i += step) {
    options.push(i);
  }
  return options;
};

const DecimalInput: React.FC<DecimalInputProps> = ({
  value,
  onChange,
  maxDecimals = 2,
  min = -10,
  max = 10,
  step = 1,
  customDecimalOptions = [],
}) => {
  const [integerPart, decimalPart] = String(value || "0.0").split(".");

  const handleIntegerChange = (newValue: string) => {
    onChange(newValue + (decimalPart ? `.${decimalPart}` : ""));
  };

  const handleDecimalChange = (newValue: string) => {
    onChange(`${integerPart || "0"}.${newValue}`);
  };

  const integerOptions = generateOptions(min, max, step);
  const decimalOptions =
    customDecimalOptions.length > 0
      ? customDecimalOptions
      : generateOptions(0, Math.max(0, max), 1);

  return (
    <div className="flex">
      <Select onValueChange={handleIntegerChange} value={integerPart || ""}>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="0" />
        </SelectTrigger>
        <SelectContent>
          {integerOptions.map((option) => (
            <SelectItem key={option} value={String(option)}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span className="mx-1 text-4xl">.</span>
      <Select onValueChange={handleDecimalChange} value={decimalPart || ""}>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="00" />
        </SelectTrigger>
        <SelectContent>
          {decimalOptions.map((option) => (
            <SelectItem
              key={option}
              value={String(option).padStart(maxDecimals, "0")}
            >
              {String(option).padStart(maxDecimals, "0")}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DecimalInput;
