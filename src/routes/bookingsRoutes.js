import { Router } from "express";
import { createBookings, deleteBooking, getAllBookings, getByBooking, updateBooking} from "../Controllers/bookingsController.js";

const routerBookings = Router()

routerBookings.post('/bookings', createBookings)
routerBookings.get('/bookings', getAllBookings)
routerBookings.get('/bookings/:id', getByBooking)
routerBookings.put('/bookings/:id', updateBooking)
routerBookings.delete('/bookings/:id', deleteBooking)
export default routerBookings