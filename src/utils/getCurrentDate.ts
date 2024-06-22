export function getCurrentDateTime(): string {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1; 
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedDate = `${day}.${month}.${year}`;
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return `${formattedDate}, ${formattedTime}`;
}

