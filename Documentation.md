React Product Dashboard – Development Documentation

Development Approach
The project was developed using React with Vite for fast development and optimized builds. The application fetches product data from the DummyJSON API and displays it in a table.

State Management
React Hooks were used for state management. useState manages product data, loading state, and pagination parameters. useEffect is used for fetching initial data.

Infinite Scrolling
Infinite scrolling was implemented using the IntersectionObserver API. A sentinel div is observed at the bottom of the table. When the user scrolls near the bottom, the observer triggers another API request to fetch additional products.

Editable Product Title
The product title field is editable using an input field. When the user edits a title, the local React state is updated using a state update function.

Conclusion
The application demonstrates API integration, state management with React Hooks, editable UI components, and infinite scrolling.
