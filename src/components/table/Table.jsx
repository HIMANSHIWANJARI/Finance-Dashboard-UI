import "./list.scss";
import DataTable from "react-data-table-component";

const Table = () => {

  // ✅ Columns
  const columns = [
    {
      name: "Organisation",
      selector: (row) => row.item,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Tree Plant Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Number",
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
  ];

  // ✅ Clean Data (Indian context + proper fields)
  const data = [
    {
      item: "Punjab Forest Department",
      category: "Tree Plantation",
      date: "Feb 7, 2024",
      amount: "100",
      units: 1,
      total: "100",
    },
    {
      item: "NGO - Green India",
      category: "Tree Plantation",
      date: "Jan 25, 2024",
      amount: "250",
      units: 1,
      total: "250",
    },
    {
      item: "Chandigarh Municipal Corp",
      category: "Urban Forestry",
      date: "Feb 2, 2024",
      amount: "180",
      units: 1,
      total: "180",
    },
    {
      item: "Delhi Green Drive",
      category: "Awareness Campaign",
      date: "Feb 10, 2024",
      amount: "300",
      units: 1,
      total: "300",
    },
    {
      item: "School Plantation Program",
      category: "Education",
      date: "Jan 15, 2024",
      amount: "120",
      units: 1,
      total: "120",
    },
    {
      item: "Corporate CSR - TCS",
      category: "CSR Activity",
      date: "Feb 5, 2024",
      amount: "500",
      units: 1,
      total: "500",
    },
    {
      item: "Village Panchayat Ropar",
      category: "Rural Development",
      date: "Feb 8, 2024",
      amount: "90",
      units: 1,
      total: "90",
    },
    {
      item: "Eco Club Initiative",
      category: "Youth Program",
      date: "Jan 30, 2024",
      amount: "75",
      units: 1,
      total: "75",
    },
    {
      item: "Green Punjab Mission",
      category: "Government Drive",
      date: "Feb 12, 2024",
      amount: "400",
      units: 1,
      total: "400",
    },
    {
      item: "University Plantation Drive",
      category: "Campus Activity",
      date: "Feb 3, 2024",
      amount: "150",
      units: 1,
      total: "150",
    },
  ];

  // ✅ UI
  return (
    <div className="list">
      <div className="listContainer">
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
              <option>Organization</option>
              <option>Income </option>
            </select>
          </div>

          <DataTable
            columns={columns}
            data={data}
            selectableRows
            fixedHeader
            pagination
          />
        </div>
      </div>
    </div>
  );
};

export default Table;