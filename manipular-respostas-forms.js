function manipularForms() {
  var url = 'url_da_planilha'
  var planilha = SpreadsheetApp.openByUrl(url); //acessa a planilha pela url
  var aba = planilha.getSheets()[0]; //pega os dados da aba
  var dados = aba.getDataRange().getValues(); //pega os dados da planilha

/*
nessa seção crio uma  subpasta na pasta Mãe que desejo.
aplicand um laço de repetição é possível criar uma pasta para cada elemento da planilha que eu desejar
*/

  var idPastaMae = 'ID_PASTA_GOOGLE';
  var pastaMae = DriveApp.getFolderById(idPastaMae);

  for(var i=1; i<dados.length; i++){
    var nomeRespondente = dados[i][1];//assumindo que a coluna b tenha os nomes de cada pessoa
   
   if(nomeRespondente && !pastaMae.getFoldersByName(nomeRespondente).hasNext()){
    var linkArquivo = dados[i][2]; //assumindo que a coluna c tenha os links dos arquios
    //para pegar todos os arquivos, possivelmente teria que criar mais variáveis
      var pastaFilha = pastaMae.createFolder(nomeRespondente);

      if(linkArquivo){

        var fileId = extrairIdArquivo(linkArquivo);

        if(fileId){
          var arquivo = DriveApp.getFileById(fileId);

          arquivo.moveTo(pastaFilha);

          Logger.log("Arquivo movido para a pasta " + pastaFilha.getName());
        }
      }
    }
  }
}

/* TODO: adicionar feat que nomeie cada documento da maneira que desejarmos. Ex: todo arquivo na posição [i][2] deve ser nomeado como: nomeRespondente + " Identificação" */

function extrairIdArquivo(link){

var match = link.match(/[-\w]{25,}/);

return match ? match[0] : null;
}
