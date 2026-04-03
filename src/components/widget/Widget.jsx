import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { CircularProgressbar } from "react-circular-progressbar";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = "111,939,358";
  const diff = 20;

  switch (type) {
    case "income":
      data = {
        title: "INCOME",
        isMoney: true,
        link: "See all incomes",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "white",
              backgroundColor: "green",
            }}
          />
        ),
      };
      break;

    case "expense":
      data = {
        title: "EXPENSE",
        isMoney: true,
        link: "+ 14% Inc | Since last week",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "red",
              color: "white",
            }}
          />
        ),
      };
      break;

    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "+ 14% Inc | Since last week",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "green", color: "white" }}
          />
        ),
      };
      break;

    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "#3b7085",
              color: "white",
            }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>

        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>

        <span className="link">{data.link}</span>
      </div>

      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
          <CircularProgressbar
            value={70}
            text={"70%"}
            strokeWidth={2}
            className="custom-progressbar"
          />
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;