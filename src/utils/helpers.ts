import { tournamentCategoriesImages } from 'images';

export function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function formatCurrency(amount?: number) {
  return amount
    ? amount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : amount;
}

export const tournamentCategories = [
  {
    title: 'Valorant',
    id: 'valorant',
    images: tournamentCategoriesImages.valorant,
  },
  {
    title: 'CS:GO',
    id: 'csgo',
    images: tournamentCategoriesImages.csgo,
  },
  {
    title: 'Dota 2',
    id: 'dota-2',
    images: tournamentCategoriesImages.dota2,
  },
  {
    title: 'PUBG',
    id: 'pubg',
    images: tournamentCategoriesImages.pubg,
  },
  {
    title: 'Fortnite',
    id: 'fortnite',
    images: tournamentCategoriesImages.fortnite,
  },
  {
    title: 'League of Legends',
    id: 'league-of-legends',
    images: tournamentCategoriesImages.lol,
  },
] as const;

