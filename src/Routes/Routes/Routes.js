import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Main from "../../Layouts/Main";
import CoursesLayout from "../../Courses/CoursesLayout";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
        
            },
            {
                path:'/course/:id',
                element:<CoursesLayout></CoursesLayout>
            }
        ]
    }
])