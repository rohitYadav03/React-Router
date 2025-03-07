import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";


// const About = () => {
//     return <h1>About Page</h1>
// }
// const Contact = () => {
//     return <h1>Contact Page</h1>
// }

// const Header = () => {{
//   return (
//     <div>
//         <h1>Header component</h1>
//  <Link to="/">Home</Link>
//  <Link to="/about">About</Link>
//  <Link to="/contact">Contact</Link>
//     </div>
//   )
// }}

// const appRouter = createBrowserRouter([
//    {
//     path: "/",
//     element:<Header />
//    },
//    {
//     path: "/about",
//     element:<About />
//    },   {
//     path: "/contact",
//     element:<Contact />
//    }
// ]);


// 🔥 Practice Question for Nested Routes & <Outlet /> => by building simple blog app with differnt route

const About = () => {
    return <h1>About Page</h1>
}
const Home = () => {
    return <h1>Home Page</h1>
}

const Navbar = () => {
    return (
        <div>
           <h1>Nav Bar</h1>
            <Outlet />
        </div>
    )
}

const blogRoute = createBrowserRouter([
    {
        path:"/",
        element:<Navbar />,
        children: [
            {
path: "/about",
element: <About />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={blogRoute}/>)