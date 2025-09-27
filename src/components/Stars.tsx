"use client";
import { Star } from "lucide-react";

export default function Stars() {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-6 h-6 text-[#290303] fill-[#290303] mb-7" />
      ))}
    </div>
  );
}
