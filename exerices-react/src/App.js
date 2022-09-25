import Person from "./components/Person"
import PersonsList from "./components/PersonsList"
import Counter from "./components/Counter"
import Profile from "./components/Profile"
import ListOfUsers from "./components/ListOfUsers"
const persons = [
  {
    firstname:'aziz',
    lastname:'saadi',
    age:22
  },
  {
    firstname:'kamel',
    lastname:'hatira',
    age:17
  },
  {
    firstname:'ons',
    lastname:'jabeur',
    age:29
  }
]

function App() {
  return (
    <div>
      <ListOfUsers />
    </div>
  );
}


export default App;
