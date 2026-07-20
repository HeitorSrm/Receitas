import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface RecipeFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RecipeFormModal({ isOpen, onClose }: RecipeFormModalProps) {

    const inputStyles = "p-2 border border-zinc-200 rounded-md";

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Nova Receita</DialogTitle>
                </DialogHeader>
                <form className="flex flex-col gap-4 w-full">
                    <div className="grid grid-cols-2 gap-2">
                        {/* Título */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="title">Título</label>
                            <input className={inputStyles} type="text" id="title"/>
                        </div>
                        {/* Categoria */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="category">Categoria</label>
                            <input className={inputStyles} type="text" id="category"/>
                        </div>
                    </div>

                    {/* Descrição */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="description">Descrição</label>
                        <textarea className={inputStyles} id="description"/>
                    </div>

                    {/* URL da imagem */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="imageUrl">URL da imagem</label>
                        <input className={inputStyles} type="text" id="imageUrl" placeholder="/placeholder.svg?height=400&width=600"/>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        {/* Tempo de Preparo */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="prepTime">Prep. (min)</label>
                            <input className={inputStyles} type="text" id="prepTime" placeholder="30 minutos"/>
                        </div>
                        {/* Tempo de Cozimento */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="cookTime">Coz. (min)</label>
                            <input className={inputStyles} type="text" id="cookTime" placeholder="60 minutos"/>
                        </div>
                        {/* Porções */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="servings">Porções</label>
                            <input className={inputStyles} type="number" id="servings" defaultValue="1"/>
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