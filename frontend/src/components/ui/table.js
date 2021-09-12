import React,{useContext} from "react";
import DataTable from "react-data-table-component";
import { Route, Redirect, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import "../ui/Table.css"
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
const array=[]
function Table() {
  const flight=useContext(UserContext);
  const history = useHistory();
  const [selectedRows, setSelectedRows] = React.useState([]);
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);
  const contextActions = React.useMemo(() => {
    const bookHandler = async () => {
      if (
        window.confirm(
          `Are you sure you want to book:\r ${selectedRows.map((r) => r.id)}?`
        )
      ) {
         await array.push(flight);
        console.log(array);
        console.log(selectedRows);
        history.push("/hotel");
      }
    };
    return (
      <div className="table">
      <button
        key="book"
        onClick={bookHandler}
        style={{ backgroundColor: "rgb(227,242,253)" }}
        
      >
        BOOK
      </button>
      </div>
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
export default Table;