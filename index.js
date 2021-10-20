const number = document.getElementById('number');

number.addEventListener('numberChanged', (e) => {

  number.textContent = e.detail.number;
  number.style.color = e.detail.textColor;

})

function changeNumber(n , c) {

  const event = new CustomEvent('numberChanged', {
    detail : {
      number: n,
      textColor: c
    }
  });

  number.dispatchEvent(event);
}