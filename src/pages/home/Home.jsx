import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="income" />
          {/* <Widget type="balance" /> */}
          <Widget type="expense" p=""/>
          <Widget type="earning" p=""/>
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Income vs Expenses (Last 6 Months)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
        
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
