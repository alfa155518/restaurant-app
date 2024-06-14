// Table for Family
import familyTable_1 from "../images/reserve-tables/table-1.WebP";
import familyTable_2 from "../images/reserve-tables/table-6.WebP";
import familyTable_3 from "../images/reserve-tables/table-11.WebP";

// Table fro Lovers
import loversTable_1 from "../images/reserve-tables/table-2.WebP";
import loversTable_2 from "../images/reserve-tables/table-3.WebP";

// Table for Friends
import friendsTable_1 from "../images/reserve-tables/table-4.WebP";
import friendsTable_2 from "../images/reserve-tables/table-5.WebP";

// Table for Romantics
import romanticsTable_1 from "../images/reserve-tables/table-7.WebP";
import romanticsTable_2 from "../images/reserve-tables/table-8.WebP";
import romanticsTable_3 from "../images/reserve-tables/table-9.WebP";
import romanticsTable_4 from "../images/reserve-tables/table-10.WebP";

// Table For associates
import associatesTable_1 from "../images/reserve-tables/table-12.WebP";

import info_1 from "../images/reserve-tables/info-1.WebP";
import info_2 from "../images/reserve-tables/info-2.WebP";
import info_3 from "../images/reserve-tables/info-3.WebP";
import info_4 from "../images/reserve-tables/info-4.WebP";
import info_5 from "../images/reserve-tables/info-5.WebP";
import info_6 from "../images/reserve-tables/info-6.WebP";
import info_7 from "../images/reserve-tables/info-7.WebP";
import info_8 from "../images/reserve-tables/info-8.WebP";
import info_9 from "../images/reserve-tables/info-9.WebP";
import info_10 from "../images/reserve-tables/info-10.WebP";
import info_11 from "../images/reserve-tables/info-11.WebP";
import info_12 from "../images/reserve-tables/info-12.WebP";
import info_13 from "../images/reserve-tables/info-13.WebP";
import info_14 from "../images/reserve-tables/info-14.WebP";
import info_15 from "../images/reserve-tables/info-15.WebP";
import info_16 from "../images/reserve-tables/info-16.WebP";
import info_17 from "../images/reserve-tables/info-17.WebP";
import info_18 from "../images/reserve-tables/info-18.WebP";
import info_19 from "../images/reserve-tables/info-19.WebP";
import info_20 from "../images/reserve-tables/info-20.WebP";

const tables = [
  {
    id: 1,
    name: "family-table",
    image: familyTable_1,
    imageCover: familyTable_1,
    people: 4,
    rating: 5,
    price: "$500",
    status: "not-booked",
    summary:
      "The vibes in this kitchen are on point! Loving the cozy atmosphere and delicious smells wafting from the stove 🔥",
    images: [info_19, info_18, info_16],
  },

  {
    id: 8,
    name: "romantics-table",
    image: romanticsTable_1,
    imageCover: romanticsTable_1,
    people: 2,
    rating: 5,
    price: "$600",
    status: "not-booked",
    summary:
      "Date night at the restaurant with the most romantic table by the window! and some clean air & with my love 🕯️",
    images: [info_14, info_15, info_1],
  },
  {
    id: 3,
    name: "family-table",
    image: familyTable_3,
    imageCover: familyTable_3,
    people: 6,
    rating: 5,
    price: "$500",
    status: "not-booked",
    summary:
      "The vibe at this restaurant is so cozy, I feel right at home at the family table. Can't wait to dig into this delicious meal! 🍴",
    images: [info_19, info_18, info_6],
  },
  {
    id: 4,
    name: "lovers-table",
    image: loversTable_1,
    imageCover: loversTable_1,
    people: 2,
    rating: 5,
    price: "$300",
    status: "not-booked",
    summary:
      "Just found the perfect spot at the restaurant - cozy table, comfy chairs, and the best view by the window!",
    images: [info_5, info_8, info_7],
  },

  {
    id: 9,
    name: "romantics-table",
    image: romanticsTable_2,
    imageCover: romanticsTable_2,
    people: 2,
    rating: 5,
    price: "$620",
    status: "not-booked",
    summary:
      "Nothing like a good meal at the dining table with a stunning chandelier above. Makes every meal feel special ✨",
    images: [info_20, info_15, info_18],
  },
  {
    id: 2,
    name: "family-table",
    image: familyTable_2,
    imageCover: familyTable_2,
    people: 12,
    rating: 4,
    price: "$320",
    status: "not-booked",
    summary:
      "Just snagged the best table in the house! Time to chow down with the fam at our favorite spot in town 🍽️",
    images: [info_13, info_9, info_6],
  },
  {
    id: 10,
    name: "romantics-table",
    image: romanticsTable_3,
    imageCover: romanticsTable_3,
    people: 2,
    rating: 4,
    price: "$320",
    status: "not-booked",
    summary:
      "Just found the perfect spot at the table with the best view! Time for some serious dining room magic 💫🍽️",
    images: [info_14, info_15, info_1],
  },
  {
    id: 6,
    name: "friends-table",
    image: friendsTable_1,
    imageCover: friendsTable_1,
    people: 5,
    rating: 5,
    price: "$350",
    status: "not-booked",
    summary:
      " The ceiling fixture in this room is so chic! 💡 Can't wait to sip coffee and catch up with friends around the dining room table",
    images: [info_10, info_11, info_12],
  },
  {
    id: 5,
    name: "lovers-table",
    image: loversTable_2,
    imageCover: loversTable_2,
    people: 2,
    rating: 5,
    price: "$250",
    status: "not-booked",
    summary:
      "Feeling fancy in this restaurant with the chic furniture and stylish decor. Time to dig into some delicious food!",
    images: [info_20, info_3, info_5],
  },

  {
    id: 7,
    name: "friends-table",
    image: friendsTable_2,
    imageCover: friendsTable_2,
    people: 3,
    rating: 4,
    price: "$200",
    status: "not-booked",
    summary:
      "Loving the cozy vibe in this room - the tables and chairs are perfectly set up for a good time with friends",
    images: [info_17, info_2, info_4],
  },

  {
    id: 11,
    name: "romantics-table",
    image: romanticsTable_4,
    imageCover: romanticsTable_4,
    people: 2,
    rating: 5,
    price: "$400",
    status: "not-booked",
    summary:
      " Feeling like a boss sitting at this fancy dining room table. I could get used to this kind of luxury!  🍽️🥂 ",
    images: [info_20, info_15, info_18],
  },
  {
    id: 12,
    name: "associates-table",
    image: associatesTable_1,
    imageCover: associatesTable_1,
    people: 2,
    rating: 5,
    price: "$700",
    status: "not-booked",
    summary:
      "Loving the cozy vibes in this room with the tables and chairs - perfect for a lazy Sunday afternoon. 🛋️✨",
    images: [info_5, info_3, info_20],
  },
];

export default tables;
