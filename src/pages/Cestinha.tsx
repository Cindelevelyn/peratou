import { useState } from "react";
import { CardCarrinho } from "../Components/CardCarrinho";
import { NavHeader } from "../Components/NavHeader";

export function Cestinha() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="bg-gradient-to-b from-white to-gray-300 min-h-[100vh] h-full">
      <NavHeader />
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-col justify-between min-h-[80vh]">
          <h1 className="font-ubuntu text-laranja text-5xl mt-6">Cestinha</h1>

          {/* {cartItems.length === 0 && (
            <div>
              <p className="text-lg">A cestinha está vazia...</p>
              <a
                href="/produtos"
                className="underline text-lg font-ubuntu text-laranja hover:text-verde"
              >
                Clique aqui e volte a comprar
              </a>
            </div>
          )} */}
          {/* {cartItems.length != 0 && ( */}
            {/* <CardCarrinho/> */}
            <div className="flex flex-row justify-evenly w-[80rem] items-center col-sm-12">
              <div className="flex bg-verde p-6 w-96 justify-between text-white font-ubuntu rounded-[40px] h-[3rem] items-center col-sm-12">
                <p>quantidade de itens:</p>
                <p className="text-xl">3</p>
              </div>
              <button className="bg-laranja w-40 rounded-[40px] font-ubuntu text-white h-[3rem] col-sm-12">
                finalizar
              </button>
              <button className="bg-white border-4 border-laranja w-40 rounded-[40px] font-ubuntu text-laranja h-[3rem] col-sm-12">
                limpar
              </button>
            </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}
