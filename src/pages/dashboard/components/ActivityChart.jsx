import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', kcal: 400 },
  { name: 'Tue', kcal: 300 },
  { name: 'Wed', kcal: 550 },
  { name: 'Thu', kcal: 450 },
  { name: 'Fri', kcal: 600 },
  { name: 'Sat', kcal: 200 },
  { name: 'Sun', kcal: 480 },
];

const ActivityChart = () => {
  return (
    <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl h-full flex flex-col">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white">Activity Flow</h3>
        <p className="text-sm text-zinc-500">Weekly calorie burn</p>
      </div>
      
      <div className="flex-1 min-h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorKcal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#D4F458" stopOpacity={0.3}/> {/* Primary Rəng */}
                <stop offset="95%" stopColor="#D4F458" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#71717a', fontSize: 12}} 
              dy={10}
            />
            <Tooltip 
              contentStyle={{backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px'}}
              itemStyle={{color: '#D4F458'}}
            />
            <Area 
              type="monotone" 
              dataKey="kcal" 
              stroke="#D4F458" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorKcal)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityChart;