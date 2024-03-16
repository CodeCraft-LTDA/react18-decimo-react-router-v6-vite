import { useNavigate } from "react-router-dom";

const Products = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products/1/2");
    }

    return (
        <div>
            <h1>Products</h1>
            <button onClick={handleClick}>Product 1</button>
        </div>
    );
}

export default Products;