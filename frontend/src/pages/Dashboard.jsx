import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">מערכת ניהול מצלמות</h1>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link
          to="/stream"
          className="bg-blue-600 text-white px-6 py-3 rounded text-center hover:bg-blue-700"
        >
          צפייה במצלמות (Stream)
        </Link>

        {/* ניתן להוסיף עוד ניווטים בעתיד /}
        {/ <Link to="/settings" className="bg-gray-600 ...">הגדרות</Link> */}
      </div>
    </div>
  );
}

export default Dashboard;