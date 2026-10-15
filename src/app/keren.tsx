import { useState } from 'react';
import {
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const features = [
  { id: '1', icon: '🚀', title: 'Explore', desc: 'Jelajahi ide baru', color: '#2563eb' },
  { id: '2', icon: '💻', title: 'Projects', desc: 'Kelola proyek', color: '#7c3aed' },
  { id: '3', icon: '🎯', title: 'Goals', desc: 'Target harian', color: '#0891b2' },
  { id: '4', icon: '⚡', title: 'Skills', desc: 'Kembangkan skill', color: '#d97706' },
];

export default function Keren() {
  const [selected, setSelected] = useState('Explore');
  const [completed, setCompleted] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#080d1b" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>

          {/* HEADER */}
          <View style={styles.header}>
            <View>
              <Text style={styles.logo}>NEXUS<Text style={styles.logoDot}>.</Text></Text>
              <Text style={styles.headerSubtitle}>YOUR DIGITAL SPACE</Text>
            </View>

            <View style={styles.notification}>
              <Text style={styles.notificationIcon}>🔔</Text>
              <View style={styles.notificationDot} />
            </View>
          </View>

          {/* HERO */}
          <View style={styles.hero}>
            <View style={styles.heroGlow} />

            <Text style={styles.heroLabel}>MONDAY MOTIVATION ✦</Text>
            <Text style={styles.heroTitle}>
              Think Big.{"\n"}
              <Text style={styles.heroHighlight}>Build Different.</Text>
            </Text>

            <Text style={styles.heroDescription}>
              Ide besar dimulai dari langkah kecil.
              Terus belajar dan ciptakan sesuatu yang luar biasa.
            </Text>

            <View style={styles.heroFooter}>
              <View style={styles.onlineBadge}>
                <View style={styles.onlineDot} />
                <Text style={styles.onlineText}>SYSTEM ONLINE</Text>
              </View>
              <Text style={styles.heroVersion}>VERSION 01.0</Text>
            </View>
          </View>

          {/* STATISTICS */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <Text style={styles.sectionCaption}>YOUR PROGRESS</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statIcon}>⚡</Text>
              <Text style={styles.statNumber}>08</Text>
              <Text style={styles.statLabel}>Projects</Text>
              <View style={styles.statLineBlue} />
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statIcon}>🎯</Text>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Goals</Text>
              <View style={styles.statLinePurple} />
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statIcon}>🔥</Text>
              <Text style={styles.statNumber}>07</Text>
              <Text style={styles.statLabel}>Day Streak</Text>
              <View style={styles.statLineOrange} />
            </View>
          </View>

          {/* FEATURES */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Discover</Text>
            <Text style={styles.sectionCaption}>QUICK ACCESS</Text>
          </View>

          <View style={styles.featureContainer}>
            {features.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => setSelected(item.title)}
                style={[
                  styles.featureCard,
                  selected === item.title && styles.featureSelected,
                ]}
              >
                <View style={[styles.featureIconBox, { backgroundColor: item.color + '25' }]}>
                  <Text style={styles.featureIcon}>{item.icon}</Text>
                </View>

                <Text style={styles.featureTitle}>{item.title}</Text>
                <Text style={styles.featureDesc}>{item.desc}</Text>

                <Text style={styles.featureArrow}>↗</Text>
              </Pressable>
            ))}
          </View>

          {/* DAILY TASK */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Daily Focus</Text>
            <Text style={styles.sectionCaption}>TODAY'S CHALLENGE</Text>
          </View>

          <View style={styles.taskCard}>
            <View style={styles.taskTop}>
              <View style={styles.taskIconBox}>
                <Text style={styles.taskIcon}>🧠</Text>
              </View>
              <Text style={styles.taskTag}>PERSONAL GROWTH</Text>
            </View>

            <Text style={styles.taskTitle}>Learn Something New</Text>
            <Text style={styles.taskDescription}>
              Luangkan waktu untuk mempelajari satu hal baru
              yang dapat meningkatkan kemampuanmu.
            </Text>

            <Pressable
              onPress={() => setCompleted(!completed)}
              style={[
                styles.taskButton,
                completed && styles.taskButtonDone,
              ]}
            >
              <Text style={styles.taskButtonText}>
                {completed ? '✓ Challenge Completed' : 'Complete Challenge →'}
              </Text>
            </Pressable>
          </View>

          {/* SELECTED MENU */}
          <View style={styles.selectedCard}>
            <Text style={styles.selectedLabel}>CURRENT SELECTION</Text>
            <Text style={styles.selectedValue}>{selected}</Text>
            <Text style={styles.selectedDescription}>
              Kamu sedang memilih fitur {selected}.
            </Text>
          </View>

          {/* FOOTER */}
          <View style={styles.footer}>
            <Text style={styles.footerLogo}>NEXUS.</Text>
            <Text style={styles.footerText}>DESIGNED TO INSPIRE.</Text>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080d1b',
  },
  content: {
    width: '100%',
    maxWidth: 650,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 40,
  },

  // HEADER
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },
  logo: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: '900',
    letterSpacing: 2,
  },
  logoDot: {
    color: '#38bdf8',
  },
  headerSubtitle: {
    color: '#64748b',
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 4,
  },
  notification: {
    width: 45,
    height: 45,
    backgroundColor: '#151e32',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#26334c',
  },
  notificationIcon: {
    fontSize: 19,
  },
  notificationDot: {
    position: 'absolute',
    top: 9,
    right: 10,
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#38bdf8',
  },

  // HERO
  hero: {
    backgroundColor: '#14264b',
    borderRadius: 24,
    padding: 24,
    marginBottom: 30,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#294775',
  },
  heroGlow: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#2563eb',
    opacity: 0.17,
    right: -80,
    top: -85,
  },
  heroLabel: {
    color: '#7dd3fc',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 18,
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '900',
    lineHeight: 43,
  },
  heroHighlight: {
    color: '#38bdf8',
  },
  heroDescription: {
    color: '#cbd5e1',
    fontSize: 13,
    lineHeight: 21,
    marginTop: 15,
    maxWidth: 300,
  },
  heroFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
    flexWrap: 'wrap',
    gap: 10,
  },
  onlineBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: '#0f3550',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#4ade80',
  },
  onlineText: {
    color: '#86efac',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  heroVersion: {
    color: '#93a4c0',
    fontSize: 9,
    letterSpacing: 1,
  },

  // SECTION
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionCaption: {
    color: '#64748b',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  // STATISTICS
  statsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 30,
  },
  statCard: {
    flex: 1,
    minWidth: 0,
    backgroundColor: '#111b2e',
    borderRadius: 17,
    padding: 13,
    borderWidth: 1,
    borderColor: '#23314a',
    overflow: 'hidden',
  },
  statIcon: {
    fontSize: 20,
    marginBottom: 12,
  },
  statNumber: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#94a3b8',
    fontSize: 10,
    marginTop: 4,
  },
  statLineBlue: {
    height: 3,
    width: '70%',
    backgroundColor: '#38bdf8',
    borderRadius: 5,
    marginTop: 13,
  },
  statLinePurple: {
    height: 3,
    width: '85%',
    backgroundColor: '#a78bfa',
    borderRadius: 5,
    marginTop: 13,
  },
  statLineOrange: {
    height: 3,
    width: '55%',
    backgroundColor: '#fb923c',
    borderRadius: 5,
    marginTop: 13,
  },

  // FEATURES
  featureContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 30,
  },
  featureCard: {
    width: '48%',
    minHeight: 145,
    backgroundColor: '#111b2e',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#23314a',
  },
  featureSelected: {
    borderColor: '#38bdf8',
    backgroundColor: '#142943',
  },
  featureIconBox: {
    width: 43,
    height: 43,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },
  featureIcon: {
    fontSize: 21,
  },
  featureTitle: {
    color: '#f8fafc',
    fontSize: 15,
    fontWeight: 'bold',
  },
  featureDesc: {
    color: '#94a3b8',
    fontSize: 10,
    marginTop: 5,
  },
  featureArrow: {
    position: 'absolute',
    right: 15,
    top: 15,
    color: '#64748b',
    fontSize: 17,
  },

  // TASK
  taskCard: {
    backgroundColor: '#111b2e',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#293953',
    marginBottom: 22,
  },
  taskTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 17,
    gap: 8,
  },
  taskIconBox: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#302653',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskIcon: {
    fontSize: 21,
  },
  taskTag: {
    color: '#c4b5fd',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  taskTitle: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: 'bold',
  },
  taskDescription: {
    color: '#94a3b8',
    fontSize: 12,
    lineHeight: 20,
    marginTop: 8,
    marginBottom: 18,
  },
  taskButton: {
    backgroundColor: '#2563eb',
    padding: 13,
    borderRadius: 12,
    alignItems: 'center',
  },
  taskButtonDone: {
    backgroundColor: '#15803d',
  },
  taskButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  // SELECTION
  selectedCard: {
    backgroundColor: '#0e263b',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#164e63',
    padding: 17,
    marginBottom: 30,
  },
  selectedLabel: {
    color: '#67e8f9',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  selectedValue: {
    color: '#ffffff',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 7,
  },
  selectedDescription: {
    color: '#94a3b8',
    fontSize: 11,
    marginTop: 5,
  },

  // FOOTER
  footer: {
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
    paddingTop: 20,
  },
  footerLogo: {
    color: '#38bdf8',
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 3,
  },
  footerText: {
    color: '#64748b',
    fontSize: 8,
    letterSpacing: 2,
    marginTop: 6,
  },
});