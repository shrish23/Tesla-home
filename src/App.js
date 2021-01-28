import './App.css';
import Header from './components/Header';

import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';
import Item from './components/Item';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_itemContainer">
        <Item
          title = 'Lowest Cost Solar Panels in America'
          desc='Money-Back guarantee'
          backgroundImg={SolarPanels}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item
          title = 'Model S'
          desc='$69,420'
          backgroundImg={ModelS}
          leftBtnText='CUSTOMER ORDER'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title = 'Model 3'
          desc='Money-Back guarantee'
          backgroundImg={Model3}
          leftBtnText='CUSTOMER ORDER'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title = 'Model X'
          desc='Money-Back guarantee'
          backgroundImg={ModelX}
          leftBtnText='CUSTOMER ORDER'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title = 'Model Y'
          desc='Money-Back guarantee'
          backgroundImg={ModelY}
          leftBtnText='CUSTOMER ORDER'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title = 'Solar for New Roofs'
          desc='Money-Back guarantee'
          backgroundImg={SolarRoof}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title = 'Accessories'
          desc='Money-Back guarantee'
          backgroundImg={Accessories}
          leftBtnText='SHOP NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
        />
      </div>
    </div>
  );
}

export default App;
