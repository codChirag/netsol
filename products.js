// products.js

// Generate 100 random example products

const productList = [];

const adjectives = [
  "Awesome", "Sleek", "Handmade", "Licensed", "Refined", "Durable", "Ergonomic",
  "Rustic", "Modern", "Practical", "Gorgeous", "Small", "Heavy", "Lightweight", "Portable"
];

const productTypes = [
  "Notebook", "Pen", "Watch", "Backpack", "Shoes", "Chair", "Table", "Lamp",
  "Headphones", "Speaker", "Camera", "Sunglasses", "Jacket", "Bicycle", "Drone"
];

const descriptions = [
  "High quality product with great features.",
  "Designed for everyday use and built to last.",
  "Limited stock available. Get yours now!",
  "A perfect gift for friends and family.",
  "Innovative design meets exceptional performance.",
  "Comfortable and stylish at the same time.",
  "Used by professionals worldwide.",
  "Best in class and designed with you in mind."
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

for (let i = 1; i <= 120; i++) {
  const name = `${getRandom(adjectives)} ${getRandom(productTypes)}`;
  const description = getRandom(descriptions);
  const price = (Math.random() * 200 + 10).toFixed(2);
  // Using picsum.photos for placeholder images with seeded id for variation
  const image = `https://picsum.photos/seed/product${i}/300/180`;

  productList.push({
    id: i.toString(),
    name,
    description,
    price: Number(price),
    image,
  });
}
