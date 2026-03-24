export type EventCategory =
  | 'conquest'
  | 'judges'
  | 'transition'
  | 'united-monarchy'
  | 'divided-kingdom'
  | 'exile'
  | 'restoration'

export interface TimelineEvent {
  id: string
  title: string
  book: string
  scripture: string
  approximateDate: string
  dateValue: number
  summary: string
  category: EventCategory
}

export type EnhancementType = 'detailed' | 'theological' | 'historical'

export interface CategoryMeta {
  label: string
  color: string
  textColor: string
  bgColor: string
  borderColor: string
}

export const CATEGORY_META: Record<EventCategory, CategoryMeta> = {
  conquest: {
    label: 'Conquest',
    color: '#2d7a3a',
    textColor: 'text-green-800',
    bgColor: 'bg-green-100',
    borderColor: 'border-conquest',
  },
  judges: {
    label: 'Judges',
    color: '#7a4f2d',
    textColor: 'text-amber-900',
    bgColor: 'bg-amber-100',
    borderColor: 'border-judges',
  },
  transition: {
    label: 'Transition',
    color: '#7a2d5a',
    textColor: 'text-purple-900',
    bgColor: 'bg-purple-100',
    borderColor: 'border-transition',
  },
  'united-monarchy': {
    label: 'United Monarchy',
    color: '#2d3d7a',
    textColor: 'text-blue-900',
    bgColor: 'bg-blue-100',
    borderColor: 'border-united-monarchy',
  },
  'divided-kingdom': {
    label: 'Divided Kingdom',
    color: '#7a2d2d',
    textColor: 'text-red-900',
    bgColor: 'bg-red-100',
    borderColor: 'border-divided-kingdom',
  },
  exile: {
    label: 'Exile',
    color: '#4a3a7a',
    textColor: 'text-indigo-900',
    bgColor: 'bg-indigo-100',
    borderColor: 'border-exile',
  },
  restoration: {
    label: 'Restoration',
    color: '#2d6b6b',
    textColor: 'text-teal-900',
    bgColor: 'bg-teal-100',
    borderColor: 'border-restoration',
  },
}

export const ALL_CATEGORIES: EventCategory[] = [
  'conquest',
  'judges',
  'transition',
  'united-monarchy',
  'divided-kingdom',
  'exile',
  'restoration',
]
