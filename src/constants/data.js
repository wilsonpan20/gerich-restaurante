import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: 'R$56',
    tags: 'AU | Garrafa',
  },
  {
    title: 'Catena Malbee',
    price: 'R$59',
    tags: 'AU | Garrafa',
  },
  {
    title: 'La Vieillw Rose',
    price: 'R$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: 'R$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: 'R$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'R$20',
    tags: 'Aperol | Prosecco Villa Marchesi| refrigerante| 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'R$16',
    tags: 'rum escuro | Cerveja de gengibre| Fatia de limão',
  },
  {
    title: 'Daiquiri',
    price: 'R$10',
    tags: 'Rum | Suco DaiquiriCitrus | Açúcar',
  },
  {
    title: 'Antiquado',
    price: 'R$31',
    tags: 'Bourbon | açúcar mascavo| Amargos de Angostura',
  },
  {
    title: 'Negroni',
    price: 'R$26',
    tags: 'Gin | vermute doce | Campari |  Guarnição de laranja',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Babador Gourmand',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Estrela em ascensão',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'hospitalidade',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Excelente Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };

