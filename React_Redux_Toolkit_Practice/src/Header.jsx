import { useSelector } from "react-redux";

function Header() {
    const selector=useSelector((state)=>state.cart.value);
  return (
    <header>
        <h1>My Store</h1>
        <div className="cart" >
          🛒 Cart <span id="cart-count">{selector}</span>
        </div>
      </header>
  );
}
export default Header;
