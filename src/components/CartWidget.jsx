export const CartWidget = ({ items }) => {
  return (
    <>
      <div className="flex justify-center relative bg-white rounded-2xl p-1 h-20">
        <div className="flex justify-center absolute top-0 start-42 -translate-y-10 align-middle bg-black rounded-full p-2">
          <img
            className="w-10 h-10"
            src="src/assets/cart.png"
            alt="carrito compras"
          ></img>
        </div>
        <div className="flex flex-col justify-end align-middle text-center">
          <div className="flex flex-col align-middle p-3">
            <span className="font-bold text-black text-lg">{items}</span>
            <span className="flex text-black">Items</span>
          </div>
        </div>
      </div>
    </>
  );
};
