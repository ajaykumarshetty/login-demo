import Table from "../../component/table";
import EmployeeData from "../../mocks/employeeData.json"

const EmployeeList = (props) => {
    const headers = () => {
        return [
            {
                title: "Name",
                accessor: "name"
            },
            {
                title: "Age",
                accessor: "age"
            },
            {
                title: "Gender",
                accessor: "gender"
            },
            {
                title: "Email",
                accessor: "email"
            },
            {
                title: "Phone number",
                accessor: "phoneNo"
            }
        ]
    }

    const handleLogout = ()=>{
        localStorage.clear()
        props.history.push("/")
    }

    return (

        <div>
            <div className="employee-list">
                <div className="allign-items">
                    <h1>Employee List</h1>
                    <div>

                    <button className="primary-button" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
                <Table headers={headers()} tableData={EmployeeData.user} />
            </div>
        </div>
    )
}

export default EmployeeList