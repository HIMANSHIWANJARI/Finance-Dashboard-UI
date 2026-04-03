import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from 'react-data-table-component';
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import PrintIcon from '@mui/icons-material/Print';


const Expense = () => {


  const handleDelete = (rowIndex) => {
  const updateRecords = [...records];
  updateRecords.splice(rowIndex,1);
  setRecords(updateRecords);
  console.log("Delete:", rowIndex);
};

const handleView = (row) => {
  // Implement view logic here
  console.log("View:", row);
};

const handleEdit = (rowIndex) => {
  // Implement edit logic here
  console.log("Edit:", records[rowIndex]);
};


  const columns = [
    {
      name:'Item',
      selector: row =>row.item,
    
    },
    {
      name:'Category',
      selector: row =>row.category,
      sortable:true
    },
    {
      name:'Transaction date',
      selector: row =>row.date,
      sortable:true
    },
    {
      name: 'Amount',
      selector: row =>row.amount,
    },
    {
      name:'Units',
      selector: row =>row.units,
      sortable:true
    },
    {
      name:'Total',
      selector: row =>row.total,
      sortable:true
    },
    {
      name:"Action",
      cell: (row,index) => (
      <div>
        <Button style={{ backgroundColor: 'red', color: 'white',padding:5 }} onClick={() => handleDelete(index)}>Delete</Button>{' '}
        <Button style={{ backgroundColor: 'green', color: 'white',padding:5 }} className="view" onClick={() => handleView(index)}>View</Button>{' '}
        <Button style={{ backgroundColor: 'blue', color: 'white',padding:5 }} className="edit" onClick={() => handleEdit(index)}>Edit</Button>
      </div>
      )
    }
  ];

  const data = [
    {
      item: 'kiro february',
      category: 'KIRO',
      date:'Feb 7, 2024',
      amount:'Kshs.3000',
      units:1,
      total:'Kshs.3000',
      // delete:<Button/>
    },
    {
      item: 'Suit 5',
      category: 'SIUTES',
      date:'Jan 1, 2024',
      amount:'Kshs.30000',
      units:2,
      total:'Kshs.30000'
    },
    {
      item: 'kiro february',
      category: 'KIRO',
      date:'Feb 7, 2024',
      amount:'Kshs.3000',
      units:1,
      total:'Kshs.3000'
    },
    {
      item: 'Suit 5',
      category: 'SIUTES',
      date:'Jan 1, 2024',
      amount:'Kshs.30000',
      units:2,
      total:'Kshs.30000'
    },
    {
      item: 'kiro february',
      category: 'KIRO',
      date:'Feb 7, 2024',
      amount:'Kshs.3000',
      units:1,
      total:'Kshs.3000'
    },
    {
      item: 'Suit 5',
      category: 'SIUTES',
      date:'Jan 1, 2024',
      amount:'Kshs.30000',
      units:2,
      total:'Kshs.30000'
    },
    {
      item: 'kiro february',
      category: 'KIRO',
      date:'Feb 7, 2024',
      amount:'Kshs.3000',
      units:1,
      total:'Kshs.3000'
    },
    {
      item: 'Suit 5',
      category: 'SIUTES',
      date:'Jan 1, 2024',
      amount:'Kshs.30000',
      units:2,
      total:'Kshs.30000'
    },
    {
      item: 'kiro february',
      category: 'KIRO',
      date:'Feb 7, 2024',
      amount:'Kshs.3000',
      units:1,
      total:'Kshs.3000'
    },
    {
      item: 'Suit 5',
      category: 'SIUTES',
      date:'Jan 1, 2024',
      amount:'Kshs.30000',
      units:2,
      total:'Kshs.30000'
    },
    {
      item: 'kiro february',
      category: 'KIRO',
      date:'Feb 7, 2024',
      amount:'Kshs.3000',
      units:1,
      total:'Kshs.3000'
    },
    {
      item: 'Suit 5',
      category: 'SIUTES',
      date:'Jan 1, 2024',
      amount:'Kshs.30000',
      units:2,
      total:'Kshs.30000'
    },
    {
      item: 'kiro february',
      category: 'KIRO',
      date:'Feb 7, 2024',
      amount:'Kshs.3000',
      units:1,
      total:'Kshs.3000'
    },
    {
      item: 'Suit 5',
      category: 'SIUTES',
      date:'Jan 1, 2024',
      amount:'Kshs.30000',
      units:2,
      total:'Kshs.30000'
    },
    {
      item: 'kiro february',
      category: 'KIRO',
      date:'Feb 7, 2024',
      amount:'Kshs.3000',
      units:1,
      total:'Kshs.3000'
    },
    {
      item: 'Suit 5',
      category: 'SIUTES',
      date:'Jan 1, 2024',
      amount:'Kshs.30000',
      units:2,
      total:'Kshs.30000'
    },
    {
      item: 'kiro february',
      category: 'KIRO',
      date:'Feb 7, 2024',
      amount:'Kshs.3000',
      units:1,
      total:'Kshs.3000'
    },
    {
      item: 'Suit 5',
      category: 'SIUTES',
      date:'Jan 1, 2024',
      amount:'Kshs.30000',
      units:2,
      total:'Kshs.30000'
    }
  ];
  const [records,setRecords] = useState(data);

  const handleFilter = (event) =>{
    const newData = data.filter(row => {
      return row.item.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData);
  }
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="datatableTitle">
        Add New Expense
        <Link to="/users/new" className="link">
          Add New
        </Link>
         </div>
        <div className="container">
          <div className="sort">
            <select name="" id="" style={{ padding: '0.5rem', border: '1px solid #000', borderRadius: '0.375rem',  }}>
              <option value="">Group by</option>
              <option value="">Currentcy</option>
              <option value="">Createdat</option>
            </select>
          </div>
          <div className="search">
            <input type="text" onChange={handleFilter} placeholder="search expense..."/>
            <PrintIcon style={{cursor:'pointer', fontSize:30}}/>
          </div>
          <DataTable columns={columns} data={records} selectableRows
          fixedHeader pagination 
          />
        </div>
      </div>
    </div>
  )
}

export default Expense