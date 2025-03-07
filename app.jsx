import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter ,RouterProvider, useRouteError, Outlet, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));


function ReactRouter () {
  return (
  <>
  <h1>Learning React Router</h1>
  <a href="/about">About us</a>
  <Link to="/contact">Contact</Link>
  <Outlet />
  </>

  )
}

const   Error = () => {
  const err = useRouteError ();
  console.log(err);
   return (
    <div>
      <h1>{err.status} {err.error.message}</h1>
      <h2>Something went wrong</h2>
    
    </div>
   )
}

const Contact = () => { return <h1>Contact Page</h1>}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ReactRouter />,
    errorElement: <Error />,
    children:[
      {
        path: "/about",
        element:<h1> Children About Page</h1>
      },
      {
        path: "/contact",
        element:<h1> Children contact Page</h1>
      }
    ]
    // children route
  //  outlet
  // },
  // {
  //   path: "/about",
  //   element:<h1>About Page</h1>
  // },
  // {
  //   path: "/contact",
  //   element:<Contact />
   }
])

// never use a tag to route because the whole page will refresh

root.render(<RouterProvider router={appRouter} />)


// types of routing 
// 1. client side routing
// 2. server side routing

// dynamic routing => 
  // useParam
