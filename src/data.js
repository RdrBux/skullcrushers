import oneFront from './assets/img/1Front.png';
import oneBack from './assets/img/1Back.png';
import twoFront from './assets/img/2Front.png';
import twoBack from './assets/img/2Back.png';
import threeFront from './assets/img/3Front.png';
import threeBack from './assets/img/3Back.png';
import fourFront from './assets/img/4Front.png';
import fourBack from './assets/img/4Back.png';

const Data = [
  {
    id: 1,
    name: 'Remera',
    description: 'Remera de algodón, blabla',
    price: '5999',
    stock: {
      s: 3,
      m: 3,
      l: 3,
      xl: 3,
      xxl: 3,
    },
    imagesSource: [oneFront, oneBack],
  },
  {
    id: 2,
    name: 'Remera',
    description: 'Remera de algodón, blabla',
    price: '5999',
    stock: {
      s: 3,
      m: 3,
      l: 3,
      xl: 3,
      xxl: 3,
    },
    imagesSource: [twoFront, twoBack],
  },
  {
    id: 3,
    name: 'Remera',
    description: 'Remera de algodón, blabla',
    price: '5999',
    stock: {
      s: 3,
      m: 3,
      l: 3,
      xl: 3,
      xxl: 3,
    },
    imagesSource: [threeFront, threeBack],
  },
  {
    id: 4,
    name: 'Buzo',
    description: 'Buzo de algodón, blabla',
    price: '8999',
    stock: {
      s: 3,
      m: 3,
      l: 3,
      xl: 3,
      xxl: 3,
    },
    imagesSource: [fourFront, fourBack],
  },
];

export default Data;
