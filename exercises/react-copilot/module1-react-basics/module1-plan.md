# Implementation Plan: React Basics with GitHub Copilot

## 🎯 Project Overview
**Goal**: Learn React fundamentals using GitHub Copilot to build a movie management application with TypeScript.

## 📁 Project Structure Setup

### Phase 1: Project Initialization
1. **Create React TypeScript project structure**
   ```
   module1-react-basics/
   ├── src/
   │   ├── components/
   │   │   ├── MovieList/
   │   │   ├── MovieDetail/
   │   │   ├── AddMovieForm/
   │   │   └── MovieSearch/
   │   ├── hooks/
   │   │   └── useMovies.ts
   │   ├── types/
   │   │   └── Movie.ts
   │   ├── utils/
   │   └── App.tsx
   ├── package.json
   ├── tsconfig.json
   └── README.md
   ```

2. **Setup package.json with dependencies**
   - React 18+
   - TypeScript
   - React DOM
   - Development tools (Vite/CRA)

## 🏗️ Implementation Phases

### Phase 2: Core Types & Interfaces (Foundation)
**Priority**: High | **Difficulty**: Beginner

#### Tasks:
1. **Create Movie interface** (`src/types/Movie.ts`)
   ```typescript
   interface Movie {
     id: string;
     title: string;
     director: string;
     ticketPrice: number;
     releaseDate: string;
   }
   ```

2. **Create supporting types**
   - `MovieListProps`
   - `MovieDetailProps`
   - `AddMovieFormProps`

**Copilot Prompts to use:**
- "TypeScript interface for movie with id, title, director, price, and release date"
- "Props interfaces for React components handling movie data"

---

### Phase 3: User Story 1 - Movie List Component (Beginner)
**Priority**: High | **Difficulty**: Beginner

#### Tasks:
1. **Create MovieList component** (`src/components/MovieList/MovieList.tsx`)
   - Accept `movies` array as props
   - Map over movies and display as cards
   - Show title, director, and price for each movie

2. **Create MovieCard subcomponent**
   - Individual movie display card
   - Basic styling structure

**Copilot Prompts:**
```typescript
// Komponent React do wyświetlania listy filmów
// Powinien przyjmować tablicę obiektów Movie jako props
// Każdy film powinien być wyświetlony jako karta z tytułem, reżyserem i ceną
```

**Deliverables:**
- `MovieList.tsx`
- `MovieCard.tsx` (optional subcomponent)
- Basic CSS/styling

---

### Phase 4: User Story 2 - Movie Detail Component (Intermediate)
**Priority**: High | **Difficulty**: Intermediate

#### Tasks:
1. **Create MovieDetail component** (`src/components/MovieDetail/MovieDetail.tsx`)
   - Display detailed movie information
   - Format release date in Polish format
   - Format price as Polish currency (PLN)
   - Handle null/undefined movie cases

2. **Implement formatters**
   - Date formatting utility
   - Currency formatting utility

**Copilot Prompts:**
```typescript
// Komponent do wyświetlania szczegółowych informacji o filmie
// Powinien formatować datę wydania w polskim formacie
// Powinien formatować cenę jako walutę polską
// Powinien obsłużyć przypadek gdy movie jest null/undefined
```

**Technical Requirements:**
- Conditional rendering
- Polish locale formatting
- Error boundary handling

---

### Phase 5: User Story 4 - Custom Hook (Advanced)
**Priority**: High | **Difficulty**: Advanced
*Note: Implementing this before the form to provide data management*

#### Tasks:
1. **Create useMovies hook** (`src/hooks/useMovies.ts`)
   - Manage movies state with useState
   - Implement loading and error states
   - Provide CRUD operations:
     - `addMovie`
     - `updateMovie`
     - `deleteMovie`
   - Include mock data for development

**Copilot Prompts:**
```typescript
// Custom hook React do zarządzania stanem listy filmów
// Powinien zwracać: movies, loading, error, addMovie, updateMovie, deleteMovie
// Powinien używać useState do lokalnego stanu
// Powinien zawierać mock data dla development
```

**Technical Requirements:**
- TypeScript return type definitions
- Error handling patterns
- Mock data structure

---

### Phase 6: User Story 3 - Add Movie Form (Advanced)
**Priority**: Medium | **Difficulty**: Advanced

#### Tasks:
1. **Create AddMovieForm component** (`src/components/AddMovieForm/AddMovieForm.tsx`)
   - Form fields: title, director, ticketPrice, releaseDate
   - Controlled components with useState
   - Form validation before submit
   - Submit and reset functionality
   - Integration with useMovies hook

**Copilot Prompts:**
```typescript
// Formularz React do dodawania nowego filmu
// Powinien zawierać pola: title, director, ticketPrice, releaseDate
// Powinien validować wszystkie pola przed submitem
// Powinien używać useState do zarządzania stanem formularza
// Powinien wywołać callback onSubmit z danymi filmu
```

**Technical Requirements:**
- Form validation logic
- Controlled inputs
- Error message display
- Form reset functionality

---

### Phase 7: Additional Features (Extended)
**Priority**: Low | **Difficulty**: Intermediate-Advanced

#### Exercise 5: Movie Search Component
1. **Create MovieSearch component** (`src/components/MovieSearch/MovieSearch.tsx`)
   - Search input field
   - Filter by title and director
   - Real-time filtering
   - Integration with MovieList

#### Exercise 6: Sorting Functionality
1. **Extend MovieList with sorting**
   - Sort dropdown/buttons
   - Sort criteria: title, release date, price
   - Ascending/descending options

---

### Phase 8: Integration & Main App
**Priority**: High | **Difficulty**: Intermediate

#### Tasks:
1. **Create main App component** (`src/App.tsx`)
   - Integrate all components
   - Use useMovies hook
   - Basic layout and navigation
   - Component composition

2. **Add basic styling**
   - CSS modules or styled-components
   - Responsive design basics
   - Polish UI elements

---

## 🛠️ Development Guidelines

### GitHub Copilot Best Practices:
1. **Use Polish comments** - Better context understanding
2. **Be specific in prompts** - More detailed = better suggestions
3. **Leverage TypeScript** - Types help generate better code
4. **Test all suggestions** - Always verify generated code

### Code Quality Standards:
- TypeScript strict mode
- Consistent naming conventions
- Component composition patterns
- Error boundary implementation
- Accessible HTML structure

## 📋 Testing Strategy
1. **Manual testing** of each component
2. **Props validation** with TypeScript
3. **Edge case testing** (null/undefined data)
4. **Form validation testing**
5. **Integration testing** between components

## 🎯 Success Criteria

After completing this implementation, you should be able to:
- ✅ Create React components using GitHub Copilot
- ✅ Use TypeScript interfaces for type safety
- ✅ Implement basic state management
- ✅ Create reusable custom hooks
- ✅ Handle forms with validation
- ✅ Format data for Polish locale
- ✅ Implement search and sorting features

## 📅 Estimated Timeline
- **Phase 1-2**: 1-2 hours (Setup & Types)
- **Phase 3**: 2-3 hours (MovieList)
- **Phase 4**: 2-3 hours (MovieDetail)
- **Phase 5**: 3-4 hours (useMovies hook)
- **Phase 6**: 3-4 hours (AddMovieForm)
- **Phase 7**: 2-4 hours (Additional features)
- **Phase 8**: 1-2 hours (Integration)

**Total estimated time**: 14-22 hours

## 📝 Implementation Notes

### Key Components Overview:
1. **Movie Interface** - Core data structure
2. **MovieList** - Display collection of movies
3. **MovieDetail** - Show individual movie details
4. **AddMovieForm** - Form for adding new movies
5. **useMovies Hook** - State management for movie data
6. **MovieSearch** - Search and filter functionality
7. **App** - Main application component

### Technical Stack:
- React 18+ with TypeScript
- Hooks (useState, useEffect, custom hooks)
- Polish locale formatting
- Form validation
- Component composition patterns

This plan provides a structured approach to implementing all the exercises described in the README.md, with clear phases, priorities, and deliverables for each component.