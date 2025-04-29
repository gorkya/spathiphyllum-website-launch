import { Droplets, Sun, ThermometerSnowflake, SprayCan } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: <Droplets className="h-10 w-10 text-primary" />,
      title: "Полив",
      description: "Умеренный полив, не допуская пересыхания почвы. Спатифиллум любит влажную почву, но без застоя воды."
    },
    {
      icon: <Sun className="h-10 w-10 text-primary" />,
      title: "Освещение",
      description: "Яркое рассеянное освещение без прямых солнечных лучей. Может расти в полутени, но не в темных углах."
    },
    {
      icon: <ThermometerSnowflake className="h-10 w-10 text-primary" />,
      title: "Температура",
      description: "Комфортная температура 18-25°C. Не переносит сквозняки и резкие перепады температуры."
    },
    {
      icon: <SprayCan className="h-10 w-10 text-primary" />,
      title: "Влажность",
      description: "Требует повышенной влажности воздуха. Регулярное опрыскивание или размещение на поддоне с влажным керамзитом."
    },
  ];

  return (
    <section className="container px-4 py-16 md:py-24 md:px-6">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Основы ухода</h2>
        <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-[800px]">
          Спатифиллум не требует сложного ухода, но имеет несколько особенностей, которые важно учитывать
        </p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index} className="border-border hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="mb-2">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-foreground/80">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
