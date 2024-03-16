import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <main style={{background: "red"}}>
                <h1>MainLayout</h1>
                <Outlet />
            </main>
        </>
    );
}

export default MainLayout;