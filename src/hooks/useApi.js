import { useQuery, useMutation, useQueryClient } from 'react-query';
import { campañasAPI, leadsAPI, marketingAPI } from '../services/api';

// Campañas hooks
export const useCampañas = () => 
  useQuery('campañas', campañasAPI.getAll, {
    staleTime: 5 * 60 * 1000, // 5 minutos
  });

export const useCampañasActivas = () =>
  useQuery('campañas-activas', campañasAPI.getActivas);

export const useCampañaStats = () =>
  useQuery('campañas-stats', campañasAPI.getEstadisticas);

export const useCreateCampaña = () => {
  const queryClient = useQueryClient();
  return useMutation(campañasAPI.create, {
    onSuccess: () => {
      queryClient.invalidateQueries('campañas');
      queryClient.invalidateQueries('campañas-activas');
    },
  });
};

// Leads hooks
export const useLeads = () =>
  useQuery('leads', leadsAPI.getAll);

export const useLeadsStats = () =>
  useQuery('leads-stats', leadsAPI.getEstadisticas);

// Marketing hooks
export const useDashboard = () =>
  useQuery('dashboard', marketingAPI.getDashboard);

export const useROICampañas = () =>
  useQuery('roi-campañas', marketingAPI.getROICampañas);

export const usePerformanceMensual = () =>
  useQuery('performance-mensual', marketingAPI.getPerformanceMensual);

export const useHealth = () =>
  useQuery('health', marketingAPI.getHealth, {
    refetchInterval: 30000, // Verificar cada 30 segundos
  });