import { HOME_TEXT_CONTENT, HOME_TEXT_TITLE } from "@/config/constants";

const Advantages = () => {
    return (
        <section id="advantages" className="bg-stone-50 py-20">
            <section className="bg-stone-100 py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8 text-center">{HOME_TEXT_TITLE}</h2>
                    <div className="prose prose-stone prose-lg mx-auto text-stone-600 font-light text-justify leading-relaxed whitespace-pre-line">
                        {HOME_TEXT_CONTENT}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Advantages;