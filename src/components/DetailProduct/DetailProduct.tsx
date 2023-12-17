import "./DetailProduct.css";
import { products as initialProducts } from "../../mocks/products.json";

function DetailProduct() {
  return (
    <div>
      <div className="grid-container">
        <div className="grid-item">
          <h1>{initialProducts[3].title}</h1>

          <img
            src={initialProducts[3].thumbnail}
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
            {initialProducts[3].description}
          </span>

          <div className="background">
            <div className="gallery">
              {initialProducts[3].images.map((image) => {
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
              {initialProducts[3].title}
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
              {initialProducts[3].category}
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
              % {initialProducts[3].discountPercentage}
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
              {initialProducts[3].price}
            </span>
          </div>

          <button
            style={{
              width: "100%",
              padding: "20px",
              backgroundColor: "#FF4D4D",
              borderRadius: "10px",
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;

/* <div className="background">
            <div className="gallery">
              {initialProducts[0].images.map((image) => {
                return (
                  <div className="card">
                    <figure>
                      <img src={image} alt="Preview" />
                    </figure>
                  </div>
                );
              })}
            </div>
          </div> */

/* <img
src={initialProducts[0].thumbnail}
alt="Preview"
style={{
  width: "250px",
  height: "250px",
}}
/> */
