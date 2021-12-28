import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = () => {
            const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS', 'Angular'];
            const data = genres.map((genre) => {
                const value = events.filter((event) => {
                    let summary = event.summary.split(' ')
                    return summary.includes(genre) === true
                }).length
                return { name: genre, value }
            })
            return data
        }
        setData(() => getData());
    }, [events])

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF7272'];

    return (
        <div className="eventComponent mb-3 pb-4">
            <h3 className='p-4'>Technologies</h3>
            <ResponsiveContainer height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        color="#000000"
                        dataKey="value"
                        nameKey="name"
                        cx= {200}
                        cy= {200}
                        outerRadius={120}
                        fill="#8884d8"
                        label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                        className="pie-chart"
                    >
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }

                    </Pie>
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default EventGenre