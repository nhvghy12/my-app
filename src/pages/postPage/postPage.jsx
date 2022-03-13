import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import bootstrap
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button'

export default function PostPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setData(json);
      });
  }, []);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.title}</td>
            <td>
              <div>
                <Button href={`/posts/${row.id}`} variant="primary">View detail</Button>{" "}
                {/* <Link to={`/posts/${row.id}`}>View detail</Link> */}
                <Button variant="danger">Remove</Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
