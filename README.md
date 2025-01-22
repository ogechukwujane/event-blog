# Event in Minutes Blog

An Ideas Hub, where we share tips, trends and inspiration for unforgettable events.

## Setup

To run the project locally, follow these steps:

- Clone the repository.
- Install dependencies using

```bash
# npm
npm install
```

- Run the development server:

```bash
npm run dev
```

After setting up, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows a modular and well-organized structure. The application folders are housed within the app folder, with folder and file names following kebab-case naming conventions for consistency.

## Key Folders:

components/: Contains reusable UI components.
layouts/: Contains all the dynamic layout for this application
pages/: Holds all the page route of the application.
utils/: Holds utility functions and helper methods.
public/images/: Holds the application's assets such as images and icons

## Routing

The platform uses Nuxt.js Routing for navigation between different pages. Key routing conventions include:

Square brackets ([ ]): Used for dynamic routes, such as displaying single blog page.

## API Source

I leveraged the [MockAPI](https://mockapi.io/projects) to create a quick and easy REST API for the blog posts.

## State Management

State management is handled efficiently using Nuxt 3's useFetch. This built-in tool simplifies API data fetching, caching, and synchronization, reducing the need for complex state management solutions.

## Styling

The css scoped styles was used for styling within components. Additionally, I leverage the design library [Tailwind](https://tailwindcss.com/docs) for a consistent, accessible, and responsive user interface across the platform.

## Environment Variables

All sensitive data, such as API keys, credentials, and configuration details, are stored in the .env file. This file is critical for security and was not pushed to the repository. Create a .env file at the root directory.
Ensure that the .env file is correctly set up before running the application.

## Conclusion

The Event in Minutes Blog application follows a clean, modular structure to ensure maintainability and scalability.

Check out the [deployment url](https://nuxt.com/docs/getting-started/deployment) for more information.
