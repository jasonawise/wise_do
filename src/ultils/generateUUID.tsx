export default function generateUUID() {
  let uuid = '';
  const hex = '0123456789abcdef';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 32; i++) {
    uuid += hex.charAt(Math.floor(Math.random() * 16));
  }

  return uuid;
}
