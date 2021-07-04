import React, { useState } from 'react';
import './Counter.scss';

type CounterClass = {
  character: string;
  function: (count: number) => number;
  className: string;
};
type CountersClass = CounterClass[];

const incrementCounter = (count: number) => {
  return count + 1;
};

const decrementCounter = (count: number) => {
  return count - 1;
};

const resetCounter = () => {
  return 0;
};

const containers: CountersClass = [
  {
    character: '+',
    function: incrementCounter,
    className: 'Counter-button-inc',
  },
  {
    character: '-',
    function: decrementCounter,
    className: 'Counter-button-dec',
  },
  {
    character: 'reset',
    function: resetCounter,
    className: 'Counter-button-res',
  },
];

const Counter: React.VFC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="Counter-title">You clicked {count} times</p>
      <div className="Counters">
        {containers.map((container) => {
          return (
            <div className="Counter" key={container.character}>
              <button
                className={`Counter-button ${container.className}`}
                onClick={() => setCount(container.function(count))}>
                {container.character}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Counter;
