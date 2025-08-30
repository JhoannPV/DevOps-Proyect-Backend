import { EventsMapper } from "..";
import { EventModel } from "../../data/mongodb";
import { CustomError, EventsEntity, EventsDatasource } from "../../domain";

export class EventsDatasourceImpl implements EventsDatasource {
    constructor(
    ) { }

    async getEvents(): Promise<EventsEntity[]> {
        try {
            const events = await EventModel.find();
            if (!events) throw CustomError.notFound('No events found');

            const mappedEvents: EventsEntity[] = events.map(event => EventsMapper.EventEntityFromObject(event));

            return mappedEvents;

        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

    async createEvent(event: EventsEntity): Promise<EventsEntity> {
        try {
            const newEvent = await EventModel.create({
                title: event.title,
                notes: event.notes,
                start: event.start,
                bgColor: event.bgColor,
                end: event.end,
                user: event.user,
            });

            await newEvent.save();

            return EventsMapper.EventEntityFromObject(newEvent);

        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

    async updateEvent(event: EventsEntity): Promise<EventsEntity> {
        try {
            const existingEvent = await EventModel
                .findById(event._id);
            if (!existingEvent) throw CustomError.notFound('Event not found');

            const updatingEvent = EventsMapper.EventEntityFromObjectUpdate(existingEvent, event);

            await EventModel.updateOne({ _id: event._id }, updatingEvent);

            const updatedEvent = await EventModel.findById(event._id);

            return EventsMapper.EventEntityFromObject({ updatedEvent });
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }
}