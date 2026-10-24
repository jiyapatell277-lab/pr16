
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  function addProduct(e) {
    e.preventDefault();

    const product = {
      id: Date.now(),
      name: name,
      price: price
    };

    setProducts([...products, product]);
    setName("");
    setPrice("");
  }

  return (
    <div>
      <h2>Product Management</h2>

      <form onSubmit={addProduct}>
        <input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Add Product</button>
      </form>

      <h3>Product List</h3>
      {products.map((p) => (
        <p key={p.id}>
          {p.name} - ₹{p.price}
        </p>
      ))}
    </div>
  );
}
