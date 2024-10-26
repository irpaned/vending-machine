import { Button } from "@mui/material";
import "./App.css";
import { useProduct } from "./components/product/hooks/useProduct";
import { ProductCard } from "./components/product/ProductCard";
import { Machine } from "./components/machine/Machine";

function App() {
  const { items } = useProduct();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="flex justify-between border border-black rounded-[20px] p-10 h-[730px] w-[600px] m-auto bg-gray-800">
        <div className="flex flex-col w-[60%] items-center">
          <div className="rounded w-full h-full p-5 bg-gray-500 grid grid-cols-2 gap-4">
            {Array.isArray(items) &&
              items.map((item) => <ProductCard key={item.id} product={item} />)}
          </div>
          <Button
            style={{
              height: "100px",
              width: "200px",
              borderRadius: "100px",
              backgroundColor: "white",
              marginTop: "15px",
            }}
            onClick={handleRefresh}
          >
            <h1 className="text-black font-bold">PUSH</h1>
          </Button>
        </div>
        <div className="flex flex-col w-[35%] ">
          <Machine />
        </div>
      </div>
    </>
  );
}

export default App;
