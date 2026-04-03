import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// More realistic finance data (Income vs Expenses)
const data = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 4500, expense: 2100 },
  { name: "Mar", income: 3000, expense: 2800 },
  { name: "Apr", income: 5000, expense: 3200 },
  { name: "May", income: 4200, expense: 2600 },
  { name: "Jun", income: 4800, expense: 3000 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title || "Income vs Expenses (Last 6 Months)"}</div>

      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          {/* Gradient for Income */}
          <defs>
            <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} />
            </linearGradient>

            {/* Gradient for Expense */}
            <linearGradient id="expense" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f44336" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f44336" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" stroke="gray" />
          <YAxis stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />

          {/* Expense Area */}
          <Area
            type="monotone"
            dataKey="expense"
            stroke="#f44336"
            fillOpacity={1}
            fill="url(#expense)"
          />

          {/* Income Area */}
          <Area
            type="monotone"
            dataKey="income"
            stroke="#4CAF50"
            fillOpacity={1}
            fill="url(#income)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;