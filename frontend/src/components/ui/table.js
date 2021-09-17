import React from "react";
import DataTable from "react-data-table-component";
import { useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import jwt from "jsonwebtoken";
import "./Table.css";

const columns = [
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
    name: "Total Price",
    selector: (row) => `${row.totalPrice} $`,
    sortable: true,
  },
];

function Table({ value, state, adult, setbook }) {
  let { path } = useRouteMatch();
  const flight = value;
  console.log("plesae", flight);
  console.log(adult);
  const userId = jwt.decode(state.token);
  const [token, settoken] = React.useState([]);
  const history = useHistory();
  const [selectedRows, setSelectedRows] = React.useState([]);
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
    settoken(state.token);
    console.log("token  froooont", token);
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

          icon: "warning",

          buttons: true,
          dangerMode: false,
        }).then((willtrue) => {
          if (willtrue) {
            setbook(selectedRows);
            //setupdate(selectedRows[0]._id)
            axios
              .post(
                "http://localhost:5000/flightBooking/",
                {
                  flightId: selectedRows[0]._id,
                  // flightId:"6140df936f8dab49301f7aec",
                  adults: adult,
                },
                {
                  headers: {
                    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTNkOTBiZDFiNTU2NTQ2ZDg0YWVjYjUiLCJlbWFpbCI6Im1vaCIsImlhdCI6MTYzMTkxMjcwNywiZXhwIjoxNjMxOTE2MzA3fQ.dc-dgFypkYWUU0zWM3qPIYyJG9JkIdO26Vm_oDAIxZQ"}`,
                  },
                }
              )
              .then((reslut) => {
                console.log(reslut.data);
              })
              .catch((err) => {
                console.log(err);
              });

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
      <div>
        <button key="book" onClick={bookHandler}>
          BOOK
        </button>
      </div>
    );
  }, [adult, history, path, selectedRows, state.token, token, userId]);
  return (
    <div>
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
