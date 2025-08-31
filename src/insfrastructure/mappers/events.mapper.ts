import { CustomError, EventsEntity } from "../../domain";


export class EventsMapper {
    static EventEntityFromObject(object: { [key: string]: any }) {
        const { id, _id, title, start, end, bgColor } = object;
        let { user } = object;
        let { notes } = object;

        if (!_id || !id) {
            throw CustomError.badRequest('Missing id');
        }
        if (!title) throw CustomError.badRequest('Missing title');
        if (!notes) notes = '';
        if (!start) throw CustomError.badRequest('Missing start');
        if (!end) throw CustomError.badRequest('Missing end');
        if (!bgColor) throw CustomError.badRequest('Missing bgColor');
        if (!user) throw CustomError.badRequest('Missing user');

        user = {
            _id: user._id,
            name: user.name
        };

        return new EventsEntity(
            _id || id,
            title,
            notes,
            start,
            end,
            bgColor,
            user
        );
    }
}