import { Cart } from "../../components/Cart/Carts";
import { useCart } from "../../hooks/useCart";
import { ProductCart } from "../../utils/interfaces/Product";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./DetailCar.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& label.Mui-focused": {
      color: "#01eac2",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#01eac2",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#01eac2",
      },
      "&:hover fieldset": {
        borderColor: "#01eac2",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#01eac2",
      },
      "& input": {
        color: "#01eac2",
      },
      "& placeholder": {
        color: "#01eac2",
      },
      "& .MuiFormLabel-root": {
        color: "#01eac2", // Color del texto del placeholder cuando el TextField está inactivo
      },
      "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
        transform: "translate(14px, -6px) scale(0.75)", // Ajuste para el texto del placeholder cuando el TextField está inactivo
      },
    },
  },
});

export function DetailCar() {
  const { cart } = useCart();
  let total: number = 0;
  const classes = useStyles();
  return (
    <>
      <Cart />
      <div className="cart">
        <div className="dataCustomer">
          {" "}
          <div className="dataRow">
            <h2 className="cart-title">Datos de Facturacion</h2>

            <TextField
              className={classes.root}
              id="outlined-basic"
              label="Cedula"
              variant="outlined"
              InputLabelProps={{
                style: { color: "#01eac2" },
              }}
              InputProps={{
                style: { color: "#01eac2" },
              }}
            />
          </div>
          <div className="dataRow">
            <TextField
              className={classes.root}
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              InputLabelProps={{
                style: { color: "#01eac2" },
              }}
              InputProps={{
                style: { color: "#01eac2" },
              }}
            />
            <TextField
              className={classes.root}
              id="outlined-basic"
              label="Apellido"
              variant="outlined"
              InputLabelProps={{
                style: { color: "#01eac2" },
              }}
              InputProps={{
                style: { color: "#01eac2" },
              }}
            />
          </div>
          <div className="dataRow">
            <TextField
              className={classes.root}
              id="outlined-basic"
              label="Direccion"
              variant="outlined"
              InputLabelProps={{
                style: { color: "#01eac2" },
              }}
              InputProps={{
                style: { color: "#01eac2" },
              }}
            />

            <TextField
              className={classes.root}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              InputLabelProps={{
                style: { color: "#01eac2" },
              }}
              InputProps={{
                style: { color: "#01eac2" },
              }}
            />
          </div>
        </div>

        <h1 className="cart-title">Carrito a Pagar</h1>

        <div className="cart-title-row">
          <div className="row-first">
            <span className="cart-span">Qauntity</span>
          </div>
          <div className="row-second">
            <span className="cart-span">Image</span>
          </div>
          <div className="row-third">
            <span className="cart-span">Detail Product</span>
          </div>
          <div className="row-four">
            <h2> Unit Price</h2>
          </div>
          <div className="row-five">
            <h2> Total Price</h2>
          </div>
        </div>

        {cart.map((ele: ProductCart) => {
          total += ele.price * ele.quantity;
          return (
            <div className="cart-list">
              <div className="row-first">
                <span className="cart-span">{ele.quantity}</span>
              </div>
              <div className="row-second">
                <img src={ele.thumbnail} className="list-img"></img>
              </div>
              <div className="row-third">
                <span className="cart-span">{ele.title}</span>
              </div>
              <div className="row-four">
                <span className="cart-span">{ele.price}</span>
              </div>
              <div className="row-five">
                <span className="cart-span">
                  {(ele.price * ele.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          );
        })}

        <div className="cart-total">
          <div className="total-row">
            <h2>Total Price: </h2>

            <h1>$ {total.toFixed(2)}</h1>
          </div>
        </div>

        <button className="cart-button">Pay</button>
      </div>
    </>
  );
}
