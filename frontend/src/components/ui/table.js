import React from "react";
import DataTable from "react-data-table-component";
import { Route, Redirect, useHistory } from "react-router-dom";
​
// const columns = [
//   {
//     id: "id",
//     selector: (row) => row.id,
//     sortable: true,
//   },
//   {
//     title: "title",
//     selector: (row) => row.title,
//     sortable: true,
//   },
//   {
//     year: "year",
//     selector: (row) => row.year,
//     sortable: true,
//   },
// ];
​
const test_data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 3,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 4,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 5,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 6,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 7,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 8,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 9,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 10,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 11,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 12,
    title: "Ghostbusters",
    year: "1984",
  },
];
const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
];
​
function Table() {
  const history = useHistory();
  const [selectedRows, setSelectedRows] = React.useState([]);
​
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);
​
  const contextActions = React.useMemo(() => {
    const bookHandler = () => {
      if (
        window.confirm(
          `Are you sure you want to book:\r ${selectedRows.map((r) => r.id)}?`
        )
      ) {
        console.log(selectedRows);
        history.push("/button");
      }
    };
​
    return (
      <button
        key="book"
        onClick={bookHandler}
        style={{ backgroundColor: "rgb(227,242,253)" }}
        icon
      >
        BOOK
      </button>
    );
  }, [selectedRows]);
  return (
    <DataTable
      title="Desserts"
      columns={columns}
      data={test_data}
      selectableRows
      pagination
      selectableRowsHighlight
      selectableRowsSingle
      contextActions={contextActions}
      onSelectedRowsChange={handleRowSelected}
      pointerOnHover
    />
  );
}
​
export default Table;