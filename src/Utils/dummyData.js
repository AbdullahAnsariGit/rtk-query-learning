import {appImages} from '../Assets/Images';
import {appProfiles} from '../Assets/Profile';
import {generateRandomImages} from '../Functions/generateRandomImages';

const profileImagesArray = [
  appProfiles.profile1,
  appProfiles.profile2,
  appProfiles.profile3,
  appProfiles.profile4,
  appProfiles.profile5,
  appProfiles.profile6,
  appProfiles.profile7,
];

const mediaImagesArray = [
  appImages.sceneI,
  appImages.sceneII,
  appImages.sceneIII,
  appImages.sceneIV,
  appImages.sceneV,
];
const data = [
  {
    id: '1',
    profileImage: '',
    username: 'Salina Hales',
    postTime: 'Just now',
    mediaImage: appImages?.media4,
    likes: 200,
    comments: 120,
    description:
      'Hello Gz.. Good morning 😎 Don’t forget to follow and comment on this post...',
  },

  {
    id: '1',
    profileImage: '',
    username: 'Salina Hales',
    postTime: 'Just now',
    mediaImage: appImages?.media4,
    likes: 200,
    comments: 120,
    description:
      'Hello Gz.. Good morning 😎 Don’t forget to follow and comment on this post...',
  },
  {
    id: '1',
    profileImage: '',
    username: 'Salina Hales',
    postTime: 'Just now',
    mediaImage: appImages?.media4,
    likes: 200,
    comments: 120,
    description:
      'Hello Gz.. Good morning 😎 Don’t forget to follow and comment on this post...',
  },
  {
    id: '1',
    profileImage: '',
    username: 'Salina Hales',
    postTime: 'Just now',
    mediaImage: appImages?.media4,
    likes: 200,
    comments: 120,
    description:
      'Hello Gz.. Good morning 😎 Don’t forget to follow and comment on this post...',
  },
  {
    id: '1',
    profileImage: '',
    username: 'Salina Hales',
    postTime: 'Just now',
    mediaImage: appImages?.media4,
    likes: 200,
    comments: 120,
    description:
      'Hello Gz.. Good morning 😎 Don’t forget to follow and comment on this post...',
  },
  {
    id: '1',
    profileImage: '',
    username: 'Salina Hales',
    postTime: 'Just now',
    mediaImage: appImages?.media4,
    likes: 200,
    comments: 120,
    description:
      'Hello Gz.. Good morning 😎 Don’t forget to follow and comment on this post...',
  },
  {
    id: '1',
    profileImage: '',
    username: 'Salina Hales',
    postTime: 'Just now',
    mediaImage: appImages?.media4,
    likes: 200,
    comments: 120,
    description:
      'Hello Gz.. Good morning 😎 Don’t forget to follow and comment on this post...',
  },
  {
    id: '1',
    profileImage: '',
    username: 'Salina Hales',
    postTime: 'Just now',
    mediaImage: appImages?.media4,
    likes: 200,
    comments: 120,
    description:
      'Hello Gz.. Good morning 😎 Don’t forget to follow and comment on this post...',
  },
  {
    id: '1',
    profileImage: '',
    username: 'Salina Hales',
    postTime: 'Just now',
    mediaImage: appImages?.media4,
    likes: 200,
    comments: 120,
    description:
      'Hello Gz.. Good morning 😎 Don’t forget to follow and comment on this post...',
  },
  {
    id: '1',
    profileImage: '',
    username: 'Salina Hales',
    postTime: 'Just now',
    mediaImage: appImages?.media4,
    likes: 200,
    comments: 120,
    description:
      'Hello Gz.. Good morning 😎 Don’t forget to follow and comment on this post...',
  },
  {
    id: '1',
    profileImage: '',
    username: 'Salina Hales',
    postTime: 'Just now',
    mediaImage: appImages?.media4,
    likes: 200,
    comments: 120,
    description:
      'Hello Gz.. Good morning 😎 Don’t forget to follow and comment on this post...',
  },
  // Add other data here...
];
const media = [
  {
    id: '1',
    image: '',
    yearWithMonth: 'July 2023',
    date: '15',
  },
  {
    id: '2',
    image: '',
    yearWithMonth: 'August 2024',
    date: '23',
  },
  {
    id: '3',
    image: '',
    yearWithMonth: 'September 2022',
    date: '10',
  },
  {
    id: '4',
    image: '',
    yearWithMonth: 'October 2025',
    date: '7',
  },
  {
    id: '5',
    image: '',
    yearWithMonth: 'November 2021',
    date: '29',
  },
  {
    id: '6',
    image: '',
    yearWithMonth: 'December 2024',
    date: '18',
  },
  {
    id: '7',
    image: '',
    yearWithMonth: 'January 2023',
    date: '3',
  },
  {
    id: '8',
    image: '',
    yearWithMonth: 'February 2022',
    date: '20',
  },
  {
    id: '9',
    image: '',
    yearWithMonth: 'March 2025',
    date: '11',
  },
  {
    id: '10',
    image: '',
    yearWithMonth: 'April 2024',
    date: '8',
  },
  {
    id: '11',
    image: '',
    yearWithMonth: 'May 2023',
    date: '26',
  },
  {
    id: '12',
    image: '',
    yearWithMonth: 'June 2025',
    date: '30',
  },
];
const chatData = [
  {
    id: '1',
    name: 'Larry Wheels',
    message: 'Hi',
    time: '23 min',
    unreadCount: 2,
    profileImage: appImages?.profile, // Assuming this is the path
  },
  {
    id: '2',
    name: 'John Doe',
    message: 'Hello, how are you?',
    time: '5 min',
    unreadCount: 1,
    profileImage: appImages?.profile,
  },
  {
    id: '3',
    name: 'Jane Smith',
    message: 'See you soon!',
    time: '1 hour',
    unreadCount: 0,
    profileImage: appImages?.profile,
  },
];

const notification = [
  {
    id: '1',
    name: 'Confirm your email address',
    message: 'June 14, 2024 - Friday, 10:03 AM',
    profileImage: appImages?.profile, // Assuming this is the path
  },
  {
    id: '2',
    name: 'Tonight Raffle Draw',
    message: 'November 10, 2024 - Monday, 15:30 PM',
    profileImage: appImages?.profile,
  },
  {
    id: '3',
    name: 'Tonight Raffle Draw',
    message: 'November 12, 2024 - Monday, 15:30 PM',
    profileImage: appImages?.profile,
  },
];
export const updatedNotification = generateRandomImages(
  notification,
  profileImagesArray,
  'profileImage',
);
export const updatedChatData = generateRandomImages(
  chatData,
  profileImagesArray,
  'profileImage',
);
export const updatedRandomImages = generateRandomImages(
  data,
  profileImagesArray,
  'profileImage',
);

export const undatedRandomScenes = generateRandomImages(
  media,
  mediaImagesArray,
  'image',
);
