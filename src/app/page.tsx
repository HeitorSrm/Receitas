import Link from "next/link";
import { recipes } from "./lib/data";
import RecipeCard from "@/components/RecipeCards";

export default function Home() {
  const featureRecipes = recipes.slice(0, 3);

  return (
    <main className="flex flex-col grow w-full">
      {/* Seção Hero */}
      <section className=" bg-orange-50 py-12 w-full">
        <div className="flex flex-col gap-6 items-center container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold">Receitas Deliciosas</h1>
          <p className="text-base sm:text-xl max-w-md text-zinc-600">
            Descubra receitas simples e deliciosas para todos os gostos.
          </p>

          <Link
            className="bg-orange-500 hover:bg-orange-700 transition-colors text-white font-bold py-2 px-3 rounded-lg"
            href="/receitas"
          >
            Ver todas as receitas
          </Link>
        </div>
      </section>

      {/* Seção de Destaques */}
      <section className="py-12">
        <div className="flex flex-col items-center container mx-auto gap-8 px-4">
          <h2 className="text-2xl font-bold">Receitas em Destaque</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {featureRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          <Link className="flex text-orange-400 hover:text-orange-700 transition-colors" href="/receitas">
            Ver todas as receitas
          </Link>
        </div>
      </section>
    </main>
  );
}
