import { products as initialProducts } from "../mocks/products.json";
import "./DetailCar.css";
export function DetailCar() {
  return (
    <>
      <div className="cart">
        <h1 className="cart-title">Carrito a Pagar</h1>

        <div className="cart-title-row">
          <span className="cart-span">Qauntity</span>

          <span className="cart-span">Detail Product</span>
          <h2> Price</h2>
        </div>

        {initialProducts.map((ele) => {
          return (
            <div className="cart-list">
              <div className="list-row">
                <span className="cart-span-margin">3</span>
                <img src={ele.thumbnail} className="list-img"></img>
              </div>
              <span className="cart-span">{ele.title}</span>
              <h2> {ele.price}</h2>
            </div>
          );
        })}

        <div className="cart-total">
          <div className="total-row">
            <h2>Total Price: </h2>

            <h1>$ 456.89</h1>
          </div>
        </div>

        <button className="cart-button">Pay</button>
      </div>
    </>
  );
}
