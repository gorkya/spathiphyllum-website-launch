import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { SitemapList } from "@/components/SitemapList";

const Sitemap = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Карта сайта</h1>
          <p className="text-muted-foreground mb-8">
            Здесь вы можете увидеть полную структуру нашего сайта, чтобы быстро найти нужную информацию о спатифиллуме.
          </p>
          
          <Separator className="my-8" />
          
          <div className="grid gap-12">
            <SitemapList 
              title="Главная" 
              path="/"
              description="Общая информация о растении и особенности ухода"
              subpages={[
                { title: "Обзор растения", anchor: "/#hero" },
                { title: "Основные правила ухода", anchor: "/#features" },
                { title: "О спатифиллуме", anchor: "/#about" }
              ]}
            />
            
            <SitemapList 
              title="Уход" 
              path="/care"
              description="Подробное руководство по уходу за спатифиллумом"
              subpages={[
                { title: "Полив", anchor: "/care#watering" },
                { title: "Освещение", anchor: "/care#light" },
                { title: "Почва и подкормка", anchor: "/care#soil" },
                { title: "Пересадка", anchor: "/care#repotting" },
                { title: "Температурный режим", anchor: "/care#temperature" },
                { title: "Влажность", anchor: "/care#humidity" }
              ]}
            />
            
            <SitemapList 
              title="Разновидности" 
              path="/varieties"
              description="Различные сорта и разновидности спатифиллума"
              subpages={[
                { title: "Спатифиллум Уоллиса", anchor: "/varieties#wallisii" },
                { title: "Спатифиллум Мауна Лоа", anchor: "/varieties#mauna-loa" },
                { title: "Спатифиллум Сенсация", anchor: "/varieties#sensation" },
                { title: "Спатифиллум Шопен", anchor: "/varieties#chopin" },
                { title: "Спатифиллум Домино", anchor: "/varieties#domino" }
              ]}
            />
            
            <SitemapList 
              title="Проблемы" 
              path="/problems"
              description="Распространенные проблемы и их решения"
              subpages={[
                { title: "Желтеющие листья", anchor: "/problems#yellow-leaves" },
                { title: "Коричневые кончики", anchor: "/problems#brown-tips" },
                { title: "Вредители", anchor: "/problems#pests" },
                { title: "Не цветет", anchor: "/problems#not-blooming" },
                { title: "Корневая гниль", anchor: "/problems#root-rot" }
              ]}
            />
            
            <SitemapList 
              title="Размножение" 
              path="/propagation"
              description="Способы размножения спатифиллума"
              subpages={[
                { title: "Деление куста", anchor: "/propagation#division" },
                { title: "Размножение отпрысками", anchor: "/propagation#offshoots" },
                { title: "Выращивание из семян", anchor: "/propagation#seeds" }
              ]}
            />
            
            <SitemapList 
              title="Галерея" 
              path="/gallery"
              description="Фотографии разных видов спатифиллума"
              subpages={[
                { title: "Цветение", anchor: "/gallery#blooming" },
                { title: "Сорта и виды", anchor: "/gallery#varieties" },
                { title: "Дизайнерские решения", anchor: "/gallery#design" }
              ]}
            />
            
            <SitemapList 
              title="О нас" 
              path="/about"
              description="Информация о проекте и его авторах"
              subpages={[
                { title: "Наша миссия", anchor: "/about#mission" },
                { title: "Команда", anchor: "/about#team" },
                { title: "Контакты", anchor: "/about#contacts" }
              ]}
            />
          </div>
          
          <Separator className="my-8" />
          
          <div className="rounded-lg bg-muted p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">Дополнительные материалы</h2>
            <ul className="grid gap-2">
              <li>
                <Link to="/faq" className="text-primary hover:underline">Часто задаваемые вопросы</Link>
              </li>
              <li>
                <Link to="/glossary" className="text-primary hover:underline">Словарь терминов</Link>
              </li>
              <li>
                <Link to="/resources" className="text-primary hover:underline">Полезные ресурсы</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
