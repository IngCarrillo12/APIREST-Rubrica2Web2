import express, { urlencoded } from 'express'
import routerRooms from './routes/roomsRoutes.js';
import routerBookings from './routes/bookingsRoutes.js';
import { PORT } from './config.js';

const app =  express();
app.use(urlencoded({extended:true}))
app.use(express.json())
app.get('/', (req, res)=>{
    res.send('WELCOME!')
})
app.use('/',routerRooms)
app.use('/',routerBookings)
app.listen(PORT, ()=>{console.log(`Servidor ejecutandose!! http://localhost:${PORT}`)})