import { 
    createBrowserRouter,
    Route,
    Link,
    NavLink, 
    createRoutesFromElements,
    RouterProvider} from "react-router-dom";

import Home from './pages/Home';
import Create from './pages/create'
import MySchedules from "./pages/MySchedules";

import './index.css';

import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path = "/" element = {<RootLayout/>}>
         <Route index element= {<Home />} />
         <Route path="create" element= {<Create />} />
         <Route path="MySchedules" element= {<MySchedules />} />
    </Route>
    )
)

const App = () =>{
    return(
            <RouterProvider router={router}/>
)};

export default App


