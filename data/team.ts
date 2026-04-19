import type { Lawyer } from '~/types/lawyer'

export const lawyers: Lawyer[] = [
  {
    name: 'Искандер Каримов',
    role: 'Управляющий партнер',
    specialization: 'Уголовная защита, стратегические споры',
    experience: '12 лет',
    languages: ['RU', 'UZ'],
    bio: 'Ведет сложные дела, где важны скорость реакции, процессуальная дисциплина и контроль доказательств.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Дилноза Рахимова',
    role: 'Адвокат',
    specialization: 'Гражданские и семейные споры',
    experience: '9 лет',
    languages: ['RU', 'UZ', 'EN'],
    bio: 'Сопровождает имущественные, наследственные и договорные споры, готовит переговорные позиции.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Азамат Юсупов',
    role: 'Юрист',
    specialization: 'Административные дела, госорганы',
    experience: '7 лет',
    languages: ['RU', 'UZ'],
    bio: 'Работает с жалобами, административными материалами и представительством в уполномоченных органах.',
    photo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Мадина Саидова',
    role: 'Юрист-аналитик',
    specialization: 'Документы, доказательства, правовые заключения',
    experience: '6 лет',
    languages: ['RU', 'UZ', 'EN'],
    bio: 'Готовит правовые позиции, систематизирует доказательства и сопровождает клиентские коммуникации.',
    photo: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=900&q=80',
  },
]
