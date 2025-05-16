export default defineEventHandler(() => {
  const images = [
    'https://picsum.photos/seed/1/600/400',
    'https://picsum.photos/seed/2/600/400',
    'https://picsum.photos/seed/3/600/400',
    'https://picsum.photos/seed/4/600/400',
    'https://picsum.photos/seed/5/600/400'
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  return {
    image: randomImage
  };
});