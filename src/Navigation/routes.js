const routes = {
  mainStack: {
    auth: 'AuthNavigator',
    main: 'MainNavigator',
  },
  navigator: {
    auth: 'Auth',
    tab: 'Tab',
  },
  tab: {
    home: 'HomeScreen',
    chatList: 'ChatListScreen',
  },
  auth: {
    welcome: 'WelcomeScreen',
    login: 'LoginScreen',
    signup: 'SignupScreen',
    forgot: 'ForgotPassword',
    faceUnlock: 'FaceUnlockScreen',
  },
  main: {
    setting: 'SettingScreen',
    myProfile: 'MyProfileScreen',
    editProfile: 'EditProfileScreen',
    createProfile: 'CreateProfileScreen',
    changePassword: 'ChangePasswordScreen',
    contactUs: 'ContactUsScreen',
    socialize: 'SocializeScreen',
    myFriends: 'MyFriendsScreen',
    createJournal: 'CreateJournal',
    saveJournal: 'SaveJournal',
    template: 'TemplateScreen',
    dailyTaskForm: 'DailyTaskForm',
    workOutForm: 'WorkOutForm',
    inviteFriends: 'InviteFriendsScreen',
    friendProfile: 'FriendProfileScreen',
    privacyPolicy: 'PrivacyPolicyScreen',
    termAndConditions: 'TermAndConditionsScreen',
    myFriendsShare: 'MyFriendsShareScreen',
    collaborations: 'CollaborationsScreen',
    journalEntryDetails: 'JournalEntryDetailsScreen',
    createNewJournal: 'CreateNewJournalScreen',
    editJournal: 'EditJournalScreen',
    rafflesDetail: 'rafflesDetailScreen',
    paymentMethod: 'paymentMethodScreen',
    paymentDetails: 'paymentDetailsScreen',
    rafflesPackages: 'RafflesPackagesScreen',
    chatDetails: 'ChatDetailsScreen',
    notification: 'NotificationScreen',
    createRaffles: 'CreateRafflesScreen',
    rafflesLogs: 'RafflesLogsScreen',
  },
  plan: {
    planDetail: 'PaymentDetails',
  },
};

export default routes;
