import React, { useEffect, useState } from "react";

function Home() {
  const [data1, setData1] = useState([]);
  const [catFact, setCatFact] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [error1, setError1] = useState(null);
  const [error2, setError2] = useState(null);

  useEffect(() => {
    // Fetch data from the first API
    fetch("https://api.restful-api.dev/objects")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData1(Array.isArray(data) ? data : []);
        setLoading1(false);
      })
      .catch((error) => {
        setError1(error);
        setLoading1(false);
      });

    // Fetch data from the cat facts API
    fetch("https://catfact.ninja/facts")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data from Cat Facts API:", data); // Debugging log
        setCatFact(data.data || []);
        setLoading2(false);
      })
      .catch((error) => {
        setError2(error);
        setLoading2(false);
      });
  }, []);

  return (
    <div className="app-container">
      <h1>Data from Two APIs</h1>

      {/* Table for Data from the First API */}
      {loading1 ? (
        <p>Loading data from the first API...</p>
      ) : error1 ? (
        <p>Error: {error1.message}</p>
      ) : (
        <div>
          <h2>First API Data</h2>
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {data1.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Table for Data from the Cat Facts API */}
      {loading2 ? (
        <p>Loading data from the Cat Facts API...</p>
      ) : error2 ? (
        <p>Error: {error2.message}</p>
      ) : (
        <div>
          <h2>Cat Facts Data</h2>
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Fact</th>
              </tr>
            </thead>
            <tbody>
              {catFact.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.fact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Home;
