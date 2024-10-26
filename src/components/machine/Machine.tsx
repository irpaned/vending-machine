// import { ChangeEvent, useState } from "react";
// import { SelectButton } from "./SelectButton";
// import { useProduct } from "../product/hooks/useProduct";
// import { Button } from "@mui/material";
// import { z } from "zod";

// export function Machine() {
//   const { items } = useProduct();
//   const snackPrices = items.map((item) => item.price);
//   const moneySchema = z.enum(["5000", "10000", "20000", "50000"]);
//   const [inputValue, setInputValue] = useState(0);
//   const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
//   const [showChange, setShowChange] = useState(false);
//   const [isValidMoney, setIsValidMoney] = useState(false);

//   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     setInputValue(Number(value));
//     setShowChange(false);

//     const isValid = moneySchema.safeParse(value).success;
//     setIsValidMoney(isValid);
//   };

//   const handleBuyClick = () => {
//     setShowChange(true);
//   };

//   const change =
//     selectedPrice !== null && showChange ? inputValue - selectedPrice : 0;

//   return (
//     <>
//       <h1 className="text-[37px] font-bold font-Audiowide text-white">
//         SNACKS
//       </h1>
//       <div className="flex flex-col items-center rounded w-full bg-gray-100 mt-5 p-3">
//         <div>
//           <label className="font-bold">INSERT MONEY</label>
//           <input
//             type="string"
//             className="w-full rounded bg-gray-300 font-bold"
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label className="font-bold">SELECT SNACK</label>
//           <div className="w-full bg-gray-300 mt-1 p-2">
//             <div className="mt-1 grid grid-cols-2 gap-4 ">
//               <SelectButton
//                 inputValue={inputValue}
//                 snackPrices={snackPrices}
//                 onSelect={(price) => setSelectedPrice(price)}
//                 isValidMoney={isValidMoney}
//               />
//             </div>
//             <Button
//               onClick={handleBuyClick}
//               style={{
//                 height: "30px",
//                 width: "80px",
//                 borderRadius: "100px",
//                 backgroundColor: "white",
//                 marginTop: "8px",
//               }}
//             >
//               <h1 className="text-black font-bold text-[13px]">BUY</h1>
//             </Button>
//           </div>
//         </div>

//         <div className="w-full mt-3">
//           <p className="font-bold">CHANGE</p>
//           <p className="bg-gray-300 w-full rounded h-[25px]">
//             {change >= 0 ? change : 0}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

import { ChangeEvent, useState } from "react";
import { SelectButton } from "./SelectButton";
import { useProduct } from "../product/hooks/useProduct";
import { Button } from "@mui/material";
import { z } from "zod";

export function Machine() {
  const { items } = useProduct();
  const snackPrices = items.map((item) => item.price);
  const snackStocks = items.map((item) => item.stock);

  const moneySchema = z.enum(["5000", "10000", "20000", "50000"]);

  const [inputValue, setInputValue] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const [showChange, setShowChange] = useState(false);
  const [isValidMoney, setIsValidMoney] = useState(false);

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(Number(value));
    setShowChange(false);

    const isValid = moneySchema.safeParse(value).success;
    setIsValidMoney(isValid);
  };

  const handleBuyClick = () => {
    setShowChange(true);
  };

  const change =
    selectedPrice !== null && showChange ? inputValue - selectedPrice : 0;

  return (
    <>
      <h1 className="text-[37px] font-bold font-Audiowide text-white">
        SNACKS
      </h1>
      <div className="flex flex-col items-center rounded w-full bg-gray-100 mt-5 p-3">
        <div>
          <label className="font-bold">INSERT MONEY</label>
          <input
            type="string"
            className="w-full rounded bg-gray-300 font-bold"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="font-bold">SELECT SNACK</label>
          <div className="w-full bg-gray-300 mt-1 p-2">
            <div className="mt-1 grid grid-cols-2 gap-4 ">
              <SelectButton
                inputValue={inputValue}
                snackPrices={snackPrices}
                snackStocks={snackStocks}
                onSelect={(price) => setSelectedPrice(price)}
                isValidMoney={isValidMoney}
              />
            </div>
            <Button
              onClick={handleBuyClick}
              style={{
                height: "30px",
                width: "80px",
                borderRadius: "100px",
                backgroundColor: "white",
                marginTop: "8px",
              }}
            >
              <h1 className="text-black font-bold text-[13px]">BUY</h1>
            </Button>
          </div>
        </div>

        <div className="w-full mt-3">
          <p className="font-bold">CHANGE</p>
          <p className="bg-gray-300 w-full rounded h-[25px]">
            {change >= 0 ? change : 0}
          </p>
        </div>
      </div>
    </>
  );
}
