import React from "react";

export default function Checkbox({ label }) {
  return (
    <div class="flex items-center mb-4">
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
      />
      <label
        for="default-checkbox"
        class="select-none ms-2 font-medium text-xs opacity-65"
      >
        {label}
      </label>
    </div>
  );
}
