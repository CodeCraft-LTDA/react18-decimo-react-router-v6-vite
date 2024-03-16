import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>This is the home page.</p>

            <div>
                IR para a pagina de SOBRE
                <Link to="/about">About</Link>
            </div>
        </div>
    );
}

export default Home;