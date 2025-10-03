document.getElementById("bmiForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  const bmiElement = document.getElementById("bmi");
  const descElement = document.getElementById("desc");
  const adviceElement = document.getElementById("advice");
  const progress = document.getElementById("progress");

  if (!weight || !height) {
    alert("Please enter valid weight and height!");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(1);
  bmiElement.textContent = bmi;

  let desc = "";
  let color = "";
  let advice = "";

  if (bmi < 18.5) {
    desc = "Underweight 😕";
    color = "#3498db";
    progress.style.width = "20%";
    advice = "Cobalah meningkatkan asupan kalori sehat, lakukan latihan beban ringan, dan tidur cukup.";
  } else if (bmi < 25) {
    desc = "Normal ✅";
    color = "#2ecc71";
    progress.style.width = "50%";
    advice = "Pertahankan pola makan seimbang, lakukan kombinasi cardio dan strength training 3–4 kali seminggu.";
  } else if (bmi < 30) {
    desc = "Overweight ⚠️";
    color = "#f39c12";
    progress.style.width = "75%";
    advice = "Kurangi makanan tinggi gula & lemak, lakukan olahraga seperti jogging, bersepeda, atau berenang.";
  } else {
    desc = "Obese ❌";
    color = "#e74c3c";
    progress.style.width = "100%";
    advice = "Mulailah dengan aktivitas ringan seperti jalan kaki 30 menit, yoga, atau renang low-impact. Konsultasi ke dokter disarankan.";
  }

  bmiElement.style.color = color;
  descElement.textContent = desc;
  progress.style.background = color;
  adviceElement.textContent = advice;
});
