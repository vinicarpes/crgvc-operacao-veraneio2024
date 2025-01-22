# gerenciar-imagens-postos-gvc

Na temporada da operação estação verão de 2025 do estado de Santa Catarina, o Corpo de Bombeiros Militar adotou um novo procedimento a ser realizado todos os dias, a fim de realizar uma pesquisa para avaliar melhor questões logísticas como a distribuição de guarda-vidas e postos ativos por praias de maior ou menor risco. A medida adotada consiste em, cada posto ativo na temporada, deve tirar 3 fotos em 3 horários por dia da movimentação na praia (banhistas e do mar).

Porém, alguns guarda-vidas estão tendo dificuldades de realizar o upload dessas imagens no Google Drive, principalmente pela dificuldade de acessar as pastas via celular durante o dia de serviço. Em razão disso, muitas dessas imagens não estão sendo armazenadas e, às vezes, armazenadas no local incorreto.

Diante disso, esse Script foi criado com o intuito de automatizar o envio das imagens diárias por meio de um formulário eletrônico simples que pode ser respondido em menos de 3 minutos. De forma automatizada, as imagens são enviadas para suas respectivas pasta com base nas respostas dadas, considerando data, localidade e horário. Dessa forma, o esforço empenhado para esse procedimento diminui consideravelmente, levando em conta que são feitas 300 imagens por dia apenas para as praias do sul de Florianópolis.

Ex: Foto do posto central de Nuafragados do dia 22/01/2025
    Localização - Postos Praias Sul > Posto Central Naufragados > Janeiro > Posto Central Naufragados 22/01/2025 12:00:00 

O script renomeia os arquivos, busca o diretório referente ao posto e, dentro deste, busca o a pasta do mês com base na data informada, sendo esta seu destino para ser armazenada. 

# gerenciar-respostas-forms.gs

Este script foi criado para automatizar o processo de gerenciamento de arquivos obtidos por um formulário.

Sua principal função é obter os arquivos enviados por cada pessoa, renomear com as informações relevantes (ex: ID Fulano) e enviar/criar para uma pasta com o nome do respondente.

# atualizarCelulasSheets.gs

Este script foi criado para extrair os dados mais relevantes de uma resposta a um formulário e os adicionar em uma planilha de resumo com base no identificador de cada resposta.

Cada identificador só aparecerá uma vez na planilha de resumo, ou seja, apenas a última inserção(mais recente) de determinado id será adicionado.

# mover-documentos-planilha-pasta.gs

Criado para a mesma função que 'gerenciar-respostas-forms.gs'.

Porém, esse script está aplicado em um formulário que receberá uma grande massa de arquivos (em torno de 330), o que gera um nescessidade de ser o mais otimizado o possível. 


