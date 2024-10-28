import { Button } from "@mui/material";
import "./App.css";
import { useProduct } from "./components/product/hooks/useProduct";
import { ProductCard } from "./components/product/ProductCard";
import { Machine } from "./components/machine/Machine";
import { Marquee } from "./components/machine/Marquee";

function App() {
  const { items } = useProduct();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="rounded-[20px] p-10 w-[650px] m-auto bg-gray-800">
        <div>
          <Marquee />
        </div>
        <div className="flex justify-between mt-5">
          <div className="flex flex-col  w-[60%] items-center">
            <div className="rounded w-full h-full p-5 bg-gray-500 grid grid-cols-2 gap-4">
              {Array.isArray(items) &&
                items.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
            </div>
            <Button
              style={{
                height: "70px",
                width: "200px",
                borderRadius: "5px",
                backgroundColor: "green",
                marginTop: "15px",
              }}
              onClick={handleRefresh}
            >
              <h1 className="text-white text-lg font-bold">PUSH</h1>
            </Button>
          </div>
          <div
            style={{ backgroundColor: "green" }}
            className="flex flex-col w-[35%] h-[72%] rounded p-2"
          >
            <Machine />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
