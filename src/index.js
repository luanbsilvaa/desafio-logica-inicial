//Crie um código para armazenar o máximo de informações possível dos pokemon da imagem ao lado e ao final, 
//para cada um, exiba uma mensagem de saída escrita o nome do pokemon concatenado com "Cadastrado com sucesso"

let pokemon = [
    ["POOCHVENA",2,"M","13/13"],
    ["ZIGZAGOON",2,"F","13/13"],
    ["DRAGONITE",5,"M","25/25"],
    ["DRAGONITE",5,"F","24/24"],
    ["DRAGONITE",5,"F","24/24"],
    ["POOCHYENA",2,"F","15/15"],
    ["WURMPLE",2,"M","7/14"]
  ]

  for (let i=0; i < pokemon.length; i++){
    let nome = pokemon [i][0]
    let nivel = pokemon [i][1]
    let sexo = pokemon [i][2]
    let hp = pokemon [i][3]
    console.log (`Nome: ${nome} | Nível: ${nivel} | Sexo: ${sexo} | HP: ${hp} cadastrato com sucesso!`)
  }