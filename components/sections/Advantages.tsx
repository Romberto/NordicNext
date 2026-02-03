import { HOME_TEXT_CONTENT, HOME_TEXT_TITLE } from "@/config/constants";
import { YandexBannerMock } from "../YandexBannerMock";

const Advantages = () => {
  return (
    <section id="advantages" className="bg-stone-50 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8 text-center lg:text-left">
              {HOME_TEXT_TITLE}
            </h2>
  
            <YandexBannerMock />

            <div className="prose prose-stone prose-lg text-stone-600 font-light text-justify leading-relaxed whitespace-pre-line max-w-none">
              {HOME_TEXT_CONTENT}
            </div>
          </div>

          {/* SIDEBAR */}

        </div>
      
    </section>
  );
};

export default Advantages;
