import Link from "next/link";
import Register from "../components/register";

const Index = () => (
  <div>
    <Link href="/travel">
      <button>Hello World</button>
    </Link>
    <Register/>
  </div>
);

export default Index;