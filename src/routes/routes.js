import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/share/Home";
import CourseDetails from "../Components/share/CourseDetails";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home>, loader: () => fetch('http://localhost:5000/courses') },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/course/${params.id}`)
                }
            }
        ]
    }
])