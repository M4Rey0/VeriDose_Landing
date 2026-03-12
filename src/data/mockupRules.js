// Hard-coded validation rules for the interactive demo.
// Keys are built as: `${medicamento}|${dosis}|${comorbilidad}`
// Result values: "seguro", "revisar", "peligro"

export const mockupOptions = {
  pacientes: ["Paciente A — 70 kg", "Paciente B — 55 kg", "Paciente C — 90 kg"],
  comorbilidades: [
    "Insuficiencia renal",
    "Insuficiencia hepática",
    "Hipertensión",
    "Sin comorbilidad relevante",
  ],
  medicamentos: ["Norepinefrina", "Vancomicina", "Midazolam", "Amiodarona"],
  vias: ["IV (intravenosa)", "VO (vía oral)", "SC (subcutánea)"],
  dosis: {
    Norepinefrina: ["0.1 mcg/kg/min", "0.5 mcg/kg/min", "0.8 mcg/kg/min"],
    Vancomicina: ["500 mg c/12h", "1 g c/12h", "2 g c/8h"],
    Midazolam: ["2 mg IV", "5 mg IV", "15 mg IV"],
    Amiodarona: ["150 mg IV", "300 mg IV", "600 mg IV"],
  },
};

const rules = {
  "Norepinefrina|0.1 mcg/kg/min|Insuficiencia renal": "seguro",
  "Norepinefrina|0.1 mcg/kg/min|Insuficiencia hepática": "seguro",
  "Norepinefrina|0.1 mcg/kg/min|Hipertensión": "revisar",
  "Norepinefrina|0.1 mcg/kg/min|Sin comorbilidad relevante": "seguro",
  "Norepinefrina|0.5 mcg/kg/min|Insuficiencia renal": "revisar",
  "Norepinefrina|0.5 mcg/kg/min|Insuficiencia hepática": "revisar",
  "Norepinefrina|0.5 mcg/kg/min|Hipertensión": "peligro",
  "Norepinefrina|0.8 mcg/kg/min|Insuficiencia renal": "peligro",
  "Norepinefrina|0.8 mcg/kg/min|Insuficiencia hepática": "peligro",
  "Vancomicina|1 g c/12h|Insuficiencia renal": "revisar",
  "Vancomicina|500 mg c/12h|Insuficiencia renal": "seguro",
  "Vancomicina|2 g c/8h|Insuficiencia renal": "peligro",
  "Vancomicina|1 g c/12h|Sin comorbilidad relevante": "seguro",
  "Midazolam|5 mg IV|Insuficiencia hepática": "peligro",
  "Midazolam|2 mg IV|Insuficiencia hepática": "revisar",
  "Midazolam|15 mg IV|Insuficiencia hepática": "peligro",
  "Midazolam|2 mg IV|Sin comorbilidad relevante": "seguro",
  "Midazolam|5 mg IV|Sin comorbilidad relevante": "revisar",
  "Amiodarona|150 mg IV|Sin comorbilidad relevante": "seguro",
  "Amiodarona|300 mg IV|Insuficiencia hepática": "revisar",
  "Amiodarona|600 mg IV|Insuficiencia hepática": "peligro",
};

export function evaluateDose(medicamento, dosis, comorbilidad) {
  const key = `${medicamento}|${dosis}|${comorbilidad}`;
  return rules[key] || "revisar";
}
