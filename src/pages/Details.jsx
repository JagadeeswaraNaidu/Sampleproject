import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const employee = location.state;

  if (!employee) {
    return <h4 className="text-center mt-5">No Employee Data Found</h4>;
  }

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch {
      alert("Camera access denied!");
    }
  };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    const image = canvas.toDataURL("image/png");
    navigate("/photo", { state: image });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <button
          className="btn btn-outline-secondary mb-3"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h3 className="text-primary">{employee[0]}</h3>
        <hr />

        <p><strong>Position:</strong> {employee[1]}</p>
        <p><strong>City:</strong> {employee[2]}</p>
        <p><strong>Employee ID:</strong> {employee[3]}</p>
        <p><strong>Joining Date:</strong> {employee[4]}</p>
        <p><strong>Salary:</strong> {employee[5]}</p>

        <button className="btn btn-primary mt-3" onClick={startCamera}>
          Start Camera
        </button>

        <div className="mt-3 text-center">
          <video ref={videoRef} autoPlay width="300" className="rounded shadow" />
        </div>

        <button className="btn btn-success mt-3" onClick={capturePhoto}>
          Capture Photo
        </button>

        <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      </div>
    </div>
  );
}

export default Details;