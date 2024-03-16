import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Products = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products/1/2");
    }

    const [searchParams, setSearchParams] = useSearchParams();
    const [count, setCount] = useState(0);

    useEffect(() => {
        //METHOD 1: ele exclui todos os queries strings
        // setSearchParams({ count: count.toString() });

        //METHOD 2: ele mantem os queries strings
        // searchParams.set("count", count.toString());
        // setSearchParams(searchParams);

        console.log(searchParams.get("count"));
        console.log(searchParams.has("count"));
        
        searchParams.delete("count");
        setSearchParams(searchParams);
    }, [count]);

    const handleClicked = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Products</h1>
            <button onClick={handleClick}>Product 1</button>
            <button onClick={handleClicked}>Clicked {count} times</button>
        </div>
    );
}

export default Products;