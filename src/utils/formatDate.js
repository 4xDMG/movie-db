const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function formatDate(dateString, yearOnly = false) {
  const date = new Date(dateString);

  if (yearOnly) return date.getFullYear();

  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

export default formatDate;
