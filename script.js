async function getAnswer(userQuestion) {
  const response = await fetch('database.json');
  const data = await response.json();
  
  const match = data.questions.find(q => userQuestion.includes(q.question));
  return match ? match.answer : "السؤال غير موجود في القاعدة.";
}
