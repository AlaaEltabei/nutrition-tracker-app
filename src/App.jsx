import { useState } from 'react';

export default function NutritionTrackerApp() {
  const [section, setSection] = useState(null);
  const [action, setAction] = useState(null);

  const menus = [
    { name: 'Food' },
    { name: 'Meals' },
    { name: 'Nutrition Targets' }
  ];

  const actions = ['Add', 'Edit', 'Delete'];

  return (
    <div className="min-h-screen bg-white text-black p-4">
      <h1 className="text-2xl font-bold mb-4">Nutrition Tracker</h1>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {menus.map(menu => (
          <Card key={menu.name} className="cursor-pointer" onClick={() => { setSection(menu.name); setAction(null); }}>
            <CardContent className="text-center py-6 font-semibold text-lg">
              {menu.name}
            </CardContent>
          </Card>
        ))}
      </div>

      {section && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">{section} - Select Action</h2>
          <div className="flex gap-3">
            {actions.map(act => (
              <Button key={act} onClick={() => setAction(act)}>{act}</Button>
            ))}
          </div>
        </div>
      )}

      {action && (
        <Card className="mt-6">
          <CardContent className="p-6">
            <p className="text-lg">[{section} - {action}] Placeholder Component</p>
            <p className="text-sm text-gray-600 mt-2">(Functionality will be implemented here.)</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
