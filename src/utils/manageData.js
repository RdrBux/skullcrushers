import Data from '../data';

export function getDataById(id) {
  const data = Data.filter((element) => element.id === Number(id));
  return data[0];
}
