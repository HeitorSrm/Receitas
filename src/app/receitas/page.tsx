import RecipeCard from "@/components/RecipeCards";
import {recipes} from "@/app/lib/data";

export default function ReceitasPage() {  
    return (
        <main className="flex grow py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center sm:text-left">Todas as receitas</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"> 
                    {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
                </div>
            </div>
        </main>
    );
}