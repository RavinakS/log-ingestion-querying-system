import { useState } from "react";

export default function MetadataInput({ value, onChange }) {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;

    // validate JSON
    try {
      if (input.trim() !== "") {
        JSON.parse(input);
      }
      setError("");
    } catch (err) {
      setError("Invalid JSON");
    }

    onChange(input);
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="metadata"
        className="block text-sm font-medium text-gray-700"
      >
        Metadata (JSON)*
      </label>
      <textarea
        id="metadata"
        name="metadata"
        rows={4}
        value={value}
        onChange={handleChange}
        placeholder='{"parentResourceId": "server-5678"}'
        className={`mt-1 block w-full rounded-md border bg-white/0 ${
          error ? "border-red-500" : "border-gray-300"
        } shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
