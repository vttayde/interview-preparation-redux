# Features

This directory contains feature modules organized by domain. Each feature folder contains all the Redux slices, utilities, and potentially specialized components related to that feature.

## Current Features

### Auth Feature

The `auth` folder contains authentication-related Redux logic:

- `authSlice.js`: Redux slice for authentication state including:
  - User login/signup
  - Authentication status
  - Error handling

### Form Feature

The `form` folder contains comprehensive form management Redux logic:

- `formSlice.js`: Redux slice for form state management including:
  - Form data tracking
  - Field-level validation with built-in validators
  - Form submission state and history
  - Field interaction tracking (touched fields)
  - Dirty state detection
  
#### Using the Form Feature with useForm hook

```jsx
// Example form with validation
import { useForm } from '../../hooks/useForm';
import { validators } from '../form/formSlice';

const ContactForm = () => {
  const { compose, required, email, minLength } = validators;
  
  // Define validation rules
  const validationRules = {
    name: compose(
      required('Name is required'),
      minLength(2, 'Name must be at least 2 characters')
    ),
    email: compose(
      required('Email is required'),
      email('Please enter a valid email')
    ),
    message: required('Message is required')
  };
  
  // Initialize form with validation
  const { 
    formData, 
    errors, 
    handleChange, 
    handleSubmit,
    isSubmitting
  } = useForm(
    { name: '', email: '', message: '' },
    validationRules
  );
  
  const onSubmit = async (data) => {
    // Send data to server
    await api.sendContactForm(data);
    alert('Form submitted successfully!');
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
        />
        {errors.name && <div className="error">{errors.name}</div>}
      </div>
      
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email || ''}
          onChange={handleChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message || ''}
          onChange={handleChange}
        />
        {errors.message && <div className="error">{errors.message}</div>}
      </div>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

## Feature Structure

Each feature follows this structure:

```
features/
└── feature-name/
    ├── featureSlice.js     # Redux slice with actions and reducer
    └── [other files]       # Additional files related to the feature
```

## Adding New Features

To add a new feature:

1. Create a new folder with the feature name
2. Create a slice file for Redux state management
3. Add the reducer to the store in `/store/index.js`
4. Implement components that use the feature state

## Best Practices

- Keep features focused on a specific domain
- Minimize dependencies between features
- Export only what's necessary from each feature
- Use selectors to access state from components
