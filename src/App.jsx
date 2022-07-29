import { Swap } from "phosphor-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Summary } from "./components/Summary";

import { useEffect, useState } from "react";
import { Button } from "./components/Button";

function App() {
  const [products, setProducts] = useState([]);

  const [total, setTotal] = useState(0);

  const [changeMinicart, setChangeMinicart] = useState(true);

  const notify = () => toast("Carrinho Alterado!");

  function changeMinicartApi(event) {
    setChangeMinicart(!changeMinicart);
    notify();
  }

  useEffect(() => {
    if (changeMinicart) {
      fetch("http://localhost:3333/below-ten")
        .then((response) => response.json())
        .then((data) => setProducts(data[0].items));
    } else {
      fetch("http://localhost:3333/above-ten")
        .then((response) => response.json())
        .then((data) => setProducts(data[0].items));
    }
  }, [changeMinicart]);

  useEffect(() => {
    if (changeMinicart) {
      fetch("http://localhost:3333/below-ten")
        .then((response) => response.json())
        .then((data) => setTotal(data[0].totalizers[0].value));
    } else {
      fetch("http://localhost:3333/above-ten")
        .then((response) => response.json())
        .then((data) => setTotal(data[0].totalizers[0].value));
    }
  }, [changeMinicart]);

  return (
    <div className="App">
      <div className="wrapper">
        <button className="changeMinicart" onClick={changeMinicartApi}>
          Trocar carrinho
          <Swap size={24} />
        </button>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Header changeMinicart={changeMinicart} />
        <Products products={products} />
        <Summary total={total} />
        <Button />
      </div>
    </div>
  );
}

export default App;
