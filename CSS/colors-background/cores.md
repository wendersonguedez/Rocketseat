# Cores

Usamos CSS para alterar cores do nosso documento.

## Tipo

* background-color (para caixas)
* color (para textos)
* border-color (para-caixas)
* outros

## Valores

Podemos definir valores por

* palavra-chave (blue, transparent)
* hexadecimal (#990011)
* funções: rgb, rgba, hsl, hsla

```css
element {
    /* keyword values */
    color: currentcolor; /* currentcolor = cor atual */ 

    /* <named-color> values */
    color: red;
    color: orange;
    color: black;
    color: blue;
    color: white;
    color: green;
    color: tan;
    color: rebeccapurple;

    /* <hex-color> values 0-F */
    color: #090; /* RED GREEN BLUE */
    color: #009900;
    color: #090a; /* 4º elemento refere-se ao alfa (transparências) */
    color: #009900aa;

    /* <rgb()> values */
    color: rgb(255, 0, 0, 0.6); /* predominancia do vermelho, com transparência */
    color: rgb(255, 0, 0, 60%); /* predominancia do vermelho, com 60% de transparência */
    color: rgb(34, 12, 64, 0.6); /* 0-255 */
    color: rgba(34, 12, 64, 0.6);

    /* <hsl()> values */
    color: hsl(180, 100%, 50%, 60%); /* Hue - Saturation - Lumiance*/
    color: hsla(180, 100%, 50%, 60%);

    /* Global values */
    color: inherit; /* Herança (herdando a cor do elemento anterior) */
    color: initial; /* Elemento volta para sua cor inicial */ 
    color: unset; /* Não define uma cor para o elemento, pegando a cor do contexto que ele se encontra */
}
```

## Referência

https://developer.mozilla.org/en-US/docs/Web/CSS/color_value