document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const values = Array.from(document.querySelectorAll('input[name="value"]:checked')).map(el => el.value);
  const field = document.querySelector('#field').value;

  const recommendations = {
    '예술': { '자율성': '작가' },
    '의료': { '기여': '간호사' },
    '기술': { '영향력': '소프트웨어 개발자' },
    '국방': { '안정성': '군인' }
  };

  let result = '추천 결과가 없어요.';

  if (recommendations[field]) {
    for (const val of values) {
      if (recommendations[field][val]) {
        result = `추천 직업: ${recommendations[field][val]} - ${val} 가치와 ${field} 분야에 잘 맞는 직업입니다.`;
        break;
      }
    }
  }

  document.getElementById('result').textContent = result;
});
