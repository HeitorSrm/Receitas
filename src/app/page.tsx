import Link from "next/link";

export default function Home() {
  return (
    <main className="flex grow">
      {/* Seção Hero */}
      <section className=" bg-orange-50 py-12 w-full text-black">
        <div className="flex flex-col gap-6 items-center container mx-auto">
          <h1 className="text-5xl font-bold">Receitas Deliciosas</h1>
          <p className="text-xl">
            Descubra receitas simples e deliciosas para todos os gostos.
          </p>

          <Link
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-3 rounded-lg"
            href="/receitas"
          >
            Ver todas as receitas
          </Link>
        </div>
      </section>
    </main>
  );
}
