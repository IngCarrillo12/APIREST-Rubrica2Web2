import { Router } from "express";
import { deleteRoom, createRoom, getAllRooms, getByIdRooms, updateRoom } from "../Controllers/roomsController.js";
const routerRooms = Router()

routerRooms.delete('/rooms/:id',deleteRoom)
routerRooms.get('/rooms', getAllRooms)
routerRooms.get('/rooms/:id', getByIdRooms)
routerRooms.post('/rooms',createRoom)
routerRooms.put('/rooms/:id', updateRoom)

export default routerRooms;