import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-4xl text-red-500 font-bold">בדיקה של Tailwind</div>
      <header className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-4 text-center">
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
      </header>

      <h1 className="">מערכת ניהול מצלמות</h1>
      
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