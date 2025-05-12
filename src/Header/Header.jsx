import React, { memo } from "react";

const Header = ({ setValue, setCategory }) => {
  return (
    <div className="flex items-center justify-between">
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="border mb-3 p-2 rounded"
        placeholder="Search..."
      />
      <select
        className="border mb-5 p-2 rounded"
        name=""
        id=""
        onChange={(e) => setCategory(e.target.value)}
        defaultValue="all"
      >
        <option value="all">All</option>
        <option value="office">office</option>
        <option value="living room">living room</option>
        <option value="kitchen">kitchen</option>
        <option value="bedroom">bedroom</option>
        <option value="dining">dining</option>
        <option value="kids">kids</option>
      </select>
    </div>
  );
};

export default memo(Header);
