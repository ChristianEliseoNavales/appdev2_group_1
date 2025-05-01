import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [records, setRecords] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  const fetchAttendance = async () => {
    const res = await axios.get("http://localhost:5000/api/attendance");
    setRecords(res.data);
  };

  const addRecord = async () => {
    if (!name.trim()) {
      setError("Name cannot be empty.");
      return;
    }
    await axios.post("http://localhost:5000/api/attendance", { name });
    setName("");
    setError("");
    fetchAttendance();
  };

  const markTimeOut = async (id) => {
    await axios.put(`http://localhost:5000/api/attendance/${id}`);
    fetchAttendance();
  };

  const deleteRecord = async (id) => {
    await axios.delete(`http://localhost:5000/api/attendance/${id}`);
    setConfirmDeleteId(null);
    fetchAttendance();
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  const incompleteRecords = records.filter((r) => !r.timeOut);
  const completedRecords = records.filter((r) => r.timeOut);

  return (
    <div className="min-h-screen bg-[#04184b] p-6 font-sans text-gray-800">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow-md max-w-fit mx-auto mt-10 text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-4 tracking-wide">
          Attendance Tracker
        </h1>
        <div className="flex justify-center gap-2">
          <input
            className="px-4 py-2 w-72 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 shadow"
            onClick={addRecord}
          >
            Time In
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      {/* Main Columns */}
      <div className="flex flex-col md:flex-row gap-8 max-w-screen-xl mx-auto mt-10">
        {/* Incomplete */}
        <div className="flex-1 bg-gray-100 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-center text-blue-800 mb-4">
            Incomplete Attendance
          </h2>
          <ul className="space-y-4">
            {incompleteRecords.map((record) => (
              <li
                key={record._id}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3"
              >
                <div>
                  <p className="font-medium">{record.name}</p>
                  <p className="text-sm text-gray-500">📅 {record.date}</p>
                  <p className="text-sm text-gray-500">⏰ In: {record.timeIn}</p>
                  <p className="text-sm text-red-500 font-medium">⏳ Out: Not yet recorded</p>
                </div>
                <button
                  onClick={() => markTimeOut(record._id)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200 shadow"
                >
                  Time Out
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Completed */}
        <div className="flex-1 bg-gray-100 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-center text-blue-800 mb-4">
            Complete Attendance
          </h2>
          <ul className="space-y-4">
            {completedRecords.map((record) => (
              <li
                key={record._id}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3"
              >
                <div>
                  <p className="font-medium">{record.name}</p>
                  <p className="text-sm text-gray-500">📅 {record.date}</p>
                  <p className="text-sm text-gray-500">⏰ In: {record.timeIn}</p>
                  <p className="text-sm text-gray-500">⏳ Out: {record.timeOut}</p>
                </div>
                <button
                  onClick={() => setConfirmDeleteId(record._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200 shadow"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal */}
      {confirmDeleteId && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center w-80">
            <p className="text-lg font-semibold mb-5">
              Are you sure you want to delete this record?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => deleteRecord(confirmDeleteId)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 min-w-[100px] shadow transition duration-200"
              >
                Yes
              </button>
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 min-w-[100px] shadow transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
