import { DataTable } from "./DataTable";
import "./styles.css";

// Given a list of users, build a users data table that displays users in a paginated format.

// Requirements
// Table requirements
// The users data table should display the following columns: Id, Name, Age, Occupation
// Each row in the table represents a single user
// Pagination requirements
// The pagination controls should allow the user to navigate to previous and next pages
// The pagination controls should display the current page number and the total number of pages
// The table should update dynamically when the user navigates to a different page
// Provide an option to select the number of users displayed per page (e.g., 5, 10, 20)

export default function DataTableStartingCode() {
  return (
    <div>
      <DataTable />
    </div>
  );
}