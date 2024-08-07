# gerenciar-respostas-forms.gs

Este script foi criado para automatizar o processo de gerenciamento de arquivos obtidos por um formulário.

Sua principal função é obter os arquivos enviados por cada pessoa, renomear com as informações relevantes (ex: ID Fulano) e enviar/criar para uma pasta com o nome do respondente.

# atualizarCelulasSheets.gs

Este script foi criado para extrair os dados mais relevantes de uma resposta a um formulário e os adicionar em uma planilha de resumo com base no identificador de cada resposta.

Cada identificador só aparecerá uma vez na planilha de resumo, ou seja, apenas a última inserção(mais recente) de determinado id será adicionado.

# mover-documentos-planilha-pasta.gs

Criado para a mesma função que 'gerenciar-respostas-forms.gs'.

Porém, esse script está aplicado em um formulário que receberá uma grande massa de arquivos (em torno de 330), o que gera um nescessidade de ser o mais otimizado o possível. 


