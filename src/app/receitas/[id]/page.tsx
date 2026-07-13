import Link from "next/link";
import Image from "next/image";
import { recipes } from "@/app/lib/data";
import { notFound } from "next/navigation";
import InfoPill from "@/components/infoPill";
import PreparationStep from "@/components/PreparationStep";

interface RecipesPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ReceitasPage({ params }: RecipesPageProps) {
  const { id } = await params;
  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) {
    return notFound();
  }

  return (
    <main className="flex grow py-8">
      <div className="container mx-auto">
        <Link
          className="flex text-orange-500 hover:text-orange-700 transition-colors mb-6"
          href="/receitas"
        >
          Voltar para receitas
        </Link>

        <section className="rounded-lg overflow-hidden shadow-md">
          {/* Imagem da receita */}
          <div className="relative h-96 w-full">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {/* Descrição da receita */}
          <div className="flex flex-col gap-6 p-6">
            <h1 className="text-3xl font-bold">{recipe.title}</h1>
            <p>{recipe.description}</p>

            <div className="flex gap-4">
                <InfoPill title="Preparo" info={recipe.prepTime} />
                <InfoPill title="Cozimento" info={recipe.cookTime} />
                <InfoPill title="Porções" info={recipe.servings} />
                <InfoPill title="Categoria" info={recipe.category} />
            </div>

            {/* Colunas */}
            <div className="grid grid-cols-2">
              <div>
                <h2 className="text-xl font-bold mb-4">Ingredientes</h2>
                <ul className="list-disc list-inside space-y-2">
                  {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient} className="marker:text-orange-500">{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Modo de Preparo</h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <PreparationStep key={instruction} index={index + 1} description={instruction} />
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
