import axios from "axios";
import { useEffect, useState } from "react";

const AddEmployee = (props) => {
  const [inputValue, setInputValue] = useState({
    userId: "",
    title: "",
    body: "",
  });

  useEffect(() => {
    if (props.location.data) {
      setInputValue({ ...props.location.data });
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSumbit = () => {
    if (props.location.data) {
      axios
        .put(
          `https://jsonplaceholder.typicode.com/posts/${inputValue.id}`,
          JSON.stringify(inputValue)
        )
        .then((res) => {
            console.log(res)
          if (res.status === 200) {
            alert("data updated successfully");
            props.history.push("/employee")
          }
        });
    } else {
      axios
        .post(
          "https://jsonplaceholder.typicode.com/posts",
          JSON.stringify(inputValue)
        )
        .then((res) => {
          if (res.status === 201) {
            alert("data added successfully");
          }
          console.log("res", res);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <label>User id</label>
      <div>
        <input
          name="userId"
          onChange={handleInputChange}
          value={inputValue.userId}
        />
      </div>
      <label>Title</label>
      <div>
        <input
          name="title"
          onChange={handleInputChange}
          value={inputValue.title}
        />
      </div>
      <label>Body</label>
      <div>
        <input
          name="body"
          onChange={handleInputChange}
          value={inputValue.body}
        />
      </div>

      <button type="submit" onClick={handleSumbit}>
        Submit
      </button>
    </div>
  );
};

export default AddEmployee;
