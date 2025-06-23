
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const TrainingChart = () => {
  const completionData = [
    { department: 'Cardiology', CU: 95, SME: 88, SU: 82, EU: 76 },
    { department: 'Emergency', CU: 92, SME: 85, SU: 79, EU: 73 },
    { department: 'ICU', CU: 97, SME: 91, SU: 85, EU: 78 },
    { department: 'Surgery', CU: 89, SME: 83, SU: 77, EU: 71 },
    { department: 'Nursing', CU: 94, SME: 87, SU: 81, EU: 75 },
  ];

  const roleDistribution = [
    { name: 'End Users (EU)', value: 4200, color: '#3b82f6' },
    { name: 'Super Users (SU)', value: 1500, color: '#10b981' },
    { name: 'SME', value: 420, color: '#f59e0b' },
    { name: 'Champions (CU)', value: 127, color: '#ef4444' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Completion Rates by Department & Role</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={completionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Completion Rate']}
                labelFormatter={(label) => `Department: ${label}`}
              />
              <Bar dataKey="CU" fill="#ef4444" name="Champions" />
              <Bar dataKey="SME" fill="#f59e0b" name="SME" />
              <Bar dataKey="SU" fill="#10b981" name="Super Users" />
              <Bar dataKey="EU" fill="#3b82f6" name="End Users" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Training Population</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={roleDistribution}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {roleDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value} people`, 'Count']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
        {roleDistribution.map((role) => (
          <div key={role.name} className="text-center">
            <div 
              className="w-4 h-4 rounded mx-auto mb-2" 
              style={{ backgroundColor: role.color }}
            ></div>
            <p className="text-sm font-medium">{role.name}</p>
            <p className="text-lg font-bold text-gray-900">{role.value.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingChart;
