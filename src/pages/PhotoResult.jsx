import { useLocation, useNavigate } from "react-router-dom";

function PhotoResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state;

  return (
    <div className="container mt-5 text-center">
      <div className="card shadow p-4">
        <button
          className="btn btn-outline-secondary mb-3"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h3 className="text-primary">Captured Photo</h3>

        {image && (
          <img
            src={image}
            alt="Captured"
            className="img-fluid rounded shadow mt-3"
          />
        )}
      </div>
    </div>
  );
}

export default PhotoResult;