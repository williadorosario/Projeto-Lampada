Projeto: Controle Lâmpada Interativo
Descrição do Projeto
Este projeto é uma aplicação web simples e interativa que simula o controle de uma lâmpada. O usuário pode ligar e desligar a lâmpada clicando em botões na interface. A ideia principal é demonstrar como HTML, CSS e JavaScript podem ser usados juntos para criar uma experiência visual e funcional. O projeto é ideal para iniciantes que desejam aprender mais sobre manipulação do DOM, eventos de clique e integração entre as tecnologias front-end.

Tecnologias Utilizadas
HTML 
O HTML é a base estrutural do projeto. Ele define os elementos visuais que aparecem na página, como a imagem da lâmpada e os botões. No código, usamos tags como <div> para organizar o conteúdo, <img> para exibir a imagem da lâmpada e <button> para criar os botões de controle. Além disso, o atributo onclick nos botões conecta as ações do usuário às funções JavaScript.

CSS 
O CSS é responsável por toda a aparência da aplicação. Ele estiliza os elementos definidos no HTML, tornando a interface mais agradável e intuitiva. No projeto, usamos CSS para centralizar os elementos na tela com flexbox, adicionar efeitos visuais aos botões (como sombras e mudanças de cor ao passar o mouse) e ajustar o tamanho da imagem da lâmpada. O objetivo do CSS aqui é criar uma experiência visual limpa e moderna.

JavaScript
O JavaScript traz interatividade ao projeto. Ele permite que a página reaja às ações do usuário, como clicar nos botões para ligar ou desligar a lâmpada. No código, usamos funções simples (ligarLampada e desligarLampada) para alterar dinamicamente o atributo src da imagem da lâmpada, mudando-a entre as versões acesa e apagada. Essa manipulação do DOM (Document Object Model) é o que dá vida à aplicação.

Funcionalidades
Ligar a Lâmpada
Quando o botão "Ligar" é clicado, a função ligarLampada é executada. Ela altera a imagem da lâmpada para uma versão acesa (lampada-amarela.jpg), simulando que a lâmpada foi ligada.

Desligar a Lâmpada
Quando o botão "Desligar" é clicado, a função desligarLampada é chamada. Ela altera a imagem da lâmpada para uma versão apagada (lampada-branca.jpg), indicando que a lâmpada foi desligada.

Efeitos Visuais nos Botões
O CSS adiciona um efeito de escala ao passar o mouse sobre os botões, além de mudar suas cores dependendo se estão sendo "clicados" ou não. Isso melhora a experiência do usuário ao interagir com a aplicação.

Interface Centralizada
Todos os elementos (imagem da lâmpada e botões) estão centralizados vertical e horizontalmente na tela, criando um layout simples e limpo.

Como Funciona
O HTML organiza os elementos visuais.

O CSS estiliza esses elementos.

O JavaScript adiciona interatividade ao manipular dinamicamente as propriedades dos elementos HTML com base nas ações do usuário.

Por exemplo, quando você clica no botão "Ligar", o evento de clique chama a função JavaScript correspondente, que altera o atributo src da imagem exibida na tela.
