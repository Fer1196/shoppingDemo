import "./Bills.css";

export function Bills() {
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
          <tr>
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
          </tr>
        </tbody>
      </table>
    </>
  );
}
