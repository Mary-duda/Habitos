const form = document.querySelector("#form-habits") //inserindo o formulario dentro de uma variavel
const nlwSetup = new NLWSetup(form) // essa variavel e para inicializar a biblioteca
const button = document.querySelector("header button") // dentro do header pegue a tag button
button.addEventListener("click", add) //esta adicionado uma coisa para ouvir um evento essa função precisa de dois argumetos primeiro qual é o evento depois oque iram acontecer
form.addEventListener("change", save)
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5) //Aqui esta trazendo data atual colocado a data pt-br e cortando o ano junto com a /
  const dayExists = nlwSetup.dayExists(today) // vai verifiar se o dia ja existe
  if (dayExists) {
    alert("Dia já incluso ❌")
    return //para o codigo
  }
  nlwSetup.addDay(today)
}
function save() {
  //localStrong e um objeto que guarda na memoria do broswer informações para guarda pricisa puxar uma fução chamada setItem depois precisa colocar o nome da chave(qualquer nome) em seguida oue você que guardar com o nlwSetup.data e um objeto precisa transformar em string (ou json) para funciona, agora preicisa carregar esses dados
  localStorage.setItem("nlwSetupHabits", JSON.stringify(nlwSetup.data))
  // console.log(nlwSetup.data) //quado um do inputs for clicado vai mostra ele no console seu array
}

// const data = { manualmente
//   run: ["01-19", "01-20", "01-21"],
//   toStudy: ["01-19"],
//   playGame: ["01-18"],

/*você coloca uma seuecia de dados em array e uma estrutura de dados aqui os dias que você colocar vai aumetar habito*/
// }
// nlwSetup.setData(data)
// nlwSetup.load() //vai carregar os dados internos rederizar dados interno são aqueles que estão no data

const data = JSON.parse(localStorage.getItem("nlwSetupHabits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
