import React, { memo } from "react";

const Header = ({ setValue }) => {
  return (
    <>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="border mb-5 p-2 rounded"
        placeholder="Search..."
      />
    </>
  );
};

export default memo(Header);
