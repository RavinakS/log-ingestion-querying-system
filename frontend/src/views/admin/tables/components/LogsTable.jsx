export default function LogsTable({ logs }) {
  return (
    <div className="max-h-[400px] overflow-auto">
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="min-w-[150px] py-3  pl-4 text-left">Level</th>
            <th className="min-w-[150px] py-3  pr-4 text-left">Message</th>
            <th className="min-w-[150px] py-3  pr-4 text-left">Resource ID</th>
            <th className="min-w-[150px] py-3  pr-4 text-left">Trace ID</th>
            <th className="min-w-[150px] py-3  pr-4 text-left">Span ID</th>
            <th className="min-w-[150px] py-3  pr-4 text-left">Commit</th>
            <th className="min-w-[150px] py-3  pr-4 text-left">
              Parent Resource ID
            </th>
            <th className="min-w-[150px] py-3  pr-4 text-left">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, idx) => (
            <tr key={idx}>
              <td className="min-w-[150px] py-6  pl-4">{log.level}</td>
              <td className="min-w-[150px] py-3  pr-4">{log.message}</td>
              <td className="min-w-[150px] py-3  pr-4">{log.resourceId}</td>
              <td className="min-w-[150px] py-3  pr-4">{log.traceId}</td>
              <td className="min-w-[150px] py-3  pr-4">{log.spanId}</td>
              <td className="min-w-[150px] py-3  pr-4">{log.commit}</td>
              <td className="min-w-[150px] py-3  pr-4">
                {log.metadata.parentResourceId}
              </td>
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
