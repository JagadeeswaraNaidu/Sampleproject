import { useEffect, useState } from "react";
import { fetchEmployees } from "../api/employeeApi";
import { useNavigate } from "react-router-dom";

function List() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchEmployees();
      setEmployees(data);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="text-primary">Employee List</h3>
          <button
            className="btn btn-success"
            onClick={() => navigate("/chart")}
          >
            View Salary Chart
          </button>
        </div>

        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary"></div>
          </div>
        ) : (
          <ul className="list-group">
            {employees.map((emp, index) => (
              <li
                key={index}
                className="list-group-item list-group-item-action d-flex justify-content-between"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  navigate(`/details/${index}`, { state: emp })
                }
              >
                <span>{emp[0]}</span>
                <span className="text-muted">{emp[1]}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default List;