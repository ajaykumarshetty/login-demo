import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Employee = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    getListData()
  }, []);

  const getListData = ()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      setEmployeeData(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const handleDelete = (id)=>{
    axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
        if(res.status === 200){
            getListData()
            alert("Data deleted successfully")
        }
    })
    .catch((error) => {
      console.error(error);
    });
  }


  return (
    <div>
      <div>
        <Link to="/addEmployee">
          <h1>Add</h1>

        </Link>
        <input placeholder="Search data" />
      </div>
      {
        <table>
          <tr>
            <th>User id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>

          {employeeData.map((data, index) => (
            <tr>
              <td>{data.userId}</td>
              <td>{data.title}</td>
              <td>{data.body}</td>
              <td>
                <Link to={{
                    pathname :`editEmployee/${data.userId}`,
                    data : data
                }}>Edit</Link>
                <p onClick={()=>handleDelete(data.userId)}>Delete</p>
              </td>
            </tr>
          ))}
        </table>
      }
    </div>
  );
};

export default Employee;
