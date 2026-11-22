import { useCart } from "./context/CartContext.jsx";

const products = [
  { id: 1, name: "Notebook", description: "Ruled, 120 pages", price: 4.5 },
  { id: 2, name: "Water Bottle", description: "Reusable, 750 ml", price: 12 },
  { id: 3, name: "Canvas Tote", description: "Everyday carry bag", price: 8.25 },
];

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function App() {
  const { cart, dispatch, itemCount, total } = useCart();

  return (
    <main className="page">
      <header className="topbar">
        <div>
          <p className="eyebrow">Experiment 3</p>
          <h1>Campus Store</h1>
        </div>
        <p className="cart-count" aria-live="polite">
          Cart <span>{itemCount}</span>
        </p>
      </header>

      <div className="layout">
        <section aria-labelledby="products-heading">
          <h2 id="products-heading">Products</h2>
          <div className="product-list">
            {products.map((product) => (
              <article className="product" key={product.id}>
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <strong>{currency.format(product.price)}</strong>
                </div>
                <button
                  onClick={() => dispatch({ type: "add", product })}
                  type="button"
                >
                  Add to cart
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="cart-panel" aria-labelledby="cart-heading">
          <div className="cart-heading">
            <h2 id="cart-heading">Your Cart</h2>
            {cart.length > 0 && (
              <button
                className="text-button"
                onClick={() => dispatch({ type: "clear" })}
                type="button"
              >
                Clear
              </button>
            )}
          </div>
          {cart.length === 0 ? (
            <p className="empty">Your cart is empty. Add a product to begin.</p>
          ) : (
            <>
              <ul className="cart-list">
                {cart.map((item) => (
                  <li className="cart-item" key={item.id}>
                    <div>
                      <strong>{item.name}</strong>
                      <p>
                        {currency.format(item.price)} × {item.quantity}
                      </p>
                    </div>
                    <div className="item-actions">
                      <strong>{currency.format(item.price * item.quantity)}</strong>
                      <button
                        aria-label={`Remove ${item.name}`}
                        className="remove-button"
                        onClick={() =>
                          dispatch({ type: "remove", productId: item.id })
                        }
                        type="button"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="total">
                <span>Total</span>
                <strong>{currency.format(total)}</strong>
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
