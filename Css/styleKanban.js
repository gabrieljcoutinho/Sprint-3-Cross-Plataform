import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isMobile = width < 900;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 60,
  },

  mainTitle: {
    fontSize: 30,
    fontWeight: '900',
    paddingHorizontal: 20,
  },

  board: {
    padding: 20,
    gap: 20,
  },

  column: {
    width: isMobile ? width - 40 : 340,
    backgroundColor: '#F9FAFB',
    borderRadius: 20,
    padding: 16,
  },

  columnHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  columnTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
  },

  addButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },

  cardsContainer: {
    minHeight: 120,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardStatus: {
    width: 10,
    height: 10,
    borderRadius: 999,
  },

  actions: {
    flexDirection: 'row',
    gap: 10,
  },

  edit: {
    color: '#6366F1',
    fontSize: 18,
  },

  delete: {
    color: '#EF4444',
    fontSize: 18,
  },

  cardTitle: {
    fontWeight: '800',
    color: '#111827',
    marginTop: 8,
  },

  cardDesc: {
    color: '#6B7280',
    marginTop: 4,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    padding: 20,
  },

  modal: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 10,
  },

  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    color: '#111827',
  },

  textarea: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 12,
    height: 100,
    marginBottom: 10,
    color: '#111827',
  },

  modalButtons: {
    flexDirection: 'row',
    gap: 10,
  },

  cancelButton: {
    flex: 1,
    padding: 12,
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    alignItems: 'center',
  },

  saveButton: {
    flex: 1,
    padding: 12,
    backgroundColor: '#111827',
    borderRadius: 12,
    alignItems: 'center',
  },

  saveButtonText: {
    color: '#FFFFFF',
  },
});