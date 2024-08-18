import React from "react";
import { Input, InputProps } from "@/components/ui/input";

interface DecimalInputProps
  extends Omit<InputProps, "name" | "onChange" | "value"> {
  value: number;
  onChange: (value: string) => void;
  maxDecimals?: number;
}

const DecimalInput: React.FC<DecimalInputProps> = ({
  value,
  onChange,
  maxDecimals = 2,
  ...props
}) => {
  const [integerPart, decimalPart] = String(value || "0.0").split(".");

  const handleIntegerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value + (decimalPart ? `.${decimalPart}` : "");
    onChange(newValue);
  };

  const handleDecimalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = `${integerPart || "0"}.${e.target.value}`;
    onChange(newValue);
  };

  return (
    <div className="flex">
      <Input
        {...props}
        type="text"
        inputMode="numeric"
        // pattern="\d*"
        title="Please enter a valid integer"
        value={integerPart || ""}
        onChange={handleIntegerChange}
      />
      <span className="mx-1 text-4xl">.</span>
      <Input
        {...props}
        type="text"
        inputMode="decimal"
        // pattern={`\\d{0,${maxDecimals}}`}
        title={`Please enter up to ${maxDecimals} decimals`}
        value={decimalPart || ""}
        onChange={handleDecimalChange}
      />
    </div>
  );
};

export default DecimalInput;
