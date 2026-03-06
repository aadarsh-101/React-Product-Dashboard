1. Project Overview
This project is a React-based web application that fetches product data from the DummyJSON API and displays it in a structured table format. The application allows users to view product details, edit product titles directly in the table, and dynamically load additional products using infinite scrolling.

2. Development Approach
The project was developed using React with Vite to enable fast development and optimized builds. The application consists of two main components:
App.jsx – The root component responsible for rendering the main layout.
ProductTable.jsx – Handles API data fetching, table rendering, title editing, and infinite scrolling.

3. State Management
- React Hooks were used to manage the application state:
- useState was used to store: Product data
- useEffect was used to trigger the initial API request when the component loads.
- This approach keeps the component reactive and ensures the UI updates automatically whenever the state changes.

4. Infinite Scrolling Implementation
- Infinite scrolling was implemented using the IntersectionObserver API.
- A reference element (sentinel) was placed at the bottom of the table. When the user scrolls near the bottom of the page, the observer detects the intersection and triggers a new API request to fetch additional products.
- This method is more efficient than traditional scroll event listeners and improves performance by avoiding unnecessary computations.

5. Editable Product Titles
- The product title field is editable using an input element within the table cell. When a user edits the title, the change is handled through an event listener that updates the corresponding product in the React state.

6. Challenges and Solutions
- One challenge encountered during development was preventing multiple API calls triggered by the IntersectionObserver when the observer fired repeatedly.
- This issue was addressed by introducing a loading state check that prevents additional requests while data is already being fetched.
- Another challenge was managing pagination while appending newly fetched products to the existing state without overwriting previous data.

7. Deployment
The application was deployed using Vercel, which allows automatic builds and deployment directly from the GitHub repository.

Live Application:
https://product-dashboard-two-zeta.vercel.app/

Source Code:
https://github.com/aadarsh-101/React-Product-Dashboard
