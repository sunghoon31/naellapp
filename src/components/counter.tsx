import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type CounterProps = {
  nilaiAwal: number;
};

export default function Counter({ nilaiAwal }: CounterProps) {
  const [nilai, setNilai] = useState(nilaiAwal);

  const tambahNilai = () => {
    if (nilai < 100) {
      setNilai(nilai + 5);
    }
  };

  const kurangNilai = () => {
    if (nilai > 0) {
      setNilai(nilai - 5);
    }
  };

  const resetNilai = () => {
    setNilai(nilaiAwal);
  };

  const getStatus = () => {
    if (nilai >= 80) {
      return 'Sangat Baik';
    } else if (nilai >= 60) {
      return 'Baik';
    } else if (nilai >= 40) {
      return 'Cukup';
    } else {
      return 'Perlu Ditingkatkan';
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.icon}>📊</Text>

        <View>
          <Text style={styles.title}>Penilaian</Text>
          <Text style={styles.subtitle}>Kelola nilai mahasiswa</Text>
        </View>
      </View>

      <View style={styles.scoreBox}>
        <Text style={styles.scoreLabel}>Nilai Saat Ini</Text>
        <Text style={styles.score}>{nilai}</Text>
        <Text style={styles.status}>{getStatus()}</Text>
      </View>

      <View style={styles.progressBackground}>
        <View
          style={[
            styles.progress,
            { width: `${nilai}%` },
          ]}
        />
      </View>

      <Text style={styles.progressText}>
        Progress nilai: {nilai} / 100
      </Text>

      <View style={styles.buttonRow}>
        <Pressable
          style={[
            styles.button,
            nilai <= 0 && styles.buttonDisabled,
          ]}
          onPress={kurangNilai}
          disabled={nilai <= 0}
        >
          <Text style={styles.buttonText}>− 5</Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            nilai >= 100 && styles.buttonDisabled,
          ]}
          onPress={tambahNilai}
          disabled={nilai >= 100}
        >
          <Text style={styles.buttonText}>+ 5</Text>
        </Pressable>
      </View>

      <Pressable style={styles.resetButton} onPress={resetNilai}>
        <Text style={styles.resetText}>↻ Reset Nilai</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 22,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  icon: {
    fontSize: 35,
    marginRight: 12,
  },

  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#1e293b',
  },

  subtitle: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
  },

  scoreBox: {
    alignItems: 'center',
    backgroundColor: '#eff6ff',
    borderRadius: 16,
    paddingVertical: 20,
  },

  scoreLabel: {
    fontSize: 13,
    color: '#64748b',
  },

  score: {
    fontSize: 52,
    fontWeight: 'bold',
    color: '#2563eb',
    marginVertical: 4,
  },

  status: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2563eb',
  },

  progressBackground: {
    height: 10,
    backgroundColor: '#e2e8f0',
    borderRadius: 10,
    marginTop: 20,
    overflow: 'hidden',
  },

  progress: {
    height: '100%',
    backgroundColor: '#2563eb',
    borderRadius: 10,
  },

  progressText: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'right',
    marginTop: 7,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },

  button: {
    flex: 1,
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonDisabled: {
    backgroundColor: '#cbd5e1',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  resetButton: {
    marginTop: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },

  resetText: {
    color: '#64748b',
    fontSize: 14,
    fontWeight: '600',
  },
});