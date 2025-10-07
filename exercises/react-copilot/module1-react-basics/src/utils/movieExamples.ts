// Test utilities and examples for useMovies hook
// This file demonstrates how to use the CRUD operations
import { CreateMovieData, UpdateMovieData } from '@/types/Movie';

// Example of adding a new movie
export const exampleAddMovie = async (addMovieFunction: (data: CreateMovieData) => Promise<void>) => {
  const newMovieData: CreateMovieData = {
    title: 'The Batman',
    director: 'Matt Reeves',
    ticketPrice: 29.99,
    releaseDate: '2022-03-04'
  };

  try {
    await addMovieFunction(newMovieData);
    console.log('Movie added successfully!');
  } catch (error) {
    console.error('Failed to add movie:', error);
  }
};

// Example of updating a movie
export const exampleUpdateMovie = async (
  updateMovieFunction: (id: string, data: UpdateMovieData) => Promise<void>,
  movieId: string
) => {
  const updateData: UpdateMovieData = {
    ticketPrice: 24.99, // Update only the price
    // Other fields remain unchanged
  };

  try {
    await updateMovieFunction(movieId, updateData);
    console.log('Movie updated successfully!');
  } catch (error) {
    console.error('Failed to update movie:', error);
  }
};

// Example of deleting a movie
export const exampleDeleteMovie = async (
  deleteMovieFunction: (id: string) => Promise<void>,
  movieId: string
) => {
  try {
    await deleteMovieFunction(movieId);
    console.log('Movie deleted successfully!');
  } catch (error) {
    console.error('Failed to delete movie:', error);
  }
};

// Example usage in a component:
/*
import { useMovies } from '@/hooks';

const MovieManagementComponent = () => {
  const { 
    movies, 
    loading, 
    error, 
    addMovie, 
    updateMovie, 
    deleteMovie,
    getMovieById 
  } = useMovies();

  const handleAddMovie = async () => {
    await exampleAddMovie(addMovie);
  };

  const handleUpdateMovie = async (id: string) => {
    await exampleUpdateMovie(updateMovie, id);
  };

  const handleDeleteMovie = async (id: string) => {
    await exampleDeleteMovie(deleteMovie, id);
  };

  // Component JSX...
};
*/