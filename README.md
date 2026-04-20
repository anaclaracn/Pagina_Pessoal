# 🖥️ Página Pessoal — Ana Clara Nascimento


## 📌 Sobre o Projeto

Este projeto consiste em uma **Página Pessoal** desenvolvida com HTML, CSS e JavaScript, com o objetivo de aplicar os conceitos estudados na disciplina relacionados à estruturação de páginas, estilização, responsividade, uso de frameworks CSS e organização de código.

A página apresenta informações reais sobre a estudante: formação acadêmica, experiências profissionais, projetos desenvolvidos e informações de contato.

O projeto foi desenvolvido em **duas versões distintas**, cada uma utilizando um framework CSS diferente, permitindo comparar abordagens, filosofias de design e experiências de desenvolvimento.

---

## 🌐 Acesso

Você pode visualizar o projeto finalizado e navegar pelas versões disponíveis através do link abaixo:
👉 [https://anaclaracn.github.io/Pagina_Pessoal/](https://anaclaracn.github.io/Pagina_Pessoal/)

---

## 👩‍💻 Sobre a Estudante

| Campo | Informação |
|---|---|
| **Nome** | Ana Clara Nascimento |
| **Curso** | Bacharelado em Ciência da Computação |
| **Instituição** | Universidade Federal de Lavras (UFLA) |
| **Período** | 7° Período |
| **GitHub** | [github.com/anaclaracn](https://github.com/anaclaracn) |
| **E-mail** | ana.nascimento12@estudante.ufla.br |

---

## 📁 Estrutura do Projeto

```
pagina-pessoal/
│
├── bootstrap-version/         # Versão com Bootstrap 5
│   ├── index.html             # Estrutura HTML da página
│   ├── style.css              # Estilos customizados + variáveis de tema
│   └── script.js              # Toggle de tema, scroll, animações
│
└── bulma-version/             # Versão com Bulma CSS
    ├── index.html             # Estrutura HTML da página
    ├── style.css              # Estilos customizados + variáveis de tema
    └── script.js              # Burger menu, toggle de tema, scroll, animações
```

---

## ✅ Requisitos Atendidos

- [x] Desenvolvida com HTML, CSS e JavaScript puros
- [x] Totalmente funcional no navegador (sem necessidade de servidor)
- [x] Contém informações reais da estudante
- [x] Layout totalmente responsivo (mobile, tablet e desktop)
- [x] Versão com **Bootstrap 5**
- [x] Versão com **Bulma CSS**
- [x] Tema claro e escuro com alternância via botão (toggle) em JavaScript
- [x] Animações de scroll com `IntersectionObserver`
- [x] Scroll suave para âncoras internas
- [x] Preferência de tema salva no `localStorage`

---

## 🎨 Seções da Página

Ambas as versões contêm as seguintes seções:

1. **Hero** — apresentação principal com nome, cargo atual e estatísticas
2. **Sobre** — descrição pessoal, trajetória e stack de tecnologias
3. **Experiências** — cards com histórico profissional (iFood, Levty, Comp Jr)
4. **Projetos** — destaques de projetos desenvolvidos
5. **Formação** — dados acadêmicos (UFLA)
6. **Contato** — e-mail, GitHub e universidade

---

## ⚙️ Funcionalidades JavaScript

### Toggle de Tema (Claro / Escuro)
Implementado com `data-theme` no elemento `<html>` e variáveis CSS (`:root`). A alternância é feita via `setAttribute`, e a preferência é persistida no `localStorage` para ser mantida ao recarregar a página.

```js
function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}
```

### Animações de Scroll
Utilizando a API `IntersectionObserver`, os elementos recebem a classe `.visible` / `.shown` ao entrar na viewport, ativando uma transição CSS de fade + slide.

### Scroll Suave
Todos os links internos (`href="#secao"`) utilizam `scrollIntoView({ behavior: 'smooth' })`, descontando a altura da navbar fixa.

### ScrollSpy (Active Link)
A navbar detecta automaticamente qual seção está visível e destaca o link correspondente ao rolar a página.

---

## 🆚 Bootstrap vs Bulma — Comparativo Completo

### Filosofia e Abordagem

| Aspecto | Bootstrap 5 | Bulma |
|---|---|---|
| **Filosofia** | Framework completo — CSS + JS | Apenas CSS — sem JavaScript próprio |
| **Flexbox/Grid** | Grid de 12 colunas (Flexbox) | Colunas Flexbox nativas |
| **Componentes JS** | Nativos (modal, collapse, navbar) | Requer JavaScript manual |
| **Customização** | Via Sass ou variáveis CSS | Via variáveis CSS / Sass |
| **Documentação** | Extensa e detalhada | Clara e objetiva |
| **Comunidade** | Muito grande, maior do mercado | Menor, mas ativa |

---

### Vantagens do Bootstrap 5

**1. Componentes prontos com comportamento JavaScript**
A navbar colapsável em mobile, modais, dropdowns e acordeões funcionam sem escrever uma linha de JavaScript. No projeto, o menu hambúrguer foi resolvido apenas com `data-bs-toggle="collapse"`:

```html
<button data-bs-toggle="collapse" data-bs-target="#navMenu">...</button>
```

**2. Sistema de Grid extremamente robusto**
O grid de 12 colunas com breakpoints (`col-sm`, `col-md`, `col-lg`) é muito flexível e bem documentado, facilitando layouts responsivos complexos com classes intuitivas.

**3. Ecossistema e comunidade gigante**
Por ser o framework mais usado no mundo, há uma quantidade enorme de temas, templates, tutoriais e Stack Overflow answers disponíveis, acelerando muito o desenvolvimento.

**4. Classes utilitárias poderosas**
Bootstrap oferece centenas de classes utilitárias (`d-flex`, `gap-3`, `ms-auto`, `text-center`, `mt-5`) que eliminam a necessidade de escrever CSS para operações comuns de layout e espaçamento.

**5. Consistência visual automática**
O reset e a normalização de estilos embutidos garantem aparência consistente entre diferentes navegadores sem esforço adicional.

---

### Desvantagens do Bootstrap 5

**1. Peso e verbosidade das classes**
O HTML frequentemente fica carregado de classes longas e difíceis de ler. Um card simples pode exigir `col-md-6 col-lg-4 fade-in mb-4 px-3`, tornando o markup menos semântico.

**2. Identidade visual genérica**
Páginas feitas com Bootstrap sem customização tendem a ter uma aparência muito parecida entre si — o famoso "isso foi feito com Bootstrap" é facilmente reconhecível, exigindo mais trabalho de personalização.

**3. Dependência de JavaScript externo**
Mesmo que seja opcional para o CSS, muitos componentes essenciais exigem o `bootstrap.bundle.min.js`, aumentando o carregamento da página.

**4. Sobrescrita de estilos**
Customizar os estilos padrão do Bootstrap pode ser trabalhoso — é comum ter que usar `!important` ou especificidade maior para sobrescrever os estilos base, especialmente em componentes como navbar e botões.

---

### Vantagens do Bulma

**1. CSS puro — sem JavaScript acoplado**
Bulma é exclusivamente CSS. Isso significa total liberdade para usar qualquer solução JavaScript desejada, sem conflitos entre bibliotecas. O desenvolvedor tem controle total sobre o comportamento.

**2. HTML mais limpo e semântico**
As classes do Bulma são mais descritivas e menos numerosas. Um layout de duas colunas com Bulma fica limpo:

```html
<div class="columns">
  <div class="column is-6">...</div>
  <div class="column is-6">...</div>
</div>
```

**3. Tamanho menor**
Sem o peso do JavaScript e com um CSS mais enxuto, o Bulma resulta em páginas com menor tamanho total de arquivos, o que contribui para melhor performance.

**4. Sistema de colunas mais intuitivo**
O sistema `is-6`, `is-4`, `is-12` do Bulma é mais legível que o `col-md-6` do Bootstrap. A nomenclatura é em inglês simples e direta.

**5. Flexibilidade total de JavaScript**
Como não há JS acoplado, o desenvolvedor pode integrar qualquer biblioteca (Alpine.js, Vue, React) sem conflitos. No projeto, o menu hambúrguer foi implementado manualmente com apenas 5 linhas de código:

```js
burger.addEventListener('click', () => {
  burger.classList.toggle('is-active');
  navMenu.classList.toggle('is-active');
});
```

**6. Aprendizado mais rápido**
A documentação do Bulma é objetiva e o número de classes é menor. Para quem está aprendendo, a curva de entrada é mais suave.

---

### Desvantagens do Bulma

**1. Sem JavaScript nativo**
Componentes interativos como navbar móvel, modais, tooltips e dropdowns precisam ser implementados manualmente pelo desenvolvedor. Isso é trabalho extra que o Bootstrap faz automaticamente.

**2. Comunidade e ecossistema menores**
Há menos templates gratuitos, menos plugins e menos respostas no Stack Overflow comparado ao Bootstrap. Soluções para problemas específicos podem ser mais difíceis de encontrar.

**3. Menos classes utilitárias**
O Bulma tem classes utilitárias, mas em quantidade menor que o Bootstrap, exigindo mais CSS customizado para espaçamentos, alinhamentos e situações específicas de layout.

**4. Conflito com estilos globais**
Algumas classes do Bulma como `.columns`, `.button` e `.title` podem conflitar com estilos existentes ou com outros frameworks se não forem isoladas corretamente.

**5. Grid menos granular**
Embora o sistema de colunas seja intuitivo, os breakpoints do Bulma são mais limitados comparados ao Bootstrap, que oferece `xs`, `sm`, `md`, `lg`, `xl` e `xxl`.

---

### Resumo: Quando usar cada um?

| Situação | Recomendação |
|---|---|
| Projeto rápido com componentes interativos | ✅ Bootstrap |
| App com framework JS (React, Vue) | ✅ Bulma |
| Site com identidade visual forte e customizada | ✅ Bulma |
| Prototipagem ágil | ✅ Bootstrap |
| Performance e leveza são prioridade | ✅ Bulma |
| Equipe com iniciantes em CSS | ✅ Bootstrap |
| Projeto que precisa de modais, tooltips nativos | ✅ Bootstrap |
| Projeto com HTML semântico e limpo | ✅ Bulma |

---

## 🚀 Como Executar

1. Faça o download do ZIP desejado (`pagina-bootstrap.zip` ou `pagina-bulma.zip`)
2. Descompacte a pasta
3. Abra o arquivo `index.html` em qualquer navegador moderno
4. Nenhuma instalação ou servidor é necessário — todos os frameworks são carregados via CDN

> **Obs.:** É necessária conexão com a internet para carregar Bootstrap/Bulma, fontes e ícones via CDN.

---

## 🛠️ Tecnologias Utilizadas

### Versão Bootstrap
- HTML5
- CSS3 (variáveis CSS, Flexbox, animações)
- JavaScript (ES6+)
- [Bootstrap 5.3](https://getbootstrap.com/)
- [Bootstrap Icons 1.11](https://icons.getbootstrap.com/)
- Google Fonts: Playfair Display + DM Sans

### Versão Bulma
- HTML5
- CSS3 (variáveis CSS, Flexbox, animações)
- JavaScript (ES6+)
- [Bulma 1.0.2](https://bulma.io/)
- [Font Awesome 6.5](https://fontawesome.com/)
- Google Fonts: Syne + Outfit

---

## 📝 Conclusão

Ambos os frameworks cumprem bem o papel de facilitar o desenvolvimento de interfaces responsivas, mas com filosofias diferentes. O **Bootstrap** é mais completo e produtivo para projetos que precisam de componentes interativos prontos. Já o **Bulma** entrega um CSS mais limpo e desacoplado, dando mais liberdade ao desenvolvedor, especialmente em projetos onde JavaScript é gerenciado por outro framework.

A experiência de desenvolver as duas versões deixou clara uma lição importante: **não existe framework melhor ou pior de forma absoluta — existe o mais adequado para cada contexto**.

---

*Desenvolvido por Ana Clara Nascimento — Ciência da Computação UFLA · 2025*
