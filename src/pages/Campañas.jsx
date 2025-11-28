import React from 'react';
import { CampañasList } from '../components/organisms/CampañasList';
import { Button } from '../components/atoms/Button';

export const Campañas = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Campañas</h1>
          <p className="text-gray-600">Administra todas las campañas de marketing</p>
        </div>
        <Button>Nueva Campaña</Button>
      </div>
      
      <CampañasList />
    </div>
  );
};