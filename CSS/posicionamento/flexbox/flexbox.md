# Flexbox

    - Nos permite posicionar os elementos dentro da caixa
    - Controle em uma dimensão (horizontal ou vertical)
    - Alinhamento, direcionamento, ordenar e tamanhos
    - Os filhos de um elemento flexbox podem se posicionar em qualquer posição
    e pode ter dimensões flexiveis.
    - Permite que os elementos filhos se organizem de forma dinâmica.

```css
div.parent {
    display: flex;
}
```
- Após aplicar o display: flex para o elemento pai, os seus elementos filhos terão as opções abaixo disponíveis: 

    ## flex-direction

        - Qual a direção do flex: horizontal ou vertical
        - row (default) | column

    ## alinhamento

        - justify-content 
            - alinha os elementos flexbox quando os elementos não utilizam todo o espaço disponível no eixo principal (horizontal)

        - align-items 
            - especifica o alinhamento padrão para itens dentro do elemento flexbox (container)