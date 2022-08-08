import { FrutaType } from "../interface/fruta.interface";

export function CardCarrinho({
  name
}: FrutaType) {

  return (
    <div className="flex flex-row bg-white w-60 h-20 shadow shadow-mid rounded-[30px] m-3 p-2 justify-center items-center">
      <h2 className="font-ubuntu text-laranja text-2xl">banana</h2>
      <button className="flex m-2 font-ubuntu p-2 w-8 h-8 items-center rounded-full border-2 border-laranja">-
      </button>
      <p className="font-ubuntu">2</p>
      <button className="flex m-2 font-ubuntu p-2 w-8 h-8 items-center rounded-full border-2 border-laranja">+
      </button>
    </div>
  );
}
