import { Testimonial } from "@/components/ui/testimonial-card";

const testimonials = [
  {
    name: "Елена Кузнецова",
    role: "Флорист",
    company: "Ботанический сад",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    testimonial:
      "Благодаря этим советам мои комнатные растения стали пышными и здоровыми! Особенно помогли рекомендации по поливу и освещению.",
  },
  {
    name: "Максим Петров",
    role: "Садовод-любитель",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    testimonial:
      "Начал заниматься растениями недавно, но с этими рекомендациями быстро освоился. Теперь у меня дома настоящие джунгли!",
  },
  {
    name: "Анна Волкова",
    role: "Дизайнер интерьеров",
    company: "Green Space",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    testimonial:
      "Использую эти знания в работе с клиентами. Растения действительно преображают пространство, а правильный уход - основа успеха.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-green-50/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Отзывы наших читателей
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Узнайте, как наши советы помогли другим создать зелёный рай дома
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
