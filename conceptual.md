### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
> React is a library although many people say it is a framework. 
> 
> I would use React to greate the front end of a web application
> 
> I would yse it becouse it is a very fast way to create interactive
> singlepage ui
- What is Babel?
> Babel is a library that can turn es 2015 code or newer into older
> 
> versions so they can work in diferent browsers withour crashing.
> Babel is also what we need to use JSX.
- What is JSX?
> JSX is a way to inject html into the dome using javascript.
> 
- How is a Component created in React?
> A component is created by creating a js file inside that file 
> 
> we create a function or a class and we return JSX.
> 
> after that we export the function and inported in the main App component.
> The app component is then injected into a div on ower html page.
> usioaly that div haves an id of root.
- What are some difference between state and props?
> the difference between state and props is taht props is imutable
> 
> props is passed down to a component 
> 
> state is created in a component and is bound to that component
> but can be passed down as props.
- What does "downward data flow" refer to in React?
> It refers to how a parent element usioly shud hold the data in state.
> and the data is passed down only as props.
- What is a controlled component?
> Controlled component is when a component gets its data from the parent component
> 
> and the way to change the parent component state is by having access to
> 
> a callback function passed down as props. witch can change the state and send new data downward
> to the child component.
> 
- What is an uncontrolled component?
> uncontroled component is when the component dos not use the parent components state.
> but uses javascript to get data from the dom by using useRef
- What is the purpose of the `key` prop when rendering a list of components?
> The key prop shud be a unique value that helps react keep track of the different components
> and bether handles the display of the correct components.
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
> It is a bad ide becouse the array index is not static it changes everytime an element is removed or added.
- Describe useEffect.  What use cases is it used for in React components?
> Use effect is used to controll the functions we create in side of the component.
> We dont necesarely whant to run all functions everytime a component is rerendered
> and useEffect is a way to specifie when do we whant to run specific functions.
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
> Use ref creates and object and it can select an element on the dom.
> UseRef does not rerender the component.
- When would you use a ref? When wouldn't you use one?
> UseRef is used in uncontroled components.
> I wont use useRef if i can help it.
- What is a custom hook in React? When would you want to write one?
> Costume hooks are a way to create reusable state functions.
> 
> I would write one if i have components that use the same or similar 
> 
> functionality using state
