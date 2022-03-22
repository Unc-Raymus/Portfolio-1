import {CartTotal} from "../CartTotal"
import {useContext} from "react"

//Consumer component of CartTotal context edits the total value
//using setTotal
function AddToCartButton(props) {
    const price = props.price
    const {total, setTotal} = useContext(CartTotal)
    return (
        <button onClick={() => setTotal(total + price)}>
            Add to Cart
        </button>
    );
}

export default AddToCartButton