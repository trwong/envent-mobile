import  {StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';

export default StyleSheet.create({
  fullPage: {
    height: Dimensions.get('window').height - 70,
  },
  listItem: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: "#fff",
    padding: 20,
  },
  listItemWrapper: {
    padding: 5
  },

  listWrapperPostable: {
    top: 0,
    bottom: 0,
    height: Dimensions.get('window').height - 230,
  },

  eventList:{
    flex:1,
    backgroundColor: 'red'
  },

  imageWrapper: {
    padding: 10,
  },

  itemImage:{
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius:5,
    padding: 100,
    borderWidth:2,
    borderColor: '#eee'
  },

  itemTitle: {
    fontWeight: 'bold',
    textAlign: 'left'
  },

  postContainer: {
    position: 'absolute',
    bottom: -160,
    width: '100%',
    height: 160,
    padding: 10,
    paddingBottom: 100,

    shadowOffset:{  width: -1,  height: -1,  },
    shadowColor: 'rgba(0,0,0,.5)',
    shadowOpacity: .5,
  },
  postTitle:{
    width: '100%',
    height: 35,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: "#ccc"
  },
  postBody:{
    width: '100%',
    height: 55,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,

  },
  postButton: {
    top: 10,
    width: '100%',
    height: 30,
    backgroundColor: '#4abdac',
    borderRadius: 5,
    padding: 5,
  },
  postButtonText:{
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }

});
