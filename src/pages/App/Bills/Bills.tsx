import { useEffect, useState } from "react";
import "./Bills.css";
import { Bills } from "../../../utils/interfaces/Bills.interface";

export function Bills() {
  const [bills, setBills] = useState<Bills[]>([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(async (res) => await res.json())
      .then((res) => {
        setBills([
          {
            idBill: 1,
            customer: {
              idCustomer: 1,
              name: "Andrea",
              lastName: "Orellana",
              address: "La Troncal",
              mail: "ado.poi@gmail.com",
              identificationNumber: "0985945236",
            },
            detailBill: [
              {
                idDetailBill: 1,
                idBill: 1,
                idProduct: 1,
                quantity: 2,
                value: 1.5,
              },
            ],
            subTotal: 3,
            total: 3.36,
            iva: 0.36,
          },
          {
            idBill: 1,
            customer: {
              idCustomer: 1,
              name: "Andrea",
              lastName: "Orellana",
              address: "La Troncal",
              mail: "ado.poi@gmail.com",
              identificationNumber: "0985945236",
            },
            detailBill: [
              {
                idDetailBill: 1,
                idBill: 1,
                idProduct: 1,
                quantity: 2,
                value: 1.5,
              },
            ],
            subTotal: 3,
            total: 3.36,
            iva: 0.36,
          },
          {
            idBill: 1,
            customer: {
              idCustomer: 1,
              name: "Andrea",
              lastName: "Orellana",
              address: "La Troncal",
              mail: "ado.poi@gmail.com",
              identificationNumber: "0985945236",
            },
            detailBill: [
              {
                idDetailBill: 1,
                idBill: 1,
                idProduct: 1,
                quantity: 2,
                value: 1.5,
              },
            ],
            subTotal: 3,
            total: 3.36,
            iva: 0.36,
          },
          {
            idBill: 1,
            customer: {
              idCustomer: 1,
              name: "Andrea",
              lastName: "Orellana",
              address: "La Troncal",
              mail: "ado.poi@gmail.com",
              identificationNumber: "0985945236",
            },
            detailBill: [
              {
                idDetailBill: 1,
                idBill: 1,
                idProduct: 1,
                quantity: 2,
                value: 1.5,
              },
            ],
            subTotal: 3,
            total: 3.36,
            iva: 0.36,
          },
          {
            idBill: 1,
            customer: {
              idCustomer: 1,
              name: "Andrea",
              lastName: "Orellana",
              address: "La Troncal",
              mail: "ado.poi@gmail.com",
              identificationNumber: "0985945236",
            },
            detailBill: [
              {
                idDetailBill: 1,
                idBill: 1,
                idProduct: 1,
                quantity: 2,
                value: 1.5,
              },
            ],
            subTotal: 3,
            total: 3.36,
            iva: 0.36,
          },
        ]);
        // initialState.current = res.results;
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1 className="cart-title">Facturas</h1>
      <table>
        <thead>
          <tr>
            <th className="cart-span">Nro Factura</th>
            <th className="cart-span">Nombres </th>
            <th className="cart-span">Email</th>
            <th className="cart-span">Direccion</th>
            <th className="cart-span">Total</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr>
              <td>{bill.idBill}</td>
              <td>
                {bill.customer.name} {bill.customer.lastName}
              </td>
              <td>{bill.customer.mail}</td>
              <td>{bill.customer.address}</td>
              <td>{bill.total}</td>
            </tr>
          ))}
          {/* <tr>
            <td>FACT-434343-0023</td>
            <td>PATRICIO CONSTANTE</td>
            <td>pat@gmail.com</td>
            <td>Quito</td>
            <td>445.78</td>
          </tr>
          <tr>
            <td>FACT-434343-0045</td>
            <td>MICHAEL JACKSON QUINONEZ</td>
            <td>her@qas.com</td>
            <td>Machachi</td>
            <td>56.78</td>
          </tr>
          <tr>
            <td>FACT-434343-3423</td>
            <td>MARVIN PITA</td>
            <td>mar@qa.com.com</td>
            <td>Manabi</td>
            <td>4.78</td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
}
