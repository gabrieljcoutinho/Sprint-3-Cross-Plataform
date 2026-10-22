
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  content: {
    paddingTop: 40,
    paddingBottom: 40,
  },

  header: {
    paddingBottom: 25,
    paddingHorizontal: 22,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  monthTitle: {
    color: '#111',
    fontSize: 34,
    fontWeight: '900',
  },

  yearTitle: {
    color: '#777',
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 10,
  },

  calendar: {
    marginHorizontal: 18,
    backgroundColor: '#FFF',
    borderRadius: 30,
    padding: 16,
  },

  weekHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  weekDay: {
    flex: 1,
    alignItems: 'center',
  },

  weekDayText: {
    color: '#999',
    fontWeight: '700',
  },

  weekRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  dayCell: {
    flex: 1,
    height: 62,
    marginHorizontal: 3,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
  },

  emptyDay: {
    backgroundColor: '#F3F3F3',
  },

  todayCell: {
    backgroundColor: '#6C2BFF',
  },

  dayText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
  },

  todayText: {
    color: '#FFF',
  },

  priorityDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    marginTop: 5,
  },

  taskSection: {
    marginHorizontal: 18,
    marginTop: 24,
  },

  taskTitle: {
    fontSize: 34,
    fontWeight: '900',
    color: '#111',
    marginBottom: 16,
  },

  taskCard: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    padding: 20,
  },

  emptyTaskText: {
    fontSize: 16,
    color: '#666',
  },

  taskItem: {
    backgroundColor: '#F8F8F8',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderLeftWidth: 6,
  },

  taskText: {
    fontSize: 16,
    color: '#111',
    lineHeight: 24,
  },

  addTaskButton: {
    marginTop: 5,
  },

  addTaskText: {
    color: '#6C2BFF',
    fontWeight: '800',
  },

  taskInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 18,
    padding: 18,
    minHeight: 140,
    textAlignVertical: 'top',
    fontSize: 16,
    color: '#111',
  },

  priorityTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '800',
    fontSize: 16,
    color: '#111',
  },

  priorityOptions: {
    flexDirection: 'row',
    gap: 10,
  },

  priorityButton: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 18,
    padding: 14,
    alignItems: 'center',
  },

  priorityIndicator: {
    width: 12,
    height: 12,
    borderRadius: 999,
    marginBottom: 8,
  },

  priorityLabel: {
    fontSize: 13,
    color: '#222',
  },

  saveButton: {
    backgroundColor: '#6C2BFF',
    marginTop: 20,
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
  },

  saveButtonText: {
    color: '#FFF',
    fontWeight: '800',
  },

  cancelButton: {
    marginTop: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },

  cancelButtonText: {
    color: '#666',
    fontWeight: '700',
  },
});
