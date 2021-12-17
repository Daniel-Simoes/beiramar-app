import React from "react"
import { 
  LineChart, 
  YAxis, 
  Grid, 
  XAxis, 
  BarChart,
 } from "react-native-svg-charts"
import { 
  View, 
  Text, 
  Dimensions, 
  TouchableOpacity,
  Modal,
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";
import { makeStyles, useTheme, Picker } from "components";

const dataBarLeft = [10, 9, 13, 0];
const dataBar = [{value: 10}, {value: 9}, {value: 13}, {value: 3}];
const data = [10, 9, 13, 0]
const time = [1, 2, 3, 4]

const Graphic = ({graphType}) => {
  const styles = useStyles();
  const theme = useTheme();

  const [isModalVisiable, setIsModalVisiable] = React.useState(false);
  const [GraphType, setGraphType] = React.useState(graphType);

  const getTime = (index) => {
    var times = time[index];
    return times; 
  };

  const changeGraph = () => {
    setGraphType("bar");
  };

  const changeModalVisibility = (boll) => {
    setIsModalVisiable(boll);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.headerGraphic}>
          <TouchableOpacity  style={styles.monthModal} onPress={() => setIsModalVisiable(true)}>
            <Icon name="chevron-down" size={18} color={theme.palette.icon.main} />
            <Text style={styles.monthText}>Mes</Text>
          </TouchableOpacity >

          <Modal
           animationType="fade"
          transparent={true}
          visible={isModalVisiable}
          onRequestClose={() => changeModalVisibility(false)}
          
            >
            <Picker changeModalVisibility={changeModalVisibility}/>
          </Modal>
        
          <TouchableOpacity onPress={changeGraph} style={styles.changeGraphType}>
            <Icon name="pie-chart" size={18} color={theme.palette.icon.main} />
          </TouchableOpacity>
        </View>
        <View style={styles.tripAmount}>
          <Text style={styles.text}>16 Registro de Passeios </Text>
        </View>
        <>
          <View style={styles.yAxisLineContainer}>
            <YAxis
              data={GraphType === "line" ?  data : dataBarLeft}
              contentInset={{top: 15, bottom: 5}}
              svg={{fill: theme.palette.typograph.main, fontSize: 10}}
              numberOfTicks={5}
              formatLabel={(value) => `${value} `}
            />
            {GraphType === "line" ?
              <LineChart
                data={data}
                style={{flex: 1, marginHorizontal:10}}
                contentInset={{top: 15, bottom: 0}}
                svg={{ stroke: "#2F80ED",strokeWidth: 3, opacity:0.6 }}
              >
                <Grid svg={{stroke: "#e5e5e5"}}/>
              </LineChart> 
              :
              <BarChart
                style={{flex: 1, marginHorizontal:10}}
                data={dataBar}
                gridMin={0}
                svg={{ fill: "#2F80ED" }}
                yAccessor={({ item }) => item.value}
              >
                <Grid svg={{stroke: "#e5e5e5"}}/>
              </BarChart>
            } 
          </View>
          <View style={styles.xAxisLineContainer}>
            <XAxis
              // style={{ marginHorizontal: -10 }}
              data={GraphType === "line" ? data : dataBar}
              formatLabel={(value, index) => `${getTime(index)} Semana`}
              contentInset={{ left: 70, right: 50 }}
              svg={{ fontSize: 10, fill: theme.palette.typograph.main }}
            />
          </View>
        </>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    justifyContent:"center",
    alignItems:"center",
    marginTop:20,
    shadowColor: theme.palette.shadow.main,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,

    elevation: 1,
  },
  wrapper: { 
    width:Dimensions.get("window").width - 20, 
    backgroundColor:theme.palette.primary.contrast,
    borderRadius:8, 
  },
  content: {
    justifyContent:"space-between",
    flexDirection:"row",
    backgroundColor:"#fff",
    borderRadius:8,
    padding: 10,
  },
  contentRightSide: {
    flexDirection:"row", 
    alignItems:"center", 
    borderRightWidth:1,
    minWidth:85, 
    borderRightColor:"#c5c5c5",
  },
  ratingContainer: {
    width: 70,
    height: 70,
    justifyContent:"center",
    alignItems:"center",
  },
  bigStarContainer: {
    justifyContent:"center",
    alignItems:"center",
  },
  textRatingContainer: {
    position:"absolute",
  },
  textRating: {
    fontSize:30,
  },
  contentLeftSide: {
    flex:1, 
    padding:10, 
    flexDirection:"row",
  },
  information: { 
    width:"90%",
  },
  title: {
    fontWeight:"600", 
    fontSize:16,
  },
  subtitle: {
    fontWeight:"500", 
    color:"grey", 
    marginTop:5,
  },
  actionIcon: {
    flexDirection:"row", 
    justifyContent:"center", 
    alignItems:"center", 
    margin:10,
  },
  headerGraphic: {
    flexDirection:"row", 
    justifyContent:"space-between", 
    paddingHorizontal:10, 
    margin:15, 
    top:10, 
  },
  monthModal: {
    height:40, 
    width:100, 
    backgroundColor: theme.palette.primary.main, 
    alignItems:"center", 
    flexDirection:"row", 
    borderRadius:12, 
    justifyContent:"center",
  },
  monthText: {
    left:5,
    color: theme.palette.typograph.main, 
  },
  changeGraphType: {
    height:45, 
    width:45,
    borderRadius:25, 
    backgroundColor: theme.palette.primary.main, 
    alignItems:"center", 
    justifyContent:"center", 
    flexDirection:"row",
  },
  tripAmount: {
    margin:15, 
    left:10,
  },
  text: {
    fontSize:22, 
    fontWeight:"600", 
    color:theme.palette.typograph.main,
  },
  yAxisLineContainer: { 
    height: 200, 
    flexDirection: "row",
    margin:20, 
    top:-10,
  },
  xAxisLineContainer: {
    // height: 20, 
    // marginHorizontal: 40, 
    // top:-10,
    marginBottom:10,
  },
}));

export default Graphic;