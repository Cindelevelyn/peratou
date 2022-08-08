import { FrutaType } from "../interface/fruta.interface";
import { useState } from "react";

export function CardProduto({
  name,
  carbohydrates,
  protein,
  fat,
  sugar,
  calories,
}: FrutaType) {
  const [btn, setBtn] = useState(0);

  return (
    <div className="flex flex-col bg-white w-40 h-40 shadow shadow-mid rounded-[30px] m-3 p-2 justify-center items-center">
      <h2 className="font-ubuntu text-laranja text-2xl">{name}</h2>
      <p className="font-ubuntu text-cinza text-[10px] text-center m-2">
        carboidrato: {carbohydrates}, proteina: {protein}, calorias: {calories},
        gordura: {fat}, açúcar: {sugar}
      </p>
      {/* <h2 className="font-ubuntu text-verde text-xl mb-1">R$ 2,00</h2> */}
      <button onClick={() => (btn == 1 ? setBtn(0) : setBtn(1))}>
        {btn == 0 && (
          <div className="w-full bg-laranja h-8 rounded-[20px] flex flex-rol justify-between items-center">
            <div className="flex justify-center w-[7.5rem] items-center">
              <p className="font-ubuntu text-xs text-white">
                adicionar à cesta
              </p>
              <div className="w-8 h-8 bg-verde rounded-[20px] flex justify-center items-center text-white font-ubuntu">
                +
              </div>
            </div>
          </div>
        )}
        {btn == 1 && (
          <div className="w-full bg-verde h-8 rounded-[20px] flex flex-rol justify-between items-center">
            <div className="flex justify-center w-[7.5rem] items-center">
              <p className="font-ubuntu text-xs text-white">adicionado!</p>
              <div className="w-8 h-8 bg-verde rounded-[20px] flex justify-center items-center text-white font-ubuntu">
                ✓
              </div>
            </div>
          </div>
        )}
      </button>
    </div>
  );
}
