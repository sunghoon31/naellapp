
import { useState } from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    View,
} from 'react-native';

export default function StylePractice() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [spacing, setSpacing] = useState(16);
  const [themeColor, setThemeColor] = useState('#2563eb');

  const background = darkMode ? '#0f172a' : '#f1f5f9';
  const cardColor = darkMode ? '#1e293b' : '#ffffff';
  const textColor = darkMode ? '#ffffff' : '#1e293b';
  const secondaryColor = darkMode ? '#cbd5e1' : '#64748b';

  const reset = () => {
    setDarkMode(false);
    setFontSize(16);
    setSpacing(16);
    setThemeColor('#2563eb');
  };

  const colors = ['#2563eb', '#16a34a', '#9333ea', '#ea580c'];

  return (
    <ScrollView
      style={{ backgroundColor: background }}
      contentContainerStyle={styles.container}
    >
      <Text style={[styles.heading, { color: textColor }]}>
        Style Customizer
      </Text>

      <Text style={[styles.subtitle, { color: secondaryColor }]}>
        Atur tampilan aplikasi sesuai keinginanmu.
      </Text>

      {/* Preview */}
      <View style={[styles.preview, { backgroundColor: cardColor }]}>
        <Text style={[styles.previewLabel, { color: secondaryColor }]}>
          LIVE PREVIEW
        </Text>

        <View
          style={[
            styles.avatar,
            { backgroundColor: themeColor },
          ]}
        >
          <Text style={styles.avatarText}>NK</Text>
        </View>

        <Text style={[styles.name, { color: textColor, fontSize }]}>
          Naelul Kirom
        </Text>

        <Text style={[styles.prodi, { color: themeColor }]}>
          Sistem Informasi
        </Text>

        <View
          style={[
            styles.infoBox,
            {
              backgroundColor: background,
              padding: spacing,
            },
          ]}
        >
          <Text style={{ color: textColor, fontSize }}>
            Ini adalah contoh penerapan StyleSheet yang dapat diubah
              secara langsung melalui pengaturan di bawah.
          </Text>
        </View>
      </View>

      {/* Theme */}
      <View style={[styles.settingCard, { backgroundColor: cardColor }]}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>
          Tampilan
        </Text>

        <View style={styles.settingRow}>
          <View>
            <Text style={[styles.settingTitle, { color: textColor }]}>
              Mode Gelap
            </Text>
            <Text style={[styles.settingDesc, { color: secondaryColor }]}>
              Ubah background aplikasi
            </Text>
          </View>

          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#cbd5e1', true: themeColor }}
          />
        </View>
      </View>

      {/* Font Size */}
      <View style={[styles.settingCard, { backgroundColor: cardColor }]}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>
          Ukuran Teks
        </Text>

        <Text style={[styles.settingDesc, { color: secondaryColor }]}>
          Ukuran saat ini: {fontSize}px
        </Text>

        <View style={styles.buttonRow}>
          <Pressable
            style={[styles.controlButton, { backgroundColor: themeColor }]}
            onPress={() => setFontSize(Math.max(12, fontSize - 2))}
          >
            <Text style={styles.buttonText}>A−</Text>
          </Pressable>

          <Pressable
            style={[styles.controlButton, { backgroundColor: themeColor }]}
            onPress={() => setFontSize(Math.min(26, fontSize + 2))}
          >
            <Text style={styles.buttonText}>A+</Text>
          </Pressable>
        </View>
      </View>

      {/* Padding */}
      <View style={[styles.settingCard, { backgroundColor: cardColor }]}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>
          Jarak Komponen
        </Text>

        <Text style={[styles.settingDesc, { color: secondaryColor }]}>
          Padding: {spacing}px
        </Text>

        <View style={styles.buttonRow}>
          <Pressable
            style={[styles.controlButton, { backgroundColor: themeColor }]}
            onPress={() => setSpacing(Math.max(8, spacing - 4))}
          >
            <Text style={styles.buttonText}>− Kurangi</Text>
          </Pressable>

          <Pressable
            style={[styles.controlButton, { backgroundColor: themeColor }]}
            onPress={() => setSpacing(Math.min(32, spacing + 4))}
          >
            <Text style={styles.buttonText}>+ Tambah</Text>
          </Pressable>
        </View>
      </View>

      {/* Color */}
      <View style={[styles.settingCard, { backgroundColor: cardColor }]}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>
          Warna Tema
        </Text>

        <Text style={[styles.settingDesc, { color: secondaryColor }]}>
          Pilih warna aplikasi
        </Text>

        <View style={styles.colorRow}>
          {colors.map((color) => (
            <Pressable
              key={color}
              onPress={() => setThemeColor(color)}
              style={[
                styles.colorButton,
                { backgroundColor: color },
                themeColor === color && styles.selectedColor,
              ]}
            />
          ))}
        </View>
      </View>

      {/* Reset */}
      <Pressable
        style={[styles.resetButton, { backgroundColor: themeColor }]}
        onPress={reset}
      >
        <Text style={styles.buttonText}>↻ Reset Pengaturan</Text>
      </Pressable>

      <Text style={[styles.footer, { color: secondaryColor }]}>
        React Native • useState • StyleSheet
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 45,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 6,
    marginBottom: 22,
  },
  preview: {
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
  },
  previewLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 18,
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 23,
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  prodi: {
    fontSize: 14,
    fontWeight: '600',
  },
  infoBox: {
    width: '100%',
    borderRadius: 12,
    marginTop: 18,
  },
  settingCard: {
    padding: 18,
    borderRadius: 16,
    marginBottom: 14,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  settingDesc: {
    fontSize: 13,
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 5,
  },
  controlButton: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  colorRow: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 8,
  },
  colorButton: {
    width: 38,
    height: 38,
    borderRadius: 20,
  },
  selectedColor: {
    borderWidth: 3,
    borderColor: '#94a3b8',
  },
  resetButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5,
  },
  footer: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 20,
  },
});
