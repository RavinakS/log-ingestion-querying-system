import React, { useState } from "react";
import InputField from "components/fields/InputField";
import DateTimeInput from "components/fields/DateTimeField";
import MetadataInput from "components/fields/MetadataInput";
import { toast } from "react-toastify";
import axios from "axios";
const baseUrl = "http://localhost:5000";

export default function SignIn() {
  const [timestamp, setTimestamp] = useState("");
  const [metadata, setMetadata] = useState("");
  const [formData, setFormData] = useState({
    level: "",
    message: "",
    resourceId: "",
    traceId: "",
    spanId: "",
    commit: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (!timestamp) {
        toast.error("Missing required fields."); //{"firstName": "Ravina", "lastName": "Kumari"}
      }
      const metadataObj = metadata.trim() ? JSON.parse(metadata) : {};
      if (!metadataObj || Object.keys(metadataObj).length === 0) {
        toast.error("Missing required fields.");
        return;
      }

      const keys = Object.keys(formData);
      for (let key of keys) {
        if (!formData[key]) {
          console.log("missing field:: ", key);
          toast.error("Missing required fields.");
          return;
        }
      }

      const body = { ...formData, timestamp, metadata };
      const resp = await axios.post(`${baseUrl}/add-log`, body);
      if (resp.status === 201) {
        toast.success("Log ingested successfully.");
      } else {
        toast.error(resp.data.message || "Something went wrong.");
      }
      setFormData({});
      return;
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!!");
    }
  };

  return (
    <div className="h-full w-full p-4 pb-10">
      <InputField
        label="level*"
        placeholder="Info"
        id="level"
        value={formData.level}
        onChange={handleChange}
      />

      <InputField
        label="Message*"
        placeholder="User login successful"
        id="message"
        value={formData.message}
        onChange={handleChange}
      />

      <InputField
        label="Resource Id*"
        placeholder="server-1234"
        id="resourceId"
        value={formData.resourceId}
        onChange={handleChange}
      />

      <InputField
        label="Trace Id*"
        placeholder="trace-abc123l"
        id="traceId"
        value={formData.traceId}
        onChange={handleChange}
      />

      <InputField
        label="Span Id*"
        placeholder="span-def456"
        id="spanId"
        value={formData.spanId}
        onChange={handleChange}
      />

      <InputField
        label="Commit*"
        placeholder="a1b2c3d"
        id="commit"
        value={formData.commit}
        onChange={handleChange}
      />

      <MetadataInput value={metadata} onChange={setMetadata} />

      <DateTimeInput
        id="timestamp"
        label="Date and Time*"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
      />

      <div className="mt-10 flex justify-center">
        <button
          type="submit"
          className="linear rounded-xl bg-brand-500 px-10 py-2 text-lg font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
