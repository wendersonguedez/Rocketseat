# Trabalhando com fontes

Tipografia transmite mensagem

    - negrito 
    - tamanho
    - estilo

--------------------------------------------------------------------

## Basic Font Properties

* font-family
* font-weight
* font-style
* font-size

--------------------------------------------------------------------

## Font Family

* Tipo de fonte de um elemento
* Lista de fontes e ordem de prioridade 
* Inclui *fallback* font

```css
p {
    font-family: "Times New Roman", Times, serif:
}
```

    - serif
    - sans

--------------------------------------------------------------------

## Font Weight

* Peso da fonte

```css
p {
    font-weight: bold;
}
```

--------------------------------------------------------------------

## Font Style

* Estilo da fonte

```css
span {
    font-style: italic;
}
```

--------------------------------------------------------------------

## Font Size

* O tamanho da fonte

```css
p {
    font-size: 18px;
}
```

--------------------------------------------------------------------

## Web Fonts

- fontes do sistema x fontes da web
- como usar fontes para web?
    * @font-face
    * @import
    * link

## Referências

    https://fonts.google.com/
    https://css-tricks.com/snippets/css/using-font-face-in-css/

--------------------------------------------------------------------

## Atribuindo mais estilos às fontes

## Referência
https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals

--------------------------------------------------------------------

## font-variant

* faz variações na apresentação da fonte

```css
p {
    font-variant: small-caps;
}
```
## Referência
https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant

--------------------------------------------------------------------

## font-stretch

* alargamento ou encolhimento da fonte
* aceita palavras-chaves como: expanded, condensed, normal
* aceita porcentagens de 50% a 200%
* essa propriedade não vai funcionar em todas as fontes

```css
p {
    font-stretch: expanded;
}
```
## Referência
https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch

--------------------------------------------------------------------

## letter-spacing

* Define espaçamento entre as letras

```css
p {
    letter-spacing: 4px;
}
```
## Referência
https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing

--------------------------------------------------------------------

## word-spacing

* Define espaçamento entre as palavras

```css
p {
    word-spacing: 4px;
}
```
## Referência
https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing

--------------------------------------------------------------------

## line-height

* Espaço entre linhas
* Pode ser com unidades ou sem unidades de medidas
* Comuns: 1.5 ou 2

```css
p {
    line-height: 1.8;
}
```
## Referência
https://developer.mozilla.org/en-US/docs/Web/CSS/line-height

--------------------------------------------------------------------

## text-transform

* Transformação do texto

```css
p {
    text-transform: uppercase; /* capitalize | lowercase | none */
}
```
## Referência
https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform

--------------------------------------------------------------------

## text-decoration

* Aparencia decorativa de um texto
* line: underline | overline | line-through
    * podemos aplicar mais de um valor
* style: wavy | dotted | doblue | dashed | solid
* color: `<color>` values

```css
p {
    text-decoration: underline; /* shorthand */
    text-decoration: underline solid;
    text-decoration: underline wavy red;
    text-decoration: underline wavy green;
    text-decoration: underline overline line-through red;
}
```
## Referência
https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration

--------------------------------------------------------------------

## text-align

* Alinhamento de um texto

```css
p {
    text-align: center; /* start | end | left | right | center | justify | match-parent */
}
```
## Referência
https://developer.mozilla.org/en-US/docs/Web/CSS/text-align

--------------------------------------------------------------------

## text-shadow

* Sombra aplicada a um texto
* Permite múltiplos valores

```css 
p {
    text-shadow: 1px 1px 1px red,
                2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}
```
# Referência
https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow

--------------------------------------------------------------------

## Shorthand

* font-style, font-variant, font-weight, font-stretch, font-size, line-height e font-family.

```css
p {
    /* -style, -variant, -weight, -stretch, -size, line-height e -family. */
    font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}
```
--------------------------------------------------------------------
