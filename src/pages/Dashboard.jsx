import React from 'react';
import { DashboardStats } from '../components/organisms/DashboardStats';
import { CampañasList } from '../components/organisms/CampañasList';
import { Card, CardBody, CardHeader } from '../components/atoms/Card';

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Marketing La Paz</h1>
        <p className="text-gray-600">Resumen ejecutivo de campañas y métricas</p>
      </div>

      <DashboardStats />

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold text-gray-900">Campañas Recientes</h2>
        </CardHeader>
        <CardBody>
          <CampañasList />
        </CardBody>
      </Card>
    </div>
  );
};