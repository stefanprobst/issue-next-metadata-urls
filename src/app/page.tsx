import Link from "next/link";

export default function IndexPage() {
  return (
    <main>
      <h1>Home page</h1>
      <Link href="/about">Go to about page</Link>
    </main>
  );
}
