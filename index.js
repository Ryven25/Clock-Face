function setTime() {
  const canvas = document.getElementById("clock");
  const context = canvas.getContext("2d");
  const clockRadius = canvas.width / 2;

  context.beginPath();

  context.fillStyle = "black";
  context.arc(clockRadius, clockRadius, clockRadius, 0, 2 * Math.PI);
  context.fill();

  context.fillStyle = "white";

  context.beginPath();
  context.arc(clockRadius, clockRadius, 10, 0, 2 * Math.PI);
  context.fill();

  context.font = clockRadius / 10 + "px arial";
  context.textAlign = "center";
  context.textBaseline = "middle";

  for (let i = 1; i <= 12; i++) {
    context.fillText(
      i,
      clockRadius + clockRadius * 0.9 * Math.sin((i * 2 * Math.PI) / 12),
      clockRadius - clockRadius * 0.9 * Math.cos((i * 2 * Math.PI) / 12)
    );
  }
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  const fullHours = (hours % 12) + minutes / 60 + seconds / 3600;

  const hoursAngle = (fullHours * 2 * Math.PI) / 12;
  const minutesAngle = (minutes * 2 * Math.PI) / 60;
  const secondsAngle = (seconds * 2 * Math.PI) / 60;

  context.strokeStyle = "white";
  context.moveTo(clockRadius, clockRadius);
  context.lineTo(
    clockRadius + clockRadius * 0.6 * Math.sin(hoursAngle),
    clockRadius - clockRadius * 0.6 * Math.cos(hoursAngle)
  );
  context.lineWidth = 5;
  context.stroke();

  context.moveTo(clockRadius, clockRadius);
  context.lineTo(
    clockRadius + clockRadius * 0.8 * Math.sin(minutesAngle),
    clockRadius - clockRadius * 0.8 * Math.cos(minutesAngle)
  );
  context.lineWidth = 3;
  context.stroke();

  context.moveTo(clockRadius, clockRadius);
  context.lineTo(
    clockRadius + clockRadius * 0.9 * Math.sin(secondsAngle),
    clockRadius - clockRadius * 0.9 * Math.cos(secondsAngle)
  );
  context.lineWidth = 2;
  context.stroke();
}
setInterval(setTime, 1000);
