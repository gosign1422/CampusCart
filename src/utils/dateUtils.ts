export function getDeliveryDate(): string {
  const date = new Date();
  // Add 9 days
  date.setDate(date.getDate() + 9);
  
  // Format date to Indian style (e.g., "Friday, Jan 10, 2025")
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'Asia/Kolkata'
  });
}