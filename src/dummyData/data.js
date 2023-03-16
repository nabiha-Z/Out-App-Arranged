import userProfile from "../../assets/images/user-1.png";
import Boolean from "../components/Subjects/boolean";
import Choices from "../components/Subjects/choices";

export const messages = [
  {
    _id: 0,
    image: userProfile,
    name: "Peter Jakes",
    last_message: "Eric: Let’s meet tomorrow guys st 5pm",
    time: "11:30 AM",
  },
  {
    _id: 1,
    image: userProfile,
    name: "Olivier",
    last_message: "Eric: Let’s meet tomorrow guys st 5pm",
    time: "Yesterday",
  },
  {
    _id: 2,
    image: userProfile,
    name: "Allan",
    last_message: "Eric: Let’s meet tomorrow guys st 5pm",
    time: "11:30 AM",
  },
  {
    _id: 3,
    image: userProfile,
    name: "Group Name",
    last_message: "Eric: Let’s meet tomorrow guys st 5pm",
    time: "Yesterday",
  },
];

export const events = [
  {
    _id: 0,
    name: "Event Name",
    priority: "Regular",
    description: "Meet & greet",
    slots: 9,
    price: "$19.99",
  },
  {
    _id: 1,
    name: "Event Name",
    priority: "VIP",
    description: "Meet & greet+ drink",
    slots: 9,
    price: "$19.45",
  },
  {
    _id: 2,
    name: "Event Name",
    priority: "VVIP",
    description: "Meet & greet + drink",
    slots: 9,
    price: "$20.45",
  },
  // {
  //   _id: 20,
  //   name: "Event Name",
  //   priority: "VVIP",
  //   description: "Meet & greet + drink",
  // },
  // {
  //   _id: 22,
  //   name: "Event Name",
  //   priority: "VVIP",
  //   description: "Meet & greet + drink",
  // },
  // {
  //   _id: 24,
  //   name: "Event Name",
  //   priority: "VVIP",
  //   description: "Meet & greet + drink",
  //   slots: 9,
  // },
  // {
  //   _id: 25,
  //   name: "Event Name",
  //   priority: "VVIP",
  //   description: "Meet & greet + drink",
  //   slots: 9,
  // },
  // {
  //   _id: 26,
  //   name: "Event Name",
  //   priority: "VVIP",
  //   slots: 9,
  //   description: "Meet & greet + drink",
  // },
];

export const myEvents = [
  {
    _id: 0,
    title: "Worship Night Season 1",
    ticket: "ticket name",
    slots: 9,
  },
  {
    _id: 1,
    title: "After Party",
    ticket: "ticket name",
    slots: 9,
  },
  {
    _id: 2,
    title: "Evnet XYZ",
    ticket: "ticket name",
    slots: 9,
  },
];

export const tabsData = {
  all: {
    data: <Choices />,
  },
  choices: {
    data: <Choices />,
  },
  yesNo: {
    data: <Boolean />,
  },
  tasks: {
    data: "Tasks",
  },
};
