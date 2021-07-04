import React, { useState } from 'react';
import './Counter.scss';

const Counter: React.VFC = () => {
  const [count, setCount] = useState(0);

  type CounterClass = {
    character: string;
    function: (count: number) => number;
    className: string;
  };
  type CountersClass = CounterClass[];

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

  // const Counters = (containers: CountersClass) => {
  //   const list = containers.map((container: CounterClass) => {
  //     return (
  //       <div className="Counter">
  //         <button
  //           className={`Counter-button ${container.className}`}
  //           onClick={() => setCount(container.function(count))}>
  //           {container.character}
  //         </button>
  //       </div>
  //     );
  //   });
  //   return list;
  // };

  return (
    <div>
      <p className="Counter-title">You clicked {count} times</p>
      <div className="Counters">
        {/* {Counters} */}
        <div className="Counter">
          <button
            className={`Counter-button Counter-button-inc`}
            onClick={() => setCount(incrementCounter(count))}>
            +
          </button>
        </div>
        <div className="Counter">
          <button
            className={`Counter-button Counter-button-dec`}
            onClick={() => setCount(decrementCounter(count))}>
            -
          </button>
        </div>
        <div className="Counter">
          <button
            className={`Counter-button Counter-button-res`}
            onClick={() => setCount(resetCounter(count))}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

const incrementCounter = (count: number) => {
  return count + 1;
};

const decrementCounter = (count: number) => {
  return count - 1;
};

const resetCounter = (_: number) => {
  return 0;
};
