// room type enum
enum RoomType {
    SharedWorkspace = 'Shared Workspace',
    Workshop = 'Workshop',
    Auditorium = 'Auditorium',
    RestRoom = 'Rest Room',
    Gym = 'Gym',
    Others = 'Others'
}

// Funiture class
class Funiture {
    name: string;
    amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }
}

// Room class
class Room {
    roomType: RoomType;
    furnitures: Funiture[];
    buildings: string[];

    constructor(roomType: RoomType, funitrues: Funiture[], buildings: string[]) {
        this.roomType = roomType;
        this.furnitures = funitrues;
        this.buildings = buildings;
    }
}

/* 
let funiture1 = new Funiture('chairs', 10);
let funiture2 = new Funiture('desk', 8);
let room1 = new Room(RoomType.Workshop, [funiture1, funiture2], ['building1', 'building2']);
console.log(room1);
*/