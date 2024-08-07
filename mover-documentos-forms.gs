function moverDocs(){

  let url = 'https://docs.google.com/spreadsheets/d/1n6XpuqDbUF7YF2ClKEBymmLCLdxqCCEU7Rb6lVp4fCU/edit?resourcekey=&gid=1579844729#gid=1579844729';
  let planilha = SpreadsheetApp.openByUrl(url); //acessa a planilha pela url
  let aba = planilha.getSheets()[0]; //pega os dados da aba
  let dados = aba.getDataRange().getValues(); //pega os dados da planilha
  let abaSuporte = planilha.getSheets()[1];
  let titulosDocumentos = abaSuporte.getDataRange().getValues();

  let idPastaMae = '1sOZ9znBhxyWTFSu5XSVFsuEWa-68w-Al';
  let pastaMae = DriveApp.getFolderById(idPastaMae);

  for(let i =1; i<dados.length; i++){

    let nomeRespondente = dados[i][2];

    if(nomeRespondente && !pastaMae.getFoldersByName(nomeRespondente).hasNext()){//verifica se o nome foi preenchido e se a pasta com o nome não existe
      let pastaFilha = pastaMae.createFolder(nomeRespondente); //cria uma pasta com o nome da variável

      for(let j=19; j<=27;j++){
        let linkDoc = dados[i][j];
        let fileDoc = extrairIdArquivo(linkDoc);

        let arquivo = DriveApp.getFileById(fileDoc);
        
        arquivo.moveTo(pastaFilha);
        arquivo.setName(titulosDocumentos[0][j] + " " + nomeRespondente);
        
        Logger.log("Arquivo " + arquivo.getName() + " movido para a nova pasta " + pastaFilha.getName());
    }
      if(dados[i][28] == "Sim"){
        
        let linkDoc = dados[i][29];
        let fileDoc = extrairIdArquivo(linkDoc); //extrai o ID do arquivo

        let arquivo = DriveApp.getFileById(fileDoc); //pega o arquivo pelo ID
          
        arquivo.moveTo(pastaFilha); //movendo para a pasta com o nome do respondente
        arquivo.setName(titulosDocumentos[0][29] + " " + nomeRespondente); //renomeando o arquivo
          
        Logger.log("Arquivo " + arquivo.getName() + " movido para a nova pasta " + pastaFilha.getName());
      }
  }
    else if(nomeRespondente && pastaMae.getFoldersByName(nomeRespondente).hasNext()){
      
      let pastaFilha = pastaMae.getFoldersByName(nomeRespondente).next(); 

      for(let j=19; j<=27;j++){
        let linkDoc = dados[i][j];
        let fileDoc = extrairIdArquivo(linkDoc);

        let arquivo = DriveApp.getFileById(fileDoc);
        
        arquivo.moveTo(pastaFilha);
        arquivo.setName(titulosDocumentos[0][j] + " " + nomeRespondente);
        
        Logger.log("Arquivo " + arquivo.getName() + " movido para a pasta existente " + pastaFilha.getName());
      }
      if(dados[i][28] == "Sim"){

        let linkDoc = dados[i][29];
        let fileDoc = extrairIdArquivo(linkDoc); 

        let arquivo = DriveApp.getFileById(fileDoc); 
        
        arquivo.moveTo(pastaFilha); 
        arquivo.setName(titulosDocumentos[0][29] + " " + nomeRespondente); 
        
        Logger.log("Arquivo " + arquivo.getName() + " movido para a pasta existente " + pastaFilha.getName());
    
      }
    }
  }
  return Logger.log("Processo concluído")
  }

  function extrairIdArquivo(link){

  let match = link.match(/[-\w]{25,}/);

  return match ? match[0] : null;
}
