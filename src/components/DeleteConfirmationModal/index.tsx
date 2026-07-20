import { Recipe } from "@/app/lib/data";
import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";

interface DeleteConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    recipe: Recipe | undefined;
}

export default function DeleteConfirmationModal({isOpen, onClose, onConfirm, recipe} : DeleteConfirmationModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Confirmar Exclusão</DialogTitle>
                    <DialogDescription>Tem certeza que deseja excluir a receita {recipe?.title}? Esta ação não pode ser desfeita.</DialogDescription>
                </DialogHeader>

                <div className="flex justify-end gap-2 mt-4">
                    <Button variant={"outline"} onClick={onClose}>Cancelar</Button>
                    <Button variant={"destructive"} onClick={onConfirm}>Excluir</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}