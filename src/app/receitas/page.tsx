import RecipeCard from "@/components/RecipeCards";
import {recipes} from "@/app/lib/data";

export default function ReceitasPage() {  
    return (
        <main className="flex grow py-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold">Todas as receitas</h1>

                <div className="grid grid-cols-3 gap-8 mt-8"> 
                    {recipes.map((recipe) => (
                    <RecipeCard />
                ))}
                </div>
            </div>
        </main>
    );
}