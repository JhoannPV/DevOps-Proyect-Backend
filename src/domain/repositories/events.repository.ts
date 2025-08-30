import { EventsEntity } from "..";

export abstract class EventsRepository {

    abstract getEvents(): Promise<EventsEntity[]>;

    abstract createEvent(event: EventsEntity): Promise<EventsEntity>;

    abstract updateEvent(event: EventsEntity): Promise<EventsEntity>;

}