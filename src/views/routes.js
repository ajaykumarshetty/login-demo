import EmployeeList from "./employee";
import Login from "./login/index";
 
export const routes = [
    {
        component : Login,
        path :"/",
        exact : true,
        notProtected : true
    },
    {
        component : EmployeeList,
        path : "/employee",
        exact : true,
        key :"employee"
    },
    {
        component : ()=> <h1 className="text-center">Page not found</h1>,
        path : "*",
        exact : true,
        key :"notFound"
    }
]