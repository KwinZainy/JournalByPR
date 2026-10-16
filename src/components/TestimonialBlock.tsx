import React from "react";

export interface Quote {
  paragraphs: string[];
  author?: string;
}

interface TestimonialBlockProps {
  title: string;
  quotes: Quote[];
  children?: React.ReactNode;
}

const TestimonialBlock = ({ title, quotes, children }: TestimonialBlockProps) => {
  return (
    <div className="bg-[#FAF8F2] border-l-4 border-[#290303] rounded-xl px-6 py-5 text-start text-[#290303] max-mobile:px-4">
      <h3 className="uppercase tracking-widest text-[14px] font-bold mb-3 max-mobile:text-[12px]">
        {title}
      </h3>
      <div className="flex flex-col gap-4">
        {quotes.map((q, i) => (
          <div key={i} className="flex flex-col gap-2">
            {q.paragraphs.map((p, j) => (
              <p key={j} className="italic">{p}</p>
            ))}
            {q.author && <p className="font-semibold">- {q.author}</p>}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default TestimonialBlock;
