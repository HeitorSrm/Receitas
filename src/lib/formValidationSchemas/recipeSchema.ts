import * as yup from "yup";

export const recipeSchema = yup.object().shape({
    title: yup.string().required("O título é obrigatório"),
    category: yup.string().required("A categoria é obrigatória"),
    description: yup.string().required("A descrição é obrigatória"),
    imageUrl: yup.string().required("A URL da imagem é obrigatória"),
    prepTime: yup.number().required("O tempo de preparo é obrigatório"),
    cookTime: yup.number().required("O tempo de cozimento é obrigatório"),
    servings: yup
        .number().min(1, "O número de porções deve ser pelo menos 1").required("O número de porções é obrigatório")
        .typeError("As porções devem ser um número")
        .positive("O número de porções deve ser positivo")
        .integer("As porções devem ser um número inteiro")
        .min(1, "Deve haver pelo menos 1 porção")
        .required("O número de porções é obrigatório"),
});

export type RecipeFormData = yup.InferType<typeof recipeSchema>;
