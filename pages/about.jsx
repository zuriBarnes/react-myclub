export default function About() {
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];

  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));

  return (
    <section className="about">
      <h2>About</h2>
      <ul>{listItems}</ul>
    </section>
  );
}
