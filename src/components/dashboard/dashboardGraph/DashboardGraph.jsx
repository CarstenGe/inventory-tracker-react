import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Nov',
    Marketing: 4000,
    Sales: 2400,
    amt: 2400,
  },
  {
    name: 'Dec',
    Marketing: 3000,
    Sales: 1398,
    amt: 2210,
  },
  {
    name: 'Jan',
    Marketing: 2000,
    Sales: 9800,
    amt: 2290,
  },
  {
    name: 'Feb',
    Marketing: 2780,
    Sales: 3908,
    amt: 2000,
  },
  {
    name: 'Mar',
    Marketing: 1890,
    Sales: 4800,
    amt: 2181,
  },
  {
    name: 'Apr',
    Marketing: 2390,
    Sales: 3800,
    amt: 2500,
  },
  {
    name: 'May',
    Marketing: 3490,
    Sales: 4300,
    amt: 2100,
  },
];

export default class DashboardGraph extends PureComponent { // only usable with classes :(

  render() {
    return (
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
				width={500}
				height={300}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
				>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="Sales" stroke="#8884d8" activeDot={{ r: 8 }} />
				<Line type="monotone" dataKey="Marketing" stroke="#82ca9d" />
				</LineChart>
			</ResponsiveContainer>
    );
  }
}
