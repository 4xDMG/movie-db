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

function formatDate(dateString) {
  const date = new Date(dateString);

  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

export default formatDate;
