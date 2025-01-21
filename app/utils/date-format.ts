export function convertTime(date: string) {
  if (!date) return;
  const convertDate = new Date(date);
  return convertDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

export function convertDay(date: string) {
  if (!date) return;
  const convertDate = new Date(date);
  const day = convertDate.getDate().toString().padStart(2, "0");
  const month = (convertDate.getMonth() + 1).toString().padStart(2, "0");
  const year = convertDate.getFullYear();

  return `${day}.${month}.${year}`;
}
