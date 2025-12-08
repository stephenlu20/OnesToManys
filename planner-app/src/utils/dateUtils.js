export const formatTime = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
};

export const formatDateTime = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString();
};

export const isSameDate = (date1, date2) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

export const getMonthDays = (year, month) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();
  
  const dayNumbers = [];
  
  // Add empty slots for days before the month starts
  for (let i = 0; i < firstDayOfWeek; i++) {
    dayNumbers.push(null);
  }
  
  // Add all days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    dayNumbers.push(day);
  }
  
  return dayNumbers;
};

export const convertToISO = (dateTimeLocal) => {
  return new Date(dateTimeLocal).toISOString();
};