import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Items from './components/Items';
import MainCard from './components/MainCard'
import './output.css'


function App() {
  const response = [
    { name: "Nirma", day: 5, month: "March", year: 2023 },
    { name: "Surf", day: 15, month: "July", year: 2021 },
    { name: "Tide", day: 25, month: "December", year: 2022 },
    { name: "Ariel", day: 10, month: "June", year: 2020 }
  ];
  
 return (
      <div className="bg-red-500 h-screen flex items-center justify-center">
        <MainCard Data={response}></MainCard>
        

      </div>
  );
}

export default App;
