import Image from "next/image";
import Link from "next/link";

interface Recipe {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface RecipeCardProps {
    recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/receitas/${recipe.id}`} className="block h-full">
      <div className="w-full max-w-md mx-auto flex flex-col h-full border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative h-48 w-full">
            <Image 
                src={recipe.image}
                alt={recipe.title}
                fill
            />
        </div>
        <div className="flex flex-col p-4 gap-2 grow">
            <h3 className="text-lg font-bold">
                {recipe.title}
            </h3>
            <p className="text-sm line-clamp-2">
                {recipe.description}
            </p>
        </div>
      </div>
    </Link>
  );
}
