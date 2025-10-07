// Test utilities for MovieList component
import { Movie } from '@/types/Movie';

// Mock data generator for testing
export const generateMockMovies = (count: number = 5): Movie[] => {
  const movieTitles = [
    'Oppenheimer', 'Barbie', 'Dune: Part Two', 'Spider-Man: Across the Spider-Verse',
    'John Wick: Chapter 4', 'Fast X', 'Indiana Jones and the Dial of Destiny',
    'Mission: Impossible – Dead Reckoning Part One', 'Transformers: Rise of the Beasts',
    'The Little Mermaid'
  ];
  
  const directors = [
    'Christopher Nolan', 'Greta Gerwig', 'Denis Villeneuve', 'Joaquim Dos Santos',
    'Chad Stahelski', 'Louis Leterrier', 'James Mangold', 'Christopher McQuarrie',
    'Steven Caple Jr.', 'Rob Marshall'
  ];

  return Array.from({ length: Math.min(count, movieTitles.length) }, (_, index) => ({
    id: `movie-${index + 1}`,
    title: movieTitles[index],
    director: directors[index],
    ticketPrice: Math.round((15 + Math.random() * 20) * 100) / 100, // 15-35 PLN
    releaseDate: `2023-0${Math.floor(Math.random() * 9) + 1}-${Math.floor(Math.random() * 28) + 1}`
  }));
};

// Extended mock data for development
export const extendedMockMovies: Movie[] = generateMockMovies(10);