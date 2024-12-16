import { ChangeEvent, useState } from "react";
import users from "./users.json";

export const DataTable2 = () => {
  const [elementsPerPage, setElementsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const lastPage = Math.ceil(users.length / elementsPerPage);
  const usersPerPage = users.slice(
    (currentPage - 1) * elementsPerPage,
    currentPage * elementsPerPage
  );

  const handleElementsPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setElementsPerPage(+e.target.value);
  };

  const handleNextPage = () => setCurrentPage((prevPage) => prevPage + 1);

  const handlePreviousPage = () => setCurrentPage((prevPage) => prevPage - 1);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {[
              { label: "ID", key: "id" },
              { label: "Name", key: "name" },
              { label: "Age", key: "age" },
              { label: "Occupation", key: "occupation" },
            ].map(({ label, key }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {usersPerPage.map(({ id, name, age, occupation }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{occupation}</td>
            </tr>
          ))}
        </tbody>
        <select value={elementsPerPage} onChange={handleElementsPerPageChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <button disabled={currentPage === 1} onClick={handlePreviousPage}>
          previous
        </button>
        <span style={{ margin: "0 10px" }}>
          {currentPage} of {lastPage}
        </span>
        <button disabled={currentPage === lastPage} onClick={handleNextPage}>
          next
        </button>
      </table>
    </div>
  );
};
