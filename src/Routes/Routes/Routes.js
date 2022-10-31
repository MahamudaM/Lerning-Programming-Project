import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Main from "../../Layouts/Main";
import CoursesLayout from "../../Courses/CoursesLayout";
import Course from "../../Courses/CourseDetails/Course";
import Login from "../../LogIn/Login";
import Register from "../../LogIn/Register";
import CheckOut from "../../pages/CheckOut/CheckOut";
import PrivateRoutes from "../Private routes/PrivateRoutes";
import TermsAndCondition from "../../pages/TermsAndCondition/TermsAndCondition";
import Blog from "../../pages/Blog/Blog";
import FAQ from "../../FAQ/FAQ";

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
                loader:({params})=>fetch(`https://learn-programming-server-rosy.vercel.app/courses/${params.id}`)
                    
                
            },

            {
                path:'/course',
                element:<CoursesLayout></CoursesLayout>,
                loader:()=>fetch(`https://learn-programming-server-rosy.vercel.app/courses`)
                

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/checkOut/:id',
                element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader:({params})=>fetch(`https://learn-programming-server-rosy.vercel.app/courses/${params.id}`)
            },
            {
                path:'/terms',
                element:<TermsAndCondition></TermsAndCondition>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            }


        ]
    },
    {
        path:'*',
        element:<h1>no route found for search item</h1>
    }

])