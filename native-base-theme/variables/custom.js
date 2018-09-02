import color from "color";

import { Platform, Dimensions, PixelRatio } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = "material";
const isIphoneX =
  platform === "ios" && deviceHeight === 812 && deviceWidth === 375;

export default {
  // platformStyle: "material",
  platform: "ios",
  androidRipple: true,
  androidRippleColor: "rgba(256, 256, 256, 0.3)",
  androidRippleColorDark: "rgba(0, 0, 0, 0.15)",
  btnUppercaseAndroidText: true,
  badgeBg: "#ED1727",
  badgeColor: "#fff",
  badgePadding: 3,
  btnFontFamily: "System",
  btnDisabledBg: "#b5b5b5",
  buttonPadding: 6,
  btnPrimaryBg: "#6E4F94",
  btnPrimaryColor: "#fff",
  btnInfoBg: "#3F57D3",
  btnInfoColor: "#fff",
  btnSuccessBg: "#5cb85c",
  btnSuccessColor: "#fff",
  btnDangerBg: "#d9534f",
  btnDangerColor: "#fff",
  btnWarningBg: "#f0ad4e",
  btnWarningColor: "#fff",
  btnTextSize: 16.5,
  btnTextSizeLarge: 22.5,
  btnTextSizeSmall: 12,
  borderRadiusLarge: 57,
  iconSizeLarge: 45,
  iconSizeSmall: 18,
  cardDefaultBg: "#fff",
  cardBorderColor: "#ccc",
  CheckboxRadius: 0,
  CheckboxBorderWidth: 2,
  CheckboxPaddingLeft: 2,
  CheckboxPaddingBottom: 0,
  CheckboxIconSize: 18,
  CheckboxFontSize: 21,
  DefaultFontSize: 17,
  checkboxBgColor: "#039BE5",
  checkboxSize: 20,
  checkboxTickColor: "#fff",
  brandPrimary: "#6E4F94",
  brandInfo: "#3F57D3",
  brandSuccess: "#5cb85c",
  brandDanger: "#d9534f",
  brandWarning: "#f0ad4e",
  brandDark: "#000",
  brandLight: "#f4f4f4",
  fontFamily: "System",
  fontSizeBase: 15,
  fontSizeH1: 27,
  fontSizeH2: 24,
  fontSizeH3: 21,
  footerHeight: 55,
  footerDefaultBg: "#F0F0F0",
  footerPaddingBottom: 0,
  tabBarTextColor: "#fff",
  tabBarTextSize: 14,
  activeTab: "#fff",
  sTabBarActiveTextColor: "#007aff",
  tabBarActiveTextColor: "#fff",
  tabActiveBgColor: "#6E4F94",
  toolbarBtnColor: "rgba(28,28,28,1)",
  toolbarDefaultBg: "rgba(245,245,245,1)",
  toolbarHeight: 63,
  toolbarSearchIconSize: 20,
  toolbarInputColor: "#fff",
  searchBarHeight: 30,
  searchBarInputHeight: 30,
  toolbarBtnTextColor: "#fff",
  toolbarDefaultBorder: "rgba(206,206,206,1)",
  iosStatusbar: "dark-content",
  statusBarColor: "rgba(244,244,244,1)",
  darkenHeader: "#F0F0F0",
  iconFamily: "SimpleLineIcons",
  iconFontSize: 24,
  iconHeaderSize: 29,
  inputFontSize: 17,
  inputBorderColor: "#D9D5DC",
  inputSuccessBorderColor: "#2b8339",
  inputErrorBorderColor: "#ed2f2f",
  inputHeightBase: 50,
  inputColor: "#000",
  inputColorPlaceholder: "#575757",
  btnLineHeight: -20,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: 20,
  listBg: "#FFF",
  listBorderColor: "#c9c9c9",
  listDividerBg: "#f4f4f4",
  listBtnUnderlayColor: "#DDD",
  listItemPadding: 10,
  listNoteColor: "#808080",
  listNoteSize: 13,
  defaultProgressColor: "#E4202D",
  inverseProgressColor: "#1A191B",
  radioBtnSize: 25,
  radioSelectedColorAndroid: "#5067FF",
  radioBtnLineHeight: 29,
  segmentBackgroundColor: "#6E4F94",
  segmentActiveBackgroundColor: "#fff",
  segmentTextColor: "#fff",
  segmentActiveTextColor: "#6E4F94",
  segmentBorderColor: "#fff",
  segmentBorderColorMain: "#6E4F94",
  defaultSpinnerColor: "#45D56E",
  inverseSpinnerColor: "#1A191B",
  tabDefaultBg: "#6E4F94",
  topTabBarTextColor: "#b3c7f9",
  topTabBarActiveTextColor: "#fff",
  topTabBarBorderColor: "#fff",
  topTabBarActiveBorderColor: "#fff",
  tabBgColor: "#F8F8F8",
  tabFontSize: 15,
  textColor: "#000",
  inverseTextColor: "#fff",
  noteFontSize: 14,
  defaultTextColor: "#000",
  titleFontfamily: "System",
  titleFontSize: 19,
  subTitleFontSize: 14,
  subtitleColor: "#FFF",
  titleFontColor: "rgba(28,28,28,1)",
  borderRadiusBase: 2,
  borderWidth: 0.5,
  contentPadding: 10,
  dropdownLinkColor: "#414142",
  inputLineHeight: 24,
  deviceWidth: 1441,
  deviceHeight: 804,
  isIphoneX: false,
  inputGroupRoundedBorderRadius: 30
};
