import { EventsEntity, EventsRepository } from "../..";
import { Request, Response } from 'express';

interface CreateEventUseCase {
    createEvent(event: EventsEntity, req: Request): Promise<EventsEntity>;
}

export class CreateEvent implements CreateEventUseCase {
    constructor(
        private readonly eventsRepository: EventsRepository,
    ) { }

    async createEvent(event: EventsEntity): Promise<EventsEntity> {

        const newEvent = await this.eventsRepository.createEvent(event);

        return newEvent;
    }
}