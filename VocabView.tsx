import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, ArrowLeft,
  Sparkles, Zap, Star,
  User, Users, Heart
} from 'lucide-react';
import { OBLIGATION_GRAMMAR } from './vocabData';

export default function VocabView({ onBack, onPlay }: { onBack: () => void, onPlay: () => void }) {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-32 pt-8 space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <div className="inline-flex p-3 bg-violet-100 rounded-2xl shadow-inner">
           <BookOpen className="w-8 h-8 text-violet-600" />
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-slate-900 uppercase italic tracking-tighter">
          OBLIGACIÓN Y NECESIDAD
        </h2>
        <p className="text-slate-500 font-bold italic max-w-xl mx-auto uppercase tracking-widest text-xs">
          Պարտավորություն և Կարիք
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Tener que */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[40px] p-6 border border-slate-100 shadow-xl space-y-4"
        >
          <div className="flex items-center gap-3 border-b border-slate-50 pb-3">
            <User className="w-5 h-5 text-indigo-500" />
            <h3 className="font-black text-slate-900 italic uppercase">TENER QUE</h3>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ԱՆՁՆԱԿԱՆ ՊԱՐՏԱՎՈՐՈՒԹՅՈՒՆ</p>
          <div className="bg-indigo-50 rounded-2xl overflow-hidden font-sans text-xs">
             {OBLIGATION_GRAMMAR.tener.map((row) => (
               <div key={row.p} className="flex border-b border-white last:border-0 p-2">
                  <span className="w-1/2 font-black text-slate-400 uppercase">{row.p}</span>
                  <span className="w-1/2 font-black text-indigo-600 uppercase">{row.c}</span>
               </div>
             ))}
          </div>
        </motion.div>

        {/* Hay que */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[40px] p-6 border border-slate-100 shadow-xl space-y-4"
        >
          <div className="flex items-center gap-3 border-b border-slate-50 pb-3">
            <Users className="w-5 h-5 text-emerald-500" />
            <h3 className="font-black text-slate-900 italic uppercase">HAY QUE</h3>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ԸՆԴՀԱՆՈՒՐ ՊԱՐՏԱՎՈՐՈՒԹՅՈՒՆ</p>
          <div className="p-4 bg-emerald-50 rounded-3xl border border-emerald-100 flex flex-col items-center justify-center h-48 text-center space-y-3">
             <span className="text-3xl font-black text-emerald-600 uppercase italic">HAY QUE</span>
             <span className="text-emerald-400 font-bold uppercase italic text-[10px]">+ INFINITIVO</span>
             <p className="text-[10px] font-medium text-emerald-800 leading-tight">Օգտագործվում է, երբ խոսում ենք ընդհանուր կանոնների մասին:</p>
          </div>
        </motion.div>

        {/* Necesitar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[40px] p-6 border border-slate-100 shadow-xl space-y-4"
        >
          <div className="flex items-center gap-3 border-b border-slate-50 pb-3">
            <Heart className="w-5 h-5 text-rose-500" />
            <h3 className="font-black text-slate-900 italic uppercase">NECESITAR</h3>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ԿԱՐԻՔ / ԱՆՀՐԱԺԵՇՏՈՒԹՅՈՒՆ</p>
          <div className="bg-rose-50 rounded-2xl overflow-hidden font-sans text-xs">
             {OBLIGATION_GRAMMAR.necesitar.map((row) => (
               <div key={row.p} className="flex border-b border-white last:border-0 p-2">
                  <span className="w-1/2 font-black text-slate-400 uppercase">{row.p}</span>
                  <span className="w-1/2 font-black text-rose-600 uppercase">{row.c}</span>
               </div>
             ))}
          </div>
        </motion.div>
      </div>

      {/* Summary Box */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-900 text-white rounded-[40px] p-8 space-y-6 relative overflow-hidden shadow-2xl"
      >
        <Star className="absolute top-4 right-4 text-amber-400 w-12 h-12 opacity-10" />
        <h4 className="text-sm font-black uppercase tracking-[0.4em] text-slate-500">Օրինակներ</h4>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="space-y-1">
            <p className="text-indigo-400 font-black italic text-lg uppercase leading-tight">Tengo que ir</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Ես պետք է գնամ: (Պարտավոր եմ)</p>
          </div>
          <div className="space-y-1">
            <p className="text-emerald-400 font-black italic text-lg uppercase leading-tight">Hay que ir</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Պետք է գնալ: (Ընդհանուր)</p>
          </div>
          <div className="space-y-1">
            <p className="text-rose-400 font-black italic text-lg uppercase leading-tight">Necesito ir</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Ինձ պետք է գնալ: (Կարիք ունեմ)</p>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <section className="bg-violet-600 rounded-[48px] p-8 sm:p-12 text-white text-center space-y-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
           <Zap className="w-32 h-32 rotate-12" />
        </div>
        <div className="relative z-10 space-y-4">
          <h3 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tighter leading-tight">Պատրա՞ստ ես խաղալ</h3>
          <p className="text-violet-100 font-bold opacity-80 italic uppercase tracking-widest text-xs">Ստուգիր քո գիտելիքները 3D խաղում:</p>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onPlay}
            className="bg-white text-violet-600 px-10 py-5 rounded-2xl font-black italic uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            ՍԿՍԵԼ ԽԱՂԸ
          </button>
          <button 
            onClick={onBack}
            className="bg-violet-500/30 backdrop-blur-md text-white border border-violet-400 px-10 py-5 rounded-2xl font-black italic uppercase tracking-widest hover:bg-violet-500/50 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> ՀԵՏ
          </button>
        </div>
      </section>
    </div>
  );
}
