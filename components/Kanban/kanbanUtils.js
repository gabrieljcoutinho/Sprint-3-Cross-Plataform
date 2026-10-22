
export const columns = [
  { key: 'backlog', label: 'BACKLOG', color: '#7C3AED' },
  { key: 'fazer', label: 'FAZER', color: '#EF4444' },
  { key: 'doing', label: 'FAZENDO', color: '#F59E0B' },
  { key: 'completed', label: 'COMPLETO', color: '#10B981' },
];

export const initialData = {
  backlog: [],
  fazer: [],
  doing: [],
  completed: [],
};

export const initialModalData = {
  id: null,
  title: '',
  description: '',
  colKey: '',
};
