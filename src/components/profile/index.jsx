import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { makeStyles, useTheme, Avatar } from "components";

const Profile = ({
  feedback,
  contact,
  followers,
  rating,
  bigAvatar,
  firstName,
  lastName,
  phone,
  picture,
  followings,
  email,
}) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <>
      { bigAvatar ? 
        <View style={styles.bigAvatarContainer}>
          <View style={styles.bigCicleBackgroundImage}>
            <View style={styles.smallCircleBackgroundImage}>
              <View style={styles.bigAvatarImageContainer}>
                <Image
                  style={styles.bigAvatarImage}
                  source={{url: picture}}
                />
              </View>
            </View>
          </View>
          <View style={styles.bigAvatarInformation}>
            <Text style={styles.bigAvatarTitle}>{firstName} {lastName}</Text>
            <Text style={styles.bigAvatarSubtitle}>{email}</Text>
          </View>
        </View>
        :
        <>
          <View style={styles.content}>
            <Avatar containerStyle={styles.avatarContainerStyle} picture={picture}/>
            <View style={styles.informationContainer}>
              <View style={styles.informationRightSide}>
                <Text style={styles.title}>{firstName} {lastName}</Text>
                <Text style={styles.subtitle}>{email}</Text>
              </View>
              { feedback &&
                <View style={styles.informationLeftSide}>
                  <View style={styles.averageContainer}>
                    <Text style={styles.average}>4.9</Text>
                    <Icon name="star" size={18} color={theme.palette.icon.activeStar} />
                  </View>
                  <Text style={styles.feedbackAmount}>12 Avaliaçoes</Text>
                </View>
              }
              { contact &&
                <View style={styles.contact}>
                  <TouchableOpacity style={styles.contactButton}>
                    <Icon name="phone" size={20} color="green" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.contactButton}>
                    <Icon name="comment" size={20} color={theme.palette.icon.comment} />
                  </TouchableOpacity>
                </View>
              }
            </View>
          </View>
          { rating &&
            <View style={styles.ratingContainer}>
              <View>
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:40, fontWeight:"600"}}>4.9</Text>
                  <Icon name="star" size={18} color={theme.palette.icon.activeStar} />
                </View>
                <Text>32 Reviews</Text>
              </View>
              <View>
                <View style={styles.rating}>
                  <Text style={styles.ratingText}>5</Text>
                  <Icon name="star" size={14} color={theme.palette.icon.activeStar} />
                  <View style={styles.ratingProgress}/>
                </View>
                <View style={styles.rating}>
                  <Text style={styles.ratingText}>4</Text>
                  <Icon name="star" size={14} color={theme.palette.icon.activeStar} />
                  <View style={styles.ratingProgress}/>
                </View>
                <View style={styles.rating}>
                  <Text style={styles.ratingText}>3</Text>
                  <Icon name="star" size={14} color={theme.palette.icon.activeStar} />
                  <View style={styles.ratingProgress}/>
                </View>
                <View style={styles.rating}>
                  <Text style={styles.ratingText}>2</Text>
                  <Icon name="star" size={14} color={theme.palette.icon.activeStar} />
                  <View style={styles.ratingProgress}/>
                </View>
                <View style={styles.rating}>
                  <Text style={styles.ratingText}>1</Text>
                  <Icon name="star" size={14} color={theme.palette.icon.activeStar} />
                  <View style={styles.ratingProgress}/>
                </View>
              </View>

              </View>
              
          
          }
          { followers && 
            <View style={styles.followersContainer}>
              <View style={styles.wrapper}>
                <Text style={styles.followersText}>PASSEIOS</Text>
                <Text style={styles.amount}>12</Text>
              </View>
              <View style={styles.wrapper}>
                <Text style={styles.followersText}>SEGUINDO</Text>
                <Text style={styles.amount}>223</Text>
              </View>
              <View style={styles.wrapper}>
                <Text style={styles.followersText}>SEGUIDORES</Text>
                <Text style={styles.amount}>23</Text>
              </View>
            </View>
          }
        </>
      }
    </>
  );
};

const useStyles = makeStyles((theme, props) => ({
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    padding:10,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  informationContainer: {
    flex: 1,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  informationRightSide: {
    marginLeft: 15,
  },
  title: {
    fontWeight:"700",
    fontSize:20,
    color: theme.palette.typograph.main,
  },
  subtitle: {
    color: theme.palette.typograph.main,
    marginTop:5,
  },
  informationLeftSide: {
    justifyContent:"center",
    marginRight:10,
  },
  averageContainer: {
    flexDirection:"row", 
    alignItems:"center", 
    justifyContent:"center", 
  },
  average: {
    fontSize: 28,
    color: theme.palette.typograph.main,
    fontWeight:"700",
    right:2,
  },
  feedbackAmount: {
    fontSize: 12,
    color: theme.palette.typograph.main,
  },
  avatarContainerStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  followersContainer: {
    flexDirection:"row", 
    justifyContent:"space-between", 
    paddingHorizontal:50, 
    marginTop:20,
  },
  wrapper: { 
    alignItems:"center", 
    justifyContent:"center"
  },
  followersText: {
    color: theme.palette.typograph.main,
  },
  amount: {
    fontSize:24, 
    fontWeight:"600",
    color: theme.palette.typograph.main,
  },
  ratingContainer: {
    flexDirection:"row", 
    justifyContent:"space-evenly", 
    margin:10,
  },
  rating: {
    flexDirection:"row", 
    justifyContent:"center", 
    alignItems:"center", 
    margin:2,
  },
  ratingProgress: {
    height:5,
    width:120, 
    backgroundColor:"#DADADA", 
    borderRadius:10, 
    left:5,
  },
  ratingText: {
    right:5, 
    fontWeight:"500",
  },
  bigAvatarContainer: {
    justifyContent:"center",
    alignItems:"center",
    marginTop:10,
    
  },
  bigCicleBackgroundImage: {
    height:150, 
    width:150, 
    backgroundColor:"rgba(47, 128, 237, 0.2)", 
    borderRadius:75, 
    borderWidth:1, 
    borderColor:"rgba(47, 128, 237, 0.1)",
    alignItems:"center", 
    justifyContent:"center",
  },
  smallCircleBackgroundImage: {
    height:135, 
    width:135, 
    backgroundColor:"rgba(47, 128, 237, 0.2)", 
    borderRadius:75, 
    borderWidth:1, 
    borderColor:"rgba(47, 128, 237, 0.2)",
    alignItems:"center", 
    justifyContent:"center"
  },
  bigAvatarImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
  },
  bigAvatarImage: {
    width: "100%",
    height: "100%",
  },
  bigAvatarInformation: {
    marginTop:10, 
    alignItems:"center",
  },
  bigAvatarTitle: {
    fontSize:18, 
    fontWeight:"600",
    color: theme.palette.typograph.main,
  },
  bigAvatarSubtitle: {
    color: theme.palette.typograph.main,
  },
  contact: {
    flexDirection:'row', 
    paddingHorizontal:5,
  },
  contactButton: {
    margin: 5,
    height:40, 
    width:40, 
    borderRadius: 25, 
    backgroundColor: theme.palette.primary.contrast, 
    justifyContent:"center", 
    alignItems:"center",
    shadowColor: theme.palette.shadow.main,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,

    elevation: 1,
  },
}));

export default Profile;
