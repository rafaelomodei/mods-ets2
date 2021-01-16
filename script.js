const pathImage = './public/img';

const mods = [
  {
    background: `${pathImage}/page_1.png`,
    title: 'Rafael Omodei 1',
    subTitle: 'Mods Gratuitos para ETS 2.',
    linkDonation: '#',
    linkDownload: '#'
  },
  {
    background: `${pathImage}/page_2.png`,
    title: 'Rafael Omodei 2',
    subTitle: 'Mods Gratuitos para ETS 2.',
    linkDonation: '#',
    linkDownload: '#'
  },
  {
    background: `${pathImage}/page_3.jpg`,
    title: 'Rafael Omodei 3',
    subTitle: 'Mods Gratuitos para ETS 2.',
    linkDonation: '#',
    linkDownload: '#'
  },
  {
    background: `${pathImage}/page_3.jpg`,
    title: 'Rafael Omodei 3',
    subTitle: 'Mods Gratuitos para ETS 2.',
    linkDonation: '#',
    linkDownload: '#'
  },
  {
    background: `${pathImage}/page_3.jpg`,
    title: 'Rafael Omodei 3',
    subTitle: 'Mods Gratuitos para ETS 2.',
    linkDonation: '#',
    linkDownload: '#'
  },
  {
    background: `${pathImage}/page_3.jpg`,
    title: 'Rafael Omodei 3',
    subTitle: 'Mods Gratuitos para ETS 2.',
    linkDonation: '#',
    linkDownload: '#'
  },
  {
    background: `${pathImage}/page_3.jpg`,
    title: 'Rafael Omodei 3',
    subTitle: 'Mods Gratuitos para ETS 2.',
    linkDonation: '#',
    linkDownload: '#'
  },{
    background: `${pathImage}/page_1.png`,
    title: 'Rafael Omodei 1',
    subTitle: 'Mods Gratuitos para ETS 2.',
    linkDonation: '#',
    linkDownload: '#'
  },
  {
    background: `${pathImage}/page_1.png`,
    title: 'Rafael Omodei 1',
    subTitle: 'Mods Gratuitos para ETS 2.',
    linkDonation: '#',
    linkDownload: '#'
  }


];


function createCard(mod){

  // Create HTML Element

  const  card = document.createElement('div');
  card.setAttribute('class', 'card bg-dark text-white text-center');
  card.setAttribute('id', 'card-mod');


  const background = document.createElement('div');
  background.setAttribute('class', 'background-mod');
  background.setAttribute('id', 'demo');
  background.setAttribute('style', `background-image: url('${mod.background}')`);

  const content = document.createElement('div');
  content.setAttribute('class', 'card-img-overlay');

  const title = document.createElement('h1');
  title.setAttribute('class', 'card-title');
  title.setAttribute('id', 'title-mod');
  title.innerHTML = mod.title;

  const subTitle = document.createElement('p');
  subTitle.setAttribute('class', 'card-text');
  subTitle.setAttribute('id', 'subTitle-mod');
  subTitle.innerHTML = mod.subTitle;

  const linkDonation = document.createElement('a');
  linkDonation.setAttribute('class', 'btn btn-primary');
  linkDonation.setAttribute('id', 'doacao-mod');
  linkDonation.setAttribute('href', mod.linkDonation);
  linkDonation.innerHTML = 'Fazer doação';

  const linkDownload = document.createElement('a');
  linkDownload.setAttribute('class', 'btn btn-success');
  linkDownload.setAttribute('id', 'download-mod');
  linkDownload.setAttribute('href', mod.linkDownload);
  linkDownload.innerHTML = 'Baixar';


  // Append ELEMENT
  
  content.appendChild(title);
  content.appendChild(subTitle);
  content.appendChild(linkDonation);
  content.appendChild(linkDownload);

  card.appendChild(background);
  card.appendChild(content);

  return card;



}


function start(){
  const main = document.querySelector('main');

  mods.map((mod) =>{
    const card = createCard(mod);
    main.appendChild(card);
  });

}

start();