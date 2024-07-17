function moverDocsForms() {
  let url = 'url_planilha';
  let planilha = SpreadsheetApp.openByUrl(url);
  let aba = planilha.getSheets()[0];
  let dados = aba.getDataRange().getValues();

  let idPastaMae = 'id_pasta_mae';
  let pastaMae = DriveApp.getFolderById(idPastaMae);


  for(let i =1; i<dados.length; i++){
    let nomeRespondente = dados[i][2];

    if(nomeRespondente && !pastaMae.getFoldersByName(nomeRespondente).hasNext()){//verifica se o nome foi preenchido e se a pasta com o nome não existe
      let pastaFilha = pastaMae.createFolder(nomeRespondente); //cria uma pasta com o nome da variável

      if(dados[i][32] =! " "){//verifica se a posição não é vazio
      for(let j=23; j<=32;j++){
        let linkDoc = dados[i][j];
        let fileDoc = extrairIdArquivo(linkDoc); //extrai o ID do arquivo

        let arquivo = DriveApp.getFileById(fileDoc); //pega o arquivo pelo ID
        
        arquivo.setName(dados[0][j] + " " + nomeRespondente); //renomeando o arquivo
        arquivo.moveTo(pastaFilha); //movendo para a pasta com o nome do respondente
        
        Logger.log("Arquivo movido para a pasta " + pastaFilha.getName());
      }
      }else{
      for(let j=23; j<=31;j++){
        let linkDoc = dados[i][j];
        let fileDoc = extrairIdArquivo(linkDoc);

        let arquivo = DriveApp.getFileById(fileDoc);
        
        arquivo.setName(dados[0][j] + " " + nomeRespondente);
        arquivo.moveTo(pastaFilha);
        
        Logger.log("Arquivo movido para a pasta existente" + pastaFilha.getName());

    }
    }
  }
    else if(nomeRespondente && pastaMae.getFoldersByName(nomeRespondente).hasNext()){
      let pastaFilha = pastaMae.getFoldersByName(nomeRespondente).next(); 

      if(dados[i][32] =! " "){
      for(let j=23; j<=32;j++){
        let linkDoc = dados[i][j];
        let fileDoc = extrairIdArquivo(linkDoc); 

        let arquivo = DriveApp.getFileById(fileDoc); 
        
        arquivo.setName(dados[0][j] + " " + nomeRespondente); 
        arquivo.moveTo(pastaFilha); 
        
        Logger.log("Arquivo movido para a pasta " + pastaFilha.getName());
      }
      }else{
      for(let j=23; j<=31;j++){
        let linkDoc = dados[i][j];
        let fileDoc = extrairIdArquivo(linkDoc);

        let arquivo = DriveApp.getFileById(fileDoc);
        
        arquivo.setName(dados[0][j] + " " + nomeRespondente);
        arquivo.moveTo(pastaFilha);
        
        Logger.log("Arquivo movido para a pasta existente" + pastaFilha.getName());

    }
    }
  }
  }
}
function extrairIdArquivo(link){

  let match = link.match(/[-\w]{25,}/);

  return match ? match[0] : null;
}
