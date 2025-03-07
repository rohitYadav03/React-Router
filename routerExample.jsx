import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";

const Home = () => {
    return <h1>Home Page</h1>
}

const Profile = () => {
    const {name} = useParams();
    if (typeof(name) == "number") {
        console.log("hello");
        
    }
    else{
        return<h1>Name : {name}</h1>
    }
    
}


const profileRoute = createBrowserRouter([
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/user/:name",
        element:<Profile />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={profileRoute} />)