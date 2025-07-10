import React, { useState, useEffect } from "react";
import Card from "components/card";
import { FiSearch } from "react-icons/fi";
import LogsTable from "./LogsTable";
import axios from "axios";
const baseUrl = "http://localhost:5000";

function ColumnsTable(props) {
  const [logs, setLogs] = useState([]);
  const [date, setDate] = useState("");
  const [level, setLevel] = useState("");
  const [search, setSearch] = useState("");

  const getLogsData = async () => {
    try {
      const logsData = await axios.get(`${baseUrl}/get-logs`);
      setLogs(logsData?.data?.logs || []);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Selected date:", date);
    console.log("Selected level:", level);
  };

  useEffect(() => {
    getLogsData();
  }, []);

  return (
    <Card extra={"w-full pb-10 mt-5 p-4 h-full"}>
      <header className="relative flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="rounded-md border border-gray-300 px-2 py-1 text-sm text-gray-700"
          />

          <select
            value={level}
            onChange={handleLevelChange}
            className="rounded-md border border-gray-300 px-2 py-1 text-sm text-gray-700"
          >
            <option value="">All Levels</option>
            <option value="info">Info</option>
            <option value="warn">Warn</option>
            <option value="error">Error</option>
          </select>

          <div className="relative">
            <input
              type="text"
              placeholder="Search message"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-48 rounded-md border border-gray-300 px-8 py-1 text-sm text-gray-700"
            />
            <FiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleSubmit}
            className="rounded bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600"
          >
            Apply Filters
          </button>
        </div>
      </header>

      <div className="mt-8 overflow-scroll xl:overflow-hidden">
        <LogsTable logs={logs} />
      </div>
    </Card>
  );
}

export default ColumnsTable;
