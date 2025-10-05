import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem} from "./redux/slice";
import { useEffect } from "react";
import { fetchProduct } from "./redux/productSlice";

function Product() {
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(fetchProduct());
      }, []);
    const selector=useSelector((state)=>state.products.items);
    return (
        <>

            <section className="products" id="product-list">
                {selector.map((item)=>(
                    <div className="product" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>Price: ${item.price}</p>
                        <button onClick={()=>dispatch(addItem(item))}>Add to Cart</button>
                        <button onClick={()=>dispatch(removeItem(item))}>Remove from Cart</button>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Product;
