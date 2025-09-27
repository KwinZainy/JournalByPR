"use client";

import PagesLayout from "@/src/components/PagesLayout";

const ThankYouPage = () => {
  return (
    <PagesLayout>
      <main className="bg-[#FAF8F2] min-h-screen flex items-center justify-center">
        <div className="text-center max-w-lg">
          <h1 className="text-4xl font-bold text-[#290303] mb-4">🎉 Thank You!</h1>
          <p className="text-lg text-[#290303]">
            Your message has been sent successfully. We’ll get back to you soon.
          </p>
        </div>
      </main>
    </PagesLayout>
  );
};

export default ThankYouPage;
