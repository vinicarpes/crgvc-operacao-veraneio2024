function moverDocsForms() {
  let url = 'https://docs.google.com/spreadsheets/d/1y7DjUCH6ODXZ9dR_YEFMpSgE56Eq8X1EQB5cxqlF3-s/edit?resourcekey=&gid=1945815640#gid=1945815640';
  let planilha = SpreadsheetApp.openByUrl(url);
  let aba = planilha.getSheets()[0];
  let dados = aba.getDataRange().getValues();
  let abaSuporte = planilha.getSheets()[1];
  let titulosDocumentos = abaSuporte.getDataRange().getValues();

  let idPastaMae = '1VJiXCjkV2A07eXfAXRJDxKJLizb6yxJI';
  let pastaMae = DriveApp.getFolderById(idPastaMae);


  for(let i =1; i<dados.length; i++){

    let nomeRespondente = dados[i][2];

    if(nomeRespondente && !pastaMae.getFoldersByName(nomeRespondente).hasNext()){//verifica se o nome foi preenchido e se a pasta com o nome não existe
      let pastaFilha = pastaMae.createFolder(nomeRespondente); //cria uma pasta com o nome da variável

      for(let j=23; j<=31;j++){
        let linkDoc = dados[i][j];
        let fileDoc = extrairIdArquivo(linkDoc);

        let arquivo = DriveApp.getFileById(fileDoc);
        
        arquivo.moveTo(pastaFilha);
        arquivo.setName(titulosDocumentos[0][j] + " " + nomeRespondente);
        
        Logger.log("Arquivo movido para a nova pasta " + pastaFilha.getName());
    }
      if(dados[i][32] =! " "){//verifica se a posição não é vazio
        
        let linkDoc = dados[i][32];
        let fileDoc = extrairIdArquivo(linkDoc); //extrai o ID do arquivo

        let arquivo = DriveApp.getFileById(fileDoc); //pega o arquivo pelo ID
          
        arquivo.moveTo(pastaFilha); //movendo para a pasta com o nome do respondente
        arquivo.setName(titulosDocumentos[0][32] + " " + nomeRespondente); //renomeando o arquivo
          
        Logger.log("Arquivo movido para a nova pasta " + pastaFilha.getName());
      }
  }
    else if(nomeRespondente && pastaMae.getFoldersByName(nomeRespondente).hasNext()){
      
      let pastaFilha = pastaMae.getFoldersByName(nomeRespondente).next(); 

      for(let j=23; j<=31;j++){
        let linkDoc = dados[i][j];
        let fileDoc = extrairIdArquivo(linkDoc);

        let arquivo = DriveApp.getFileById(fileDoc);
        
        arquivo.moveTo(pastaFilha);
        arquivo.setName(titulosDocumentos[0][j] + " " + nomeRespondente);
        
        Logger.log("Arquivo movido para a pasta existente " + pastaFilha.getName());
      }
      if(dados[i][32] =! " "){

        let linkDoc = dados[i][32];
        let fileDoc = extrairIdArquivo(linkDoc); 

        let arquivo = DriveApp.getFileById(fileDoc); 
        
        arquivo.moveTo(pastaFilha); 
        arquivo.setName(titulosDocumentos[0][32] + " " + nomeRespondente); 
        
        Logger.log("Arquivo movido para a pasta existente " + pastaFilha.getName());
    
      }
    }
  }
}
function extrairIdArquivo(link){

  let match = link.match(/[-\w]{25,}/);

  return match ? match[0] : null;
}
