import { useParams } from "react-router-dom";

const Product = () => {
    const { categoryID, productID } = useParams();

    return (
        <div>
            <h2>Product</h2>
            <p>This is the product page.</p>
            <p>Category ID: {categoryID}</p>
            <p>Product ID: {productID}</p>
        </div>
    );
}

export default Product;