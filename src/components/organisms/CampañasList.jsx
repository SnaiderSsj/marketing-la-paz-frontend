import React, { useState } from 'react';
import { useCampañas, useCampañasActivas } from '../../hooks/useApi';
import { DataTable } from '../molecules/DataTable';
import { Button } from '../atoms/Button';

export const CampañasList = () => {
  const [view, setView] = useState('all');
  const { data: allCampañas, isLoading: allLoading } = useCampañas();
  const { data: activeCampañas, isLoading: activeLoading } = useCampañasActivas();

  const campañas = view === 'all' ? allCampañas?.data : activeCampañas?.data;
  const isLoading = view === 'all' ? allLoading : activeLoading;

  const headers = ['Nombre', 'Estado', 'Presupuesto', 'Leads', 'ROI', 'Fecha Fin'];

  const tableData = campañas?.map(campaña => ({
    Nombre: campaña.nombre,
    Estado: (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        campaña.estado === 'Activa' 
          ? 'bg-green-100 text-green-800'
          : 'bg-gray-100 text-gray-800'
      }`}>
        {campaña.estado}
      </span>
    ),
    Presupuesto: `Bs. ${campaña.presupuesto.toLocaleString()}`,
    Leads: campaña.leadsGenerados,
    ROI: `${campaña.roi}%`,
    'Fecha Fin': new Date(campaña.fechaFin).toLocaleDateString(),
  })) || [];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Campañas de Marketing</h2>
        <div className="flex space-x-2">
          <Button
            variant={view === 'all' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setView('all')}
          >
            Todas
          </Button>
          <Button
            variant={view === 'active' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setView('active')}
          >
            Activas
          </Button>
        </div>
      </div>
      
      <DataTable headers={headers} data={tableData} isLoading={isLoading} />
    </div>
  );
};