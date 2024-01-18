import React, { useEffect, useState } from 'react';
import { Label } from './components/atoms';
import { DatePicker, Table } from './components/organism';
import { TITLE_PAGE } from './constants';
import { getEnergy } from './services';

function App() {
  const [days, setDays] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) {
      getEnergy(currentDate.getFullYear(), currentDate.getMonth())
        .then((data) => setDays(data.days))
        .catch((err) => console.error(err));
    } else {
      setIsInitialized(true);
    }
  }, [currentDate, isInitialized]);

  return (
    <div className='app'>
      <header>
        <Label className='label__generic label__title' text={TITLE_PAGE} />
        <DatePicker
          className='date-picker'
          initialDate={currentDate}
          handleDateChange={(date) => setCurrentDate(date)}
        />
      </header>
      <main>
        <Table days={days} currentDate={currentDate} />
      </main>
      {/* <code>{JSON.stringify(days)}</code> */}
    </div>
  );
}

export default App;
