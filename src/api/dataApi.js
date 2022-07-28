import { placeFakeData } from './fakeData.js';

const getPlaceData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve( placeFakeData );
    }, 500);
  });
};

export default {
  getPlaceData,
};