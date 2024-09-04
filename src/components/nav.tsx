export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <a className="hover:underline" href="#product">
            Product
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#pricing">
            Pricing
          </a>
        </li>
      </ul>
    </nav>
  );
}
