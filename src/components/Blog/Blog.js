import Accordion from 'react-bootstrap/Accordion';

function Blog() {
    return (
        <Accordion className='container mt-5' defaultActiveKey="0">
            <h1>Frequently Asked Questions</h1>
            <Accordion.Item eventKey="0">
                <Accordion.Header>(01) What is the purpose of React Router?</Accordion.Header>
                <Accordion.Body>
                    ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>(02) How does Context API work?</Accordion.Header>
                <Accordion.Body>
                    Context provides a way to pass data through the component tree without having to pass props down manually at every level. <br />
                    In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>(03) Write a short note on useRef</Accordion.Header>
                <Accordion.Body>
                    useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current. <br />
                    The useRef Hook allows you to persist values between renders.<br />
                    It can be used to store a mutable value that does not cause a re-render when updated.<br />
                    It can be used to access a DOM element directly.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Blog;