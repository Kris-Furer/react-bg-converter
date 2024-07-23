'use client';
import Input from "./Input";
import SwitchButton from "./SwitchButton";
import { useState } from "react";


export default function Home() {
  // on change update the value of z input with the value x input x 18
  const [mmol, setMmol] = useState('');
  const [mgdl, setMgdl] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');

  const convertToMgdl = (inputValue) => {
    const convertedValue = Math.round(inputValue * 18)
    return convertedValue;
  }
  const convertToMmol = (inputValue) => {
    const convertedValue = Math.round(inputValue / 18)
    return convertedValue;
  }

  const handleMgdlInput = (event) => {
    setMgdl(event.target.value)
    setMmol(convertToMmol(event.target.value));
    setLastUpdated('mgdl');
  }

  const handleMmolInput = (event) => {
    setMmol(event.target.value)
    setMgdl(convertToMgdl(event.target.value))
    setLastUpdated('mmol');
  }

  const handleSwitch = () => {
    switch (lastUpdated) {
      case 'mmol':
        setMgdl(mmol);
        setMmol(convertToMmol(mmol));
        setLastUpdated('mgdl');
        break;
      case 'mgdl':
        setMmol(mgdl);
        setMgdl(convertToMgdl(mgdl))
        setLastUpdated('mmol');
        break;
    }
  }

  return (
    <main className="p-7 flex justify-center">
      <div className="max-w-2xl">
        <h1 className="text-5xl py-6">BG CONVERTER</h1>
        <div className="ui-container flex flex-col justify-center">

          {/* Mgdl INPUT -------------------------- */}
          <Input
            label='mg/dl'
            onChange={() => { handleMgdlInput(event) }}
            id="mgdlValue"
            name="mgdlValue"
            value={mgdl}
            type="number" />

          {/* MMOL INPUT -------------------------- */}

          <SwitchButton
            onClick={handleSwitch}
          ></SwitchButton>

          <Input
            onChange={() => { handleMmolInput(event) }}
            id='mmolValue'
            name='mmolValue'
            type="number"
            label="mmol/L"
            value={mmol} />
        </div>
      </div>

    </main>
  );
}
