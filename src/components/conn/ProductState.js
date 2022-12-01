import React,{ useState} from "react";
import ProductContext  from './ProductContext';
const ProductState = (props) => {
    const [Products, setProducts] = useState([]);
    console.log(props)
    return(
        <ProductContext.Provider value = {{Products,setProducts}}>
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductState;