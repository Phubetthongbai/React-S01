import Hello from "./assets/Hello";
import Contact from "./assets/Contact";
import Counter from "./assets/Counter";

function App() {
  console.log('App component');
  return (
    <div className='App'>
      < Counter />

      <Hello name="Phubet" message="Hi there"/>
      <Hello name="Nice" message="Hello.."/>

      <Contact email="nice@gmail.com" phone="0988848052" />
    </div>
  );

}
export default App;
