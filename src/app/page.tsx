import Link from "next/link";

export default function Home() {
  return (
    <main className="flex grow"> 
      <div className="container mx-auto">
        {/* Seção Hero */}
        <section>
          <h1>Receitas Deliciosas</h1>
          <p>Descubra receitas simples e deliciosas para todos os gostos.</p>

          <Link href="/receitas">
            Ver todas as receitas
          </Link>
        </section>
      </div>
    </main>
  );
}
