import { EventsEntity } from "..";


export abstract class EventsDatasource {

    abstract getEvents(): Promise<EventsEntity[]>;

    abstract createEvent(event: EventsEntity): Promise<EventsEntity>;

    abstract updateEvent(event: EventsEntity): Promise<EventsEntity>;

}