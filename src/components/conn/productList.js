import React, {useContext,useEffect} from "react";
import ProductContext from './ProductContext';
import  Product from './product';
const ProductList = (props) => {
    const ProductCtx = useContext(ProductContext)
    useEffect(()=>{
        console.log('useEffect')
        getProducts();
    },[])
    const getProducts = async () => {
        const data = await fetch("http://localhost:3025/secondary/Carmel");
        const products_data = await data.json();
        console.log(products_data)
        ProductCtx.setProducts(products_data.matcheddata);
    }
    return(
        <div>
            {props.children}
            {ProductCtx.Products.map((product,index)=>
            <Product key={index} product_id={product._id} product_image={product.image} 
                product_name={product.full_name} 
                product_price={product.secondary_school} 
            />)}
        </div>
    )
}
export default ProductList;