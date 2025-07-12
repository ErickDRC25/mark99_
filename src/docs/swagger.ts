import swaggerJsdoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Mark99',
    version: '1.0.0',
    description: 'API documentation for Mark99Re',
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [{ bearerAuth: [] }],

  tags: [
    { name: 'Auth', description: 'Autenticación y autorización' },
    { name: 'Clientes', description: 'Endpoints para gestionar clientes' },
    { name: 'Proveedores', description: 'Endpoints para gestionar proveedores' },
    { name: 'Productos', description: 'Endpoints para gestionar productos' },
    { name: 'Inventario', description: 'Endpoints para gestionar inventario' },
    { name: 'Ventas', description: 'Endpoints para gestionar ventas' },
    { name: 'DetalleVenta', description: 'Endpoints para gestionar detalles de venta' },
  ],
};

const options = {
    swaggerDefinition,
    apis: ['./dist/routes/.js', './dist/controllers/.js'],
};

export const swaggerSpec = swaggerJsdoc(options);