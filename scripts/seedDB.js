const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed =[{
    authors: ["Suzanne Collins"],
    description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    title: "The Hunger Games"
},
{
  authors:["Jeff Hirsch"],
  description: "In the aftermath of a war, America’s landscape has been ravaged and two-thirds of the population left dead from a vicious strain of influenza. Fifteen-year-old Stephen Quinn and his family were among the few that survived and became salvagers, roaming the country in search of material to trade. But when Stephen’s grandfather dies and his father falls into a coma after an accident, Stephen finds his way to Settler’s Landing, a community that seems too good to be true.",
  image:"https://books.google.com/books/content?id=WHGAY9Us310C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE733bCPzkCQ0Ly9As8Uy9rRVSI2mAcEq_M6HLQG7z4v__QtPjYif5M3sIY9wEmgakY-oTHciCHBEMfycYqaTy7HJN2UfNzdmAmjaZin2PT-vnlq31By6BXifLzjz9Ag4ALQMckJP",
  link:"https://books.google.com/books?id=WHGAY9Us310C&dq=title%3AThe%20Hunger%20Games&source=gbs_similarbooks",
  title:"The Eleventh Plague"
}]






db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });