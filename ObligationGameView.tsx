import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, ArrowLeft, 
  RotateCcw, Sparkles, 
  Zap, CheckCircle2,
  AlertCircle, Box
} from 'lucide-react';
import { OBLIGATION_CHALLENGES } from './vocabData';

export default function ObligationGameView({ onBack }: { onBack: () => void }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);

  const currentChallenge = OBLIGATION_CHALLENGES[currentIdx];
  const shuffledOptions = useMemo(() => {
    return [...currentChallenge.options].sort(() => Math.random() - 0.5);
  }, [currentChallenge]);

  const handleAnswer = (option: string) => {
    if (isCorrect !== null) return;
    
    const correct = option === currentChallenge.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      if (currentIdx < OBLIGATION_CHALLENGES.length - 1) {
        setCurrentIdx(prev => prev + 1);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetGame = () => {
    setCurrentIdx(0);
    setScore(0);
    setIsCorrect(null);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          className="bg-white rounded-[64px] p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-4 border-slate-100 space-y-8"
        >
          <Trophy className="w-24 h-24 text-amber-400 mx-auto" />
          <div className="space-y-2">
            <h2 className="text-5xl font-black text-slate-900 uppercase italic">ԱՐԴՅՈՒՆՔ</h2>
            <div className="text-8xl font-black text-violet-600">
              {score}/{OBLIGATION_CHALLENGES.length}
            </div>
          </div>

          <p className="text-xl font-bold text-slate-500 uppercase tracking-widest">
            {score === OBLIGATION_CHALLENGES.length ? 'ՀՐԱՇԱԼԻ Է!' : 'ԼԱՎ Է, ՇԱՐՈՒՆԱԿԻՐ ՍՈՎՈՐԵԼ'}
          </p>
          
          <div className="flex flex-col gap-4 pt-8">
            <button 
              onClick={resetGame}
              className="bg-slate-900 text-white py-6 rounded-3xl font-black italic uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-violet-600 transition-all shadow-xl"
            >
              <RotateCcw className="w-6 h-6" /> ՆՈՐԻՑ ՓՈՐՁԵԼ
            </button>
            <button onClick={onBack} className="text-slate-400 font-black uppercase text-xs tracking-widest hover:text-slate-900">
               ԳԼԽԱՎՈՐ ՄԵՆՅՈՒ
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 [perspective:1000px]">
      {/* HUD */}
      <div className="flex justify-between items-center text-slate-400 font-black uppercase text-[10px] tracking-[0.3em]">
        <button onClick={onBack} className="flex items-center gap-2 hover:text-slate-900 transition-colors">
          <ArrowLeft className="w-4 h-4" /> ԵՏ
        </button>
        <div className="bg-slate-100 px-4 py-2 rounded-full text-slate-900 shadow-sm">
          ՀԱՐՑ {currentIdx + 1} / {OBLIGATION_CHALLENGES.length}
        </div>
      </div>

      {/* Progress Bar 3D */}
      <div className="h-4 bg-slate-200 rounded-full overflow-hidden shadow-inner border border-slate-100 relative">
        <motion.div 
          className="h-full bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIdx + 1) / OBLIGATION_CHALLENGES.length) * 100}%` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
      </div>

      {/* Challenge Card 3D */}
      <motion.div
        key={currentIdx}
        initial={{ rotateX: 45, y: 50, opacity: 0 }}
        animate={{ rotateX: 0, y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        className="bg-white rounded-[64px] p-8 sm:p-20 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-slate-100 text-center space-y-12 relative overflow-hidden group mb-12"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Floating background elements */}
        <Box className="absolute -top-10 -left-10 w-40 h-40 text-violet-100 opacity-20 -rotate-12 pointer-events-none" />
        <Box className="absolute -bottom-10 -right-10 w-40 h-40 text-indigo-100 opacity-20 rotate-12 pointer-events-none" />

        {/* Feedback Layer */}
        <AnimatePresence>
          {isCorrect !== null && (
            <motion.div 
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute inset-0 z-10 flex flex-col items-center justify-center ${isCorrect ? 'bg-indigo-600' : 'bg-rose-600'} text-white space-y-4`}
              style={{ transform: 'translateZ(50px)' }}
            >
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-24 h-24" />
                  <h3 className="text-6xl font-black italic uppercase drop-shadow-lg">ՃԻՇՏ Է!</h3>
                </>
              ) : (
                <>
                  <AlertCircle className="w-24 h-24" />
                  <h3 className="text-6xl font-black italic uppercase drop-shadow-lg">ՍԽԱԼ Է!</h3>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Ճիշտ պատասխանը`</p>
                    <p className="text-3xl font-black uppercase">{currentChallenge.correctAnswer}</p>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-4" style={{ transform: 'translateZ(30px)' }}>
          <div className="inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-violet-100 text-violet-600">
             {currentChallenge.type.toUpperCase()}
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 italic uppercase tracking-tighter leading-tight">
            {currentChallenge.sentence.split('___')[0]}
            <span className="text-violet-600 mx-2 inline-block bg-slate-50 px-6 py-2 rounded-2xl shadow-inner border border-slate-100 animate-pulse">___</span>
            {currentChallenge.sentence.split('___')[1]}
          </h2>
          <p className="text-slate-400 font-bold italic text-lg opacity-80 mt-4">
            {currentChallenge.translation}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" style={{ transform: 'translateZ(20px)' }}>
          {shuffledOptions.map((opt, i) => (
            <motion.button
              key={i}
              whileHover={{ 
                scale: 1.05, 
                translateZ: 30,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAnswer(opt)}
              className="bg-white p-6 rounded-[32px] text-xl font-black text-slate-800 border-2 border-slate-50 shadow-[0_8px_0_0_#f1f5f9] hover:shadow-[0_4px_0_0_#f1f5f9] hover:translate-y-[4px] transition-all uppercase italic"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {opt}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <div className="text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] flex items-center justify-center gap-2">
         <Zap className="w-3 h-3" /> OBLIGATION MASTER 3D <Sparkles className="w-3 h-3" />
      </div>
    </div>
  );
}
