import { EventsEntity, EventsRepository } from "../..";

interface UpdateEventUseCase {
    updateEvent(event: EventsEntity): Promise<EventsEntity>;
}

export class UpdateEvent implements UpdateEventUseCase {
    constructor(
        private readonly eventsRepository: EventsRepository,
    ) { }

    async updateEvent(event: EventsEntity): Promise<EventsEntity> {

        const updateEvent = await this.eventsRepository.updateEvent(event);

        return updateEvent;
    }
}