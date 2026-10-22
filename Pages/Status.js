import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  StatusBar,
  Dimensions,
  Modal,
} from 'react-native';

import { styles } from '../Css/styleStatus.js';

const { width, height } = Dimensions.get('window');

export default function Status({ routeData, onBack }) {
  const [activeModule, setActiveModule] = useState(null);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const modalScale = useRef(new Animated.Value(0.95)).current;
  const modalFade = useRef(new Animated.Value(0)).current;

  const cardsAnim = useRef([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 45,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.stagger(
      120,
      cardsAnim.map((anim) =>
        Animated.spring(anim, {
          toValue: 1,
          tension: 50,
          friction: 8,
          useNativeDriver: true,
        })
      )
    ).start();
  }, []);

  const openModal = (module) => {
    setActiveModule(module);

    modalFade.setValue(0);
    modalScale.setValue(0.95);

    Animated.parallel([
      Animated.timing(modalFade, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(modalScale, {
        toValue: 1,
        tension: 60,
        friction: 9,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.parallel([
      Animated.timing(modalFade, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(modalScale, {
        toValue: 0.95,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => setActiveModule(null));
  };

  const modules = [
    {
      id: 'Altura',
      title: 'Altura',
      desc: 'Monitoramento vertical da vegetação',
      color: '#10b981',
      icon: '⬒',
    },
    {
      id: 'Saúde',
      title: 'Saúde',
      desc: 'Análise fitossanitária inteligente',
      color: '#f43f5e',
      icon: '✚',
    },
    {
      id: 'KM',
      title: 'KM',
      desc: 'Controle e métricas de trecho',
      color: '#3b82f6',
      icon: '⌖',
    },
  ];

  const graphPoints = [
    { km: '1', v: 4 },
    { km: '2', v: 1.5 },
    { km: '3', v: 3.5 },
    { km: '4', v: 2 },
    { km: '5', v: 6 },
    { km: '6', v: 7.2 },
    { km: '7', v: 7 },
    { km: '8', v: 8.5 },
    { km: '9', v: 6.3 },
    { km: '10', v: 5.8 },
    { km: '11', v: 10.7 },
    { km: '12', v: 11.4 },
    { km: '13', v: 13.4 },
    { km: '14', v: 12.5 },
    { km: '15', v: 12 },
    { km: '16', v: 5.2 },
    { km: '17', v: 6 },
    { km: '18', v: 5.1 },
  ];

  const getColorByValue = (val) => {
    if (val > 10) return '#f43f5e';
    if (val >= 5) return '#eab308';
    return '#10b981';
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.8}
            onPress={onBack}
          >
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Text style={styles.headerMini}>ROUTE ANALYTICS</Text>
            <Text style={styles.headerTitle}>Status da Rota</Text>
          </View>

          <View style={styles.headerSpacer} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.heroCard}>
            <View style={styles.heroTop}>
              <View style={styles.liveBadge}>
                <View style={styles.liveDot} />
                <Text style={styles.liveText}>ONLINE</Text>
              </View>

              <Text style={styles.heroMini}>TELEMETRIA</Text>
            </View>

            <Text style={styles.heroTitle}>
              Monitoramento Inteligente
            </Text>

            <Text style={styles.heroDescription}>
              {routeData?.subtitle ||
                'Painel avançado com análise operacional, inspeções e dados em tempo real da rota monitorada.'}
            </Text>

            <View style={styles.statsContainer}>
              <View style={styles.statBox}>
                <Text style={styles.statValue}>98%</Text>
                <Text style={styles.statLabel}>Precisão</Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.statBox}>
                <Text style={styles.statValue}>24h</Text>
                <Text style={styles.statLabel}>Atualização</Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.statBox}>
                <Text style={styles.statValue}>AI</Text>
                <Text style={styles.statLabel}>Análise</Text>
              </View>
            </View>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionMini}>MÓDULOS</Text>
            <Text style={styles.sectionTitle}>
              Inspeções Disponíveis
            </Text>
          </View>

          {modules.map((item, index) => {
            const scale = cardsAnim[index].interpolate({
              inputRange: [0, 1],
              outputRange: [0.94, 1],
            });

            return (
              <Animated.View
                key={item.id}
                style={[
                  styles.animatedCard,
                  {
                    opacity: cardsAnim[index],
                    transform: [{ scale }],
                  },
                ]}
              >
                <TouchableOpacity
                  activeOpacity={0.88}
                  style={styles.moduleCard}
                  onPress={() => openModal(item)}
                >
                  <View
                    style={[
                      styles.iconWrapper,
                      {
                        backgroundColor: `${item.color}15`,
                        borderColor: `${item.color}25`,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.iconText,
                        { color: item.color },
                      ]}
                    >
                      {item.icon}
                    </Text>
                  </View>

                  <View style={styles.moduleContent}>
                    <Text style={styles.moduleTitle}>
                      {item.title}
                    </Text>
                    <Text style={styles.moduleDesc}>
                      {item.desc}
                    </Text>
                  </View>

                  <View style={styles.arrowButton}>
                    <Text style={styles.arrowText}>→</Text>
                  </View>
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </ScrollView>
      </Animated.View>

      <Modal
        visible={activeModule !== null}
        transparent
        animationType="none"
        onRequestClose={closeModal}
      >
        <Animated.View
          style={[
            styles.modalOverlay,
            { opacity: modalFade },
          ]}
        >
          <Animated.View
            style={[
              styles.modalContainer,
              activeModule?.id === 'KM' &&
                styles.modalContainerLarge,
              { transform: [{ scale: modalScale }] },
            ]}
          >
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>✕</Text>
            </TouchableOpacity>

            {activeModule?.id === 'Altura' && (
              <View style={styles.modalInnerContent}>
                <Text style={styles.imageTitleSpec}>Altura</Text>

                <View style={styles.imageMainValueContainer}>
                  <Text style={styles.imageMainValueText}>30</Text>
                </View>

                <View style={styles.imageLabelRow}>
                  <Text
                    style={[
                      styles.imageLabelItem,
                      styles.colorLow,
                    ]}
                  >
                    Baixo
                  </Text>

                  <Text style={styles.imageLabelDivider}>•</Text>

                  <Text
                    style={[
                      styles.imageLabelItem,
                      styles.colorMedium,
                    ]}
                  >
                    Médio
                  </Text>

                  <Text style={styles.imageLabelDivider}>•</Text>

                  <Text
                    style={[
                      styles.imageLabelItem,
                      styles.colorHigh,
                    ]}
                  >
                    Alto
                  </Text>
                </View>
              </View>
            )}

            {activeModule?.id === 'Saúde' && (
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.modalInnerContent}
              >
                <View style={styles.leafContainer}>
                  <View style={styles.leafBody}>
                    <View style={styles.leafLineMain} />

                    <View
                      style={[
                        styles.leafLineBranch,
                        styles.leafBranchOne,
                      ]}
                    />

                    <View
                      style={[
                        styles.leafLineBranch,
                        styles.leafBranchTwo,
                      ]}
                    />

                    <View
                      style={[
                        styles.leafLineBranch,
                        styles.leafBranchThree,
                      ]}
                    />

                    <View
                      style={[
                        styles.leafLineBranch,
                        styles.leafBranchFour,
                      ]}
                    />

                    <View
                      style={[
                        styles.leafLineBranch,
                        styles.leafBranchFive,
                      ]}
                    />
                  </View>

                  <View style={styles.leafStem} />
                </View>

                <View style={styles.healthList}>
                  <View style={styles.healthItemBlock}>
                    <View style={styles.healthItemHeader}>
                      <View
                        style={[
                          styles.healthItemCircle,
                          styles.healthBorderGreen,
                        ]}
                      >
                        <Text
                          style={[
                            styles.healthItemCircleText,
                            styles.colorLow,
                          ]}
                        >
                          🍃
                        </Text>
                      </View>

                      <Text
                        style={[
                          styles.healthItemTitleText,
                          styles.colorLow,
                        ]}
                      >
                        SAUDÁVEL
                      </Text>
                    </View>

                    <Text style={styles.healthItemSubtext}>
                      • Cor verde vibrante
                    </Text>
                    <Text style={styles.healthItemSubtext}>
                      • Folhas firmes e eretas
                    </Text>
                    <Text style={styles.healthItemSubtext}>
                      • Crescimento uniforme
                    </Text>
                    <Text style={styles.healthItemSubtext}>
                      • Sem sinais de pragas ou doenças
                    </Text>
                  </View>

                  <View style={styles.healthItemBlock}>
                    <View style={styles.healthItemHeader}>
                      <View
                        style={[
                          styles.healthItemCircle,
                          styles.healthBorderYellow,
                        ]}
                      >
                        <Text
                          style={[
                            styles.healthItemCircleText,
                            styles.colorMedium,
                            styles.boldText,
                          ]}
                        >
                          !
                        </Text>
                      </View>

                      <Text
                        style={[
                          styles.healthItemTitleText,
                          styles.colorMedium,
                        ]}
                      >
                        EM ALERTA
                      </Text>
                    </View>

                    <Text style={styles.healthItemSubtext}>
                      • Algumas folhas amareladas
                    </Text>
                    <Text style={styles.healthItemSubtext}>
                      • Pontas levemente secas
                    </Text>
                    <Text style={styles.healthItemSubtext}>
                      • Crescimento irregular
                    </Text>
                    <Text style={styles.healthItemSubtext}>
                      • Possível início de estresse
                    </Text>
                  </View>

                  <View style={styles.healthItemBlock}>
                    <View style={styles.healthItemHeader}>
                      <View
                        style={[
                          styles.healthItemCircle,
                          styles.healthBorderRed,
                        ]}
                      >
                        <Text
                          style={[
                            styles.healthItemCircleText,
                            styles.colorHigh,
                          ]}
                        >
                          ✕
                        </Text>
                      </View>

                      <Text
                        style={[
                          styles.healthItemTitleText,
                          styles.colorHigh,
                        ]}
                      >
                        DOENTE
                      </Text>
                    </View>

                    <Text style={styles.healthItemSubtext}>
                      • Folhas amareladas ou marrons
                    </Text>
                    <Text style={styles.healthItemSubtext}>
                      • Folhas secas ou murchas
                    </Text>
                    <Text style={styles.healthItemSubtext}>
                      • Presença de manchas ou fungos
                    </Text>
                    <Text style={styles.healthItemSubtext}>
                      • Crescimento fraco ou falhado
                    </Text>
                  </View>
                </View>
              </ScrollView>
            )}

            {activeModule?.id === 'KM' && (
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.modalInnerContent}
              >
                <Text style={styles.chartMainTitleText}>
                  Gráfico de Variação de Altura Dinâmica
                </Text>

                <View style={styles.graphTopLegendSpec}>
                  <View style={styles.legendItem}>
                    <View
                      style={[
                        styles.legendIndicator,
                        styles.colorBackgroundHigh,
                      ]}
                    />
                    <Text style={styles.legendText}>
                      Alto (&gt;10m)
                    </Text>
                  </View>

                  <View style={styles.legendItem}>
                    <View
                      style={[
                        styles.legendIndicator,
                        styles.colorBackgroundMedium,
                      ]}
                    />
                    <Text style={styles.legendText}>
                      Médio (5-10m)
                    </Text>
                  </View>

                  <View style={styles.legendItem}>
                    <View
                      style={[
                        styles.legendIndicator,
                        styles.colorBackgroundLow,
                      ]}
                    />
                    <Text style={styles.legendText}>
                      Baixo (0-5m)
                    </Text>
                  </View>
                </View>

                <View style={styles.graphWrapperStructure}>
                  <Text style={styles.graphYAxisLabelText}>
                    Altura (cm)
                  </Text>

                  <View
                    style={styles.imageGraphContainerProfessional}
                  >
                    <View style={styles.professionalZoneHigh} />
                    <View style={styles.professionalZoneMedium} />
                    <View style={styles.professionalZoneLow} />

                    <View style={styles.absoluteGridContainer}>
                      {[15, 12, 9, 6, 3, 0].map((val, index) => (
                        <View
                          key={index}
                          style={styles.professionalGridRow}
                        >
                          <Text
                            style={styles.professionalGridRowText}
                          >
                            {val}
                          </Text>
                          <View
                            style={styles.professionalGridLine}
                          />
                        </View>
                      ))}
                    </View>

                    <View style={styles.professionalPlotArea}>
                      {graphPoints.map((point, index) => {
                        const heightPercentage =
                          `${(point.v / 15) * 100}%`;

                        const currentColor =
                          getColorByValue(point.v);

                        return (
                          <View
                            key={index}
                            style={styles.professionalColumnWrapper}
                          >
                            <View
                              style={[
                                styles.professionalBarFill,
                                {
                                  height: heightPercentage,
                                  backgroundColor: `${currentColor}15`,
                                  borderColor: currentColor,
                                },
                              ]}
                            />

                            <View
                              style={[
                                styles.professionalNodeDot,
                                {
                                  bottom: heightPercentage,
                                  backgroundColor: currentColor,
                                  marginBottom: -4,
                                },
                              ]}
                            />
                          </View>
                        );
                      })}
                    </View>
                  </View>
                </View>

                <View style={styles.graphXAxisLabelsRow}>
                  {graphPoints.map((point, index) => (
                    <Text
                      key={index}
                      style={styles.graphXAxisLabelTextItem}
                    >
                      {point.km}
                    </Text>
                  ))}
                </View>

                <Text style={styles.graphXAxisBottomTitle}>
                  Kilometragem
                </Text>
              </ScrollView>
            )}
          </Animated.View>
        </Animated.View>
      </Modal>
    </View>
  );
}
