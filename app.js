setInterval(() => {
  const time = document.querySelector("#time");
  let date = new Date();
  let hours = date.getHours();
  let minuts = date.getMinutes();
  let seconds = date.getSeconds();
  time.textContent = hours + ":" + minuts + ":" + seconds;
});
