export default function LogsTable({ logs }) {
  return (
    <div className="overflow-auto">
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="min-w-[150px] py-3  pr-4">Level</th>
            <th className="min-w-[150px] py-3  pr-4">Message</th>
            <th className="min-w-[150px] py-3  pr-4">Resource ID</th>
            <th className="min-w-[150px] py-3  pr-4">Trace ID</th>
            <th className="min-w-[150px] py-3  pr-4">Span ID</th>
            <th className="min-w-[150px] py-3  pr-4">Commit</th>
            <th className="min-w-[150px] py-3  pr-4">Parent Resource ID</th>
            <th className="min-w-[150px] py-3  pr-4">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, idx) => (
            <tr key={idx}>
              <td className="min-w-[150px] py-3  pr-4">{log.level}</td>
              <td className="min-w-[150px] py-3  pr-4">{log.message}</td>
              <td className="min-w-[150px] py-3  pr-4">{log.resourceId}</td>
              <td className="min-w-[150px] py-3  pr-4">{log.traceId}</td>
              <td className="min-w-[150px] py-3  pr-4">{log.spanId}</td>
              <td className="min-w-[150px] py-3  pr-4">{log.commit}</td>
              <td className="min-w-[150px] py-3  pr-4">{log.metadata}</td>
              <td className="min-w-[150px] py-3  pr-4">
                {new Date(log.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
