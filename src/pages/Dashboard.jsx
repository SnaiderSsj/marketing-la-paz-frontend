import HealthStatus from '../components/molecules/HealthStatus';
import DashboardStats from '../components/organisms/DashboardStats';
import CampañasList from '../components/organisms/CampañasList';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Marketing La Paz - Dashboard
              </h1>
              <p className="text-gray-600 mt-2">
                Gestión y monitoreo de campañas de marketing
              </p>
            </div>
            <HealthStatus />
          </div>
        </div>

        {/* Estadísticas */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Resumen General
          </h2>
          <DashboardStats />
        </section>

        {/* Lista de Campañas */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Campañas Recientes
          </h2>
          <CampañasList />
        </section>
      </div>
    </div>
  );
}