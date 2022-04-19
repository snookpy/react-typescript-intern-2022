import { useState } from "react";
import SelectField from "./components/SelectField";

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
  const [name, setName] = useState<any>("");
  const [carId, setCarId] = useState<any>();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    alert(
      `Your name is ${name} want to buy the ${JSON.stringify(
        cars.find((f) => f.model === carId)
      )}`
    );
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
            console.log("selectCar selectCar: ", selectCar);
            setCarId(selectCar);
          }}
        >
          {(item) => (
            <option key={item.model} value={item.model}>
              {item.model}
            </option>
          )}
        </SelectField>
      </div>
      <div>
        <button> Submit </button>
      </div>
    </form>
  );
}

export default App;
