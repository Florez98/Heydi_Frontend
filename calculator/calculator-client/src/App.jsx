import Calculator from './components/organisms/Calculator/Calculator';
import './App.scss';

import { CalculatorProvider } from './context/CalculatorProvider';

const App = () => {
  return (
    <main>
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    </main>
  );
};

export default App;
