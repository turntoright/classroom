import { Schema } from 'mongoose';

// class room schema
const classRoomSchema = new Schema({
    roomNumber: { type: String, required: true},        // The type of the room number is String
    area: { type: Number },                             // The type of room area is Number
    roomType: {                                         // enum value
        type: String,
        enum: ['Workshop', 'Shared Work Space', 'Auditorium', 'Rest Room', 'Gym']
    },
    furniture: [{                                       // There are some different kinds of furniture in a room
        name: {type: String, required: true},
        amount: {type: Number}
    }],
    buildings: [{                                       // The room in part of or more buildings?
        type: 'ObjectId',
        ref: 'Building'
    }]
});