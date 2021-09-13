import React from "react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import "../ui/Table.css";
import axios from "axios";
import swal from "sweetalert";

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
  {
    name: "ADULT",
    selector: (row) => row.stops,
    sortable: true,
  },
];

function Table({value}) {
  const flight = value;
console.log(flight)
  const history = useHistory();
  const [selectedRows, setSelectedRows] = React.useState([]);
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);
  const contextActions = React.useMemo(() => {
    const bookHandler = () => {
      if (
        swal({
          title: "Are you sure?",
          text: `you want to book on:\r ${selectedRows.map(
            (r) => r.flight_name
          )}?`,
          icon: "warning",
          buttons: true,
          dangerMode: false,
        }).then((willtrue) => {
          if (willtrue) {
            swal("thanks! Your book has been saved!", {
              icon: "success",
            });
          } else {
            swal("Your can book again");
          }
        })
      ) {
        //history.push("/flightTable");
        
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
      title="FlightBooking"
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
