import { useNavigate } from "react-router-dom";
function CameraCard({ camera, onTakeOver }) {
    const getStatusColor = (status) => {
      switch (status) {
        case "active":
          return "text-green-600";
        case "idle":
          return "text-yellow-500";
        case "offline":
          return "text-red-600";
        default:
          return "text-gray-500";
      }
    };
    const navigate = useNavigate();
  
    return (
      <div className="bg-white shadow-md rounded-xl p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">{camera.name}</h2>
          <p className={`font-medium ${getStatusColor(camera.status)}`}>
            Status: {camera.status}
          </p>
        </div>
        <button
          onClick={() => onTakeOver(camera.id)}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
        >
          Take Over
        </button>
      </div>
    );
  }
  
  export default CameraCard;
  