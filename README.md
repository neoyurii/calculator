# 💰 Simulador de Investimentos

Um simulador simples e interativo desenvolvido em **React** e **TypeScript**, que permite calcular o rendimento de investimentos com **juros compostos**, **aportes mensais** e **taxas de rendimento personalizadas**.

---

## 🚀 Funcionalidades

- 🧮 Cálculo automático de:
  - Juros compostos mês a mês
  - Valor total investido
  - Valor total de juros
  - Total de aportes realizados
- 📊 Geração de relatório detalhado com o saldo mês a mês
- ⚙️ Validação de formulários (aceita números com vírgula ou ponto)
- 💡 Interface reativa com atualização instantânea dos resultados
- ♻️ Implementação usando Context API e Hooks personalizados (`useCalculate`)

---

## 🧠 Conceitos aplicados

- React + TypeScript
- Context API para gerenciamento de estado global
- Hooks personalizados
- Validação com Regex
- Boas práticas de componentização
- Funções utilitárias para cálculo de juros compostos
- Separação entre **cálculo**, **estado** e **exibição**

---

## 🧾 Exemplo de uso

1. Informe os valores iniciais:
   - Valor inicial do investimento
   - Aporte mensal
   - Taxa de juros (%)
   - Tempo em meses

2. Clique em **Calcular**

3. Veja o relatório gerado com:
   - Lucros mensais
   - Saldo atualizado
   - Total investido e total em rendimentos

---

## Futuras melhorias

- Exportar relatório em PDF/CSV

- Adicionar gráficos de evolução do saldo

- Suporte para diferentes tipos de juros (simples, compostos, progressivos)

- Dark mode automático