import React,{useContext} from "react";
import DataTable from "react-data-table-component";
import { Route, Redirect, useHistory } from "react-router-dom";
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


function MyComponent() {
    const [selectedRows, setSelectedRows] = React.useState(false);
    const [toggledClearRows, setToggleClearRows] = React.useState(false);
  
    const handleChange = ({ selectedRows }) => {
      setSelectedRows(selectedRows);
    };
  
    // Toggle the state so React Data Table changes to clearSelectedRows are triggered
    const handleClearRows = () => {
      setToggleClearRows(!toggledClearRows);
    }
  
    return (
      <>
        <button onClick={handleClearRows}>
          Clear Selected Rows
        </button>
        <DataTable
          title="Arnold Movies"
          columns={columns}
          data={test_data}
          selectableRows
          onSelectedRowsChange={handleChange}
          clearSelectedRows={toggledClearRows}
        />
      </>
    );
  };
  export default MyComponent;