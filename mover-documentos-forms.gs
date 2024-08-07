function moverDocs(){

  let url = 'https://docs.google.com/spreadsheets/d/1n6XpuqDbUF7YF2ClKEBymmLCLdxqCCEU7Rb6lVp4fCU/edit?resourcekey=&gid=1579844729#gid=1579844729';
  let planilha = SpreadsheetApp.openByUrl(url); //acessa a planilha pela url
  let aba = planilha.getSheets()[0]; //pega os dados da aba
  let dados = aba.getDataRange().getValues(); //pega os dados da planilha
 

  let idPastaMae = '1sOZ9znBhxyWTFSu5XSVFsuEWa-68w-Al';
  let pastaMae = DriveApp.getFolderById(idPastaMae);

  for(let i=1; i<dados.length; i++){
    let nomeRespondente = dados[i][2];
      if(nomeRespondente && !pastaMae.getFoldersByName(nomeRespondente).hasNext()){
        let pastaFilha = pastaMae.createFolder(nomeRespondente);
          
        let linkIdentidade = dados[i][19]
        let linkCpf = dados[i][20]; 
        let linkCertidaoTrf = dados[i][21];
        let linkCertidaoTje = dados[i][22];
        let linkCertidaoComarca = dados[i][23];
        let linkCompResidenca = dados[i][24];
        let linkAtestadoMed = dados[i][25];
        let linkAtestadoTox = dados[i][26];
        let linkFoto = dados[i][28];
          
        let fileIdentidade = extrairIdArquivo(linkIdentidade);
        let fileCpf = extrairIdArquivo(linkCpf);
        let fileCertidaoTrf = extrairIdArquivo(linkCertidaoTrf);
        let fileCertidaoTje = extrairIdArquivo(linkCertidaoTje);
        let fileCertidaoComarca = extrairIdArquivo(linkCertidaoComarca);
        let fileCompResidenca = extrairIdArquivo(linkCompResidenca);
        let fileAtestadoMed = extrairIdArquivo(linkAtestadoMed);
        let fileAtestadoTox = extrairIdArquivo(linkAtestadoTox);
        let fileFoto = extrairIdArquivo(linkFoto);

        let arquivoIdentidade = DriveApp.getFileById(fileIdentidade);
        let arquivoCpf = DriveApp.getFileById(fileCpf);
        let arquivoCertidaoTrf = DriveApp.getFileById(fileCertidaoTrf);
        let arquivoCertidaoTje = DriveApp.getFileById(fileCertidaoTje);
        let arquivoCertidaoComarca = DriveApp.getFileById(fileCertidaoComarca);
        let arquivoCompResidenca = DriveApp.getFileById(fileCompResidenca);
        let arquivoAtestadoMed = DriveApp.getFileById(fileAtestadoMed);
        let arquivoAtestadoTox = DriveApp.getFileById(fileAtestadoTox);
        let arquivoFoto = DriveApp.getFileById(fileFoto);

        arquivoCpf.setName("CPF " + nomeRespondente); 
        arquivoCpf.moveTo(pastaFilha);
        Logger.log("Arquivo de CPF movido para a pasta " + pastaFilha.getName());
        arquivoIdentidade.setName("ID " + nomeRespondente); 
        arquivoIdentidade.moveTo(pastaFilha);
        Logger.log("Arquivo de ID movido para a pasta " + pastaFilha.getName());
        arquivoCertidaoTrf.setName("Certidão TRF " + nomeRespondente); 
        arquivoCertidaoTrf.moveTo(pastaFilha);
        Logger.log("Arquivo de certidão TRF movido para a pasta " + pastaFilha.getName());
        arquivoCertidaoTje.setName("Certidão TJE " + nomeRespondente); 
        arquivoCertidaoTje.moveTo(pastaFilha);
        Logger.log("Arquivo de certidão TJE movido para a pasta " + pastaFilha.getName());
        arquivoCertidaoComarca.setName("Certidão TJE Comarca " + nomeRespondente); 
        arquivoCertidaoComarca.moveTo(pastaFilha);
        Logger.log("Arquivo de certidão TJE Comarca movido para a pasta  " + pastaFilha.getName());
        arquivoCompResidenca.setName("Comprovante de residência " + nomeRespondente); 
        arquivoCompResidenca.moveTo(pastaFilha);
        Logger.log("Arquivo de Comprovante de residência movido para a pasta  " + pastaFilha.getName());
        arquivoAtestadoMed.setName("Atestado médico " + nomeRespondente); 
        arquivoAtestadoMed.moveTo(pastaFilha);
        Logger.log("Arquivo de Atestado médico movido para a pasta  " + pastaFilha.getName());
        arquivoAtestadoTox.setName("Atestado toxicologico " + nomeRespondente); 
        arquivoAtestadoTox.moveTo(pastaFilha);
        Logger.log("Arquivo de Atestado toxicologico movido para a pasta  " + pastaFilha.getName());
        arquivoFoto.setName("Foto 3X4 "+ nomeRespondente);
        arquivoFoto.moveTo(pastaFilha);  
        Logger.log("Arquivo de Foto 3X4 movido para a pasta  " + pastaFilha.getName());

        if(dados[i][29] === "Sim"){
          let linkRegulEstrangeiro = dados[i][30];
          let fileRegulEstrangeiro = extrairIdArquivo(linkRegulEstrangeiro);
          let arquivoRegulEstrangeiro = DriveApp.getFileById(fileRegulEstrangeiro);

          arquivoRegulEstrangeiro.setName("Certidão de Regularidade de Entrada e Permanência no Brasil " + nomeRespondente); 
          arquivoRegulEstrangeiro.moveTo(pastaFilha);
          Logger.log("Arquivo de Certidão de Regularidade de Entrada e Permanência no Brasil movido para a pasta " + pastaFilha.getName());
      }
   }
  
      else if(nomeRespondente && pastaMae.getFoldersByName(nomeRespondente).hasNext()){
        let pastaFilha = pastaMae.getFoldersByName(nomeRespondente).next();

        let linkIdentidade = dados[i][19]
        let linkCpf = dados[i][20]; 
        let linkCertidaoTrf = dados[i][21];
        let linkCertidaoTje = dados[i][22];
        let linkCertidaoComarca = dados[i][23];
        let linkCompResidenca = dados[i][24];
        let linkAtestadoMed = dados[i][25];
        let linkAtestadoTox = dados[i][26];
        let linkFoto = dados[i][28];
          
        let fileIdentidade = extrairIdArquivo(linkIdentidade);
        let fileCpf = extrairIdArquivo(linkCpf);
        let fileCertidaoTrf = extrairIdArquivo(linkCertidaoTrf);
        let fileCertidaoTje = extrairIdArquivo(linkCertidaoTje);
        let fileCertidaoComarca = extrairIdArquivo(linkCertidaoComarca);
        let fileCompResidenca = extrairIdArquivo(linkCompResidenca);
        let fileAtestadoMed = extrairIdArquivo(linkAtestadoMed);
        let fileAtestadoTox = extrairIdArquivo(linkAtestadoTox);
        let fileFoto = extrairIdArquivo(linkFoto);

        let arquivoIdentidade = DriveApp.getFileById(fileIdentidade);
        let arquivoCpf = DriveApp.getFileById(fileCpf);
        let arquivoCertidaoTrf = DriveApp.getFileById(fileCertidaoTrf);
        let arquivoCertidaoTje = DriveApp.getFileById(fileCertidaoTje);
        let arquivoCertidaoComarca = DriveApp.getFileById(fileCertidaoComarca);
        let arquivoCompResidenca = DriveApp.getFileById(fileCompResidenca);
        let arquivoAtestadoMed = DriveApp.getFileById(fileAtestadoMed);
        let arquivoAtestadoTox = DriveApp.getFileById(fileAtestadoTox);
        let arquivoFoto = DriveApp.getFileById(fileFoto);

        arquivoCpf.setName("CPF " + nomeRespondente); 
        arquivoCpf.moveTo(pastaFilha);
        Logger.log("Arquivo de CPF movido para a pasta existente " + pastaFilha.getName());
        arquivoIdentidade.setName("ID " + nomeRespondente); 
        arquivoIdentidade.moveTo(pastaFilha);
        Logger.log("Arquivo de ID movido para a pasta existente " + pastaFilha.getName());
        arquivoCertidaoTrf.setName("Certidão TRF " + nomeRespondente); 
        arquivoCertidaoTrf.moveTo(pastaFilha);
        Logger.log("Arquivo de certidão TRF movido para a pasta existente " + pastaFilha.getName());
        arquivoCertidaoTje.setName("Certidão TJE " + nomeRespondente); 
        arquivoCertidaoTje.moveTo(pastaFilha);
        Logger.log("Arquivo de certidão TJE movido para a pasta existente " + pastaFilha.getName());
        arquivoCertidaoComarca.setName("Certidão TJE Comarca " + nomeRespondente); 
        arquivoCertidaoComarca.moveTo(pastaFilha);
        Logger.log("Arquivo de certidão TJE Comarca movido para a pasta existente " + pastaFilha.getName());
        arquivoCompResidenca.setName("Comprovante de residência " + nomeRespondente); 
        arquivoCompResidenca.moveTo(pastaFilha);
        Logger.log("Arquivo de Comprovante de residência movido para a pasta existente " + pastaFilha.getName());
        arquivoAtestadoMed.setName("Atestado médico " + nomeRespondente); 
        arquivoAtestadoMed.moveTo(pastaFilha);
        Logger.log("Arquivo de Atestado médico movido para a pasta existente " + pastaFilha.getName());
        arquivoAtestadoTox.setName("Atestado toxicologico " + nomeRespondente); 
        arquivoAtestadoTox.moveTo(pastaFilha);
        Logger.log("Arquivo de Atestado toxicologico movido para a pasta existente " + pastaFilha.getName());
        arquivoFoto.setName("Foto 3X4 "+ nomeRespondente);
        arquivoFoto.moveTo(pastaFilha);  
        Logger.log("Arquivo de Foto 3X4 movido para a pasta existente " + pastaFilha.getName());

        if(dados[i][29] === "Sim"){
          let linkRegulEstrangeiro = dados[i][30];
          let fileRegulEstrangeiro = extrairIdArquivo(linkRegulEstrangeiro);
          let arquivoRegulEstrangeiro = DriveApp.getFileById(fileRegulEstrangeiro);

          arquivoRegulEstrangeiro.setName("Certidão de Regularidade de Entrada e Permanência no Brasil " + nomeRespondente); 
          arquivoRegulEstrangeiro.moveTo(pastaFilha);
          Logger.log("Arquivo de Certidão de Regularidade de Entrada e Permanência no Brasil movido para a pasta existente " + pastaFilha.getName());

      }
    }
  }
  return Logger.log("Processo concluído")
  }

  function extrairIdArquivo(link){

  let match = link.match(/[-\w]{25,}/);

  return match ? match[0] : null;
}
