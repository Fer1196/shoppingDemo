import "./DetailProduct.css";
import { products as initialProducts } from "../../mocks/products.json";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { FilterContext } from "../../context/filtersContext";
import { Product } from "../../utils/interfaces/Product";
import { useNavigatePages } from "../../hooks/useNavigatePages";
import { useCart } from "../../hooks/useCart";
import { Cart } from "../Cart/Carts";

function DetailProduct() {
  const { handleNavigation } = useNavigatePages();
  const { products } = useContext(FilterContext);
  const { id } = useParams();
  const { addToCart } = useCart();

  const itemShow: Product =
    products.find((item) => {
      return item.id === parseInt(id ?? "0", 10);
    }) || initialProducts[0];

  console.log(itemShow);
  return (
    <>
      <Cart />
      <div>
        <div className="grid-container">
          <div className="grid-item">
            <h1>{itemShow.title}</h1>

            <img
              src={itemShow.thumbnail}
              alt="Preview"
              style={{
                // width: "100%",
                // height: "100%",
                objectFit: "contain",
              }}
            />
            <span
              style={{
                marginTop: "20px",
                fontSize: "20px",
                textAlign: "justify",
              }}
            >
              {itemShow.description}
            </span>

            <div className="background">
              <div className="gallery">
                {itemShow.images.map((image) => {
                  return (
                    <div className="card">
                      <figure>
                        <img
                          src={image}
                          alt="Preview"
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      </figure>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid-item">
            <h1
              style={{
                textAlign: "center",
              }}
            >
              Detalles
            </h1>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h2>Modelo</h2>
              <span
                style={{
                  fontSize: "30px",
                }}
              >
                {itemShow.title}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h2>Tipo</h2>
              <span
                style={{
                  fontSize: "30px",
                }}
              >
                {itemShow.category}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h2>Descuento</h2>
              <span
                style={{
                  fontSize: "30px",
                }}
              >
                % {itemShow.discountPercentage}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h2>Precio</h2>
              <span
                style={{
                  fontSize: "30px",
                }}
              >
                {itemShow.price}
              </span>
            </div>

            <button
              style={{
                width: "100%",
                padding: "20px",
                backgroundColor: "#FF4D4D",
                borderRadius: "10px",
              }}
              onClick={() => {
                addToCart(itemShow);
              }}
            >
              Agregar al carrito
            </button>
            <div
              style={{
                marginTop: "20px",
              }}
            >
              <button
                style={{
                  width: "100%",
                  padding: "20px",
                  backgroundColor: "#FF4D4D",
                  borderRadius: "10px",
                }}
                onClick={() => {
                  handleNavigation("/cart");
                }}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
