import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

import Home from './pages/Home';
import Create from './pages/create'
import './index.css';

const App = () =>{
    return(
        <BrowserRouter>
        <header>
            <nav>
                <h1>Visual Schedule Builder</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">Create</NavLink>
            </nav>
        </header>
            <main>
                <Routes>
                    <Route index element= {<Home />}/>
                    <Route path="/create" element= {<Create />}/>
                </Routes>
            </main>
        </BrowserRouter>
)};

export default App


