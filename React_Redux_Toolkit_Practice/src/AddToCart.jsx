import { useSelector } from "react-redux";

function AddToCart() {
    const selector=useSelector((state)=>state.cart.items);
    return (


        <div className="cart-container" id="cart-container" >
            <h2>Your Cart</h2>
            <div id="cart-items"></div>
            <h3>Total: $<span id="cart-total">{selector}</span></h3>
        </div>
    )
}
export default AddToCart;
