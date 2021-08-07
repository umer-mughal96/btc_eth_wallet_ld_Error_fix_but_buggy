import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {
  G,
  Path,
  Circle,
  Defs,
  Stop,
} from 'react-native-svg';
import { Card } from 'react-native-shadow-cards';

import LinearGradient from 'react-native-linear-gradient';

import { SvgCss } from 'react-native-svg';
import { Yearn_logo } from '../../svgs/Yearn_logo';
import { colors } from '../../config/colors';
import PathSvg from '../../svgs/Path';

const DefiSvg = ({ navigation }) => {
  return (
    <View style={{ position: 'absolute', top: 170, right: 167.5 }}>
      <Svg
        onPress={() => navigation.navigate('defi')}
        xmlns="http://www.w3.org/2000/svg"
        width="55.237"
        height="55.237"
        viewBox="0 0 55.237 55.237">
        <G
          id="Group_206"
          data-name="Group 206"
          transform="translate(-179.382 -776)">
          <Circle
            id="Ellipse_10"
            data-name="Ellipse 10"
            cx="27.618"
            cy="27.618"
            r="27.618"
            transform="translate(179.382 776)"
            fill="#111b4f"
          />
          <G
            id="Group_173"
            data-name="Group 173"
            transform="translate(192.641 791.078)">
            <Path
              id="Path_77"
              data-name="Path 77"
              d="M1724.861,184.982a8.575,8.575,0,0,0,4.679-1.322.4.4,0,0,1,.324-.068.916.916,0,0,0,.641.046.838.838,0,0,0,.538-.421.919.919,0,0,0,.127-.466.94.94,0,0,0-.012-.143.622.622,0,0,1,.21-.4,9.628,9.628,0,0,0,2.01-2.857,9.169,9.169,0,0,0,.809-3.156c.035-.489.1-.539.591-.536.368,0,.737,0,1.105,0,.437,0,.507-.061.5-.492a11.46,11.46,0,0,0-.728-3.984,11.832,11.832,0,0,0-3.573-4.909,10.68,10.68,0,0,0-6.563-2.645c-1.519-.067-3.038-.039-4.558-.056q-2.436,0-4.871,0c-.483,0-.572.093-.572.557q0,3.369,0,6.738c0,.472.1.559.571.548.564-.013,1.128-.018,1.692-.025.518-.007.567-.056.567-.581,0-1.336,0-2.672,0-4.008,0-.271.089-.406.378-.4q.95.013,1.9,0a.313.313,0,0,1,.3.14c.008.014.017.028.026.041l.005.009a.739.739,0,0,0,.475.35.923.923,0,0,0,1.1-.454.425.425,0,0,1,.313-.089c.6.007,1.2.013,1.8,0a7.687,7.687,0,0,1,4.018.918,10.117,10.117,0,0,1,4.286,4.5.624.624,0,0,1,.062.532.924.924,0,1,0,.819-.264.723.723,0,0,1-.274-.339,10.2,10.2,0,0,0-3.118-4.016,8.688,8.688,0,0,0-4.5-1.894c-1.01-.1-2.024-.079-3.036-.08a.486.486,0,0,1-.368-.125.925.925,0,0,0-.6-.463.88.88,0,0,0-.767.16c-.017.013-.033.025-.049.039l-.01.009a.926.926,0,0,0-.166.193.4.4,0,0,1-.377.179c-.76-.008-1.52-.007-2.28-.006-.519,0-.606.086-.6.6,0,1.128.022,2.257.015,3.385-.005.942.034,1.062-.967,1.047-.011,0-.023,0-.034,0-.516.031-.549,0-.55-.52q0-2.678,0-5.356c0-.614.032-.644.643-.645q3.282,0,6.564-.006a18.416,18.416,0,0,1,3.172.111,11.184,11.184,0,0,1,7.19,4.5,9.975,9.975,0,0,1,2.045,5.692c.017.4-.074.5-.463.5q-.656,0-1.313,0c-.259,0-.393.107-.389.394a9.681,9.681,0,0,1-.046,1.207,8.474,8.474,0,0,1-2.632,5.11.353.353,0,0,1-.386.111.921.921,0,0,0-.138-.031l-.021,0-.046,0a.863.863,0,0,0-.9.519.917.917,0,0,0-.093.4.908.908,0,0,0,.01.132.372.372,0,0,1-.208.292,7.87,7.87,0,0,1-3.96,1.168c-2.071.033-4.144-.038-6.216.009-.546.013-.624-.074-.614-.615.028-1.531.024-3.063,0-4.594a.764.764,0,0,1,.233-.725l.008-.006.008-.006a.863.863,0,0,0,.226-1.119.922.922,0,0,0-1.746.382v.005c0,.01,0,.019,0,.029s0,.021,0,.032,0,.038,0,.056v.013a.862.862,0,0,0,.152.415.928.928,0,0,0,.275.265.7.7,0,0,1,.2.571c-.012,2.177-.013,4.353-.024,6.53-.005,1.07.152.953-.952.959-.564,0-.582-.016-.581-.579q0-3.991.01-7.982c0-.092,0-.184,0-.276a.318.318,0,0,0-.355-.335c-.851,0-1.7,0-2.552,0a.9.9,0,0,1-.6-.176.924.924,0,1,0-.89,1.43l.013,0,.029,0a.822.822,0,0,0,.592-.15.927.927,0,0,0,.292-.312.921.921,0,0,1,.7-.189c.541.013,1.082.021,1.622.015.439,0,.536.074.537.506q0,1.918,0,3.836,0,2.194-.012,4.388c0,.249.048.433.353.432q1.053-.005,2.107,0c.253,0,.35-.127.352-.363,0-.4.024-.806.013-1.208-.015-.542.028-.594.57-.594C1720.9,184.992,1722.88,185.012,1724.861,184.982Zm8.835-12.412a.437.437,0,1,1-.437.437A.437.437,0,0,1,1733.7,172.57Zm-12-6.942a.437.437,0,1,1-.437.437A.437.437,0,0,1,1721.694,165.628Zm8.568,16.692a.437.437,0,1,1-.437.437A.437.437,0,0,1,1730.262,182.32Zm-18.4-4.187a.437.437,0,1,1,.437-.437A.437.437,0,0,1,1711.857,178.133Zm6.143.015a.437.437,0,1,1,.437-.437A.437.437,0,0,1,1718,178.148Z"
              transform="translate(-1708.067 -163.576)"
              fill="#fff"
            />
            <Path
              id="Path_78"
              data-name="Path 78"
              d="M1675.959,232.359v0h4.458c.471,0,.489.018.489.485q0,3.093,0,6.186c0,.55.066.618.613.617,1.531,0,3.063,0,4.594-.013a6.52,6.52,0,0,0,3.7-1.1,7.445,7.445,0,0,0,3.416-8.325,7.639,7.639,0,0,0-4.243-5.117,5.235,5.235,0,0,0-2.221-.564c-1.8-.094-3.592-.019-5.388-.032-.426,0-.473.044-.474.477q0,1.918,0,3.836c0,.556-.056.614-.611.611-1.923-.008-3.846-.02-5.769-.024a.836.836,0,0,1-.63-.2.926.926,0,0,0-.289-.3.827.827,0,0,0-.38-.14l-.057-.006h0c-.021,0-.042,0-.064,0a.923.923,0,0,0-.687,1.54l0,0,0,0c.018.019.036.037.055.055l.015.014c.016.014.033.028.05.041l.027.02.039.026.046.028.017.009a.87.87,0,0,0,.928-.039.926.926,0,0,0,.235-.216,1.011,1.011,0,0,1,.674-.183q3.23.007,6.461.012c.493,0,.547-.058.549-.56q.006-1.935.013-3.87c0-.452.089-.546.539-.548,1.14,0,2.281,0,3.421.009a7.561,7.561,0,0,1,2.09.2,6.981,6.981,0,0,1,5.258,7.24,7.056,7.056,0,0,1-6.335,6.479c-1.5.053-2.993.032-4.489.046-.444,0-.5-.053-.5-.5q0-3.11,0-6.22c0-.553-.058-.613-.612-.613q-4.647,0-9.3,0a.778.778,0,0,1-.608-.208.93.93,0,0,0-.218-.242.794.794,0,0,0-.287-.152l-.01,0-.043-.011a.923.923,0,1,0,.537,1.413.818.818,0,0,1,.585-.174C1673.033,232.362,1674.5,232.359,1675.959,232.359Zm-2.837-2.241a.437.437,0,1,1,.437-.437A.437.437,0,0,1,1673.122,230.118Zm-2.9,2.326a.437.437,0,1,1,.437-.437A.437.437,0,0,1,1670.221,232.444Z"
              transform="translate(-1669.297 -220.273)"
              fill="#fff"
            />
            <Path
              id="Path_79"
              data-name="Path 79"
              d="M1847.406,354.327a.923.923,0,0,0-.641,1.588.931.931,0,0,1-.032.731,11.422,11.422,0,0,1-3.512,4.9,10.014,10.014,0,0,1-6.081,2.482c-1.358.076-2.716.022-4.073.054a.759.759,0,0,1-.592-.205.925.925,0,0,0-.367-.327l-.015-.007-.058-.025-.032-.012-.055-.017-.024-.006a.923.923,0,1,0,.544,1.408.9.9,0,0,1,.626-.193c.645,0,1.289,0,1.934,0v.007h1.244a11.358,11.358,0,0,0,9.124-4.451,10.718,10.718,0,0,0,1.936-3.516,1.259,1.259,0,0,1,.386-.622.923.923,0,0,0-.309-1.793Zm-15.7,10.51a.437.437,0,1,1,.437-.437A.437.437,0,0,1,1831.7,364.837Zm15.7-9.178a.437.437,0,1,1,.437-.437A.437.437,0,0,1,1847.409,355.659Z"
              transform="translate(-1819.612 -341.141)"
              fill="#fff"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
};

const UsersSvg = () => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="26.495"
        height="22.261"
        viewBox="0 0 26.495 22.261"
        style={{ alignSelf: 'center' }}>
        <G
          id="Icon_feather-users"
          data-name="Icon feather-users"
          transform="translate(-0.25 -3.121)">
          <Path
            id="Path_37"
            data-name="Path 37"
            d="M18.951,29.044V26.863A4.363,4.363,0,0,0,14.588,22.5H5.863A4.363,4.363,0,0,0,1.5,26.863v2.181"
            transform="translate(0 -4.912)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
          />
          <Path
            id="Path_38"
            data-name="Path 38"
            d="M16.225,8.863A4.363,4.363,0,1,1,11.863,4.5,4.363,4.363,0,0,1,16.225,8.863Z"
            transform="translate(-1.637 0)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
          />
          <Path
            id="Path_39"
            data-name="Path 39"
            d="M33.272,29.1V26.916A4.363,4.363,0,0,0,30,22.7"
            transform="translate(-7.777 -4.965)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
          />
          <Path
            id="Path_40"
            data-name="Path 40"
            d="M24,4.695a4.363,4.363,0,0,1,0,8.453"
            transform="translate(-6.14 -0.053)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
          />
        </G>
      </Svg>
      <Text style={styles.svgText}>Contacts</Text>
    </View>
  );
};

const WalletSvg = () => {
  return (

    <View style={{ left: -150, right: 0, top: -20, bottom: 0 }} >
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="24.316"
        height="21.277"
        viewBox="0 0 24.316 21.277"
        style={{ alignSelf: 'center' }}>
        <Path
          id="Icon_awesome-wallet"
          data-name="Icon awesome-wallet"
          d="M21.9,6.809H3.8a.76.76,0,1,1,0-1.52H22.037a.76.76,0,0,0,.76-.76,2.28,2.28,0,0,0-2.28-2.28H3.04A3.039,3.039,0,0,0,0,5.29v15.2a3.039,3.039,0,0,0,3.04,3.04H21.9a2.351,2.351,0,0,0,2.413-2.28V9.089A2.351,2.351,0,0,0,21.9,6.809Zm-2.147,9.879a1.52,1.52,0,1,1,1.52-1.52A1.52,1.52,0,0,1,19.757,16.688Z"
          transform="translate(0 -2.25)"
          fill="#fff"
        />
      </Svg>
      {/* <Text style={styles.svgText}>Wallet</Text> */}
    </View>
  );
};

const ProfileSvg = () => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="25.33"
        height="25.404"
        viewBox="0 0 25.33 25.404"
        style={{ alignSelf: 'center' }}>
        <G
          id="Group_71"
          data-name="Group 71"
          transform="translate(823.166 -478.335)">
          <Path
            id="Path_44"
            data-name="Path 44"
            d="M-810.531,478.46a12.559,12.559,0,0,1,12.57,12.661,12.492,12.492,0,0,1-12.365,12.492,12.506,12.506,0,0,1-12.715-12.533A12.548,12.548,0,0,1-810.531,478.46Zm10.907,12.6c-.082-.671-.125-1.316-.247-1.946a10.656,10.656,0,0,0-.511-1.9,13.992,13.992,0,0,0-1-1.969,9.91,9.91,0,0,0-3-3.134,11.3,11.3,0,0,0-1.382-.791,11.956,11.956,0,0,0-1.45-.593,6.911,6.911,0,0,0-1.291-.313,16.54,16.54,0,0,0-2.319-.2,9.99,9.99,0,0,0-3.366.646,10.85,10.85,0,0,0-2.046,1,10.906,10.906,0,0,0-2.668,2.36,10.684,10.684,0,0,0-1.859,3.382,11.3,11.3,0,0,0-.512,2.429,10.785,10.785,0,0,0,.382,4.072,10.475,10.475,0,0,0,1,2.336,11.3,11.3,0,0,0,2.275,2.793c.125.113.223.082.3-.063a7.523,7.523,0,0,1,1.786-2.186,6.967,6.967,0,0,1,2.43-1.388,8.729,8.729,0,0,1,1.678-.4,7.734,7.734,0,0,1,3.98.567A8.251,8.251,0,0,1-805.2,497.2a7.442,7.442,0,0,1,1.541,1.99c.072.133.157.117.253.054a1.333,1.333,0,0,0,.144-.137,10.684,10.684,0,0,0,3.345-5.755C-799.752,492.6-799.717,491.812-799.625,491.06Zm-10.9,10.815a8.94,8.94,0,0,0,2.875-.352,10.082,10.082,0,0,0,2.5-1.056.288.288,0,0,0,.077-.272,8.28,8.28,0,0,0-.659-1.023,6.015,6.015,0,0,0-3.542-2.2,5.891,5.891,0,0,0-3.973.527,6.086,6.086,0,0,0-2.662,2.646c-.066.122-.092.247.07.341a10.456,10.456,0,0,0,2.49,1.036A8.9,8.9,0,0,0-810.528,501.876Z"
            transform="translate(0 0)"
            fill="#fff"
            stroke="#fff"
            stroke-width="0.25"
          />
          <Path
            id="Path_45"
            data-name="Path 45"
            d="M-644.616,623.8a4.774,4.774,0,0,1,4.731,4.84,4.777,4.777,0,0,1-4.915,4.781,4.776,4.776,0,0,1-4.7-4.929A4.764,4.764,0,0,1-644.616,623.8Zm-.046,1.722a3.072,3.072,0,0,0-3.116,3.012,3.071,3.071,0,0,0,3.062,3.175,3.09,3.09,0,0,0,3.113-3.077A3.085,3.085,0,0,0-644.662,625.522Z"
            transform="translate(-165.809 -138.864)"
            fill="#fff"
            stroke="#fff"
            stroke-width="0.25"
          />
        </G>
      </Svg>
      <Text style={styles.svgText}>Profile</Text>
    </View>
  );
};

const MenuSvg = () => {
  return (
    <View style={{ left: -150, right: 0, top: -40, bottom: 0, }}>
      <TouchableOpacity onPress={() => alert('asdasdasd')}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="26.31"
          height="21.277"
          viewBox="0 0 26.31 21.277">
          <G
            id="Group_60"
            data-name="Group 60"
            transform="translate(-199.421 -728.203)">
            <Path
              id="Path_30"
              data-name="Path 30"
              d="M235.286,761.3c2.372,0,4.744-.012,7.116,0,1.69.012,2.739.963,2.719,2.415-.019,1.392-1.044,2.281-2.706,2.286q-7.178.021-14.357.006c-1.749,0-2.769-.891-2.779-2.349s1.021-2.345,2.766-2.352c2.413-.01,4.827,0,7.241,0Z"
              transform="translate(-19.391 -24.816)"
              fill="#fff"
            />
            <Path
              id="Path_31"
              data-name="Path 31"
              d="M235.287,728.208c2.413,0,4.827-.01,7.24,0a2.338,2.338,0,1,1,.135,4.658q-7.488.057-14.978-.008a2.27,2.27,0,0,1-2.4-2.448,2.313,2.313,0,0,1,2.517-2.2C230.294,728.2,232.79,728.209,235.287,728.208Z"
              transform="translate(-19.389)"
              fill="#fff"
            />
            <Path
              id="Path_32"
              data-name="Path 32"
              d="M229.713,799.4c-.749,0-1.5.033-2.246-.007a2.26,2.26,0,0,1-2.213-2.107,2.156,2.156,0,0,1,1.986-2.422,41.515,41.515,0,0,1,5.105.013,2.1,2.1,0,0,1,1.907,2.233,2.264,2.264,0,0,1-2.045,2.273c-.827.064-1.663.012-2.495.012Z"
              transform="translate(-19.367 -49.93)"
              fill="#fff"
            />
            <Circle
              id="Ellipse_6"
              data-name="Ellipse 6"
              cx="2.275"
              cy="2.275"
              r="2.275"
              transform="translate(199.421 728.274)"
              fill="#fff"
            />
            <Circle
              id="Ellipse_7"
              data-name="Ellipse 7"
              cx="2.275"
              cy="2.275"
              r="2.275"
              transform="translate(199.421 736.567)"
              fill="#fff"
            />
            <Circle
              id="Ellipse_8"
              data-name="Ellipse 8"
              cx="2.275"
              cy="2.275"
              r="2.275"
              transform="translate(199.421 744.859)"
              fill="#fff"
            />
          </G>
        </Svg>
        {/* <Text style={styles.svgText}>Activity</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const UpSvg = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="34.875"
      height="34.875"
      viewBox="0 0 34.875 34.875"
      style={{ marginBottom: 8 }}>
      <Path
        id="Icon_awesome-arrow-circle-up"
        data-name="Icon awesome-arrow-circle-up"
        d="M.563,18A17.438,17.438,0,1,1,18,35.438,17.434,17.434,0,0,1,.563,18Zm10.1,2.032,5.091-5.309V27.563a1.683,1.683,0,0,0,1.688,1.688h1.125a1.683,1.683,0,0,0,1.688-1.687V14.723l5.091,5.309a1.689,1.689,0,0,0,2.412.028l.766-.773a1.681,1.681,0,0,0,0-2.384L19.2,7.573a1.681,1.681,0,0,0-2.384,0L7.474,16.9a1.681,1.681,0,0,0,0,2.384l.766.773A1.7,1.7,0,0,0,10.659,20.032Z"
        transform="translate(-0.563 -0.563)"
        fill={colors.main}
      />
    </Svg>
  );
};



const EyeSvg = () => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 42.296 28.197"
      color="black"
    >
      <Path
        id="Icon_awesome-eye"
        data-name="Icon awesome-eye"
        d="M42.041,17.527A23.552,23.552,0,0,0,21.148,4.5,23.556,23.556,0,0,0,.256,17.527a2.375,2.375,0,0,0,0,2.143A23.552,23.552,0,0,0,21.148,32.7,23.556,23.556,0,0,0,42.041,19.67,2.375,2.375,0,0,0,42.041,17.527ZM21.148,29.173A10.574,10.574,0,1,1,31.722,18.6,10.574,10.574,0,0,1,21.148,29.173Zm0-17.623a7,7,0,0,0-1.859.278,3.514,3.514,0,0,1-4.913,4.913,7.033,7.033,0,1,0,6.771-5.191Z"
        transform="translate(0 -4.5)"
        fill="black"
      />
    </Svg>
  );
};
export default function WalletHome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.carousel}>

        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flex: 1, flexDirection: "row", width: "40%", justifyContent: "space-evenly", alignItems: "center" }}>
            <Text style={styles.totalBalance}>Total Balance</Text>
            <EyeSvg />
          </View>

          <Text style={styles.blurryText1}>Currency USD</Text>
          <Text style={styles.blurryText2}>$1,529.00</Text>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
            <View>

              <Yearn_logo width={20} height={20} />
            </View>
            <Text style={styles.blurryText3}>YFIC</Text>
          </View>
        </View>
      </View>
      <View style={styles.information}>
        <UpSvg />
        <Text
          style={{ fontSize: 18, marginBottom: 3, fontFamily: 'Poppins-Medium' }}>
          Top up your Account now
        </Text>
        {/* <DefiSvg navigation={navigation} /> */}

        {/* <Text>This is Wallet Home</Text> */}
      </View>
      <ScrollView   >
        <View style={styles.balanceCard}>
          <Card style={{ width: '90%', height: 80, marginLeft: 10, marginRight: 10, marginBottom: 8, flexDirection: 'row', borderRadius: 12 }}>
            <LinearGradient colors={['#0B7F42', '#001A0A']} style={{ width: '100%', height: '100%', padding: 10, borderRadius: 12, flex: 1, flexDirection: 'row' }}>

              <Yearn_logo width={63} height={63} />
              <View style={{ flex: 3, alignContent: 'center', justifyContent: 'center' }}>
                <Text style={styles.cardText}>Yearn Cash</Text>
                <Text style={{ color: 'white', marginLeft: 15 }} >YFIC</Text>

              </View>
              <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>$5.35</Text>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>+8.22%</Text>


              </View>

            </LinearGradient>
          </Card>
          <Card style={{ width: '90%', height: 80, marginLeft: 10, marginRight: 10, marginBottom: 8, flexDirection: 'row', borderRadius: 12 }}>
            <LinearGradient colors={['#0B7F42', '#001A0A']} style={{ width: '100%', height: '100%', padding: 10, borderRadius: 12, flex: 1, flexDirection: 'row' }}>

              <Yearn_logo width={63} height={63} />
              <View style={{ flex: 3, alignContent: 'center', justifyContent: 'center' }}>
                <Text style={styles.cardText}>Yearn Cash</Text>
                <Text style={{ color: 'white', marginLeft: 15 }} >YFIC</Text>

              </View>
              <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>$5.35</Text>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>+8.22%</Text>


              </View>

            </LinearGradient>
          </Card>
          <Card style={{ width: '90%', height: 80, marginLeft: 10, marginRight: 10, marginBottom: 8, flexDirection: 'row', borderRadius: 12 }}>
            <LinearGradient colors={['#0B7F42', '#001A0A']} style={{ width: '100%', height: '100%', padding: 10, borderRadius: 12, flex: 1, flexDirection: 'row' }}>

              <Yearn_logo width={63} height={63} />
              <View style={{ flex: 3, alignContent: 'center', justifyContent: 'center' }}>
                <Text style={styles.cardText}>Yearn Cash</Text>
                <Text style={{ color: 'white', marginLeft: 15 }} >YFIC</Text>

              </View>
              <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>$5.35</Text>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>+8.22%</Text>


              </View>

            </LinearGradient>
          </Card>
          <Card style={{ width: '90%', height: 80, marginLeft: 10, marginRight: 10, marginBottom: 8, flexDirection: 'row', borderRadius: 12 }}>
            <LinearGradient colors={['#0B7F42', '#001A0A']} style={{ width: '100%', height: '100%', padding: 10, borderRadius: 12, flex: 1, flexDirection: 'row' }}>

              <Yearn_logo width={63} height={63} />
              <View style={{ flex: 3, alignContent: 'center', justifyContent: 'center' }}>
                <Text style={styles.cardText}>Yearn Cash</Text>
                <Text style={{ color: 'white', marginLeft: 15 }} >YFIC</Text>

              </View>
              <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>$5.35</Text>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>+8.22%</Text>


              </View>

            </LinearGradient>
          </Card><Card style={{ width: '90%', height: 80, marginLeft: 10, marginRight: 10, marginBottom: 8, flexDirection: 'row', borderRadius: 12 }}>
            <LinearGradient colors={['#0B7F42', '#001A0A']} style={{ width: '100%', height: '100%', padding: 10, borderRadius: 12, flex: 1, flexDirection: 'row' }}>

              <Yearn_logo width={63} height={63} />
              <View style={{ flex: 3, alignContent: 'center', justifyContent: 'center' }}>
                <Text style={styles.cardText}>Yearn Cash</Text>
                <Text style={{ color: 'white', marginLeft: 15 }} >YFIC</Text>

              </View>
              <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>$5.35</Text>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>+8.22%</Text>


              </View>

            </LinearGradient>
          </Card>

          <Card style={{ width: '90%', height: 80, marginLeft: 10, marginRight: 10, marginBottom: 8, flexDirection: 'row', borderRadius: 12 }}>
            <LinearGradient colors={['#0B7F42', '#001A0A']} style={{ width: '100%', height: '100%', padding: 10, borderRadius: 12, flex: 1, flexDirection: 'row' }}>

              <Yearn_logo width={63} height={63} />
              <View style={{ flex: 3, alignContent: 'center', justifyContent: 'center' }}>
                <Text style={styles.cardText}>BitCoin</Text>
                <Text style={{ color: 'white', marginLeft: 15 }} >BTC</Text>

              </View>
              <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>$5.35</Text>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>+8.22%</Text>


              </View>

            </LinearGradient>
          </Card>

          <Card style={{ width: '90%', height: 80, marginLeft: 10, marginRight: 10, marginBottom: 8, flexDirection: 'row', borderRadius: 12 }}>
            <LinearGradient colors={['#0B7F42', '#001A0A']} style={{ width: '100%', height: '100%', padding: 10, borderRadius: 12, flex: 1, flexDirection: 'row' }}>

              <Yearn_logo width={63} height={63} />
              <View style={{ flex: 3, alignContent: 'center', justifyContent: 'center' }}>
                <Text style={styles.cardText}>Ethereum</Text>
                <Text style={{ color: 'white', marginLeft: 15 }} >ETH</Text>

              </View>
              <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>$5.35</Text>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>+8.22%</Text>


              </View>

            </LinearGradient>
          </Card>

          <Card style={{ width: '90%', height: 80, marginLeft: 10, marginRight: 10, marginBottom: 8, flexDirection: 'row', borderRadius: 12 }}>
            <LinearGradient colors={['#0B7F42', '#001A0A']} style={{ width: '100%', height: '100%', padding: 10, borderRadius: 12, flex: 1, flexDirection: 'row' }}>

              <Yearn_logo width={63} height={63} />
              <View style={{ flex: 3, alignContent: 'center', justifyContent: 'center' }}>
                <Text style={styles.cardText}>Litecoin</Text>
                <Text style={{ color: 'white', marginLeft: 15 }} >LTC</Text>

              </View>
              <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>$5.35</Text>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>+8.22%</Text>


              </View>

            </LinearGradient>
          </Card>
        </View>
      </ScrollView>
      <View style={styles.bottomNavigation}>
        <PathSvg />

        <WalletSvg />
        <MenuSvg />
        {/* <Text
            style={{
              width: '100%',
              flex: 2,
              alignSelf:'baseline',
              justifyContent: 'space-around',
              flexDirection: 'row',
              paddingTop: 20,
            }}>
            De-Fi
          </Text> */}
        {/* <UsersSvg /> */}
        {/* <ProfileSvg /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  carousel: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    flexDirection: 'column',
  },
  balanceCard: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  information: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNavigation: {
    flex: 1,
    // backgroundColor: 'red'
    justifyContent: "flex-end"

  },
  image: {
    flex: 2,
    margin: (1, 10, 1, 10),
  },
  svgText: {
    color: 'white',
    fontSize: 10,
  },
  cardText: {
    textAlignVertical: 'center',

    marginLeft: 15,
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',

  },
  blurryText1: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: colors.main
  },
  blurryText2: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    color: colors.main
  },
  blurryText3: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.main
  },
  totalBalance: {
    color: "black",
    fontFamily: "Poppins-Medium",
    // marginRight: 15.8
  }
});
