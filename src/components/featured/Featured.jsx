import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import Company from "../../Company/Company";

const Featured = () => {
  return (
    <div className="featured">
      
      {/* Top */}
      <div className="top">
        <h1 className="title">Total Expenses</h1>
        <MoreVertIcon fontSize="small" />
      </div>

      {/* Bottom */}
      <div className="bottom">

        {/* Categories */}
        <div className="counties">
          <div className="title">
            <h4 className="lead">Top Expense Categories</h4>
            <span style={{ color: "green", marginTop: "15px", cursor: "pointer" }}>
              View More
            </span>

            <div className="count">
              <Company company={"Rent"} total={"$8,000"} />
              <Company company={"Food & Dining"} total={"$2,800"} />
              <Company company={"Groceries"} total={"$1,900"} />
              <Company company={"Shopping"} total={"$3,200"} />
              <Company company={"Travel"} total={"$1,500"} />
              <Company company={"Bills & Utilities"} total={"$2,200"} />
              <Company company={"Entertainment"} total={"$900"} />
              <Company company={"Health & Fitness"} total={"$700"} />
              <Company company={"Education"} total={"$1,200"} />
              <Company company={"Insurance"} total={"$1,000"} />
              <Company company={"Subscriptions"} total={"$450"} />
              <Company company={"Investments"} total={"$2,500"} />
              <Company company={"Mobile & Internet"} total={"$600"} />
              <Company company={"Transportation"} total={"$1,100"} />
              <Company company={"Gifts & Donations"} total={"$350"} />
            </div>
          </div>
        </div>

        {/* Monthly Summary */}
        <div className="item">
          <div className="itemTitle">Last Month Spending</div>
          <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small" />
            <div className="resultAmount">$24,650</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Featured;