function atualizarResumoGeral() {
  let url = 'https://docs.google.com/spreadsheets/d/1dqZXD1wv3kVaqNfNIw_9kqkCWN8AnXZRxuJ2Dj6ztKg/edit?resourcekey=&gid=2020868859#gid=2020868859';
  let planilha = SpreadsheetApp.openByUrl(url);
  let abaResumo = planilha.getSheets()[0];
  let abaDados = planilha.getSheets()[10];
  let dados = abaDados.getDataRange().getValues();
  let resumo = abaResumo.getDataRange().getValues();
  
  let prefixos = {
    "AQE-70": 2,
    "AQE-71": 3,
    "AQE-72": 4,
    "AQE-73": 5,
    "AQE-74": 6,
    "AQE-75": 7,
    "AQE-76": 8,
    "PRETO-1": 9,
    "PRETO-2": 10
  };
  
  for (let i = 0; i < dados.length; i++) {
    let prefixo = dados[i][2];
    if (prefixos.hasOwnProperty(prefixo)) {
      let rowIndex = prefixos[prefixo];
      resumo[rowIndex][1] = dados[i][0];
      resumo[rowIndex][2] = dados[i][4];
      resumo[rowIndex][3] = dados[i][6];
      resumo[rowIndex][4] = dados[i][3];
    }
  }
  
  // Atualizar a planilha com os novos dados
  abaResumo.getRange(1, 1, resumo.length, resumo[0].length).setValues(resumo);
  
  Logger.log("Dados atualizados com sucesso na planilha.");
}
