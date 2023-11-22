export type Location = (typeof locations)[number];
export type Meeting = (typeof locations)[number]["meetings"][number];

export const locations = [
  {
    name: "Charlevoix Alano Club",
    address: "106 Mason St, Charlevoix, MI 49720",
    position: {
      lat: 45.3156822,
      lng: -85.2600135,
    },
    meetings: [
      {
        day: "Sunday",
        time: "10:30 am",
        group: "AA Open",
        type: "Hybrid",
      },
      {
        day: "Sunday",
        time: "7:00 pm",
        group: "AA Secular",
        type: "Zoom",
      },
      {
        day: "Monday",
        time: "8:00 am",
        group: "AA Open",
        type: "Zoom",
      },
      {
        day: "Monday",
        time: "12:00 pm",
        group: "AA Open",
        type: "Hybrid",
      },
      {
        day: "Monday",
        time: "6:30 pm",
        group: "AA Women",
        type: "Hybrid",
      },
      {
        day: "Monday",
        time: "8:00 pm",
        group: "NA Open",
        type: "Hybrid",
      },
      {
        day: "Tuesday",
        time: "8:00 am",
        group: "AA Coed",
        type: "In Person",
      },
      {
        day: "Tuesday",
        time: "8:00 am",
        group: "AA Men",
        type: "Zoom",
      },
      {
        day: "Tuesday",
        time: "12:00 pm",
        group: "AA Open",
        type: "Zoom",
      },
      {
        day: "Tuesday",
        time: "8:00 pm",
        group: "AA Open",
        type: "Zoom",
      },
      {
        day: "Wednesday",
        time: "8:00 am",
        group: "AA Open",
        type: "Zoom",
      },
      {
        day: "Wednesday",
        time: "12:00 pm",
        group: "AA Open",
        type: "Zoom",
      },
      {
        day: "Wednesday",
        time: "2:00 pm",
        group: "OA Literature",
        type: "In Person",
      },
      {
        day: "Wednesday",
        time: "5:30 pm",
        group: "Alanon",
        type: "Zoom",
      },
      {
        day: "Wednesday",
        time: "6:00 pm",
        group: "AA Open",
        type: "In Person",
      },
      {
        day: "Wednesday",
        time: "8:00 pm",
        group: "AA Open",
        type: "Zoom",
      },
      {
        day: "Thursday",
        time: "8:00 am",
        group: "AA Open",
        type: "Zoom",
      },
      {
        day: "Thursday",
        time: "8:00 am",
        group: "AA Men",
        type: "Off-site at American House",
      },
      {
        day: "Thursday",
        time: "12:00 pm",
        group: "AA Open",
        type: "Zoom",
      },
      {
        day: "Thursday",
        time: "6:30 pm",
        group: "OA",
        type: "Hybrid",
      },
      {
        day: "Thursday",
        time: "8:00 pm",
        group: "AA Open",
        type: "Zoom",
      },
      {
        day: "Friday",
        time: "8:00 am",
        group: "AA Open",
        type: "Zoom",
      },
      {
        day: "Friday",
        time: "12:00 noon",
        group: "AA Open",
        type: "Zoom",
      },
      {
        day: "Friday",
        time: "5:30 pm",
        group: "AA Coed - Except 3rd Friday",
        type: "In Person",
      },
      {
        day: "Friday",
        time: "12:00 pm",
        group: "AA Open",
        type: "Zoom",
      },
      {
        day: "Friday",
        time: "7:00 pm",
        group: "AA Open - Except 3rd Friday",
        type: "Zoom",
      },
      {
        day: "Friday",
        time: "6:00 pm food / 7:00 pm speakers",
        group: "3rd Friday - AA Potluck/Speakers",
        type: "Hybrid",
      },
      {
        day: "Saturday",
        time: "8:00 am",
        group: "AA Men",
        type: "Hybrid",
      },
      {
        day: "Saturday",
        time: "9:30 am",
        group: "AA Women",
        type: "Hybrid",
      },
      {
        day: "Saturday",
        time: "8:00 pm",
        group: "AA Open",
        type: "Zoom",
      },
    ],
  },
  {
    name: "United Methodist Church",
    address: "201 4th St, East Jordan, MI 49727",
    position: {
      lat: 45.1551968,
      lng: -85.1258481,
    },
    meetings: [
      {
        day: "Tuesday",
        time: "7:00 pm",
        group: "AA Men's closed meeting",
        type: "In Person",
      },
      {
        day: "Friday",
        time: "7:00 pm",
        group: "AA Closed meeting",
        type: "In Person",
      },
    ],
  },
  {
    name: "First Presbyterian Church",
    address: "207 Williams St. East Jordan, MI 49727.",
    position: {
      lat: 45.1567631,
      lng: -85.1251899,
    },
    meetings: [
      {
        day: "Wednesday",
        time: "12:00 pm",
        group: "AA Open meeting",
        type: "In Person",
      },
      {
        day: "Thursday",
        time: "7:00 pm",
        group: "AA Open meeting",
        type: "In Person",
      },
    ],
  },
];
