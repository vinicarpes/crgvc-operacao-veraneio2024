function percorrerPlanilha() {
  let url = 'https://docs.google.com/spreadsheets/d/1fm1INLQZ1_mvzsb-rFOJkh8DA5dKKyg0ulGayvlg9a4/edit?gid=0#gid=0'
  let planilha = SpreadsheetApp.openByUrl(url); //acessa a planilha pela url
  let aba = planilha.getSheets()[0]; //pega os dados da aba
  let dados = aba.getDataRange().getValues(); //pega os dados da planilha
  // var name = "Teste"
  // planilha.insertSheet(name); adiciona uma folha nova à planilha


/*

nessa seção crio uma  subpasta na pasta Mãe que desejo.
aplicand um laço de repetição é possível criar uma pasta para cada elemento da planilha que eu desejar
*/
  let idPastaMae = '1Ow_myOFhBSor89AkV2iiFv350m59n5Y0';
  let pastaMae = DriveApp.getFolderById(idPastaMae);

  for(let i=1; i<dados.length; i++){
    let nomeRespondente = dados[i][1];//assumindo que a coluna b tenha os nomes de cada pessoa
   
      if(nomeRespondente && !pastaMae.getFoldersByName(nomeRespondente).hasNext()){
        //para pegar todos os arquivos, possivelmente teria que criar mais variáveis
          let pastaFilha = pastaMae.createFolder(nomeRespondente);
          let linkArquivo = dados[i][2]; //assumindo que a coluna c tenha os links dos arquios

            if(linkArquivo){

              let fileId = extrairIdArquivo(linkArquivo);

                if(fileId){
                  let arquivo = DriveApp.getFileById(fileId);
                  arquivo.setName("Nome arquivo " + nomeRespondente);
                  arquivo.moveTo(pastaFilha);

                  Logger.log("Arquivo movido para a pasta " + pastaFilha.getName());
            }
      }
    }else if(nomeRespondente && pastaMae.getFoldersByName(nomeRespondente).hasNext()){
      let pastaFilha = pastaMae.getFoldersByName(nomeRespondente).next();
      let linkArquivo = dados[i][2]; //assumindo que a coluna c tenha os links dos arquios

        if(linkArquivo){
          let fileId = extrairIdArquivo(linkArquivo);

            if(fileId){ 
              let arquivo = DriveApp.getFileById(fileId);
              arquivo.setName("Nome arquivo " + nomeRespondente);
              arquivo.moveTo(pastaFilha);
              Logger.log("Arquivo movido para a pasta existente " + pastaFilha.getName());
        }
      }
    }
  }
}

 
function extrairIdArquivo(link){

let match = link.match(/[-\w]{25,}/);

return match ? match[0] : null;
}
