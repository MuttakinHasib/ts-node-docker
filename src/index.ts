import express from 'express';
import morgan from 'morgan';

const app = express();
const port = Number(process.env.PORT ?? 5000);

app.use(morgan('dev'));

app.listen(port, '0.0.0.0', () => console.log('Server starter at', port));
