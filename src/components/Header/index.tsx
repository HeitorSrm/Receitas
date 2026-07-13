import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white py-4 border-b border-slate-200 drop-shadow-lg">
      <div className="flex justify-between items-center container mx-auto px-4">
        <Link className="font-bold text-xl hover:scale-105 transition-all" href="/">Receitas deliciosas</Link>

        <nav className="flex gap-6"> 
            <Link className="hover:text-orange-500 transition-all" href="/">
                Inicio
            </Link>

            <Link className="hover:text-orange-500 transition-all" href="/receitas">
               Receitas
            </Link>
        </nav>
      </div>
    </header>
  );
}