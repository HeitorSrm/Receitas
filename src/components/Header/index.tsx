import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">Receitas deliciosas</Link>

      <nav> 
        <Link href="/">
            Inicio
        </Link>

        <Link href="/receitas">
            Receitas
        </Link>
      </nav>
    </header>
  );
}