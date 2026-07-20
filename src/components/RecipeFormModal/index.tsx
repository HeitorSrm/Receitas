import { useForm, useFieldArray } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { yupResolver } from "@hookform/resolvers/yup";
import { RecipeFormData, recipeSchema } from "@/lib/formValidationSchemas/recipeSchema";
import { Recipe } from "@/app/lib/data";
import { useEffect } from "react";

interface RecipeFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (recipe: Omit<Recipe, 'id'> | Recipe) => void;
    mode: "create" | "edit";
    recipe?: Recipe;
} 

const DEFAULT_VALUES: RecipeFormData = {
    title: "",
    category: "",
    description: "",
    image: "",
    prepTime: "",
    cookTime: "",
    servings: 1,
    ingredients: [{ value: "" }],
    instructions: [{ value: "" }]
};

export default function RecipeFormModal({ isOpen, onClose, onSave, mode, recipe }: RecipeFormModalProps) {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
        control
    } = useForm<RecipeFormData>({
        resolver: yupResolver(recipeSchema),
        mode: "onSubmit",
        defaultValues: DEFAULT_VALUES
    })

    const {
        fields: ingredientFields,
        append: appendIngredients,
        remove: removeIngredients,
    } = useFieldArray({
        control,
        name: "ingredients"
    })

    const {
        fields: instructionFields,
        append: appendInstructions,
        remove: removeInstructions,
    } = useFieldArray({
        control,
        name: "instructions"
    })

    useEffect(() => {
        if (isOpen) {
            if (mode === "edit" && recipe) {
                reset({
                    ...recipe,
                    ingredients: recipe.ingredients.map(ingredient => ({ value: ingredient })),
                    instructions: recipe.instructions.map(instruction => ({ value: instruction }))
                });
            } else {
                reset(DEFAULT_VALUES);
            }
        }
    }, [isOpen, mode, recipe, reset]);


    const onSubmit = (data: RecipeFormData) => {
        const recipeData = {
            ...data,
            ingredients: data.ingredients.map(ingredient => ingredient.value),
            instructions: data.instructions.map(instruction => instruction.value)
        }

        console.log(recipeData);
        reset();
        onClose();
        onSave(mode === "edit" && recipe ? { ...recipeData, id: recipe.id } : recipeData);
    }

    const inputStyles = "p-2 border border-zinc-200 rounded-md flex-grow w-full";

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white min-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>{mode === "create" ? "Nova Receita" : "Editar Receita"}</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
                    <div className="grid grid-cols-2 gap-2">
                        {/* Título */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="title">Título</label>
                            <input className={inputStyles} type="text" id="title" {...register("title")}/>
                            {errors.title ? <span className="text-red-500 text-sm">{errors.title.message}</span> : null}
                        </div>
                        {/* Categoria */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="category">Categoria</label>
                            <input className={inputStyles} type="text" id="category" {...register("category")}/>
                            {errors.category ? <span className="text-red-500 text-sm">{errors.category.message}</span> : null}
                        </div>
                    </div>

                    {/* Descrição */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="description">Descrição</label>
                        <textarea className={inputStyles} id="description" {...register("description")}/>
                        {errors.description ? <span className="text-red-500 text-sm">{errors.description.message}</span> : null}
                    </div>

                    {/* URL da imagem */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="image">URL da imagem</label>
                        <input className={inputStyles} type="text" id="image" placeholder="/placeholder.svg?height=400&width=600" {...register("image")}/>
                        {errors.image ? <span className="text-red-500 text-sm">{errors.image.message}</span> : null}
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        {/* Tempo de Preparo */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="prepTime">Prep. (min)</label>
                            <input className={inputStyles} type="text" id="prepTime" placeholder="30 minutos" {...register("prepTime")}/>
                            {errors.prepTime ? <span className="text-red-500 text-sm">{errors.prepTime.message}</span> : null}
                        </div>
                        {/* Tempo de Cozimento */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="cookTime">Coz. (min)</label>
                            <input className={inputStyles} type="text" id="cookTime" placeholder="60 minutos" {...register("cookTime")}/>
                            {errors.cookTime ? <span className="text-red-500 text-sm">{errors.cookTime.message}</span> : null}
                        </div>
                        {/* Porções */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="servings">Porções</label>
                            <textarea className={inputStyles} id="servings" defaultValue="1" {...register("servings")}/>
                            {errors.servings ? <span className="text-red-500 text-sm">{errors.servings.message}</span> : null}
                        </div>
                    </div>

                    {/* Lista de ingredientes */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="ingredients">Ingredientes</label>
                        <div className="flex flex-col gap-1">
                            {/* Conteúdo */}
                            {ingredientFields.map((field, index) => (
                            <div key={field.id} className="flex gap-2 w-full">
                                <div className="flex grow">
                                    <textarea id="ingredients" className={inputStyles} placeholder="Digite um ingrediente" {...register(`ingredients.${index}.value`)}/> {errors.ingredients?.[index]?.value?.message && <span className="text-red-500 text-sm">{errors.ingredients[index]?.value?.message}</span>}
                                    { ingredientFields.length > 1 && (<button type="button" className="bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium h-fit" onClick={() => removeIngredients(index)}>Remover</button> )}
                                </div>
                            </div>
                            ))}

                            <button type="button" className="bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium w-fit" onClick={() => appendIngredients({ value: "" })}>Adicionar ingrediente</button>
                        </div>
                    </div>

                    {/* Lista de instruções */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="instructions">Instruções</label>
                        <div className="flex flex-col gap-1">
                            {/* Conteúdo */}
                            {instructionFields.map((field, index) => (
                            <div key={field.id} className="flex gap-2 w-full">
                                <div className="flex grow">
                                    <textarea id="instructions" className={inputStyles} placeholder="Digite uma instrução" {...register(`instructions.${index}.value`)}/> {errors.instructions?.[index]?.value?.message && <span className="text-red-500 text-sm">{errors.instructions[index]?.value?.message}</span>}
                                    { instructionFields.length > 1 && (<button type="button" className="bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium h-fit" onClick={() => removeInstructions(index)}>Remover</button> )}
                                </div>
                            </div>
                            ))} 

                            <button type="button" className="bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium w-fit" onClick={() => appendInstructions({ value: "" })}>Adicionar instrução</button>
                        </div>
                    </div>

                    <div className="flex self-end gap-2">
                        <button type="button" onClick={onClose} className="bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium">Cancelar</button>
                        <button type="submit" className="bg-black text-white rounded-md hover:bg-gray-800 transition-colors px-4 py-2 font-medium">{mode === "create" ? "Criar receita" : "Salvar alterações" }</button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}