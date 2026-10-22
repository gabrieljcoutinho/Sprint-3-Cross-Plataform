
export const MONTHS = [
  'JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL',
  'MAIO', 'JUNHO', 'JULHO', 'AGOSTO',
  'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO',
];

export const DAYS = [
  'DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB',
];

export const PRIORITIES = [
  { label: 'Baixa', value: 'low', color: '#22C55E' },
  { label: 'Média', value: 'medium', color: '#FACC15' },
  { label: 'Máxima', value: 'high', color: '#EF4444' },
];

export const getPriorityColor = (priority) => {
  const colors = {
    low: '#22C55E',
    medium: '#FACC15',
    high: '#EF4444',
  };

  return colors[priority] || colors.low;
};

export const getHighestPriority = (tasks) => {
  if (!tasks?.length) return null;

  if (tasks.some((task) => task.priority === 'high')) {
    return 'high';
  }

  if (tasks.some((task) => task.priority === 'medium')) {
    return 'medium';
  }

  return 'low';
};

export const createCalendar = (year, month) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const calendar = [];
  let week = [];

  for (let i = 0; i < firstDay; i++) {
    week.push('');
  }

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);

    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
  }

  if (week.length > 0) {
    while (week.length < 7) {
      week.push('');
    }

    calendar.push(week);
  }

  return calendar;
};
