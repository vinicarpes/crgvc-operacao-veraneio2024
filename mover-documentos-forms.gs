function main() {
  let url = 'https://docs.google.com/spreadsheets/d/1M_blCK-UhRsuwAKZAu_wHupZxVb5wYIz3MNPmEWrPxY/edit?gid=1271818002#gid=1271818002';
  let planilha = SpreadsheetApp.openByUrl(url);
  let aba = planilha.getSheets()[0];
  let abaSuporte = planilha.getSheets()[1];
  let respostasForms = aba.getDataRange().getValues();
  let idPastaMae = '1K6T6pX5V4Zyf8frl5qshNLhnP74YOvyQ';

  for(let linha = 0; linha<respostasForms.length(); linha++){
    criarPasta(idPastaMae, respostasForms, linha, abaSuporte);
  }

}

function criarPasta(idPastaMae, respostasForms, linha, abaSuporte){
  let pastaMae = DriveApp.getFolderById(idPastaMae);
  let nomeRespondente = respostasForms[linha][2];

  if(nomeRespondente && !pastaMae.getFoldersByName(nomeRespondente).hasNext()){
    let pastaFilha = pastaMae.createFolder(nomeRespondente);

    moverArquivo(pastaFilha, linha, abaSuporte, respostasForms);
  }
  else if(nomeRespondente && pastaMae.getFoldersByName(nomeRespondente).hasNext()){
    Logger.log('PASTA COM NOME ' + nomeRespondente + ' EXISTENTE');
  }

}

function moverArquivo(pastaFilha, linha, abaSuporte, respostasForms){
  let nomeDocumentos = abaSuporte.getDataRange().getValues();

  for(let j = 18; j<26;j++){
    let linkDoc = respostasForms[linha][j];
    let fileId = extrairIdArquivo(linkDoc);
    let arquivo = DriveApp.getFileById(fileId);

    arquivo.moveTo(pastaFilha);
    arquivo.setName(nomeDocumentos[0][j] + " " + nomeRespondente);

    Logger.log("Arquivo " + arquivo.getName() + " movido para a pasta: " + pastaFilha.getName());
  }

  if(respostasForms[linha][26] != ""){

    let linkDoc = respostasForms[linha][26];
    let fileId = extrairIdArquivo(linkDoc);
    let arquivo = DriveApp.getFileById(fileId);

    arquivo.moveTo(pastaFilha);
    arquivo.setName(nomeDocumentos[0][26] + " " + nomeRespondente);

    Logger.log("Arquivo " + arquivo.getName() + " movido para a pasta: " + pastaFilha.getName());
  }
  
  if(respostasForms[linha][27]=="Sim" && respostasForms[linha][28] !=""){
    let linkDoc = respostasForms[linha][28];
    let fileId = extrairIdArquivo(linkDoc);
    let arquivo = DriveApp.getFileById(fileId);

    arquivo.moveTo(pastaFilha);
    arquivo.setName(nomeDocumentos[0][28] + " " + nomeRespondente);

    Logger.log("Arquivo " + arquivo.getName() + " movido para a pasta: " + pastaFilha.getName());
  }

  if(respostasForms[linha][29]=="Não" && respostasForms[linha][30] !=""){
    let linkDoc = respostasForms[linha][30];
    let fileId = extrairIdArquivo(linkDoc);
    let arquivo = DriveApp.getFileById(fileId);

    arquivo.moveTo(pastaFilha);
    arquivo.setName(nomeDocumentos[0][30] + " " + nomeRespondente);

    Logger.log("Arquivo " + arquivo.getName() + " movido para a pasta: " + pastaFilha.getName());
  }
}
 function extrairIdArquivo(link){

  let match = link.match(/[-\w]{25,}/);

  return match ? match[0] : null;
}
