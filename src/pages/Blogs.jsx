import React from "react";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Blogs = () => {
  return (
    <>
      <div className="blogs w-[88%] mx-auto my-20 space-y-5">
        <h2 className="font-bold text-3xl text-blue-500">
          1. What is useState and how does it work in React?
        </h2>
        <p className="font-normal text-xl text-justify">
          Answer: useState is a React Hook that allows functional components to
          manage state. It returns an array with two elements: the current state
          value and a function to update it. When the state is updated using
          this function, React re-renders the component to reflect the new
          state.
        </p>
        <h2 className="font-bold text-3xl text-blue-500">
          2. What is the purpose of useEffect in React?{" "}
        </h2>
        <p className="font-normal text-xl text-justify">
          Answer: useEffect is a React Hook used to handle side effects like
          data fetching, subscriptions, DOM manipulation, and timers. It runs
          after the render and can optionally clean up resources by returning a
          function. It also accepts a dependency array to control when it should
          re-run.
        </p>
        <h2 className="font-bold text-3xl text-blue-500">
          3. What is a custom hook in React and when should you use one?{" "}
        </h2>
        <p className="font-normal text-xl text-justify">
          Answer: A custom hook is a reusable JavaScript function that starts
          with "use" and encapsulates logic using React hooks like useState,
          useEffect, etc. Use custom hooks when you want to extract and share
          logic across multiple components to keep code clean and modular.
        </p>
        <h2 className="font-bold text-3xl text-blue-500">
          4. Difference between controlled and uncontrolled components. Which
          one is better?
        </h2>
        <p className="font-normal text-xl text-justify">
          Answer: Controlled components rely on React state to manage form
          inputs, while uncontrolled components use refs to access DOM values
          directly. Controlled components are generally better because they
          offer more predictable behavior and easier validation, especially in
          complex forms.
        </p>
        <h2 className="font-bold text-3xl text-blue-500">
          5. Tell us something about useFormStatus() in React.{" "}
        </h2>
        <p className="font-normal text-xl text-justify">
          Answer: useFormStatus() is a hook available in React's experimental
          features (like with React Server Components). It gives real-time
          status info (like pending, success, or error) during form submission,
          helping you show loading indicators or disable buttons while a form is
          being processed.
        </p>
      </div>
    </>
  );
};

export default Blogs;
