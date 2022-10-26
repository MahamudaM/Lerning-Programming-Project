import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Main from "../../Layouts/Main";
import CoursesLayout from "../../Courses/CoursesLayout";
import Course from "../../Courses/CourseDetails/Course";
import Login from "../../LogIn/Login";
import Register from "../../LogIn/Register";

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
                path:'/courses/:id',
                element:<Course></Course>,
                loader:({params})=>{
                    fetch(`http://localhost:5000/courses/${params.id}`)
                }
            },

            {
                path:'/course',
                element:<CoursesLayout></CoursesLayout>,
                loader:()=>fetch(`http://localhost:5000/courses`)
                

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])