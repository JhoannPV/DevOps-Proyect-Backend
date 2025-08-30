import mongoose, { Schema } from 'mongoose';

const eventSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    notes: {
        type: String,
    },
    start: {
        type: Date,
        required: [true, 'Start date is required']
    },
    end: {
        type: Date,
        required: [true, 'End date is required']
    },
    bgColor: {
        type: String,
        required: [true, 'Background color is required']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

eventSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    (object as any).id = _id;
    return object;
});

export const EventModel = mongoose.model('Event', eventSchema);