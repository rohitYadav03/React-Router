import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, NavLink, Outlet, RouterProvider,useRouteError } from "react-router-dom";


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

const Blog1 = () => {
    return <h1>Blog 1 is this</h1>
}

const Blog2 = () => {
    return <h1>Blog 2 is this</h1>
}

const Blog = () => {
    return(
        <>
        <Link to="/blogs/blog1">Blog 1</Link>
        <Link to="/blogs/blog2">Blog 2</Link>
        <Outlet />
        </>
    )
}


const blogRoute = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "blogs",
          element: <Blog />,
          children: [
            {
              path: "blog1", // ✅ Correct Path
              element: <Blog1 />
            },
            {
              path: "blog2", // ✅ Correct Path
              element: <Blog2 />
            }
          ]
        }
      ]
    }
  ]);
  
// PRACTISE QUESTION 2 => SIMPLE PORTFOLIO WEBISTE ROUTE 

const PortfolioAbout = () => {
    return <h3>Hello I am Rohit , I am 22 year old currently learning react router</h3>
}

const PortfolioProject = () => {
    return (
        <>
        <NavLink to="project1"
        className={({isActive}) => isActive ? "active" : ""}
        >Project 1</NavLink>
        <Link to="project2">Project 2</Link>
        <Outlet />
        </>
    )
}

const Project1 = () => <h1>Project 1 here</h1>
const Project2 = () => <h1>Project 2 here</h1>

const PortfolioHome = () => {
  return <h1>Home Page</h1>
}
// useRouteError => for custom error Page
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
        <h1>{error.status} - {error.statusText}</h1>
        </>
    )
}

const PortfolioRoute = createBrowserRouter([
    {
        path: "/",
        element: <PortfolioHome />,
        errorElement: <ErrorPage />, // Global Error Page for all Routes
    },
    {
        path: "/about",
        element: <PortfolioAbout />,
        errorElement: <ErrorPage />, 
    },
    {
        path: "/projects",
        element: <PortfolioProject />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "project1",
                element: <Project1 />
            },
            {
                path: "project2",
                element: <Project2 />
            }
        ]
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={PortfolioRoute}/>)