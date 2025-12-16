import { Events } from "../app/models/events.model";

export const EVENTS_ITEMS: Events[] = [
    {
      title: 'Noche de música en directo',
      description: 'Concierto acústico con bandas locales.',
      eventDate: new Date('2025-02-14'),
      eventHour: '21:30'
    },
    {
      title: 'Trivia Night',
      description: 'Pon a prueba tus conocimientos y gana premios.',
      eventDate: new Date('2025-02-20'),
      eventHour: '20:00'
    },
    {
      title: 'Crazy Beer Prices',
      description: 'Precios locos durante toda la noche.',
      eventDate: new Date('2025-02-28'),
      eventHour: '22:00'
    }
]