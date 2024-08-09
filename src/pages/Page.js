import React, { useState } from "react";
import "./Page.css";

function Page() {
  const [endpoint, setEndpoint] = useState("");
  const [searchOption, setSearchOption] = useState("");
  const [jsonData, setJsonData] = useState(null);

  const handleSearch = () => {
    // Mock API call, replace with actual API call
    setJsonData({
      exampleKey: "exampleValue",
    });
  };

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="End Point URL"
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
          className="input-field"
        />
        <select
          value={searchOption}
          onChange={(e) => setSearchOption(e.target.value)}
          className="select-field"
        >
          <option value="">Search Option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      <div className="search-result">
        <h3>Search Result</h3>
        <pre>{jsonData ? JSON.stringify(jsonData, null, 2) : "Json data"}</pre>
      </div>
    </div>
  );
}

export default Page;
