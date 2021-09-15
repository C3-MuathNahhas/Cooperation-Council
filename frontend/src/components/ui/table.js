import React from "react";
import DataTable from "react-data-table-component";
import { useHistory, useRouteMatch } from "react-router-dom";
import "../ui/Table.css";
import axios from "axios";
import swal from "sweetalert";

const columns = [
  {
    name: "_id",
    selector: (row) => row._id,
    sortable: true,
  },
  {
    name: "destination",
    selector: (row) => row.destination,
    sortable: true,
  },
  {
    name: "origin",
    selector: (row) => row.origin,
    sortable: true,
  },
  {
    name: "date",
    selector: (row) => row.date,
    sortable: true,
  },
  {
    name: "capacity",
    selector: (row) => row.capacity,
    sortable: true,
  },
  {
    name: "price",
    selector: (row) => row.price,
    sortable: true,
  },
];

function Table({ value, state }) {
  let { path, url } = useRouteMatch();
  const flight = value;
  //console.log(flight)
  const [adults, setadults] = React.useState([]);
  const [token, settoken] = React.useState([]);
  const history = useHistory();
  const [selectedRows, setSelectedRows] = React.useState([]);
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);
  const contextActions = React.useMemo(() => {
    const bookHandler = async () => {
      if (
        swal({
          title: "Are you sure?",
          text: `you want to book on:\r ${selectedRows.map(
            (r) => r.destination
          )}?`,
          // eslint-disable-next-line no-dupe-keys
          title: "Enter the Number of Adults",
          icon: "warning",
          content: "input",
          buttons: true,
          dangerMode: false,
        }).then((willtrue) => {
          if (willtrue) {
            setadults(parseInt(willtrue));
            settoken(state.token);
            axios
              .post(
                "http://localhost:5000/flightBooking",
                {
                  flightId: selectedRows._id,
                  adults: adults,
                  userId: "613a4d4cfd1dd74d24f77969",
                },
                { headers: { Authorization: `Bearer ${token}` } }
              )
              .then((reslut) => {
                console.log(reslut.data);
              })
              .catch((err) => {
                console.log(err);
              });
            console.log(selectedRows);

            swal("thanks! Your book has been saved!", {
              icon: "success",
            });
          } else {
            swal("Your can book again");
          }
        })
      ) {
        history.push(`${path}/update`);
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
    <div className="">
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
    </div>
  );
}
export default Table;
