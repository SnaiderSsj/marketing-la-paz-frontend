import React from 'react';
import { useHealth } from '../../hooks/useApi';

export const HealthStatus = () => {
  const { data: health, isLoading, error } = useHealth();

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-400"></div>
        <span className="text-sm text-gray-600">Verificando...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center space-x-2">
        <span className="text-red-500">❌</span>
        <span className="text-sm text-red-600">Error de conexión</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <span className={health?.status === 'Healthy' ? 'text-green-500' : 'text-red-500'}>
        {health?.status === 'Healthy' ? '✅' : '❌'}
      </span>
      <span className="text-sm text-gray-600">
        {health?.status === 'Healthy' ? 'Conectado' : 'Desconectado'}
      </span>
    </div>
  );
};