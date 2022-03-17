import Body from './components/Body/Body';
import Presale from './components/Presale/Presale';
import Playtoearn from './components/Playtoearn/Playtoearn';
import Roadmap from './components/Roadmap/Roadmap';
import Team from './components/Team/Team';
import Token from './components/Token/Token';
import Collection from './components/Collection/Collection';
import Farm from './components/Farm/Farm';
import Modes from './components/Modes/Modes';


function App() {
  return (
    <div>
   <Body/>
   <Modes/>
   <Presale/>
   <Playtoearn/>
   <Roadmap/>
   <Team/>
   <Collection/>
   <Token/>
   <Farm/>

   </div>
  );
}

export default App;
