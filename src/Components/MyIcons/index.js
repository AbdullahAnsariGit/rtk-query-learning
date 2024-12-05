import React from 'react';
import {View} from 'react-native';

// Import your SVG icons

import User from '../../Assets/Icons/user.svg';
import Back from '../../Assets/Icons/back.svg';
import Dropdown from '../../Assets/Icons/dropdown.svg';
import EyeCut from '../../Assets/Icons/eye-cut.svg';
import Eye from '../../Assets/Icons/eye.svg';
import Key from '../../Assets/Icons/key.svg';
import Mail from '../../Assets/Icons/mail.svg';
import Logo from '../../Assets/Icons/logo.svg';
import TabBG from '../../Assets/Icons/tab-bg.svg';
import Home from '../../Assets/Icons/home.svg';
import Notification from '../../Assets/Icons/notification.svg';
import Hamburger from '../../Assets/Icons/ham-burger.svg';
import Time from '../../Assets/Icons/time.svg';
import Win from '../../Assets/Icons/win.svg';
import Chat from '../../Assets/Icons/chat.svg';
import Add from '../../Assets/Icons/add.svg';
import Search from '../../Assets/Icons/search.svg';
import DrawerUser from '../../Assets/Icons/drawer-user.svg';
import DrawerCall from '../../Assets/Icons/drawer-call.svg';
import DrawerLock from '../../Assets/Icons/drawer-lock.svg';
import DrawerPolicy from '../../Assets/Icons/drawer-policy.svg';
import DrawerTerm from '../../Assets/Icons/drawer-term.svg';
import DrawerRaffles from '../../Assets/Icons/drawer-raffles.svg';
import DrawerLogout from '../../Assets/Icons/drawer-logout.svg';
import Close from '../../Assets/Icons/close.svg';
import Down from '../../Assets/Icons/down.svg';
import CardBg from '../../Assets/Icons/card-bg.svg';
import Ticket from '../../Assets/Icons/ticket.svg';
import Visa from '../../Assets/Icons/visa.svg';
import Mastercard from '../../Assets/Icons/mastercard.svg';
import Paypal from '../../Assets/Icons/paypal.svg';
import GooglePlay from '../../Assets/Icons/debit.svg';
import Calendar from '../../Assets/Icons/calendar.svg';
import Card from '../../Assets/Icons/card.svg';
import Checked from '../../Assets/Icons/checked.svg';
import Send from '../../Assets/Icons/send.svg';
import Upload from '../../Assets/Icons/upload.svg';
import Gallery from '../../Assets/Icons/gallery.svg';
import Camera from '../../Assets/Icons/camera.svg';
import Closed from '../../Assets/Icons/closed.svg';
import Gift from '../../Assets/Icons/gift.svg';
import Raffles from '../../Assets/Icons/raffles.svg';
import TabbarArrow from '../../Assets/Icons/tabbar-arrow.svg';
import Tick from '../../Assets/Icons/tick.svg';
import Alert from '../../Assets/Icons/alert.svg';

// Add more as needed

// Create a mapping of icon names to the corresponding SVG component
const iconMap = {
  user: User,
  back: Back,
  dropdown: Dropdown,
  eyecut: EyeCut,
  eye: Eye,
  key: Key,
  mail: Mail,
  logo: Logo,
  tabbg: TabBG,
  home: Home,
  notification: Notification,
  hamburger: Hamburger,
  time: Time,
  win: Win,
  chat: Chat,
  add: Add,
  search: Search,
  draweruser: DrawerUser,
  drawercall: DrawerCall,
  drawerlock: DrawerLock,
  drawerpolicy: DrawerPolicy,
  drawerterm: DrawerTerm,
  drawerraffles: DrawerRaffles,
  drawerlogout: DrawerLogout,
  close: Close,
  down: Down,
  cardbg: CardBg,
  ticket: Ticket,
  paypal: Paypal,
  googleplay: GooglePlay,
  visa: Visa,
  mastercard: Mastercard,
  card: Card,
  calendar: Calendar,
  checked: Checked,
  send: Send,
  upload: Upload,
  camera: Camera,
  gallery: Gallery,
  closed: Closed,
  gift: Gift,
  raffles: Raffles,
  tabbararrow: TabbarArrow,
  tick: Tick,
  alert: Alert,

  // Add more icons here
};

const MyIcons = ({name, size = 20, color = '#000', stroke, fill}) => {
  // Find the matching icon from the map
  const IconComponent = iconMap[name];

  // If icon is not found, return null or a default icon
  if (!IconComponent) {
    return null;
  }

  return (
    <View>
      {/* Render the matched icon with dynamic size and color */}
      <IconComponent
        width={size}
        height={size}
        fill={fill ? fill : 'none'}
        stroke={stroke ? stroke : null} // Set the stroke color for the icon lines
        // strokeWidth={1}
      />
    </View>
  );
};

export {iconMap};

export default MyIcons;
