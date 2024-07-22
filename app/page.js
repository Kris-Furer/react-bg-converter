'use client';
import Input from "./Input";
import { useState } from "react";

export default function Home() {
  // on change update the value of z input with the value x input x 18
  const [mmol, setmmol] = useState('');
  const [mgdl, setMgdl] = useState('');

  const handleMgdlInput = (event) => {
    setMgdl(event.target.value)
    setmmol(event.target.value / 18);
  }
  const handleMmolInput = (event) => {
    setmmol(event.target.value)
    setMgdl(event.target.value * 18);
  }

  return (
    <main className="p-7 flex justify-center">
      <div className="max-w-2xl">
      <h1 className="text-5xl py-6">BG CONVERTER</h1>
      {/* MMOL INPUT -------------------------- */}
      <Input
        onChange={() => { handleMmolInput(event) }}
        id='mmolValue'
        name='mmolValue'
        type="number"
        label="mmol/L"
        value={mmol} />
      
      {/* Mgdl INPUT -------------------------- */}
      <Input
        label='mg/dl'
        onChange={() => { handleMgdlInput(event) }}
        id="mgdlValue"
        name="mgdlValue"
        value={mgdl}
        type="number" />
        </div>
    </main>
  );
}
