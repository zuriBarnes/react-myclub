import Link from "next/link";
export default function About() {
  const products = [
    { title: "Leaders", id: 1 },
    { title: "Coaches", id: 2 },
    { title: "Sponsors", id: 3 },
  ];

  const listItems = products.map((product) => (
    <li key={product.id}>
      <Link
        href="#"
        style={{ color: product.title === "Sponsors" ? "red" : "green" }}
      >
        {product.title}
      </Link>
    </li>
  ));

  return (
    <section className="about">
      {/* <h2>About</h2> */}
      <ul>{listItems}</ul>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
        repudiandae nobis molestiae ex tempore magnam nesciunt eos alias dolorem
        dolor delectus, nulla fugit ab animi voluptatibus quae aliquam mollitia
        incidunt suscipit doloremque iure? Maiores iste libero nesciunt natus?
        Aliquid, aliquam?
      </p>
    </section>
  );
}
