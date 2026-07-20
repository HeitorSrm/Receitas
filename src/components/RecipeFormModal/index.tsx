import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { yupResolver } from "@hookform/resolvers/yup";
import { RecipeFormData, recipeSchema } from "@/lib/formValidationSchemas/recipeSchema";

interface RecipeFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RecipeFormModal({ isOpen, onClose }: RecipeFormModalProps) {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<RecipeFormData>({
        resolver: yupResolver(recipeSchema),
        mode: "onSubmit"
    })

    const onSubmit = (data: RecipeFormData) => {
        console.log(data);
        reset();
        onClose();
    }

    const inputStyles = "p-2 border border-zinc-200 rounded-md";

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Nova Receita</DialogTitle>
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
                        <label htmlFor="imageUrl">URL da imagem</label>
                        <input className={inputStyles} type="text" id="imageUrl" placeholder="/placeholder.svg?height=400&width=600" {...register("imageUrl")}/>
                        {errors.imageUrl ? <span className="text-red-500 text-sm">{errors.imageUrl.message}</span> : null}
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
                            <input className={inputStyles} type="number" id="servings" defaultValue="1" {...register("servings")}/>
                            {errors.servings ? <span className="text-red-500 text-sm">{errors.servings.message}</span> : null}
                        </div>
                    </div>

                    <div className="flex self-end gap-2">
                        <button type="button" onClick={onClose} className="bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium">Cancelar</button>
                        <button type="submit" className="bg-black text-white rounded-md hover:bg-gray-800 transition-colors px-4 py-2 font-medium">Criar receita</button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}