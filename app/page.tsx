import { cases, faqData } from "./data/cases";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="gradient-bg text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            育毛施術事例集
          </h1>
          <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg md:text-xl mb-2">
            サロンでもクリニック級の結果と顧客満足を実現
          </p>
          <p className="text-base opacity-90">Check me</p>
        </div>
      </header>

      {/* Case List Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            施術事例一覧
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {cases.map((caseItem) => (
              <Link
                key={caseItem.id}
                href={"/case/" + caseItem.id}
                className="block bg-white rounded-2xl card-shadow overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="gradient-bg p-4 text-white">
                  <span className="text-lg font-bold">
                    事例{caseItem.id} {caseItem.age}歳 / {caseItem.gender}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {caseItem.areaImages.map((area) => (
                      <span
                        key={area.area}
                        className="px-3 py-1 bg-[#d4a5a5]/10 text-[#d4a5a5] text-sm rounded-full"
                      >
                        {area.area}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {caseItem.reason}
                  </p>
                  <div className="mt-3 flex items-center text-[#d4a5a5] text-sm font-medium">
                    詳細を見る
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-[#f5e6e8] to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 card-shadow border border-gray-100"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#d4a5a5] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    Q
                  </span>
                  <h3 className="font-bold text-gray-800 pt-1">{faq.question}</h3>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#f5e6e8] text-[#d4a5a5] rounded-full flex items-center justify-center font-bold text-sm">
                    A
                  </span>
                  <p className="text-gray-600 pt-1 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-16 px-4 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          まずは無料で
          <br />
          ご相談ください
        </h2>
        <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-xl font-bold mb-2">Check me</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 px-4 text-center">
        <p className="text-sm opacity-80">Check me</p>
      </footer>
    </div>
  );
}
