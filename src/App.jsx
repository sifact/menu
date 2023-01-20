import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import img from "./assets/hero-pizza.png";
import items from "./data";
import { Categories } from "./components/Categories/Categories";
import { Menu } from "./components/Menu/Menu";

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState([]);

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories />
                <Menu />
            </section>
        </main>
    );
}

export default App;
