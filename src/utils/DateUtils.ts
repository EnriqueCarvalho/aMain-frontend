export function formatDateToPTBR(date: string | Date): string {
  let dateObj: Date;

  if (typeof date === 'string') {
    const parts = date.split('-');
    dateObj = new Date(
      parseInt(parts[0], 10),
      parseInt(parts[1], 10) - 1,
      parseInt(parts[2], 10)
    );
  } else {
    dateObj = date;
  }

  return dateObj.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}
