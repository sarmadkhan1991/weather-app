import { memo } from 'react';

const TemperatureToggle = memo(function TemperatureToggle ({ onToggle }) {
    return (
      <div className="temp-toggle flex justify-center text-2xl text-gray-500">
        <div className="pr-2">
          Fahrenheit
        </div>
        <div className="flex justify-center items-center">
          <label htmlFor="switch" className="relative">
            <input type="checkbox" id="switch" name="switch" hidden className="peer" onChange={onToggle} />
            <span className="block absolute inset-0 h-5 w-5 my-auto left-0.5 rounded-full bg-white shadow transition-transform duration-300 peer-checked:translate-x-5"/>
            <span className="w-11 h-6 border block rounded-full border-gray-950/5 bg-gray-500 transition duration-300 peer-checked:bg-violet-900 peer-checked:border-violet-900"/>
          </label>
        </div>
        <div className="pl-2">
          Celsuis
        </div>
      </div>
    );
  }
)

export default TemperatureToggle;