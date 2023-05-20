import { Router} from 'express';
import AttendeeController from '../controllers/attendee.controller';

const attendeeRouter = Router();

attendeeRouter.post('/', AttendeeController.addAttendee);
attendeeRouter.patch('/', AttendeeController.attendeePhraseAssignment);
attendeeRouter.put('/', AttendeeController.mergeAttendees);

export default attendeeRouter;
