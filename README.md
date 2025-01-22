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

- assets/styles: Holds the global styling and color theme of the application.
- components/: Contains reusable UI components.
- layouts/: Contains all the dynamic layout for this application
- pages/: Holds all the page route of the application.
- utils/: Holds utility functions and helper methods.
- public/images/: Holds the application's assets such as images and icons

## Routing

The platform uses Nuxt.js Routing for navigation between different pages. Key routing conventions include:

Square brackets ([ ]): Used for dynamic routes, such as displaying single blog page.

## API Source and State Management

I leveraged the [MockAPI](https://mockapi.io/projects) to create a quick and easy REST API for the blog posts.
State management in this Nuxt 3 application is handled using useFetch and local state.

- useFetch: A powerful Nuxt 3 tool for handling data fetching, it simplifies API requests, handles responses, provides built-in caching, and integrates seamlessly with server-side rendering (SSR). This was used because the application is a simple one.
- Local State Management: Vue's ref and reactive are used for managing component-specific states, such as controlling the current page, loading status, and blog post data.

## Styling

The css scoped styles was used for styling within components. Additionally, I leverage the design library [Tailwind](https://tailwindcss.com/docs) for a consistent, accessible, and responsive user interface across the platform.

## Testing

Vitest is used for unit testing in this Nuxt 3 application. It helps verify the functionality and rendering of components. Tests ensure components behave as expected and handle state changes correctly. The tests are located in the tests folder. Follow the step below to run the test.

- Run the command below:

```bash
npm run test
```

## Environment Variables

All sensitive data, such as API keys, credentials, and configuration details, are stored in the .env file. This file is critical for security and was not pushed to the repository. Create a .env file at the root directory.
Ensure that the .env file is correctly set up before running the application.

- Note: You will get the env sample from the ".env.example" file in the root directory. Use the url there to create your env file

## Conclusion

The Event in Minutes Blog application follows a clean, modular structure to ensure maintainability and scalability.

Check out the [deployment url](https://event-blog-ce0dp97vt-giftieapp.vercel.app) for more information.
