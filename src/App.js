import FinancialCards from './components/FinancialCards';
import LinearCard from './components/LinearCard';
import Navbar from './components/Navbar';
import PieChartCard from './components/PieChartCard';
import SalesChart from './components/SalesChart';

function App() {
  return (
    <div style={{ display: 'block' }}>
      <Navbar />
      <div style={{ display: 'grid', gridTemplateColumns: '65% auto' }}>
        <div style = {{display:'flex' , flexDirection:'column' ,justifyContent:'space-around', alignItems:'center'}}> 
          <FinancialCards />
          <SalesChart />
        </div>
        <div>
          <LinearCard />
          <PieChartCard />
        </div>
      </div>
    </div>
  );
}

export default App;
