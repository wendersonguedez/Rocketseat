# Page Layouts

    - Tables
    - Floats e clear
    - Frameworks e grid systems
    - Flexbox
    - Grid

## Posicionamentos 

Controlar onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.

- Name: position
- Value: static | relative | absolute | fixed

## Static
    - Por padrão, o valor dos elementos é static, com isso todos os elementos seguem o seu fluxo normal (um abaixo do outro).

## Relative
    - Quando o position é relative os elementos são deslocados do seu posicionamento normal, mas sem afetar o posicionameto de 
    outros elementos da página
    
    - Valores que irão determinar o posicionamento final do elemento:
        - top, right, bottom, left, z-index

## Absolute
    - Quando o position é absolute o elemento é removido do fluxo normal. Com ele, é possivel posicionar qualquer elemento de acordo
    com o elemento pai, casa haja.

## Fixed
    - Quando aplicado o position fixed, o elemento se torna fixo na página, independente do scrolling.

## Element Stacking
    - É o empilhamento de elementos. O z-index é utilizado para determinar a ordem de posição dos elementos. Quanto maior o z-index
    mais "acima" o elemento vai aparecer.