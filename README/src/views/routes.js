import EmployeeList from "./employee/listEmployee";
import AddEmployee from "./employee/addEmployee";
 
export const routes = [
    {
        component : EmployeeList,
        path :"/",
        exact : true,
        notProtected : true
    },
    {
        component : EmployeeList,
        path : "/employee",
        exact : true,
        key :"employeeList"
    },
    {
        component : AddEmployee,
        path : "/addEmployee",
        exact : true,
        key :"employeeAdd"
    },
    {
        component : AddEmployee,
        path : "/editEmployee/:id",
        exact : true,
        key :"employeeEdit"
    }
]