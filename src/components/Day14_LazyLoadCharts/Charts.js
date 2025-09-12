import React from "react";
import {
  CartesianGrid,
  Legend,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Line
} from "recharts";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 500 },
  { name: "Apr", users: 200 },
  { name: "May", users: 600 },
];
export default function Charts() {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>📊 User Growth (Lazy Loaded Chart)</h2>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#8884d8"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
