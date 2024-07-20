export function setColorBtn(id) {
  const arrFromLS = Array.from(
    JSON.parse(localStorage.getItem('persist:adverts')).favorites
  );

  //   for (let i = 0; i <= arrFromLS.length; i++) {
  //     if (arrFromLS[i]._id === id) {
  //       console.log(arrFromLS[i]);
  //     }
  //   }
  console.log(arrFromLS[0]);
}
