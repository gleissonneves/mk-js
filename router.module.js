
module.exports = function () {
  const fakeRequest = (path, key = 'return') => require(`./data/${path}.json`)[key];

  return {
    // usuario
    // 
    produto: fakeRequest('produto'),
  };
};
