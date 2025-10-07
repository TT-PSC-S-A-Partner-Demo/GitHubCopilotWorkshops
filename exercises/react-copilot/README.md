# GitHub Copilot for React Developers

## Workshop Overview
Ten warsztat został zaprojektowany specjalnie dla deweloperów React, aby nauczyć ich efektywnego wykorzystania GitHub Copilot w codziennej pracy. Workshop opiera się na Movies API i prowadzi przez różne scenariusze - od podstawowych komponentów po zaawansowane wzorce architektury aplikacji.

## Movies API Specification

### Base URL
```
http://localhost:5000/api
```

### Available Endpoints

#### Movies
- `GET /api/movies` - Pobierz wszystkie filmy
- `GET /api/movies/{id}` - Pobierz film po ID
- `POST /api/movies` - Stwórz nowy film
- `PUT /api/movies/{id}` - Zaktualizuj film
- `DELETE /api/movies/{id}` - Usuń film

#### Movie Data Model
```typescript
interface Movie {
  id: string;
  title: string;
  director: string;
  ticketPrice: number;
  releaseDate: string;
  createdAt: string;
  updatedAt: string;
}
```

#### Request Models
```typescript
interface CreateMovieRequest {
  id: string;
  title: string;
  director: string;
  ticketPrice: number;
  releaseDate: string;
}

interface UpdateMovieRequest {
  title: string;
  director: string;
  ticketPrice: number;
  releaseDate: string;
}
```

## Session Activities

For a detailed breakdown of workshop sessions with specific activities, goals, and achievements, see:
📋 **[SESSION-ACTIVITIES.md](./SESSION-ACTIVITIES.md)** - Complete session-by-session guide with time allocations and deliverables

## Learning Path

Warsztat składa się z pięciu modułów o narastającym poziomie złożoności:

### [Module 1: React Basics with Copilot](./module1-react-basics/README.md)
- Tworzenie podstawowych komponentów React z pomocą Copilot
- Zarządzanie stanem z useState i useEffect
- Props i TypeScript interfaces
- Event handling i conditional rendering

### [Module 2: API Integration and Data Management](./module2-api-integration/README.md)
- Tworzenie custom hooks do komunikacji z API
- Implementacja operacji CRUD
- Error handling i loading states
- Axios configuration i interceptors

### [Module 3: Advanced UI Components and Patterns](./module3-advanced-ui/README.md)
- Formularze z walidacją (React Hook Form + Zod)
- Modal dialogs i confirmation prompts
- Table components z sortowaniem i filtrowaniem
- Responsive design i accessibility

### [Module 4: State Management and Architecture](./module4-state-management/README.md)
- Context API do globalnego stanu
- Reducer pattern dla złożonych operacji
- Optymalizacja wydajności (React.memo, useMemo, useCallback)
- Error boundaries i logging

### [Module 5: Testing and Deployment](./module5-testing-deployment/README.md)
- Unit testy z React Testing Library i Jest
- Integration testy dla API calls
- E2E testy z Playwright
- Build optimization i deployment strategies

## Prerequisites
- Access to GitHub Copilot (individual plan lub organization/enterprise subscription)
- Visual Studio Code z GitHub Copilot i Copilot Chat extensions
- Node.js (version 18+) i npm/yarn
- Podstawowa znajomość React, TypeScript i REST APIs
- Running Movies API (dostępne w `../dotnet-movies-api/`)

## Workshop Structure
Każdy moduł zawiera ćwiczenia o różnych poziomach trudności:
- **Beginner**: Podstawowe ćwiczenia dla osób nowych w konceptach
- **Intermediate**: Bardziej złożone scenariusze wymagające głębszego zrozumienia
- **Advanced**: Wyzwania symulujące rzeczywiste problemy projektowe

## Best Practices for Working with GitHub Copilot in React
- Używaj opisowych komentarzy przed generowaniem komponentów
- Wykorzystuj TypeScript interfaces dla lepszych sugestii
- Testuj regularnie kod generowany przez AI pod kątem bezpieczeństwa i wydajności
- Łącz wiedzę domenową z sugestiami Copilot dla optymalnych rezultatów
- Używaj konkretnych i jasnych promptów dla lepszych wyników

## Project Structure
```
movies-app/
├── public/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom hooks
│   ├── services/           # API services
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── context/            # React contexts
│   └── styles/             # CSS/SCSS files
├── tests/
└── docs/
```

## Additional Resources
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
