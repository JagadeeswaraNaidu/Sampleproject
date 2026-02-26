import { useEffect, useState } from "react";
import { fetchEmployees } from "../api/employeeApi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import { useNavigate } from "react-router-dom";

function Chart() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      const employees = await fetchEmployees();

      const formatted = employees.slice(0, 10).map(emp => ({
        name: emp[0],
        salary: parseInt(emp[5].replace(/[$,]/g, ""))
      }));

      setData(formatted);
    };

    loadData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <button
          className="btn btn-outline-secondary mb-3"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h3 className="text-primary text-center mb-4">
          Salary Chart (Top 10 Employees)
        </h3>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="salary" fill="#0d6efd" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;