import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/share/Home";
import CourseDetails from "../Components/share/CourseDetails";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import PrivateRoute from "../Layout/PrivateRoute";
import Profile from "../Components/Profile/Profile";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home>, loader: () => fetch('http://localhost:5000/courses') },
            {
                path: '/course/:id',
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/course/${params.id}`)
                }
            },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/profile', element: <PrivateRoute> <Profile></Profile></PrivateRoute> },

        ]
    }
])