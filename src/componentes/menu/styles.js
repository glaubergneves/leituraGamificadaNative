import { StyleSheet } from "react-native";

export default StyleSheet.create({
  topbar: {
    backgroundColor: '#333',
    padding: 10,
  },
  topbarInner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 1200,
    marginHorizontal: 'auto',
  },
  menuItem: {
    marginHorizontal: 20,
  },
  menuText: {
    color: '#fff',
    textDecorationLine: 'none',
  },
});