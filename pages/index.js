import Link from "next/link";

import css from "../styles/style.scss";

const Index = () => (
  <div>
    <Link href="/travel">
      <button>Hello World</button>
    </Link>
  </div>
);

export default Index;