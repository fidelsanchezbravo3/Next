
interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: asdfsafsafdasfsa',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'En progreso: dtjtgyjtyjtygjgjghjgjhgjg',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'Terminadas: mnbbnmbmnbmnvbnmvbnbv',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ]
}