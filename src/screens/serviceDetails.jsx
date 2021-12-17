import React from "react";
import {
  View, 
  Dimensions, 
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {Modalize} from "react-native-modalize";
import {useActions} from "../redux/actions";
import {useSelector} from "react-redux";
import {useNavigation, useRoute} from "@react-navigation/native";
import { 
  makeStyles, 
  useTheme, 
  Info, 
  Map, 
  TripDetail,
  BackButton,
  ServiceDetailsOption,
  Photos,
  Comment,
  TripProvider,
 } from "components";

 const width = Dimensions.get("window").width;
 const height = Dimensions.get("window").height;

const TripDetails = () => {
  const styles = useStyles({width, height});
  const theme = useTheme();

  const navigation = useNavigation();
  const route = useRoute();
  const { 
    serviceId,
    title,
    subtitle,
    description,
    city,
    state,
    routeMap,
    price,
    warning,
    distance,
    stops,
    duration,
    coverPhoto,
  } = route.params;

  const {TripGetOne} = useActions();


  const [imagesOption, setImagesOption] = React.useState(true);
  const [commetsOption, setCommentsOption] = React.useState(false);
  const [providersOption, setProvidersOption] = React.useState(false);



  React.useEffect(() => {
    TripGetOne(serviceId);
  }, [serviceId]);

  const oneTrip = useSelector((state) => state.oneTrip);
  
  const photos = oneTrip.photos;
  const comments = oneTrip.comments;
  const providers = oneTrip.providers;

  const goToAppointment = (title, price, distance, city, state, coverPhoto, providers) => {
    navigation.navigate("Appointment",{
      title: title,
      price: price,
      distance: distance,
      city: city,
      state: state,
      coverPhoto: coverPhoto,
      providers: providers,
    });
  };


  const handleImagesOption = () => {
    setImagesOption(true);
    setCommentsOption(false);
    setProvidersOption(false);
  };

  const handleCommetsOption = () => {
    setCommentsOption(true);
    setImagesOption(false);
    setProvidersOption(false);
  };

  const handleProvidersOption = () => {
    setProvidersOption(true);
    setImagesOption(false);
    setCommentsOption(false);
  };

  const imagesOptionBackgroundColor = imagesOption === true ? theme.palette.badge.main : theme.palette.primary.contrast;
  const imagesOptionIconColor = imagesOption === true ? theme.palette.icon.secondary : theme.palette.icon.main;

  const commetsOptionBackgroundColor = commetsOption === true ? theme.palette.badge.main : theme.palette.primary.contrast;
  const commetsOptionIconColor = commetsOption === true ? theme.palette.primary.contrast : theme.palette.icon.main;

  const providersOptionBackgroundColor = providersOption === true ? theme.palette.badge.main : theme.palette.primary.contrast;
  const providersOptionIconColor = providersOption === true ? theme.palette.icon.secondary : theme.palette.icon.main;



  const renderImages = ({item}) => {
    return (
      <>
        <Photos photoUrl={item.url} photoId={item.id} photos={photos}/>
      </>
    );
  };

  const renderComments = ({item}) => (
    <Comment 
      message={item.evaluation.commentService} 
      photo={item.user.picture} 
      rating={Number(item.evaluation.evaluationService)} 
    />
  );

  const renderProviders = ({item}) => {
    return (
      <>
        <TripProvider 
          bio={item.bio}
          picture={item.picture}
          firstName={item.firstName}
          lastName={item.lastName}
          userId={item.id}
        />
      </>
    );
  };

  return (
    <View style={styles.container}>
       <StatusBar barStyle="dark-content" backgroundColor={theme.palette.primary.main}/>
      <ImageBackground
        style={styles.imageBackground}
        imageStyle={{ }}
        source={{ uri: coverPhoto }}
      >
        <BackButton 
          navigation={navigation}
          rightSide={true}
          iconName={"arrow-left"}
          iconColor={theme.palette.icon.main}
          background={true}
        />
        <Info
          title={title}
          price={price}
          duration={duration}
          distance={distance}
          rating={4}
          coverPhoto={coverPhoto}
        />
      </ImageBackground>
      <Modalize
        handlePosition="inside"
        alwaysOpen={height / 3 + 10}
        modalStyle={styles.modalize}
        flatListProps={{
          ListHeaderComponent: 
            <>
              <TripDetail 
                title={title}
                description={description}
                city={city}
                state={state}
                distance={distance}
                stops={stops}
                duration={duration}
              />
              <Map />
            </>,
            ListFooterComponent:
              <>
                <ServiceDetailsOption
                  handleImagesOption={handleImagesOption}
                  handleCommetsOption={handleCommetsOption}
                  handleProvidersOption={handleProvidersOption}
                  imagesOptionBackgroundColor={imagesOptionBackgroundColor}
                  commetsOptionBackgroundColor={commetsOptionBackgroundColor}
                  providersOptionBackgroundColor={providersOptionBackgroundColor}
                  imagesOptionIconColor={imagesOptionIconColor}
                  commetsOptionIconColor={commetsOptionIconColor}
                  providersOptionIconColor={providersOptionIconColor}  
                  provider={true}
                />

            { imagesOption && 
              <FlatList
              data={photos}
              renderItem={renderImages}
              keyExtractor={(item) => item.id}
              numColumns={2}
              style={{marginBottom:10}}
            />  
            }

            { commetsOption &&
              <FlatList
                data={comments}
                renderItem={renderComments}
                keyExtractor={item => item.id}
                style={{marginBottom:10}}
              />
            }

            { providersOption &&
              <FlatList
              data={providers}
              renderItem={renderProviders}
              keyExtractor={(item) => item.id}
              style={{marginBottom:10}}
            />
            }
          </>
          
        }}
        
        FooterComponent={
          <TouchableOpacity 
            style={styles.containerStyles} 
            onPress={() => goToAppointment(title, price, distance, city, state, coverPhoto, providers)}>
            <View style={styles.buttonStyles}>
              <Text style={styles.labelStyles}>Agendar</Text>
            </View>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex:1,
    backgroundColor:theme.palette.primary.main,
  },
  imageBackground: {
    height:props.height / 1.5, 
    width:Dimensions.get("window").width,
  },
  modalize: {
    backgroundColor: theme.palette.primary.main,
    shadowColor: "rgba(0,0,0, 0)",
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    paddingBottom:100
  },
  containerStyles: {
    marginVertical: 10,
    justifyContent:"center",
    alignItems: "center",
    top:-10,
    backgroundColor:"transparent"
  },
  labelStyles: {
    color:"#fff",
    fontSize:16,
    fontWeight:"700",
  },
  buttonStyles: {
    width:Dimensions.get("window").width - 20, 
    backgroundColor: "#2F80ED",
    borderRadius: 12,
    paddingVertical:20,
    justifyContent:"center",
    alignItems:"center",
  },
}));

export default TripDetails;