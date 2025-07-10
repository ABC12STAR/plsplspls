document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  const values = Array.from(document.querySelectorAll("input[name='value']:checked")).map(el => el.value);
  const field = document.getElementById("field").value;
  const result = document.getElementById("result");

  let job = "추천 결과가 없어요. 다른 조합을 시도해보세요.";

  if (field === "국방" && values.includes("안정성")) {
    job = "추천 직업: 군인 - 안정성과 국가 기여도가 높은 직업입니다.";
  } else if (field === "예술" && values.includes("자율성")) {
    job = "추천 직업: 작가 - 자율적으로 창작 활동을 할 수 있습니다.";
  } else if (field === "의료" && values.includes("기여")) {
    job = "추천 직업: 간호사 - 다른 사람에게 직접적인 도움을 줄 수 있습니다.";
  } else if (field === "기술" && values.includes("영향력")) {
    job = "추천 직업: 소프트웨어 개발자 - 사회에 큰 영향을 미칠 수 있는 직업입니다.";
  }

  result.textContent = job;
});