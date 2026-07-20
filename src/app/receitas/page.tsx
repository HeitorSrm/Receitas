"use client";

import RecipeCard from "@/components/RecipeCards";
import {recipes} from "@/app/lib/data";
import { Plus } from "lucide-react";
import { useState } from "react";
import RecipeFormModal from "@/components/RecipeFormModal";

export default function ReceitasPage() {  
    const [isRecipeModalOpen, setIsRecipeModalOpen] =  useState(false);

    return (
        <main className="flex grow py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between w-full">
                    <h1 className="text-3xl font-bold text-center sm:text-left">Todas as receitas</h1>

                    <button onClick={() => setIsRecipeModalOpen(true)} className="flex gap-2 px-4 py-2 border text-white bg-black hover:bg-gray-800 rounded-lg items-center transition-colors">
                        <Plus size={16}/>
                        Nova Receita
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"> 
                    {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
                </div>
            </div>
            <RecipeFormModal isOpen={isRecipeModalOpen} onClose={() => setIsRecipeModalOpen(false)} />
        </main>
    );
}