"use client";

import Image from "next/image";
import Link from "next/link";
import { Recipe } from "@/app/lib/data";
import { Edit, Trash2 } from "lucide-react";
import React from "react";

interface RecipeCardProps {
  recipe: Recipe;
  onEdit: () => void;
}

export default function RecipeCard({ recipe, onEdit }: RecipeCardProps) {
const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  onEdit();
}

const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
}

  return (
    <Link href={`/receitas/${recipe.id}`} className="block h-full">
      <div className="w-full max-w-md mx-auto flex flex-col h-full border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative h-48 w-full">
          <Image src={recipe.image} alt={recipe.title} fill className="object-cover"/>
        </div>
        <div className="flex flex-col p-4 gap-6 grow">
          <div className="space-y-2">
            <h3 className="text-lg font-bold hover:text-orange-500">{recipe.title}</h3>
            <p className="text-sm line-clamp-2">{recipe.description}</p>
          </div>

          <div className="flex justify-between w-full items-center">
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1">
              {recipe.category}
            </span>

            <div className="flex gap-2">
              {/* Botão de editar */}
              <button type="button" onClick={(e) => handleEdit(e)} className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
                <Edit size={16}/>
              </button>

              {/* Botão de excluir */}
              <button type="button" onClick={(e) => handleDelete(e)} className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
                <Trash2 size={16}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
