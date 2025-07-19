# Redux Store

This folder contains the Redux store configuration for the application.

## Architecture

This project follows Redux Toolkit's recommended **feature-based architecture**:

- **Store Configuration**: Centralized in this folder (`/store/index.js`)
- **Feature Slices**: Located in their respective feature folders (`/features/{feature}/`)

```
src/
├── features/                # Feature modules
│   ├── auth/                # Auth feature 
│   │   └── authSlice.js     # Auth Redux slice
│   └── form/                # Form feature
│       └── formSlice.js     # Form Redux slice
└── store/                   # Redux store configuration
    └── index.js             # Store setup and exports
```

## Benefits of Feature-based Architecture

1. **Domain-Driven Organization**:
   - Code is organized by feature/domain rather than by technical type
   - Makes it easier to find related code for a specific feature

2. **Better Maintainability**:
   - Features can be developed, tested, and maintained in isolation
   - Reduces coupling between different parts of the application

3. **Scalability**:
   - As the application grows, new features can be added without impacting existing ones
   - Feature folders become self-contained modules

## Redux Best Practices Implemented

- Using Redux Toolkit to simplify Redux code
- Proper organization of slices and store configuration
- Centralized store setup with extensible configuration

## Adding New Features

To add a new feature with Redux:

1. Create a new folder in `/features/{new-feature}/`
2. Create a slice file in that folder (`{new-feature}Slice.js`)
3. Import and add the reducer to the store in this folder's `index.js`
