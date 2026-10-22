import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },

  content: {
    flex: 1,
    paddingTop: 58,
  },

  header: {
    paddingHorizontal: 24,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 48,
    height: 48,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(15,23,42,0.05)',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 18,
    elevation: 5,
  },

  backText: {
    color: '#0f172a',
    fontSize: 20,
    fontWeight: '700',
  },

  headerCenter: {
    alignItems: 'center',
  },

  headerSpacer: {
    width: 48,
  },

  headerMini: {
    color: '#3b82f6',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 4,
  },

  headerTitle: {
    color: '#0f172a',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.5,
  },

  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  heroCard: {
    backgroundColor: '#ffffff',
    borderRadius: 34,
    padding: 26,
    marginBottom: 36,
    borderWidth: 1,
    borderColor: 'rgba(15,23,42,0.04)',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 6,
  },

  heroTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16,185,129,0.12)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },

  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: '#10b981',
    marginRight: 8,
  },

  liveText: {
    color: '#10b981',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },

  heroMini: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },

  heroTitle: {
    color: '#0f172a',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 36,
    marginTop: 22,
    width: width * 0.72,
  },

  heroDescription: {
    marginTop: 14,
    color: '#64748b',
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '500',
  },

  statsContainer: {
    marginTop: 28,
    backgroundColor: '#f8fafc',
    borderRadius: 24,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  statBox: {
    alignItems: 'center',
  },

  statValue: {
    color: '#0f172a',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 6,
  },

  statLabel: {
    color: '#64748b',
    fontSize: 12,
    fontWeight: '600',
  },

  divider: {
    width: 1,
    height: 32,
    backgroundColor: 'rgba(15,23,42,0.08)',
  },

  sectionHeader: {
    marginBottom: 22,
  },

  sectionMini: {
    color: '#3b82f6',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 8,
  },

  sectionTitle: {
    color: '#0f172a',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.5,
  },

  animatedCard: {
    marginBottom: 18,
  },

  moduleCard: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(15,23,42,0.04)',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 18,
    elevation: 5,
  },

  iconWrapper: {
    width: 62,
    height: 62,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginRight: 18,
  },

  iconText: {
    fontSize: 24,
    fontWeight: '700',
  },

  moduleContent: {
    flex: 1,
  },

  moduleTitle: {
    color: '#0f172a',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
  },

  moduleDesc: {
    color: '#64748b',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '500',
  },

  arrowButton: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
  },

  arrowText: {
    color: '#0f172a',
    fontSize: 18,
    fontWeight: '800',
  },

  /* MODAL */

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15,23,42,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    width: width * 0.9,
    maxHeight: height * 0.82,
    backgroundColor: '#ffffff',
    borderRadius: 32,
    padding: 24,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 24 },
    shadowOpacity: 0.12,
    shadowRadius: 32,
    elevation: 12,
    position: 'relative',
    borderWidth: 1,
    borderColor: 'rgba(15,23,42,0.05)',
  },

  modalContainerLarge: {
    width: width * 0.95,
    paddingHorizontal: 16,
  },

  modalCloseButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 10,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: 16,
  },

  modalCloseText: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '800',
  },

  modalInnerContent: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },

  /* ALTURA */

  imageTitleSpec: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0f172a',
    marginBottom: 20,
  },

  imageMainValueContainer: {
    marginVertical: 35,
  },

  imageMainValueText: {
    fontSize: 110,
    fontWeight: '900',
    color: '#0f172a',
    letterSpacing: -4,
  },

  imageLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  imageLabelItem: {
    fontSize: 16,
    fontWeight: '800',
  },

  imageLabelDivider: {
    marginHorizontal: 10,
    color: '#cbd5e1',
    fontSize: 16,
  },

  colorLow: {
    color: '#10b981',
  },

  colorMedium: {
    color: '#fbbf24',
  },

  colorHigh: {
    color: '#ef4444',
  },

  colorBackgroundLow: {
    backgroundColor: '#10b981',
  },

  colorBackgroundMedium: {
    backgroundColor: '#eab308',
  },

  colorBackgroundHigh: {
    backgroundColor: '#ef4444',
  },

  boldText: {
    fontWeight: 'bold',
  },

  /* SAÚDE */

  leafContainer: {
    alignItems: 'center',
    marginVertical: 20,
    height: 110,
    justifyContent: 'center',
  },

  leafBody: {
    width: 90,
    height: 90,
    backgroundColor: '#8ade36',
    borderTopLeftRadius: 90,
    borderBottomRightRadius: 90,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    position: 'relative',
    transform: [{ rotate: '-45deg' }],
  },

  leafLineMain: {
    position: 'absolute',
    backgroundColor: '#589e1a',
    width: 4,
    height: '100%',
    left: '50%',
    marginLeft: -2,
  },

  leafLineBranch: {
    position: 'absolute',
    backgroundColor: '#589e1a',
    width: 20,
    height: 3,
    left: 25,
  },

  leafBranchOne: {
    top: 25,
    transform: [{ rotate: '35deg' }],
  },

  leafBranchTwo: {
    top: 45,
    transform: [{ rotate: '35deg' }],
  },

  leafBranchThree: {
    top: 65,
    transform: [{ rotate: '35deg' }],
  },

  leafBranchFour: {
    top: 35,
    left: 45,
    width: 25,
    transform: [{ rotate: '-35deg' }],
  },

  leafBranchFive: {
    top: 55,
    left: 45,
    width: 25,
    transform: [{ rotate: '-35deg' }],
  },

  leafStem: {
    width: 6,
    height: 20,
    backgroundColor: '#589e1a',
    marginTop: -5,
    borderRadius: 3,
  },

  healthList: {
    width: '100%',
    marginTop: 15,
  },

  healthItemBlock: {
    backgroundColor: '#f8fafc',
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: 'rgba(15,23,42,0.03)',
  },

  healthItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  healthItemCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  healthBorderGreen: {
    borderColor: '#10b981',
  },

  healthBorderYellow: {
    borderColor: '#fbbf24',
  },

  healthBorderRed: {
    borderColor: '#ef4444',
  },

  healthItemCircleText: {
    fontSize: 11,
  },

  healthItemTitleText: {
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  healthItemSubtext: {
    fontSize: 13,
    color: '#475569',
    fontWeight: '500',
    lineHeight: 19,
    marginLeft: 36,
  },

  /* GRÁFICO KM */

  chartMainTitleText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: 20,
    textAlign: 'center',
  },

  graphTopLegendSpec: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: '#f8fafc',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    flexWrap: 'wrap',
  },

  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 3,
  },

  legendIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },

  legendText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748b',
  },

  graphWrapperStructure: {
    flexDirection: 'row',
    width: '100%',
    height: 240,
    alignItems: 'stretch',
  },

  graphYAxisLabelText: {
    position: 'absolute',
    left: -40,
    top: '45%',
    transform: [{ rotate: '-90deg' }],
    fontSize: 10,
    color: '#94a3b8',
    fontWeight: '800',
    letterSpacing: 1,
  },

  imageGraphContainerProfessional: {
    flex: 1,
    marginLeft: 24,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },

  professionalZoneHigh: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '33.33%',
    backgroundColor: 'rgba(244,63,94,0.04)',
  },

  professionalZoneMedium: {
    position: 'absolute',
    top: '33.33%',
    left: 0,
    right: 0,
    height: '33.33%',
    backgroundColor: 'rgba(234,179,8,0.03)',
  },

  professionalZoneLow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '33.33%',
    backgroundColor: 'rgba(16,185,129,0.04)',
  },

  absoluteGridContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    paddingVertical: 8,
    zIndex: 1,
  },

  professionalGridRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 14,
  },

  professionalGridRowText: {
    fontSize: 10,
    color: '#94a3b8',
    width: 22,
    textAlign: 'right',
    paddingRight: 6,
    fontWeight: '700',
  },

  professionalGridLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#f1f5f9',
  },

  professionalPlotArea: {
    ...StyleSheet.absoluteFillObject,
    left: 22,
    right: 8,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    zIndex: 2,
  },

  professionalColumnWrapper: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'flex-end',
    position: 'relative',
  },

  professionalBarFill: {
    width: '100%',
    borderTopWidth: 2,
    opacity: 0.85,
  },

  professionalNodeDot: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    zIndex: 5,
  },

  graphXAxisLabelsRow: {
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 46,
    paddingRight: 8,
    justifyContent: 'space-between',
    marginTop: 10,
  },

  graphXAxisLabelTextItem: {
    fontSize: 10,
    color: '#64748b',
    fontWeight: '800',
    width: 14,
    textAlign: 'center',
  },

  graphXAxisBottomTitle: {
    fontSize: 12,
    color: '#475569',
    fontWeight: '900',
    marginTop: 12,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});
