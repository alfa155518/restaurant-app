//  burgers Images
import img_1 from "../images/menu/burger-1.WebP";
import img_2 from "../images/menu/burger-2.WebP";
import img_3 from "../images/menu/burger-3.WebP";
import img_4 from "../images/menu/burger-4.WebP";
import img_5 from "../images/menu/burger-5.WebP";
import img_6 from "../images/menu/burger-6.WebP";
import img_7 from "../images/menu/burger-7.WebP";
import img_8 from "../images/menu/burger-8.WebP";

// Compo Images
import img_9 from "../images/menu/combo-1.WebP";
import img_10 from "../images/menu/combo-2.WebP";
import img_11 from "../images/menu/combo-3.WebP";
import img_12 from "../images/menu/combo-4.WebP";
import img_13 from "../images/menu/combo-5.WebP";
import img_14 from "../images/menu/combo-6.WebP";

// Drinks Images
import img_15 from "../images/menu/drinks-1.WebP";
import img_16 from "../images/menu/drinks-2.WebP";
import img_17 from "../images/menu/drinks-3.WebP";
import img_18 from "../images/menu/drinks-4.WebP";

// Fries Images
import img_19 from "../images/menu/Fries-1.WebP";
import img_20 from "../images/menu/Fries-2.WebP";
import img_21 from "../images/menu/Fries-3.WebP";

// Pizza Images
import img_22 from "../images/menu/pizza-1.WebP";
import img_23 from "../images/menu/pizza-2.WebP";
import img_24 from "../images/menu/pizza-3.WebP";
import img_25 from "../images/menu/pizza-4.WebP";
import img_26 from "../images/menu/pizza-5.WebP";
import img_27 from "../images/menu/pizza-6.WebP";
import img_28 from "../images/menu/pizza-7.WebP";

// sandwiches Images
import img_29 from "../images/menu/sandwich-1.WebP";
import img_30 from "../images/menu/sandwich-2.WebP";
import img_31 from "../images/menu/sandwich-3.WebP";
import img_32 from "../images/menu/sandwich-4.WebP";
import img_33 from "../images/menu/sandwich-5.WebP";
import img_34 from "../images/menu/sandwich-6.WebP";

// Pasta Images
import img_35 from "../images/menu/pasta-1.WebP";
import img_36 from "../images/menu/pasta-2.WebP";
import img_37 from "../images/menu/pasta-3.WebP";
import img_38 from "../images/menu/pasta-4.WebP";
import img_39 from "../images/menu/pasta-5.WebP";
import img_40 from "../images/menu/pasta-6.WebP";
import img_41 from "../images/menu/pasta-7.WebP";
import img_42 from "../images/menu/pasta-8.WebP";

const products = [
  {
    id: 1,
    name: "Cheese burgers",
    price: "$7.99",
    image: img_1,
    desc: "A classic burgers with a juicy beef patty",
    rating: 5,
    type: "burgers",
  },
  {
    id: 2,
    name: "Chicken burgers",
    price: "$7.99",
    image: img_2,
    desc: "A tasty burgers with a grilled chicken patty...",
    rating: 4,
    type: "burgers",
  },
  {
    id: 3,
    name: "Veggie burgers",
    price: "$10.99",
    image: img_3,
    desc: "A towering burgers with two beef patties and...",
    rating: 3,
    type: "burgers",
  },
  {
    id: 4,
    name: "Double Decker",
    price: "$8.8",
    image: img_4,
    desc: "A towering burgers with two beef patties and...",
    rating: 5,
    type: "burgers",
  },
  {
    id: 5,
    name: "Fish burgers",
    price: "$6.99",
    image: img_5,
    desc: "A unique burgers with a crispy fish patty an...",
    rating: 5,
    type: "burgers",
  },
  {
    id: 6,
    name: "BBQ burgers",
    price: "$8.99",
    image: img_6,
    desc: "A smoky burgers with a BBQ beef patty and ca...",
    rating: 3,
    type: "burgers",
  },
  {
    id: 7,
    name: "Swiss burgers",
    price: "$9.99",
    image: img_7,
    desc: "A gourmet burgers with a beef patty, sautéed...",
    rating: 3,
    type: "burgers",
  },
  {
    id: 8,
    name: "Bacon burgers",
    price: "$20",
    image: img_8,
    desc: "A flavorful burger with a beef patty topped...",
    rating: 5,
    type: "burgers",
  },
  {
    id: 9,
    name: "Margherita ",
    price: "$7.88",
    image: img_22,
    desc: "A classic pizza with fresh tomatoes, basil",
    rating: 5,
    type: "pizza",
  },
  {
    id: 10,
    name: "Hawaiian Pizza",
    price: "$16.60",
    image: img_23,
    desc: "A tropical pizza with ham and pineapple on ...",
    rating: 4,
    type: "pizza",
  },
  {
    id: 11,
    name: "Veggie Pizza",
    price: "$18.80",
    image: img_24,
    desc: "A healthy pizza loaded with fresh veggies a...",
    rating: 3,
    type: "pizza",
  },
  {
    id: 12,
    name: "Buffalo",
    price: "$20",
    image: img_25,
    desc: "A spicy pizza with buffalo chicken and blue...",
    rating: 5,
    type: "pizza",
  },
  {
    id: 13,
    name: "Pepperoni",
    price: "$13.99",
    image: img_26,
    desc: "A delicious pizza topped with premium peppe...",
    rating: 5,
    type: "pizza",
  },
  {
    id: 14,
    name: "Meat Lovers",
    price: "$12.99",
    image: img_27,
    desc: "A hearty pizza loaded with various meats an...",
    rating: 4,
    type: "pizza",
  },
  {
    id: 15,
    name: "Four Cheese ",
    price: "$10.99",
    image: img_28,
    desc: "A cheesy pizza with mozzarella, cheddar, pa...",
    rating: 5,
    type: "pizza",
  },
  {
    id: 16,
    name: "Veggie Sandw...",
    price: "$15.99",
    image: img_29,
    desc: "A healthy sandwiches loaded with fresh veggie...",
    rating: 5,
    type: "sandwiches",
  },
  {
    id: 17,
    name: "Chicken Sand...",
    price: "$5.55",
    image: img_30,
    desc: "A delicious sandwiches filled with grilled ch...",
    rating: 3,
    type: "sandwiches",
  },
  {
    id: 18,
    name: "Turkey Sandw...",
    price: "$8.90",
    image: img_31,
    desc: "A classic sandwiches with turkey, lettuce, to...",
    rating: 4,
    type: "sandwiches",
  },
  {
    id: 19,
    name: "Cheese Sandw...",
    price: "$4.99",
    image: img_32,
    desc: "A tasty sandwiches with ham slices and melted...",
    rating: 3,
    type: "sandwiches",
  },
  {
    id: 20,
    name: "Tuna Salad",
    price: "$10.99",
    image: img_33,
    desc: "A refreshing sandwiches with tuna salad and f...",
    rating: 5,
    type: "sandwiches",
  },
  {
    id: 21,
    name: "Egg Salad ",
    price: "$12.99",
    image: img_34,
    desc: "A creamy sandwiches with egg salad and fresh ...",
    rating: 5,
    type: "sandwiches",
  },
  {
    id: 22,
    name: "Orange Juice",
    price: "$4.50",
    image: img_15,
    desc: "Freshly squeezed orange juice packed with v...",
    rating: 4,
    type: "drinks",
  },
  {
    id: 23,
    name: "Lemonade",
    price: "$3.20",
    image: img_16,
    desc: "Refreshing lemonade made from fresh lemons ...",
    rating: 3,
    type: "drinks",
  },
  {
    id: 24,
    name: "Iced Tea",
    price: "$5.44",
    image: img_17,
    desc: "Cooling iced tea with a hint of lemon and m...",
    rating: 5,
    type: "drinks",
  },
  {
    id: 25,
    name: "Strawberry",
    price: "$2.49",
    image: img_18,
    desc: "Refreshing strawberry smoothie with a hint ",
    rating: 4,
    type: "drinks",
  },
  {
    id: 26,
    name: "Fettuccine",
    price: "$13.90",
    image: img_35,
    desc: "Creamy fettuccine with a rich alfredo sauce",
    rating: 5,
    type: "pasta",
  },
  {
    id: 27,
    name: "Spaghetti",
    price: "$11.99",
    image: img_36,
    desc: "Classic spaghetti with a rich bolognese sau...",
    rating: 5,
    type: "pasta",
  },
  {
    id: 28,
    name: "Spicy Pasta",
    price: "$5.99",
    image: img_37,
    desc: "Hot and spicy pasta with a fiery tomato sau...",
    rating: 4,
    type: "pasta",
  },
  {
    id: 29,
    name: "Lasagna",
    price: "$8.99",
    image: img_38,
    desc: "Hearty lasagna with layers of pasta, cheese...",
    rating: 4,
    type: "pasta",
  },
  {
    id: 30,
    name: "Penne Arrabb...",
    price: "$12.99",
    image: img_39,
    desc: "Spicy penne with a tangy arrabbiata sauce",
    rating: 5,
    type: "pasta",
  },
  {
    id: 31,
    name: "Macaroni ",
    price: "$5.90",
    image: img_40,
    desc: "Creamy macaroni with a cheesy sauce",
    rating: 3,
    type: "pasta",
  },
  {
    id: 32,
    name: "Pasta Primav...",
    price: "$9.88",
    image: img_41,
    desc: "Fresh pasta with mixed vegetables in a ligh...",
    rating: 4,
    type: "pasta",
  },
  {
    id: 33,
    name: "Pasta Carbon...",
    price: "$10.99",
    image: img_42,
    desc: "Rich pasta with bacon in a creamy egg sauce",
    rating: 4,
    type: "pasta",
  },
  {
    id: 34,
    name: "combes 4",
    price: "$18.99",
    image: img_9,
    desc: "A tasty combes of our BBQ burgers, French fri...",
    rating: 5,
    type: "combes",
  },
  {
    id: 35,
    name: "Mega combes",
    price: "$15.99",
    image: img_10,
    desc: "A hearty combes of two chicken burgerss, pizz...",
    rating: 3,
    type: "combes",
  },
  {
    id: 36,
    name: "combes 1",
    price: "$17.80",
    image: img_11,
    desc: "A perfect combes of our best-selling pizza, ...",
    rating: 5,
    type: "combes",
  },
  {
    id: 37,
    name: "combes 2",
    price: "$15.80",
    image: img_12,
    desc: "A delicious combes of our spicy pasta, a san...",
    rating: 4,
    type: "combes",
  },
  {
    id: 38,
    name: "combes 5",
    price: "$12.99",
    image: img_13,
    desc: "A refreshing combes of our veggie pizza, Fre...",
    rating: 4,
    type: "combes",
  },
  {
    id: 39,
    name: "combes 6",
    price: "$20.99",
    image: img_14,
    desc: "A classic combes of two cheese burgerss, pota...",
    rating: 5,
    type: "combes",
  },
  {
    id: 40,
    name: "Potato Wedges",
    price: "$3.49",
    image: img_19,
    desc: "Thick-cut potato wedges seasoned and baked ...",
    rating: 5,
    type: "fries",
  },
  {
    id: 42,
    name: "Spicy Fries",
    price: "$2.49",
    image: img_20,
    desc: "Crispy fries seasoned with a spicy blend of...",
    rating: 4,
    type: "fries",
  },
  {
    id: 43,
    name: "Classic Fries",
    price: "$5.50",
    image: img_21,
    desc: "Crispy golden fries seasoned with salt",
    rating: 5,
    type: "fries",
  },
];

export default products;
