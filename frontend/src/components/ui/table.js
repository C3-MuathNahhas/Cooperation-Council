import React from "react";
import DataTable from "react-data-table-component";
import { useHistory, useRouteMatch } from "react-router-dom";
//import "../ui/Table.css";
import axios from "axios";
import swal from "sweetalert";
import jwt from "jsonwebtoken";

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
    name: "price",
    selector: (row) => row.price,
    sortable: true,
  },
];

function Table({ value, state,adult }) {
  let { path } = useRouteMatch();
  const flight = value;
  const userId = jwt.decode(state.token);
  console.log(flight);
  
  
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
          
          icon: "warning",
          
          buttons: true,
          dangerMode: false,
        }).then((willtrue) => {
          if (willtrue) {
            setadults(parseInt(willtrue));
            settoken(state.token);
            axios
              .post(
                "http://localhost:5000/flightBooking/",
                {
                  flightId: selectedRows[0]._id,
                  adults: adult,
                  userId: userId,
                },
                { headers: { Authorization: `Bearer ${token}` } }
              )
              .then((reslut) => {
                console.log(reslut.data);
              })
              .catch((err) => {
                console.log(err);
              });
            console.log("hiiiiiii", selectedRows[0]._id);

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
      <div className="">
        <button
          key="book"
          onClick={bookHandler}
          style={{ backgroundColor: "rgb(227,242,253)" }}
        >
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
        expandableRows
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
