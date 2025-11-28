import React from 'react';
import { useDashboard, useCampañaStats, useLeadsStats } from '../../hooks/useApi'
import { StatCard } from '../molecules/StatCard';

export const DashboardStats = () => {
  const { data: dashboardData, isLoading: dashboardLoading } = useDashboard();
  const { data: campañasStats, isLoading: campañasLoading } = useCampañaStats();
  const { data: leadsStats, isLoading: leadsLoading } = useLeadsStats();

  const isLoading = dashboardLoading || campañasLoading || leadsLoading;

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-24 bg-gray-200 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  const stats = [
    {
      title: 'Campañas Activas',
      value: dashboardData?.data?.metricas?.campañasActivas || 0,
      subtitle: 'En ejecución',
      icon: '🎯',
    },
    {
      title: 'Total Leads',
      value: dashboardData?.data?.metricas?.totalLeads || 0,
      subtitle: 'Leads generados',
      icon: '👥',
    },
    {
      title: 'Presupuesto Total',
      value: `Bs. ${(dashboardData?.data?.metricas?.presupuestoTotal || 0).toLocaleString()}`,
      subtitle: 'Campañas activas',
      icon: '💰',
    },
    {
      title: 'Leads Este Mes',
      value: dashboardData?.data?.metricas?.leadsEsteMes || 0,
      subtitle: 'Mes actual',
      icon: '📈',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};