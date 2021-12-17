import React from "react";
import { 
  ImageBackground, 
  TouchableOpacity, 
  Dimensions, 
  View, 
  Text,  
  useWindowDimensions,
} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { makeStyles, useTheme, useContextMenu } from "components";
import Icon from "react-native-vector-icons/FontAwesome";

const Photo = ({
  title,
  contextMenu,
  onpress,
  photoUrl,
  photoId,
  photos,
}) => {
  const styles = useStyles();
  const theme = useTheme();
  const {width, height} = useWindowDimensions();

  const navigation = useNavigation();

  const goToPhotoView = (photoUrl, photoId, photos) => {
    navigation.navigate("PhotoView", {
      photoUrl: photoUrl,
      photoId: photoId,
      photos: photos,
    });
  };

  const contextMenuButton = React.useRef();
  const [openContextMenu] = useContextMenu(
    [
      {
        icon: "trash",
        label: "Deletsar",
        destructive: true,
      },
      {
        icon: "share",
        label: "Compartilhar",
        destructive: true,
      },
    ],
    (option) => {
      if (option === 0 || 1) alert("donde!");
    },
  );
  const handleContextMenu = () => {
    contextMenuButton.current.measure((fx, fy, w, h, px, py) => {
      const pos = {
        x: px + w / 2,
        y: py + h / 2,
      };
      const position = {
        left: pos.x <= width / 2 ? pos.x - 120 : undefined,
        right: pos.x > width / 2 ? width - pos.x - 5 : undefined,
        top: pos.y <= height / 2 ? pos.y : undefined,
        bottom: pos.y > height / 2 ? height - pos.y : undefined,
      };
      openContextMenu(position);
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={contextMenu ? onpress : () => goToPhotoView(photoUrl, photoId, photos)}>
      {contextMenu &&
        <View style={styles.contextMenu}>
          <TouchableOpacity style={styles.button} onPress={handleContextMenu}>
            <View ref={contextMenuButton} onLayout={() => {}}>
              <Icon name="ellipsis-v" size={22} color={theme.palette.icon.main} />
            </View>
          </TouchableOpacity>
        </View>
      }
      <ImageBackground
        style={styles.image}
        source={{uri: photoUrl}}
      >
        {contextMenu &&
          <View style={styles.containerDescription}>
            <Text style={styles.title}>{title}</Text>
          </View>
        }
      </ImageBackground>
    </TouchableOpacity>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    height:Dimensions.get("window").width / 2,
    width:"50%",
    marginBottom:5,
    overflow: "hidden",
  },
  image: {
    height:"100%",
    borderRadius: 12, 
    margin:3,overflow: "hidden",
  },
  contextMenu: {
    position:"absolute", 
    zIndex:1000, 
    right:10,
    top:10
  },
  button: {
    height:35, 
    width:35, 
    borderRadius:30, 
    backgroundColor: theme.palette.primary.contrast,
    opacity:0.9, 
    alignItems:"center", 
    justifyContent:"center"
  },
  containerDescription: {
    position:"absolute", 
    height:60, 
    backgroundColor:theme.palette.secondary.main, 
    width:"100%", 
    bottom:0, 
    opacity:0.7, 
    borderBottomRightRadius:12, 
    borderBottomLeftRadius:12
  },
  title: {
    color: theme.palette.typograph.contrast,
    fontWeight:"500", 
    margin:5,
  },
}));

export default Photo;