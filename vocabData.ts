export interface VocabWord {
  spanish: string;
  armenian: string;
  emoji: string;
}

export interface ObligationChallenge {
  sentence: string;
  translation: string;
  correctAnswer: string;
  options: string[];
  type: 'tener' | 'hay' | 'necesitar';
}

export const OBLIGATION_GRAMMAR = {
  tener: [
    { p: "Yo", c: "tengo que" },
    { p: "Tú", c: "tienes que" },
    { p: "Él/Ella/Ud.", c: "tiene que" },
    { p: "Nosotros", c: "tenemos que" },
    { p: "Vosotros", c: "tenéis que" },
    { p: "Ellos/as/Uds.", c: "tienen que" }
  ],
  hay: "Hay que + infinitive (Impersonal: 'Պետք է')",
  necesitar: [
    { p: "Yo", c: "necesito" },
    { p: "Tú", c: "necesitas" },
    { p: "Él/Ella/Ud.", c: "necesita" },
    { p: "Nosotros", c: "necesitamos" },
    { p: "Vosotros", c: "necesitáis" },
    { p: "Ellos/as/Uds.", c: "necesitan" }
  ]
};

export const OBLIGATION_CHALLENGES: ObligationChallenge[] = [
  { 
    sentence: "Yo ___ estudiar para el examen.", 
    translation: "Ես պետք է սովորեմ քննության համար (անձնական):", 
    correctAnswer: "tengo que", 
    options: ["tengo que", "hay que", "necesito"], 
    type: 'tener' 
  },
  { 
    sentence: "___ beber agua para vivir.", 
    translation: "Պետք է ջուր խմել ապրելու համար (ընդհանուր):", 
    correctAnswer: "Hay que", 
    options: ["Hay que", "Tengo que", "Necesito"], 
    type: 'hay' 
  },
  { 
    sentence: "Nosotros ___ un mapa nuevo.", 
    translation: "Մեզ նոր քարտեզ է պետք (կարիք ունենք):", 
    correctAnswer: "necesitamos", 
    options: ["necesitamos", "tenemos que", "hay que"], 
    type: 'necesitar' 
  },
  { 
    sentence: "Tú ___ comer más verduras.", 
    translation: "Դու պետք է ավելի շատ բանջարեղեն ուտես:", 
    correctAnswer: "tienes que", 
    options: ["tienes que", "hay que", "necesitas"], 
    type: 'tener' 
  },
  { 
    sentence: "___ trabajar mucho para tener éxito.", 
    translation: "Պետք է շատ աշխատել հաջողության հասնելու համար (ընդհանուր):", 
    correctAnswer: "Hay que", 
    options: ["Hay que", "Tengo que", "Necesito"], 
    type: 'hay' 
  },
  { 
    sentence: "Ella ___ descansar un poco.", 
    translation: "Նա պետք է մի փոքր հանգստանա (կարիք ունի):", 
    correctAnswer: "necesita", 
    options: ["necesita", "hay que", "tienes que"], 
    type: 'necesitar' 
  },
  { 
    sentence: "Nosotros ___ ir al médico.", 
    translation: "Մենք պետք է գնանք բժշկի (պարտավորություն):", 
    correctAnswer: "tenemos que", 
    options: ["tenemos que", "hay que", "necesitamos"], 
    type: 'tener' 
  },
  { 
    sentence: "___ hablar español en clase.", 
    translation: "Պետք է իսպաներեն խոսել դասարանում (կանոն/ընդհանուր):", 
    correctAnswer: "Hay que", 
    options: ["Hay que", "Tengo que", "Necesito"], 
    type: 'hay' 
  },
  { 
    sentence: "Yo ___ dinero para el viaje.", 
    translation: "Ինձ փող է պետք ճանապարհորդության համար:", 
    correctAnswer: "necesito", 
    options: ["necesito", "tengo que", "hay que"], 
    type: 'necesitar' 
  },
  { 
    sentence: "Vosotros ___ hacer la tarea.", 
    translation: "Դուք պետք է կատարեք տնային աշխատանքը:", 
    correctAnswer: "tenéis que", 
    options: ["tenéis que", "necesitáis", "hay que"], 
    type: 'tener' 
  },
  { 
    sentence: "___ comprar pan hoy.", 
    translation: "Պետք է այսօր հաց գնել (ընդհանուր):", 
    correctAnswer: "Hay que", 
    options: ["Hay que", "Tengo que", "Necesito"], 
    type: 'hay' 
  },
  { 
    sentence: "Ellos ___ una casa grande.", 
    translation: "Նրանց մեծ տուն է պետք:", 
    correctAnswer: "necesitan", 
    options: ["necesitan", "tienen que", "hay que"], 
    type: 'necesitar' 
  },
  { 
    sentence: "Usted ___ esperar aquí.", 
    translation: "Դուք (հարգալից) պետք է սպասեք այստեղ:", 
    correctAnswer: "tiene que", 
    options: ["tiene que", "necesita", "hay que"], 
    type: 'tener' 
  },
  { 
    sentence: "___ limpiar la habitación.", 
    translation: "Պետք է մաքրել սենյակը (ընդհանուր):", 
    correctAnswer: "Hay que", 
    options: ["Hay que", "Tengo que", "Necesito"], 
    type: 'hay' 
  },
  { 
    sentence: "Yo ___ dormir ocho horas.", 
    translation: "Ես պետք է քնեմ ութ ժամ (կարիք ունեմ):", 
    correctAnswer: "necesito", 
    options: ["necesito", "tengo que", "hay que"], 
    type: 'necesitar' 
  }
];
