import { useState } from "react";
import SelectField from "./components/SelectField";
import Car from "./models/Car";

const cars: any[] = [
  {
    type: "Repairing",
    model: "MG",
    year: 2021,
  },
  {
    type: "Family",
    model: "TOYOTA",
    year: 1994,
  },
  {
    type: "Sport",
    model: "HONDA",
    year: 2000,
  },
];

function App() {
  const [name, setName] = useState("");
  const [car, setCar] = useState(undefined);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    alert(`Your name is ${name} want to buy the ${JSON.stringify(car)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Your name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <SelectField
        label="Select a Car"
          items={cars}
          onSelect={(selectCar: any) => {
            console.log('selectCar selectCar: ', selectCar)
            setCar(selectCar);
          }}
          itemKey={'model'}
          itemName={'model'}
        />
      </div>
    </form>
  );
}

export default App;
