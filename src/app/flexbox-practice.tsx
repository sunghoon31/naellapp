
import { useState } from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const menus = [
  { id: '1', icon: '📚', title: 'Akademik', desc: 'Informasi kuliah' },
  { id: '2', icon: '📝', title: 'Tugas', desc: 'Daftar tugas' },
  { id: '3', icon: '📅', title: 'Jadwal', desc: 'Jadwal perkuliahan' },
  { id: '4', icon: '📊', title: 'Nilai', desc: 'Hasil akademik' },
];

export default function FlexboxPractice() {
  const [selectedMenu, setSelectedMenu] = useState('Belum ada menu dipilih');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        {/* HEADER: flexDirection row */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>SELAMAT DATANG</Text>
            <Text style={styles.name}>Naelul Kirom</Text>
            <Text style={styles.prodi}>Sistem Informasi</Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>NK</Text>
          </View>
        </View>

        {/* STATISTIK: flexDirection row + gap */}
        <Text style={styles.sectionTitle}>Ringkasan</Text>

        <View style={styles.statistics}>
          <View style={[styles.statCard, { backgroundColor: '#2563eb' }]}>
            <Text style={styles.statIcon}>📚</Text>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Mata Kuliah</Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: '#059669' }]}>
            <Text style={styles.statIcon}>📝</Text>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Tugas Aktif</Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: '#d97706' }]}>
            <Text style={styles.statIcon}>⭐</Text>
            <Text style={styles.statNumber}>3.75</Text>
            <Text style={styles.statLabel}>IPK</Text>
          </View>
        </View>

        {/* MENU: flexDirection row + wrap */}
        <Text style={styles.sectionTitle}>Menu Akademik</Text>

        <View style={styles.menuContainer}>
          {menus.map((menu) => (
            <Pressable
              key={menu.id}
              style={styles.menuCard}
              onPress={() => setSelectedMenu(menu.title)}
            >
              <Text style={styles.menuIcon}>{menu.icon}</Text>
              <Text style={styles.menuTitle}>{menu.title}</Text>
              <Text style={styles.menuDescription}>{menu.desc}</Text>
            </Pressable>
          ))}
        </View>

        {/* HASIL INTERAKSI */}
        <View style={styles.resultCard}>
          <Text style={styles.resultLabel}>Menu yang dipilih</Text>
          <Text style={styles.resultText}>{selectedMenu}</Text>
        </View>

        {/* FOOTER */}
        <Text style={styles.footer}>
          React Native • Flexbox Layout
        </Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },

  content: {
    padding: 20,
    paddingTop: 45,
    paddingBottom: 35,
  },

  // FLEX DIRECTION: ROW
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  greeting: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#2563eb',
    letterSpacing: 1.5,
  },

  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 5,
  },

  prodi: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 15,
  },

  // FLEX DIRECTION: ROW + GAP
  statistics: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 30,
  },

  statCard: {
    flex: 1,
    padding: 12,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  statIcon: {
    fontSize: 23,
    marginBottom: 8,
  },

  statNumber: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  statLabel: {
    fontSize: 10,
    color: '#ffffff',
    marginTop: 5,
    textAlign: 'center',
  },

  // FLEX WRAP: SUSUNAN MENU
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 25,
  },

  menuCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
    elevation: 2,
  },

  menuIcon: {
    fontSize: 28,
    marginBottom: 12,
  },

  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },

  menuDescription: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 5,
  },

  // JUSTIFY CONTENT + ALIGN ITEMS
  resultCard: {
    backgroundColor: '#dbeafe',
    padding: 20,
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  resultLabel: {
    fontSize: 13,
    color: '#475569',
  },

  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563eb',
  },

  footer: {
    textAlign: 'center',
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 25,
  },
});
