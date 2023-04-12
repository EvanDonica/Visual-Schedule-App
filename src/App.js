import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

import Home from './pages/Home';
import Create from './pages/create'

const App = () =>{
    return(
        <BrowserRouter>
        <header>
            <nav>
                <h1>Nav Bar</h1>
                <Link to="/">Home</Link>
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


