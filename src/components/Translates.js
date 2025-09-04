const enTree = {
  height: 'heigth',
  coolPlan: (isCool) => `This is a ${isCool ? 'cool ' : ''}plan`,
  helloReact: 'Hello react',
  toggle3rdHeader: 'Toggle 3rd header',
  reactIsCool: 'React is cool',
  loading: 'Loading...',
  aboutPage: 'About page',
  dniproUkraine: 'Dnipro, Ukraine',
  oopsNoSuchPage: 'Oops no such page :(',
  ourCompanyIsGreat: 'Our company is great',
  ourProductIsGreat: 'Our product is great',
  readAboutUs: 'Read about us'
}

const itTree = {
  height: 'altezza',
  coolPlan: (isCool) => `Questo è un piano${isCool ? ' fantastico' : ''}`,
  helloReact: 'Ciao react',
  toggle3rdHeader: 'Attiva/disattiva la terza intestazione',
  reactIsCool: 'React è fantastico',
  loading: 'Caricamento in corso...',
  aboutPage: 'Pagina Informazioni',
  dniproUkraine: 'Dnipro, Ucraina',
  oopsNoSuchPage: 'Oops, nessuna pagina del genere :(',
  ourCompanyIsGreat: 'La nostra azienda è fantastica',
  ourProductIsGreat: 'Il nostro prodotto è fantastico',
  readAboutUs: 'Leggere di noi'
}

const uaTree = {
  height: 'висота',
  coolPlan: (isCool) => `Це ${isCool ? 'крутий ' : ''}план`,
  helloReact: 'Привіт, реакте',
  toggle3rdHeader: 'Перемкнути 3й заголовок',
  reactIsCool: 'Реакт крутий',
  loading: 'Завантаження...',
  aboutPage: 'Сторінка про нас',
  dniproUkraine: 'Дніпро, Україна',
  oopsNoSuchPage: 'Трясця, немає такої сторінки :(',
  ourCompanyIsGreat: 'Наша компанія афігенна',
  ourProductIsGreat: 'Наш продукт афігенний',
  readAboutUs: 'Прочитайте про нас'
}

const languages = [
  {id: 'en', title: 'English', tree: enTree}, 
  {id: 'ua', title: 'Українська', tree: uaTree },
  {id: 'it', title: 'Italiano', tree: itTree}
]

export {
  languages
}