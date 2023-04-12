import { NavLink, Outlet} from "react-router-dom"

export default function RootLayout(){
    return(
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Visual Schedule Builder</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/create">Create</NavLink>
                    <NavLink to="/MySchedules">My Schedules</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
         </div>
    )
}