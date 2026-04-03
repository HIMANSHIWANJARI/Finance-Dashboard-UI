import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "react-data-table-component";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import PrintIcon from "@mui/icons-material/Print";

const Income = () => {

  // ✅ Columns
  const columns = [
    {
      name: "Item",
      selector: (row) => row.item,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Transaction date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
    {
      name: "Units",
      selector: (row) => row.units,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row) => row.total,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row, index) => (
        <div>
          <Button
            style={{ backgroundColor: "red", color: "white", padding: 5 }}
            onClick={() => handleDelete(index)}
          >
            Delete
          </Button>{" "}
          <Button
            style={{ backgroundColor: "green", color: "white", padding: 5 }}
            onClick={() => handleView(row)}
          >
            View
          </Button>{" "}
          <Button
            style={{ backgroundColor: "blue", color: "white", padding: 5 }}
            onClick={() => handleEdit(row)}
          >
            Edit
          </Button>
        </div>
      ),
    },
  ];

  // ✅ Data
  const data = [
    {
      item: "Groceries - Big Bazaar",
      category: "Groceries",
      date: "Feb 7, 2024",
      amount: "$40",
      units: 1,
      total: "$40",
    },
    {
      item: "Zara Kurta",
      category: "Clothing",
      date: "Jan 12, 2024",
      amount: "$55",
      units: 1,
      total: "$55",
    },
    {
      item: "Swiggy Order",
      category: "Food",
      date: "Feb 5, 2024",
      amount: "$12",
      units: 2,
      total: "$24",
    },
    {
      item: "Uber Ride",
      category: "Transport",
      date: "Feb 2, 2024",
      amount: "$8",
      units: 1,
      total: "$8",
    },
    {
      item: "Electricity Bill",
      category: "Bills",
      date: "Jan 28, 2024",
      amount: "$30",
      units: 1,
      total: "$30",
    },
    {
      item: "Netflix Subscription",
      category: "Entertainment",
      date: "Feb 1, 2024",
      amount: "$10",
      units: 1,
      total: "$10",
    },
    {
      item: "Amazon Shopping",
      category: "Shopping",
      date: "Feb 10, 2024",
      amount: "$75",
      units: 1,
      total: "$75",
    },
    {
      item: "Petrol Expense",
      category: "Transport",
      date: "Feb 6, 2024",
      amount: "$20",
      units: 1,
      total: "$20",
    },
    {
      item: "Gym Membership",
      category: "Health",
      date: "Jan 15, 2024",
      amount: "$25",
      units: 1,
      total: "$25",
    },
    {
      item: "Cafe Coffee Day",
      category: "Food",
      date: "Feb 3, 2024",
      amount: "$15",
      units: 1,
      total: "$15",
    },
  ];

  // ✅ State
  const [records, setRecords] = useState(data);

  // ✅ Functions
  const handleDelete = (rowIndex) => {
    const updatedRecords = [...records];
    updatedRecords.splice(rowIndex, 1);
    setRecords(updatedRecords);
  };

  const handleView = (row) => {
    console.log("View:", row);
  };

  const handleEdit = (row) => {
    console.log("Edit:", row);
  };

  const handleFilter = (event) => {
    const newData = data.filter((row) =>
      row.item.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRecords(newData);
  };

  // ✅ UI
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />

        <div className="datatableTitle">
          Add New Income
          <Link to="/users/new" className="link">
            Add New
          </Link>
        </div>

        <div className="container">
          <div className="sort">
            <select
              style={{
                padding: "0.5rem",
                border: "1px solid #000",
                borderRadius: "0.375rem",
              }}
            >
              <option>Group by</option>
              <option>Currency</option>
              <option>Created at</option>
            </select>
          </div>

          <div className="search">
            <input
              type="text"
              onChange={handleFilter}
              placeholder="Search expenses..."
            />
            <PrintIcon style={{ cursor: "pointer", fontSize: 30 }} />
          </div>

          <DataTable
            columns={columns}
            data={records}
            selectableRows
            fixedHeader
            pagination
          />
        </div>
      </div>
    </div>
  );
};

export default Income;