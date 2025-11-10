import Article from "./Article"

export default function Section() {
    const articles = [
        {
            title: "Introdução aos Investimentos",
            text: "Investir é uma das formas mais eficientes de fazer o dinheiro trabalhar a seu favor. Através dos investimentos, é possível proteger o patrimônio contra a inflação e buscar rendimentos acima da poupança."
        },
        {
            title: "Renda Fixa",
            text: "A renda fixa é uma modalidade em que o investidor já conhece previamente as condições de rentabilidade. Exemplos incluem Tesouro Direto, CDBs, LCIs e LCAs. É ideal para quem busca segurança e previsibilidade."
        },
        {
            title: "Renda Variável",
            text: "Na renda variável, o retorno do investimento não é previsível, pois depende do desempenho de mercado. Ações, ETFs e fundos imobiliários fazem parte dessa categoria, sendo indicados para quem aceita mais risco em troca de maiores retornos."
        },
        {
            title: "Diversificação de Carteira",
            text: "Diversificar significa distribuir seus investimentos em diferentes tipos de ativos, setores e prazos. Isso reduz riscos e aumenta a estabilidade da carteira, protegendo o investidor de oscilações em um único mercado."
        },
        {
            title: "Perfil de Investidor",
            text: "Antes de investir, é importante entender seu perfil: conservador, moderado ou arrojado. Cada perfil define o nível de risco que o investidor está disposto a assumir e ajuda a escolher os produtos mais adequados."
        },
        {
            title: "Importância da Educação Financeira",
            text: "A educação financeira é essencial para tomar decisões conscientes e evitar armadilhas comuns, como endividamento e investimentos sem propósito. Entender o funcionamento do mercado ajuda a alcançar objetivos de forma segura."
        }
    ]

    return (
        <section className="w-100 d-flex flex-column gap-5">
            {articles.map((item, index) => {
                return <Article key={index} title={item.title} text={item.text} />
            })}
        </section>
    )
}