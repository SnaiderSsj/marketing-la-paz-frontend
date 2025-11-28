import React from 'react';
import { Card, CardBody } from '../atoms/Card';

export const StatCard = ({ title, value, subtitle, icon, trend }) => (
  <Card>
    <CardBody className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        {trend && (
          <p className={`text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.value} {trend.isPositive ? '↗' : '↘'}
          </p>
        )}
      </div>
      {icon && <div className="text-3xl text-blue-600">{icon}</div>}
    </CardBody>
  </Card>
);