import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />

      <div className="singleContainer">
        <Navbar />

        {/* TOP SECTION */}
        <div className="top">

          {/* LEFT - USER INFO */}
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Account Information</h1>

            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
                alt=""
                className="itemImg"
              />

              <div className="details">
                <h1 className="itemTitle">Himanshi Wanjari</h1>

                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">himanshi@email.com</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 9876543210</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Bank:</span>
                  <span className="itemValue">HDFC Bank</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Account Type:</span>
                  <span className="itemValue">Savings</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Location:</span>
                  <span className="itemValue">New Delhi, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - CHART */}
          <div className="right">
            <Chart
              aspect={3 / 1}
              title="Spending Overview (Last 6 Months)"
            />
          </div>
        </div>

        {/* BOTTOM - TRANSACTIONS */}
        <div className="bottom">
          <h1 className="title">Recent Transactions</h1>
          <Table />
        </div>

      </div>
    </div>
  );
};

export default Single;