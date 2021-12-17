import React from "react";
import {
  View,
  Text, 
  Image, 
  TouchableOpacity,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  makeStyles, 
  useTheme, 
  ActionsButtons, 
  Rating,
  useContextMenu, 
} from "components";

const Service = ({
  title, 
  goToTripDetails, 
  rating,
  numberOfSaves,
  numberOfLikes,
  numberOfComments,
  description,
  hashtags,
  coverPhoto,
}) => {
  const styles = useStyles();
  const theme = useTheme();
  const {width, height} = useWindowDimensions();

  const [moreAction, setMoreAction] =  React.useState(false);

  const contextMenuButton = React.useRef();
  const [openContextMenu] = useContextMenu(
    [
      {
        icon: "compress",
        label: "Fechar Descrição",
        destructive: true,
      },
    ],
    (option) => {
      if (option === 0) setMoreAction(!moreAction);
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
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Rating rating={rating}/>
        </View>
        <TouchableOpacity style={styles.contextMenu} onPress={handleContextMenu}>
          <View ref={contextMenuButton} onLayout={() => {}}>
              <Icon name="ellipsis-v" size={20} color={theme.palette.icon.main} />
            </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={goToTripDetails}>
        <ActionsButtons 
          numberOfSaves={numberOfSaves}
          numberOfLikes={numberOfLikes}
          numberOfComments={numberOfComments}
        />
        <Image
          style={styles.image}
          source={{uri: coverPhoto}}
        />
      </TouchableOpacity>
      <View style={styles.descriptionContainer}>
        <View style={styles.description}>
          <Text style={styles.textDescription} numberOfLines={moreAction === false ? 1 : null} >{description}</Text>
          { moreAction === false &&
            <TouchableOpacity onPress={() => setMoreAction(!moreAction)}>
              <Text style={{fontWeight:"700", color:theme.palette.typograph.main}}>Mais</Text>
            </TouchableOpacity>
          }
        </View>
        <Text style={styles.tags}>{hashtags.map((hastag) => (`#${hastag} `))}</Text>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    backgroundColor: theme.palette.primary.contrast, 
    marginHorizontal:10,
    marginBottom:10, 
    padding:15, 
    borderRadius:20,
    shadowColor: theme.palette.shadow.main,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,

    elevation: 1,
  },
  header: {
    flexDirection:"row", 
    justifyContent:"space-between", 
    marginHorizontal:5,
    alignItems:"center",
    marginBottom:10
  },
  title: { 
    fontWeight:"700",
    color: theme.palette.typograph.main,
  },
  descriptionContainer: {
    margin:5,
  },
  image: {
    height:Dimensions.get("window").width, 
    borderRadius:20,
  },
  tags: {
    color: theme.palette.hastag.main,
  },
  contextMenu: {
    right:5,
    },
  description: {
    flexDirection:"row",
  },
  textDescription: {
    flex:1, 
    marginRight:5,
    color: theme.palette.typograph.main,
  },
}));

export default Service;