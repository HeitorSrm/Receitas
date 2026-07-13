import Link from "next/link";
import Image from "next/image";

export default function ReceitasPage() {
  return (
    <main className="flex grow py-8">
      <div className="container mx-auto">
        <Link
          className="flex text-orange-500 hover:text-orange-700 transition-colors"
          href="receitas"
        >
          Voltar para receitas
        </Link>

        <section>
          {/* Imagem da receita */}
          <div className="relative h-96 w-full">
            <Image src="" alt="Título da receita" fill />
          </div>
          {/* Descrição da receita */}
          <div>
            <h1>Título da receita</h1>
            <p>Descrição</p>

            <div>{/* Componentes de informações */}</div>

            {/* Colunas */}
            <div>
                #coluna dos ingredientes
                <div>

                </div>
                #coluna do modo de preparo
                <div>
                    {/* Componente de passo de preparo */}
                </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
