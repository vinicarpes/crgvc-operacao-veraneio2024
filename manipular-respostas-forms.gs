function salvarArquivosDrive() {
  let url = 'URL_PLANILHA'
  let planilha = SpreadsheetApp.openByUrl(url); //acessa a planilha pela url
  let aba = planilha.getSheets()[0]; //pega os dados da aba
  let dados = aba.getDataRange().getValues(); //pega os dados da planilha
 
/*
Nessa seção crio uma  subpasta na pastaMae que desejo.
Aplicando um laço de repetição é possível criar uma pasta para cada elemento da planilha
*/
  let idPastaMae = 'ID_PASTA';
  let pastaMae = DriveApp.getFolderById(idPastaMae);

  for(let i=1; i<dados.length; i++){
    let nomeRespondente = dados[i][1];//assumindo que a coluna b tenha os nomes de cada pessoa
   
      if(nomeRespondente && !pastaMae.getFoldersByName(nomeRespondente).hasNext()){
        //para pegar todos os arquivos, possivelmente teria que criar mais variáveis
        let pastaFilha = pastaMae.createFolder(nomeRespondente);
        let linkID = dados[i][2]; //assumindo que a coluna c tenha os links dos arquios
        let linkFoto = dados[i][4]; //assumindo que a coluna c tenha os links dos arquios

          if(linkID && linkFoto){

            let fileId = extrairIdArquivo(linkID);
            let fileFoto = extrairIdArquivo(linkFoto);

            if(fileId && fileFoto){
              let arquivo = DriveApp.getFileById(fileId);
              let arquivoFoto = DriveApp.getFileById(fileFoto);

              arquivo.setName("ID " + nomeRespondente); //Nomear conforme necessário
              arquivo.moveTo(pastaFilha);

              arquivoFoto.setName("Foto " + nomeRespondente); //Nomear conforme necessário
              arquivoFoto.moveTo(pastaFilha);

              Logger.log("Arquivos movidos para a pasta " + pastaFilha.getName());
            }
      }
      }else if(nomeRespondente && pastaMae.getFoldersByName(nomeRespondente).hasNext()){
        let pastaFilha = pastaMae.getFoldersByName(nomeRespondente).next();
        let linkID = dados[i][2]; //assumindo que a coluna c tenha os links dos arquios
        let linkFoto = dados[i][4];

        if(linkID && linkFoto){
          let fileId = extrairIdArquivo(linkID);
          let fileFoto = extrairIdArquivo(linkFoto);
          
          if(fileId && fileFoto){ 

            let arquivo = DriveApp.getFileById(fileId);
            let arquivoFoto = DriveApp.getFileById(fileFoto);

            arquivo.setName("Arquivo " + nomeRespondente);
            arquivo.moveTo(pastaFilha);

            arquivoFoto.setName("Foto de" + nomeRespondente);
            arquivoFoto.moveTo(pastaFilha);

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
