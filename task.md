Exercise 13: Render Props for Data Fetching
Objective: Implement a component using the Render Props pattern to fetch data and pass it to
its children.
Instructions:
1. Create a functional component named DataLoader.
2. DataLoader should accept a render prop, which is a function.
3. Inside DataLoader, use useState and useEffect to simulate fetching data (e.g.,
from https://jsonplaceholder.typicode.com/posts/1). Manage data,
loading, and error states.
4. Call the render prop function, passing the data, loading, and error states as
arguments.
5. In your App component, use DataLoader and its render prop to display the fetched
data or a loading/error message.
Expected Output: A component that fetches data and displays it, with loading and error states
handled by the consumer of the DataLoader component.
Hints:
- The render prop will be a function that takes an object as an argument.
- Remember to handle the loading and error states within the render prop function.MSc. Tran Vinh Khiem BCU2025 Lab 5: Intermediate React
Exercise 14: Complex State Management with useReducer
Objective: Rebuild the Todo List application (Exercise 5) using the useReducer Hook for state
management.
Instructions:
1. Create a reducer function for your todo list that handles actions like ADD_TODO,
TOGGLE_TODO, and REMOVE_TODO.
2. Modify the TodoList component to use useReducer instead of useState for
managing the todo items.
3. Ensure all existing functionalities (adding, displaying) work correctly.
4. Add a new feature: a checkbox next to each todo item to mark it as
completed/uncompleted. Update the reducer to handle the TOGGLE_TODO action.
5. Add a button to remove a todo item. Update the reducer to handle the REMOVE_TODO
action.
Expected Output: A todo list with add, toggle completion, and remove functionalities, all
managed by a useReducer hook.
Hints:
- The reducer function takes state and action as arguments.
- The action object should have a type property and potentially a payload.
- useReducer returns the current state and a dispatch function.
Exercise 15: Optimizing a List with React.memo and useCallback
Objective: Demonstrate performance optimization techniques (React.memo and
useCallback) in a component with a list of items.
Instructions:
1. Create a ListItem functional component that displays an item and a button to perform
an action (e.g., "Delete"). This component should be wrapped with React.memo.
2. In a parent component (OptimizedList), render a list of ListItem components.
3. Pass a callback function (e.g., handleDeleteItem) from the parent to each
ListItem.
4. Use useCallback to memoize the handleDeleteItem function in the parent
component, ensuring it's not recreated on every render unless its dependencies change.MSc. Tran Vinh Khiem BCU2025 Lab 5: Intermediate React
5. Add a state in the parent component that, when updated, causes the parent to re-render
but should not cause the ListItem components to re-render unnecessarily (unless
their own props change).
6. Use console.log inside ListItem to observe when it re-renders.
Expected Output: A list of items where individual ListItem components only re-render when
their specific props change, demonstrating the effectiveness of React.memo and
useCallback.
Hints:
- React.memo performs a shallow comparison of props by default.
- useCallback requires a dependency array; an empty array means the function is
created once.
Exercise 16: Implementing an Error Boundary
Objective: Create a reusable ErrorBoundary component to gracefully handle JavaScript
errors in child components and display a fallback UI.
Instructions:
1. Create a class component named ErrorBoundary.
2. Implement static getDerivedStateFromError(error) to update the
component's state (e.g., hasError: true).
3. Implement componentDidCatch(error, info) to log the error (e.g., to
console.error).
4. In the render method, if hasError is true, display a fallback UI (e.g., "Something went
wrong."). Otherwise, render this.props.children.
5. Create a BuggyComponent that intentionally throws an error under certain conditions
(e.g., when a button is clicked a specific number of times).
6. Wrap the BuggyComponent with your ErrorBoundary in your App component.
Expected Output: When the BuggyComponent throws an error, the ErrorBoundary should
catch it and display the fallback UI instead of crashing the entire application.
Hints:
- Error boundaries only catch errors in their child component tree, not within themselves.MSc. Tran Vinh Khiem BCU2025 Lab 5: Intermediate React
- Errors in event handlers are not caught by error boundaries.
Exercise 17: Modal with Portals
Objective: Build a reusable modal component that renders outside the normal DOM hierarchy
using ReactDOM.createPortal.
Instructions:
1. In your public/index.html file, add a new div element with an id (e.g., modalroot) outside the main root div.
2. Create a functional component named Modal that accepts isOpen, onClose, and
children props.
3. Inside the Modal component, use ReactDOM.createPortal to render its children
into the modal-root DOM node.
4. Implement basic modal styling (overlay, content box, close button).
5. Add an onClick handler to the overlay to close the modal when clicked outside the
content.
6. In your App component, use the Modal component to display some content.
Expected Output: A modal window that appears on top of the main application content, and
can be closed by clicking outside or on a close button.
Hints:
- Import ReactDOM from react-dom.
- Ensure the modal-root element exists in your index.html.
- Prevent event propagation from the modal content to the overlay to avoid accidental
closing.
Exercise 18: Testing a Simple Component (Introduction to React Testing
Library)
Objective: Write basic unit tests for a simple React component using React Testing Library.
Instructions:
1. Install necessary testing libraries: npm install --save-dev @testinglibrary/react @testing-library/jest-dom jest (if not already installed by
create-react-app).MSc. Tran Vinh Khiem BCU2025 Lab 5: Intermediate React
2. Create a test file (e.g., Counter.test.js) for your Counter component (from
Exercise 3).
3. Write tests to:
- Verify that the initial count is displayed correctly.
- Simulate a click on the "Increment" button and assert that the count increases.
- Simulate a click on the "Decrement" button and assert that the count decreases.
- Simulate a click on the "Reset" button and assert that the count resets to 0.
4. Use render, screen.getByText, fireEvent.click, and expect from React
Testing Library.
Expected Output: All tests for the Counter component pass successfully, demonstrating how
to test component rendering and user interactions.
Hints:
- Focus on testing user behavior, not internal implementation details.
- Use screen.getByRole or screen.getByText to query elements.
- fireEvent simulates user interactions.
Exercise 19: Testing a Form Component
Objective: Write tests for a form component, covering input changes, validation, and
submission.
Instructions:
1. Create a test file (e.g., LoginForm.test.js) for your LoginForm component (from
Exercise 10).
2. Write tests to:
- Verify that the form renders correctly with initial empty inputs.
- Simulate typing into the email and password fields.
- Assert that validation error messages appear when inputs are invalid.
- Assert that the submit button is disabled when the form is invalid.
- Simulate a successful form submission and assert that a success message is
displayed.
3. Use render, screen.getByLabelText, screen.getByRole,
fireEvent.change, fireEvent.click, and expect.
Expected Output: All tests for the LoginForm component pass, ensuring its functionality and
validation logic work as expected.
Hints:MSc. Tran Vinh Khiem BCU2025 Lab 5: Intermediate React
- Use fireEvent.change to simulate user input into form fields.
- Test both valid and invalid input scenarios.
- Assert the presence or absence of error messages.
This expanded set of exercises provides a deeper dive into advanced React concepts,
preparing students for more complex real-world applications and professional development
roles. Each exercise is designed to be hands-on, encouraging active learning and problemsolving.