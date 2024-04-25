import { Router } from "express";
import { createBookings, deleteBooking, getAllBookings, getByBooking, updateBooking, bookingCompleteById} from "../Controllers/bookingsController.js";

const routerBookings = Router()

routerBookings.post('/bookings', createBookings)
routerBookings.get('/bookings', getAllBookings)
routerBookings.get('/bookings/:id', getByBooking)
routerBookings.put('/bookings/:id', updateBooking)
routerBookings.delete('/bookings/:id', deleteBooking)
routerBookings.get('/bookings/infocomplete/:id', bookingCompleteById)

export default routerBookings