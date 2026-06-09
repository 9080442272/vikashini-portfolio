'use client';
import { ArrowRight } from 'lucide-react';

export function FlowButton({ text = "Modern Button" }: { text?: string }) {
  return (
    <button className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-foreground cursor-pointer transition-all duration-300 ease-out hover:bg-white hover:text-background hover:border-white active:scale-[0.97]">
      <span>{text}</span>
      <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
    </button>
  );
}
