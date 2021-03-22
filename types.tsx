export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumScreen:undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type TabThreeParamList = {
  TabThreeScreen: undefined;
};


export type album = {
    id:string;
    imageUri:string;
    artistsHeadline:String;
    name:string;
    by:string;
    numberOfLikes:string;
}

export type Song={
  id:string;
  imageUri:string;
  title:string;
  artist:string;
}