/* eslint-disable prettier/prettier */
export default () => ({
  environment: process.env.NODE_ENV || 'development',
  database: {
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.databasePort, 10) || 5432,
  },
});
