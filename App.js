import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarText}>
            MEMOT
          </Text>
        </View>
      </View>

      <View style={styles.list}>
        <View style={styles.item}>
          <Text style={styles.itemText}>
            Course1
          </Text>
          <Text style={styles.itemDate}>
            2020/04/06
          </Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.itemText}>
            Course1
          </Text>
          <Text style={styles.itemDate}>
            2020/04/06
          </Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.itemText}>
            Course1
          </Text>
          <Text style={styles.itemDate}>
            2020/04/06
          </Text>
        </View>
      </View>

      <View style={styles.btn}>
        <Text style={styles.btnText}>
          +
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  appbarText: {
    color: '#fff',
    fontSize: 18,
  },
  list: {
    width: '100%',
    flex: 1,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  itemText: {
    fontSize: 18,
    marginBottom: 4,
  },
  itemDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
  btn: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#e31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 24,
    lineHeight: 24,
    color: '#fff',
  },
});
