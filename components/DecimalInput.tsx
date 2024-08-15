import React, { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "./ui/input";
interface DecimalInputProps {
  name: string;
  maxDecimals?: number;
  label?: string;
}

export const DecimalInput: React.FC<DecimalInputProps> = ({
  name,
  maxDecimals = 2,
  label,
}) => {
  const { control, setValue } = useFormContext();
  const [integerPart, setIntegerPart] = useState("");
  const [decimalPart, setDecimalPart] = useState("");

  const handleIntegerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setIntegerPart(value);
    setValue(name, `${value}.${decimalPart}`);
  };

  const handleDecimalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > maxDecimals) value = value.slice(0, maxDecimals);
    setDecimalPart(value);
    setValue(name, `${integerPart}.${value}`);
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Input
          value={integerPart}
          onChange={handleIntegerChange}
          placeholder="0"
        />
        <span>.</span>
        <Input
          value={decimalPart}
          onChange={handleDecimalChange}
          placeholder="00"
        />
      </div>
    </div>
  );
};
