import Cards from "./Components/Cards";
import Counter from "./Components/Counter";
import Welcome from "./Components/Welcome";


const data = {

  img : 'https://www.imdb.com/title/tt0120737/' , 
  title : 'THIS IS LORD OF THE RINGS' , 
  description : 'The Lord of the Rings is an epic high fantasy novel written by English author J R R Tolkien set in the fictional world of Middle-eart'

}

function App() {
  return (
    <>
      <Welcome Name="Frodo Baggins" />
      <Counter />
      <Cards data={data} />
    </>
  );
}

export default App;
