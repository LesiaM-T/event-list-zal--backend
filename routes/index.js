import express from "express";
 
import {getAllEvents, 
    getEventById, 
    updateEvent,
     createEvent, 
     deleteEvent}
 from "../controllers/Events.js";
 
const router = express.Router();
 
router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.post('/', createEvent);
router.patch('/:id', updateEvent);
router.delete('/:id', deleteEvent);
 
export default router;