import './App.css';
// import Feedback from '../Feedback';
// import Phonebook from '../Phonebook';
// import PlayerApp from '../PlayerApp';
import ReaderApp from '../ReaderApp';
import publications from "../../constants/publications.json";
// import ImagesApp from '../Images';


export default function App() {
  return (
    <div>
      <h1>React-HW-2</h1>

      {/* <Feedback /> */}

      {/* <Phonebook /> */}

      {/* <PlayerApp /> */}

      <ReaderApp
        items={publications}
      />

      {/* <Images/> */}
    </div>
  );
};
