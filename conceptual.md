### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  -- React is a component based JS library. Its used for UIs and SPAs, its extremely help 
  -- when dealing with repetetive components

- What is Babel?
  -- Javascript compiler thats converts modern javascript code into version compatible with all browsers.

- What is JSX?
  -- JSX is a syntax extension to javascriipt, we use it with react to describe what the
  -- UI should look like. 

- How is a Component created in React?
  -- Components name must start with an uppercase letter. Import react, describe component, 
  -- export component, use in html as an element.

- What are some difference between state and props?
  -- state can be mutated, we initialize and set state inside of component,
  -- meanwwhile props are immutable, and passed into component via parameters and used as attributes.

- What does "downward data flow" refer to in React?
  -- A parent component creating and uses lower child components.
  -- creating a hierchy to separate concerns.

- What is a controlled component?
  -- a compononents state kept in react state rather than dealing with the DOM

- What is an uncontrolled component?
  -- form data handled by the DOM instead.

- What is the purpose of the `key` prop when rendering a list of components?
  -- its used to determine which of the list is to be re rendered rather than returning the whole list.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  -- bc react will optimize and not render as expected, example: if an item is removed.

- Describe useEffect.  What use cases is it used for in React components?
  -- useEffect is ran after the first render. used to get some date needed to show in the DOM.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  -- useRef allows us to persist values between renders. can be used to store mutable data that
  -- does not cause a re-render.

- When would you use a ref? When wouldn't you use one?
  -- managing focus, triggering imperative animation, integrating with third party,
  -- should not over use and should decide if better to "own" state at a higher place in the hierchy.

- What is a custom hook in React? When would you want to write one?
  -- a javascript function that uses built in hooks. would use to toggle state or
  -- when we do something often in app.