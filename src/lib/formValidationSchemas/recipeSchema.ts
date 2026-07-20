import * as yup from "yup";

export const recipeSchema = yup.object().shape({
    title: yup.string().required("O título é obrigatório"),
    category: yup.string().required("A categoria é obrigatória"),
    description: yup.string().required("A descrição é obrigatória"),
    imageUrl: yup.string().required("A URL da imagem é obrigatória"),
    prepTime: yup.string().required("O tempo de preparo é obrigatório"),
    cookTime: yup.string().required("O tempo de cozimento é obrigatório"),
    servings: yup
        .number()
        .typeError("As porções devem ser um número")
        .positive("O número de porções deve ser positivo")
        .integer("As porções devem ser um número inteiro")
        .min(1, "Deve haver pelo menos 1 porção")
        .required("O número de porções é obrigatório"),
    ingredients: yup
        .array()
        .of(
            yup.object({
                value: yup.string().required("O ingrediente não pode ser vazio")
            })
        )
        .min(1, "Adicione pelo menos 1 ingrediente")
        .required("A lista de ingredientes é obrigatória"),
    instructions: yup
        .array()
        .of(
            yup.object({
                value: yup.string().required("A instrução não pode ser vazia")
            })
        )
        .min(1, "Adicione pelo menos 1 instrução")
        .required("A lista de instruções é obrigatória"),
});

export type RecipeFormData = yup.InferType<typeof recipeSchema>;
