import { Button } from "@mui/material";
import { useState } from "react";

interface SelectButtonProps {
  inputValue: number;
  snackPrices: number[];
  snackStocks: number[];
  onSelect: (price: number) => void;
  isValidMoney: boolean;
  disabled: boolean;
}

export function SelectButton({
  inputValue,
  snackPrices,
  snackStocks,
  onSelect,
  isValidMoney,
  disabled,
}: SelectButtonProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (price: number, index: number) => {
    setSelectedIndex(index);
    onSelect(price);
  };

  return (
    <>
      {snackPrices.map((price, index) => {
        const isSoldOut = snackStocks[index] === 0;
        const isSelected = selectedIndex === index;
        const buttonColor = isSoldOut
          ? "#9CA3AF"
          : isSelected
          ? "white"
          : inputValue >= price
          ? "green"
          : "#9CA3AF";

        const fontColor = isSoldOut
          ? "black"
          : isSelected
          ? "black"
          : inputValue >= price
          ? "white"
          : "black";

        return (
          <Button
            key={index}
            style={{
              backgroundColor: buttonColor,
              color: fontColor,
              fontWeight: "bold",
            }}
            disabled={
              !isValidMoney ||
              inputValue < price ||
              isSoldOut ||
              disabled === true
            }
            onClick={() => handleClick(price, index)}
          >
            {index + 1}
          </Button>
        );
      })}
    </>
  );
}
