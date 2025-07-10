document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const selectedValues = Array.from(document.querySelectorAll('input[name="value"]:checked')).map(el => el.value);
  const selectedField = document.getElementById('field').value;

  const jobs = {
    '예술': { '자율성': '작가' },
    '의료': { '기여': '간호사' },
    '기술': { '영향력': '소프트웨어 개발자' },
    '국방': { '안정성': '군인' },
    '사회': { '안정성': '회사원' }
  };

  let result = '추천 결과가 없어요.';

  if (jobs[selectedField]) {
    for (const val of selectedValues) {
      if (jobs[selectedField][val]) {
        result = `추천 직업: ${jobs[selectedField][val]} - ${val} 가치와 ${selectedField} 분야에 적합합니다.`;
        break;
      }
    }
  }

  document.getElementById('result').textContent = result;
});
