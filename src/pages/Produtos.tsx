import { NavHeader } from "../Components/NavHeader";
import fruitsBanner from "../assets/fruits-banner.png";
import { CardProduto } from "../Components/CardProduto";
import { data } from "../api/data";
import { useState } from "react";

export function Produtos() {
  const [cartItem, setCartItem] = useState([]);
  
  return (
    <div className="bg-gradient-to-b from-white to-cinzaClaro min-h-[100vh] h-full">
      <NavHeader />
      <div className="w-full">
        <div className="bg-gradient-to-b from-white to-transparent">
          <img src={fruitsBanner} alt="frutas" />
          <div className="container-fluid grid grid-cols-2 grid-col-flow gap-4 lg:grid-cols-6 md:grid-cols-4 xxl:grid-cols-6 sm:grid-cols-3 xs:grid-cols-2">
            {data.productData.map((fruta) => {
              return (
                <div className="col">
                  <CardProduto
                    name={fruta.name}
                    carbohydrates={fruta.nutritions.carbohydrates}
                    protein={fruta.nutritions.protein}
                    calories={fruta.nutritions.calories}
                    fat={fruta.nutritions.fat}
                    sugar={fruta.nutritions.sugar}
                    genus={""}
                    id={0}
                    family={""}
                    order={""}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
