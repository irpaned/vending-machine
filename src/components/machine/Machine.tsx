import { ChangeEvent, useState } from "react";
import { SelectButton } from "./SelectButton";
import { useProduct } from "../product/hooks/useProduct";
import { Button } from "@mui/material";
import { z } from "zod";
import { numberToRupiah } from "../../utils/numberToRupiah";

export function Machine() {
  const { items } = useProduct();
  const snackPrices = items.map((item) => item.price);
  const snackStocks = items.map((item) => item.stock);

  const moneySchema = z.enum(["2000", "5000", "10000", "20000", "50000"]);

  const [inputMoney, setInputMoney] = useState("");
  const [totalMoney, setTotalMoney] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const [showChange, setShowChange] = useState(false);
  const [isValidMoney, setIsValidMoney] = useState(false);
  const [hasPurchased, setHasPurchased] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setShowChange(false);
    setInputMoney(value);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const parsedValue = Number(value);

    if (moneySchema.safeParse(value).success) {
      setIsValidMoney(true);

      const newTimeoutId = window.setTimeout(() => {
        setTotalMoney((prevTotal) => prevTotal + parsedValue);
        setInputMoney("");
      }, 2000);

      console.log("newTimeoutId", newTimeoutId);

      setTimeoutId(newTimeoutId);
    } else {
      setIsValidMoney(false);
    }
  };

  const handleBuyClick = () => {
    setShowChange(true);
    setHasPurchased(true);
  };

  const change =
    selectedPrice !== null && showChange ? totalMoney - selectedPrice : 0;

  return (
    <>
      <h1 className="text-[33px] font-bold font-Audiowide text-white">
        SNACKS
      </h1>
      <div className="flex flex-col items-center rounded w-full bg-gray-100 mt-5 p-3">
        <div>
          <label className="font-bold">INSERT MONEY</label>
          <div className="flex flex-cols gap-2">
            <input
              type="string"
              className="w-full rounded bg-gray-300 font-bold"
              value={inputMoney}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-full mt-3">
          <p className="font-bold">TOTAL</p>
          <p className="bg-gray-300 w-full rounded h-[25px]">
            {numberToRupiah(totalMoney)}
          </p>
        </div>
        <div className="mt-3">
          <label className="font-bold">SELECT SNACK</label>
          <div className="w-full bg-gray-300 mt-1 p-2">
            <div className="mt-1 grid grid-cols-2 gap-4">
              <SelectButton
                inputValue={totalMoney}
                snackPrices={snackPrices}
                snackStocks={snackStocks}
                onSelect={(price) => setSelectedPrice(price)}
                isValidMoney={isValidMoney}
                disabled={hasPurchased}
              />
            </div>
            <Button
              onClick={handleBuyClick}
              style={{
                height: "30px",
                width: "80px",
                borderRadius: "5px",
                backgroundColor: "green",
                marginTop: "8px",
              }}
              disabled={hasPurchased}
            >
              <h1 className="text-white font-bold text-[13px]">BUY</h1>
            </Button>
          </div>
        </div>

        <div className="w-full mt-3">
          <p className="font-bold">CHANGE</p>
          <p className="bg-gray-300 w-full rounded h-[25px]">
            {change >= 0 ? numberToRupiah(change) : 0}
          </p>
        </div>
      </div>
    </>
  );
}
