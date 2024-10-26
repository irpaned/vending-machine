import { Button } from "@mui/material";

interface SelectButtonProps {
  inputValue: number;
  snackPrices: number[];
  snackStocks: number[];
  onSelect: (price: number) => void;
  isValidMoney: boolean;
}

export function SelectButton({
  inputValue,
  snackPrices,
  snackStocks,
  onSelect,
  isValidMoney,
}: SelectButtonProps) {
  return (
    <>
      {snackPrices.map((price, index) => (
        <Button
          key={index}
          style={{
            backgroundColor: "#9CA3AF",
            color: "black",
            fontWeight: "bold",
          }}
          disabled={
            !isValidMoney || inputValue < price || snackStocks[index] === 0
          }
          onClick={() => onSelect(price)}
        >
          {index + 1}
        </Button>
      ))}
    </>
  );
}
