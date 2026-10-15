
import { useState } from "react";

const App = () => {
  // 1. EMPLOYEE FORM
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    salary: "",
  });

  const [employees, setEmployees] = useState([]);
  const [editEmployeeId, setEditEmployeeId] = useState(null);

  const handleEmployeeChange = (e) => {
    const { name, value } = e.target;

    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleEmployeeSubmit = (e) => {
    e.preventDefault();

    if (editEmployeeId !== null) {
      setEmployees(
        employees.map((item) =>
          item.id === editEmployeeId
            ? { ...employee, id: editEmployeeId }
            : item
        )
      );
      setEditEmployeeId(null);
    } else {
      setEmployees([
        ...employees,
        { ...employee, id: Date.now() },
      ]);
    }

    setEmployee({ name: "", department: "", salary: "" });
  };

  const editEmployee = (item) => {
    setEmployee({
      name: item.name,
      department: item.department,
      salary: item.salary,
    });
    setEditEmployeeId(item.id);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((item) => item.id !== id));
  };

  // 2. PRODUCT FORM
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);

  const handleProductChange = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();

    if (editProductId !== null) {
      setProducts(
        products.map((item) =>
          item.id === editProductId
            ? { ...product, id: editProductId }
            : item
        )
      );
      setEditProductId(null);
    } else {
      setProducts([
        ...products,
        { ...product, id: Date.now() },
      ]);
    }

    setProduct({ name: "", price: "", quantity: "" });
  };

  const editProduct = (item) => {
    setProduct({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    });
    setEditProductId(item.id);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  // 3. COURSE FORM
  const [course, setCourse] = useState({
    name: "",
    trainer: "",
    duration: "",
  });

  const [courses, setCourses] = useState([]);

  const handleCourseChange = (e) => {
    const { name, value } = e.target;

    setCourse({
      ...course,
      [name]: value,
    });
  };

  const handleCourseSubmit = (e) => {
    e.preventDefault();

    setCourses([
      ...courses,
      { ...course, id: Date.now() },
    ]);

    setCourse({ name: "", trainer: "", duration: "" });
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter((item) => item.id !== id));
  };

  // 4. EXPENSE FORM
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
  });

  const [expenses, setExpenses] = useState([]);
  const [editExpenseId, setEditExpenseId] = useState(null);

  const handleExpenseChange = (e) => {
    const { name, value } = e.target;

    setExpense({
      ...expense,
      [name]: value,
    });
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();

    if (editExpenseId !== null) {
      setExpenses(
        expenses.map((item) =>
          item.id === editExpenseId
            ? { ...expense, id: editExpenseId }
            : item
        )
      );
      setEditExpenseId(null);
    } else {
      setExpenses([
        ...expenses,
        { ...expense, id: Date.now() },
      ]);
    }

    setExpense({ title: "", amount: "", category: "" });
  };

  const editExpense = (item) => {
    setExpense({
      title: item.title,
      amount: item.amount,
      category: item.category,
    });
    setEditExpenseId(item.id);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  // 5. STUDENT MARKS FORM
  const [student, setStudent] = useState({
    name: "",
    tamil: "",
    english: "",
    maths: "",
  });

  const [students, setStudents] = useState([]);

  const handleStudentChange = (e) => {
    const { name, value } = e.target;

    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleStudentSubmit = (e) => {
    e.preventDefault();

    setStudents([
      ...students,
      { ...student, id: Date.now() },
    ]);

    setStudent({
      name: "",
      tamil: "",
      english: "",
      maths: "",
    });
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((item) => item.id !== id));
  };

  // REUSABLE TABLE HEADERS AND ROWS ARE WRITTEN BELOW

  return (
    <div className="app">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f1f5f9;
          color: #1e293b;
        }

        .app {
          max-width: 1100px;
          margin: auto;
          padding: 25px;
        }

        h1 {
          text-align: center;
          color: #1d4ed8;
        }

        h2 {
          color: #1d4ed8;
          margin-top: 0;
        }

        .section {
          background: white;
          padding: 22px;
          margin: 24px 0;
          border-radius: 12px;
          box-shadow: 0 2px 8px #00000012;
          overflow-x: auto;
        }

        form {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 20px;
        }

        input {
          flex: 1 1 180px;
          min-width: 0;
          padding: 11px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          font-size: 15px;
        }

        button {
          padding: 10px 14px;
          border: none;
          border-radius: 6px;
          background: #2563eb;
          color: white;
          cursor: pointer;
        }

        button:hover {
          opacity: 0.85;
        }

        .delete {
          background: #dc2626;
        }

        .edit {
          background: #059669;
          margin-right: 6px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 520px;
        }

        th, td {
          padding: 12px;
          border: 1px solid #e2e8f0;
          text-align: left;
        }

        th {
          background: #dbeafe;
        }

        .empty {
          color: #64748b;
          margin: 10px 0;
        }

        @media (max-width: 600px) {
          .app {
            padding: 12px;
          }

          .section {
            padding: 15px;
          }
        }
      `}</style>

      <h1>React Form Practice</h1>
      <p style={{ textAlign: "center" }}>
        Employee · Product · Course · Expense · Student Marks
      </p>

      {/* EMPLOYEE FORM */}
      <section className="section">
        <h2>1. Employee Form</h2>

        <form onSubmit={handleEmployeeSubmit}>
          <input
            name="name"
            placeholder="Employee Name"
            value={employee.name}
            onChange={handleEmployeeChange}
            required
          />

          <input
            name="department"
            placeholder="Department"
            value={employee.department}
            onChange={handleEmployeeChange}
            required
          />

          <input
            name="salary"
            type="number"
            min="0"
            placeholder="Salary"
            value={employee.salary}
            onChange={handleEmployeeChange}
            required
          />

          <button type="submit">
            {editEmployeeId !== null ? "Update Employee" : "Add Employee"}
          </button>
        </form>

        {employees.length === 0 ? (
          <p className="empty">No employees added yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.department}</td>
                  <td>{item.salary}</td>
                  <td>
                    <button
                      className="edit"
                      onClick={() => editEmployee(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete"
                      onClick={() => deleteEmployee(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* PRODUCT FORM */}
      <section className="section">
        <h2>2. Product Form</h2>

        <form onSubmit={handleProductSubmit}>
          <input
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleProductChange}
            required
          />

          <input
            name="price"
            type="number"
            min="0"
            step="any"
            placeholder="Price"
            value={product.price}
            onChange={handleProductChange}
            required
          />

          <input
            name="quantity"
            type="number"
            min="0"
            placeholder="Quantity"
            value={product.quantity}
            onChange={handleProductChange}
            required
          />

          <button type="submit">
            {editProductId !== null ? "Update Product" : "Add Product"}
          </button>
        </form>

        {products.length === 0 ? (
          <p className="empty">No products added yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button
                      className="edit"
                      onClick={() => editProduct(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete"
                      onClick={() => deleteProduct(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* COURSE FORM */}
      <section className="section">
        <h2>3. Course Form</h2>

        <form onSubmit={handleCourseSubmit}>
          <input
            name="name"
            placeholder="Course Name"
            value={course.name}
            onChange={handleCourseChange}
            required
          />

          <input
            name="trainer"
            placeholder="Trainer Name"
            value={course.trainer}
            onChange={handleCourseChange}
            required
          />

          <input
            name="duration"
            placeholder="Duration (e.g. 3 months)"
            value={course.duration}
            onChange={handleCourseChange}
            required
          />

          <button type="submit">Add Course</button>
        </form>

        {courses.length === 0 ? (
          <p className="empty">No courses added yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Trainer</th>
                <th>Duration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.trainer}</td>
                  <td>{item.duration}</td>
                  <td>
                    <button
                      className="delete"
                      onClick={() => deleteCourse(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* EXPENSE FORM */}
      <section className="section">
        <h2>4. Expense Form</h2>

        <form onSubmit={handleExpenseSubmit}>
          <input
            name="title"
            placeholder="Expense Title"
            value={expense.title}
            onChange={handleExpenseChange}
            required
          />

          <input
            name="amount"
            type="number"
            min="0"
            step="any"
            placeholder="Amount"
            value={expense.amount}
            onChange={handleExpenseChange}
            required
          />

          <input
            name="category"
            placeholder="Category"
            value={expense.category}
            onChange={handleExpenseChange}
            required
          />

          <button type="submit">
            {editExpenseId !== null ? "Update Expense" : "Add Expense"}
          </button>
        </form>

        {expenses.length === 0 ? (
          <p className="empty">No expenses added yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>₹{item.amount}</td>
                  <td>{item.category}</td>
                  <td>
                    <button
                      className="edit"
                      onClick={() => editExpense(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete"
                      onClick={() => deleteExpense(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* STUDENT MARKS FORM */}
      <section className="section">
        <h2>5. Student Marks Form</h2>

        <form onSubmit={handleStudentSubmit}>
          <input
            name="name"
            placeholder="Student Name"
            value={student.name}
            onChange={handleStudentChange}
            required
          />

          <input
            name="tamil"
            type="number"
            min="0"
            max="100"
            placeholder="Tamil Marks"
            value={student.tamil}
            onChange={handleStudentChange}
            required
          />

          <input
            name="english"
            type="number"
            min="0"
            max="100"
            placeholder="English Marks"
            value={student.english}
            onChange={handleStudentChange}
            required
          />

          <input
            name="maths"
            type="number"
            min="0"
            max="100"
            placeholder="Maths Marks"
            value={student.maths}
            onChange={handleStudentChange}
            required
          />

          <button type="submit">Add Student</button>
        </form>

        {students.length === 0 ? (
          <p className="empty">No students added yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Tamil</th>
                <th>English</th>
                <th>Maths</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((item) => {
                const total =
                  Number(item.tamil) +
                  Number(item.english) +
                  Number(item.maths);

                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.tamil}</td>
                    <td>{item.english}</td>
                    <td>{item.maths}</td>
                    <td>{total} / 300</td>
                    <td>
                      <button
                        className="delete"
                        onClick={() => deleteStudent(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default App;
