import React from "react";

export default function DateTimeInput(props) {
  const { value, onChange, id, label } = props;

  return (
    <div className="mb-3 flex flex-col">
      <label
        htmlFor={id}
        className={`font-medium} ml-1.5 text-sm text-navy-700 dark:text-white`}
      >
        {label}
      </label>
      <input
        type="datetime-local"
        id={id}
        value={value}
        onChange={onChange}
        className={`mt-2 flex h-12 w-fit items-center rounded-xl border border-gray-200 bg-white/0 p-3 text-sm outline-none dark:!border-white/10 dark:text-white`}
      />
    </div>
  );
}
