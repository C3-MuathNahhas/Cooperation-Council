import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import { Route, Redirect, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import "../ui/Table.css";

const columns = [
  {
    name: "flightname",
    selector: (row) => row.flight_name,
    sortable: true,
  },
  {
    name: "price",
    selector: (row) => `${row.price} $`,
    sortable: true,
  },
  {
    name: "stop",
    selector: (row) => row.stops,
    sortable: true,
  },
];

function Table() {
  const flight = useContext(UserContext);

  const history = useHistory();
  const [selectedRows, setSelectedRows] = React.useState([]);
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);
  const contextActions = React.useMemo(() => {
    const bookHandler = () => {
      if (
        window.confirm(
          `Are you sure you want to book:\r ${selectedRows.map(
            (r) => r.flight_name
          )}?`
        )
      ) {
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
  }, [history, selectedRows]);
  return (
    <DataTable
      title="Desserts"
      columns={columns}
      data={flight}
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
