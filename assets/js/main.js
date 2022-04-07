// Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// MILESTONE 1 (da fare entro le 18):
// stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2 (se ce la fai falla entro le 18 altrimenti puoi consegnare anche dopo le 18 - easy):
// stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1 (solo se non sei giá frustrato dalle milestone 1 e 2):
// trasformare la stringa foto in una immagine effettiva
// BONUS 2 (solo se non sei giá fuso):
// organizzare i singoli membri in card/schede



//millestone 1

//1.stampare su console le informazioni di
// nome, ruolo e la stringa della foto


const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

console.log(team)

for(let i = 0; i < team.length; i++ ){
    const person = team[i]

    //console.log(typeof person)
    console.log(person.name)
    console.log(person.role)
    console.log(person.image)
    console.log(' ')
}






//millestone 1



//millestone 2 + bonus 1


//stampare le stesse informazioni su DOM sottoforma di stringhe
document.getElementById('cards')
document.getElementById('container')
const mainCard = document.getElementById('cards')


let teams = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];


for(let i = 0; i < teams.length; i++ ){
    const membercard = document.createElement('div') 
    const person = teams[i]
    membercard.innerHTML = `<img src="img/${person.image}" alt="">
    <h2>${person.name}</h2>
    <h6>${person.role}</h6>`
    mainCard.append(membercard)
    membercard.classList.add('card')
    mainCard.classList.add('mt-5','text-center')


    //console.log(typeof person)
    console.log(person.name)
    console.log(person.role)
    console.log(person.image)
    console.log(' ')

    
}


    

