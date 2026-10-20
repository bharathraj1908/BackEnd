import { useState } from "react";

const App = () => {

  // TASK 1 - Employee Salary
  const [employeeName, setEmployeeName] = useState("Arun");
  const [salary, setSalary] = useState(25000);

  const handleIncreaseSalary = () => {
    setSalary((prev) => prev + 5000);
  };


  // TASK 2 - Course List
  const [courses, setCourses] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  const handleAddReact = () => {
    setCourses((prev) => [...prev, "React"]);
  };

  const handleUpdateCSS = () => {
    setCourses((prev) =>
      prev.map((course) =>
        course === "CSS" ? "Advanced CSS" : course
      )
    );
  };


  // TASK 3 - Product Details
  const [product, setProduct] = useState({
    name: "Laptop",
    price: 45000,
    stock: 10
  });

  const handleUpdatePrice = () => {
    setProduct((prev) => ({
      ...prev,
      price: 50000
    }));
  };

  const handleAddBrand = () => {
    setProduct((prev) => ({
      ...prev,
      brand: "Dell"
    }));
  };


  return (
    <div>

      {/* TASK 1 - Employee Salary */}
      <h1>Task 1 - Employee Salary</h1>

      <h3>Employee Name: {employeeName}</h3>
      <p>Salary: ₹{salary}</p>

      <button onClick={handleIncreaseSalary}>
        Increase Salary
      </button>

      <hr />


      {/* TASK 2 - Course List */}
      <h1>Task 2 - Course List</h1>

      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>

      <button onClick={handleAddReact}>
        Add React
      </button>

      <button onClick={handleUpdateCSS}>
        Update CSS
      </button>

      <hr />


      {/* TASK 3 - Product Details */}
      <h1>Task 3 - Product Details</h1>

      <p>Name: {product.name}</p>
      <p>Price: ₹{product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>Brand: {product.brand || "Not added"}</p>

      <button onClick={handleUpdatePrice}>
        Update Price
      </button>

      <button onClick={handleAddBrand}>
        Add Brand
      </button>

    </div>
  );
};

export default App;