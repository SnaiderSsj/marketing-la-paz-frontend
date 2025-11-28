import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [status, setStatus] = useState('Cargando...');
  const [data, setData] = useState(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        console.log('🔗 Probando conexión con el backend...');
        
        const response = await axios.get('https://marketinglapaz-production.up.railway.app/index.html');
        console.log('✅ Respuesta del backend:', response.data);
        
        setStatus('✅ CONECTADO');
        setData(response.data);
      } catch (error) {
        console.error('❌ Error conectando:', error);
        setStatus('❌ ERROR: ' + error.message);
      }
    };

    testConnection();
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f3f4f6', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: '#1f2937' }}>
        🎯 Marketing La Paz - Dashboard
      </h1>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '8px', 
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        marginBottom: '20px',
        maxWidth: '500px'
      }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '10px' }}>
          Estado del Sistema
        </h2>
        <p style={{ 
          color: status.includes('✅') ? '#059669' : '#dc2626',
          fontWeight: 'bold'
        }}>
          {status}
        </p>
        
        {data && (
          <div style={{ marginTop: '15px', fontSize: '14px', color: '#6b7280' }}>
            <p><strong>Base de datos:</strong> {data.database}</p>
            <p><strong>Timestamp:</strong> {new Date(data.timestamp).toLocaleString()}</p>
            <p><strong>Entorno:</strong> {data.environment}</p>
          </div>
        )}
      </div>

      <button 
        onClick={() => window.location.reload()}
        style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '500'
        }}
      >
        Actualizar
      </button>

      {/* Información de debug */}
      <div style={{ 
        marginTop: '30px', 
        padding: '15px', 
        backgroundColor: '#fef3c7', 
        borderRadius: '6px',
        fontSize: '14px',
        color: '#92400e'
      }}>
        <p><strong>Para desarrolladores:</strong></p>
        <p>• Abre la consola (F12) para ver logs</p>
        <p>• URL del backend: https://marketinglapaz-production.up.railway.app</p>
        <p>• Si ves errores en consola, compártelos</p>
      </div>
    </div>
  );
}

export default App;