import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    zIndex: 1,
    top: 40,
    left: 20,
  },
  backButtonBody: {
    width: 35,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 2,
    borderWidth: 2,
  },
  thumb: {
    width: '100%',
    backgroundColor: '#ccc',
  },
  content: {
    paddingVertical: 20,
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  contentText: {
    lineHeight: 24,
    color: '#000',
    fontFamily: 'Mada-Medium',
  },
  headBox: {
    backgroundColor: 'rgba(245, 245, 245, 0.4)',
    paddingHorizontal: 18,
    paddingVertical: 15,
    width: '90%',
    left: '5%',
    marginBottom: 20,
    marginTop: -100,
    borderRadius: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  date: {
    fontFamily: 'Mada-Medium',
    color: '#000',
    zIndex: 1,
  },
  title: {
    fontFamily: 'Mada-Bold',
    color: '#000',
    fontSize: 18,
    marginBottom: 7,
    zIndex: 1,
  },
  author: {
    fontFamily: 'Mada-Medium',
    color: '#000',
    zIndex: 1,
    fontSize: 12,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default styles;
