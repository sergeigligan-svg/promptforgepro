'use client';

import { useState } from 'react';
import { Sparkles, Copy, Check, History, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TEMPLATES = [
  { id: 'blog', name: 'Блог-пост', icon: '📝' },
  { id: 'email', name: 'Email', icon: '📧' },
  { id: 'code', name: 'Код', icon: '💻' },
  { id: 'image', name: 'Midjourney', icon: '🎨' },
];

export default function PromptForge() {
  const [task, setTask] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const generatePrompt = async () => {
    if (!task.trim()) return;
    setLoading(true);
    setResult('✨ Здесь будет сгенерированный промпт...');
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="border-b border-white/10 p-4">
        <h1 className="text-2xl font-bold">🧠 PromptForge Pro</h1>
      </header>
      <main className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-4 gap-3 mb-6">
          {TEMPLATES.map(t => (
            <button key={t.id} className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
              <div className="text-2xl">{t.icon}</div>
              <div className="text-xs">{t.name}</div>
            </button>
          ))}
        </div>
        <textarea
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Опишите задачу..."
          className="w-full h-32 bg-black/30 rounded-xl p-4 border border-white/10 text-white"
        />
        <button
          onClick={generatePrompt}
          className="mt-4 w-full py-4 bg-purple-600 rounded-xl font-semibold"
        >
          {loading ? 'Генерация...' : 'Сгенерировать промпт'}
        </button>
        {result && (
          <div className="mt-6 p-4 bg-white/5 rounded-xl">
            <pre className="whitespace-pre-wrap">{result}</pre>
          </div>
        )}
      </main>
    </div>
  );
}
