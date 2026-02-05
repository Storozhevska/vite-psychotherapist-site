import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Instagram, Globe, Mail, MessageCircle, Heart, Sparkles, Check } from 'lucide-react';
import profileImage from 'figma:asset/b03087667bc4c41fb666dfc7184cd89c934cdc7b.png';

export default function App() {
  const resources = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/storozhevskie/',
      icon: Instagram,
      description: '@storozhevskie'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/yuliyastor',
      icon: MessageCircle,
      description: '@yuliyastor'
    },
    {
      name: 'Особистий сайт',
      url: 'https://storozhevska.netlify.app/',
      icon: Globe,
      description: 'storozhevska.netlify.app'
    }
  ];

  const therapyAreas = [
    'Безпека, підтримка, підняття енергії, проявлення',
    'Тривожність, депресія, психосоматика',
    'Дитяче-батьківські відносини',
    'Відносини в парі, як бути в стосунках і бути самостійною одночасно',
    'Прийняття власної сили й здорової агресивності',
    'Робота зі страхами - стати сміливіше, зберігаючи гнучкість',
    'Самотність, відчуття тіла, поєднання тіла і мозку',
    'Власна сексуальність і важливість',
    'Нові стосунки з іншим сценарієм',
    'Травми, насилля, кПТСР',
    'Панічні атаки, фобії',
    'Розлади харчової поведінки (окрім булемії, анорексії)',
    'Самопошкодження, токсична провина, сором, самосаботаж',
    'Залежні емоційні стосунки, вихід із стосунків',
    'Підтримка втрати, розлучення, змін у родині',
    'Бажання завагітніти, робота зі снами'
  ];

  const supervisionAreas = [
    'Незакриті фігури в роботі з клієнтами',
    'Нерозуміння, що робити в сесії',
    'Професійна ідентичність та розвиток',
    'Відчуття, ніби ходите по колу з клієнтом',
    'Невпевненість, тривога в практиці',
    'Бажання допомогти чи врятувати клієнта',
    'Професійна опора та спільнота'
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Hero Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  src={profileImage}
                  alt="Юлія Сторожевська"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex-1 pt-4">
              <h1 className="mb-4">ЮЛІЯ СТОРОЖЕВСЬКА</h1>
              <div className="space-y-4 text-foreground/80">
                <p>
Дипломований Психолог, рекомендований гештальт-терапевт інституту МІГІС, акредитований супервізор, тренер інституту MIGIS (Міжрегіональний Інститут Гештальт Терапії та Мистецтва - акредитований член EAGT європейська асоціація гештальт-терапії), тілесно-орієнтований, системно-сімейний терапевт, спеціаліст по роботі із залежностями, арт-терапії, дитяче-батьківських відносин.                </p>
                <p className="text-muted-foreground italic">
                  Щедра, тепла, безпечна, професійна, глибока, щира, жива
                </p>

                  <p>
                  12+ років досвіду у терапії, є власна терапія, супервізія, гіпервізія.
                </p>

                <p className="text-muted-foreground italic">
                Визнаю і працюю по Етичному Кодексу MIGIS, EAGT, УСП, GPTIM, 
Етичного кодексу психолога України, ухваленого на І Установчому з’їзді Товариства психологів України 20 грудня 1990 року
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-4">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-muted group-hover:bg-muted/70 transition-colors">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-1">{resource.name}</h4>
                      <p className="text-muted-foreground">{resource.description}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Therapy Areas Section */}
        <section className="mb-20">
          <div className="p-8 rounded-lg border border-border bg-muted/20">
            <p className="text-muted-foreground mb-8">
              Для тих, хто любить і шукає глибину, розвиток, духовність, силу і світло
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-6">
              {therapyAreas.map((area, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3"
                >
                  <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">{area}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <a 
                href="https://t.me/yuliyastor" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Записатися на сесію
              </a>
            </div>
          </div>
        </section>

        {/* Supervision Section */}
        <section className="mb-20">
          <div className="p-8 rounded-lg border border-border bg-muted/20">
            <h2 className="mb-8">З чим працюю як супервізор</h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-6">
              {supervisionAreas.map((area, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3"
                >
                  <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">{area}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <a 
                href="https://t.me/yuliyastor" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Записатися на супервізію
              </a>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <h2 className="mb-8">Вартість консультацій</h2>
          <div className="space-y-6">
            {/* Adults */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="mb-2">
                <h3 className="mb-2">Індивідуальна терапія (жінки, чоловіки)</h3>
                <p className="text-muted-foreground">70 євро сесія</p>
              </div>
              <div className="space-y-2 text-foreground/70 mb-4">
                <p>Перша сесія: 60 хвилин, наступні по 50 хвилин</p>
                <p>Зазвичай раз на тиждень. Мінімуму немає - на першій сесії вирішуємо, працюємо чи ні</p>
                <p className="text-sm text-muted-foreground">
                  Можливі домашні завдання залежно від запиту та психотипу. Підтримка в чаті та супровід клієнта
                </p>
              </div>
              <a 
                href="https://t.me/yuliyastor" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Записатися
              </a>
            </div>

            {/* Family */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="mb-2">
                <h3 className="mb-2">Сімейна консультація</h3>
                <p className="text-muted-foreground">5500 грн</p>
              </div>
              <div className="space-y-2 text-foreground/70 mb-4">
                <p>100-120 хвилин, раз на 2-3 тижні залежно від запиту</p>
                <p className="text-sm text-muted-foreground">
                  Домашні завдання, підтримка по Viber, коригування та супровід. 
Окремо кожного в парі не беру, але якщо сім'я перестає ходити в терапію, одного з супругів можу взяти в індивідуальну терапію                </p>
              </div>
              <a 
                href="https://t.me/yuliyastor" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Записатися
              </a>
            </div>

            {/* Teenagers */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="mb-4">Підлітки (індивідуально)</h3>
              <div className="space-y-4 mb-4">
                <div>
                  <p className="mb-2"><strong>Варіант 1: Робота з підлітком</strong></p>
                  <p className="text-foreground/70 text-sm mb-1">40€ за сесію</p>
                  <p className="text-foreground/70 text-sm">
                    Перша сесія 60 хвилин, наступні по 50 хвилин, раз на тиждень. 
                    Підтримка батьків у чаті, зворотній зв'язок
                  </p>
                </div>
                <div>
                  <p className="mb-2"><strong>Варіант 2: Сімейна консультація з дитиною</strong></p>
                  <p className="text-foreground/70 text-sm mb-1">3000 грн за 90 хвилин</p>
                  <p className="text-foreground/70 text-sm">
                    Спочатку робота зі сім'єю - інколи не треба брати дитину. Якщо потрібна довготривала терапія з підлітком, 
                    сімейна консультація проводиться раз на 5 сесій з підлітком
                  </p>
                </div>
              </div>
              <a 
                href="https://t.me/yuliyastor" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Записатися
              </a>
            </div>
          </div>
        </section>

        {/* Constellations Section */}
        <section className="mb-20">
          <div className="p-8 rounded-lg border border-border bg-card">
            <h2
  className="mb-6"
  style={{ fontSize: "1.75rem", fontWeight: 600 }}
>
  Розстановки
</h2>
            <p className="text-muted-foreground"> 350 євро до 2х годин</p>
            <div className="space-y-4 text-foreground/80 mb-6">
              <p>
                Я роблю три види розстановок, які підбираю сама під ваш запит:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Робота з вашим полем</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Системно-сімейна</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Змішана</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                Онлайн чи очно
              </p>
              <p>
                <strong>Вирішення будь-якого запиту:</strong> особисті чи бізнес
              </p>
              <p>
                <strong>Завдання:</strong> прибрати чи ширше подивитися на ситуацію і зрушити з «мертвої точки», прокласти новий шлях
              </p>
              <p>
                <strong>В результаті:</strong> зміна стану, стосунків, почуття, покращення здоров'я
              </p>
              <p className="text-foreground/90">
                Ви будете знати, куди йти і що робити. Це справжня робота з тут і зараз для вашого майбутнього
              </p>
            </div>
            <div className="flex justify-center">
              <a 
                href="https://t.me/yuliyastor" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Записатися на розстановку
              </a>
            </div>
          </div>
        </section>

        {/* Free Crisis Support */}
        <section className="mb-20">
          <div className="p-6 rounded-lg border-2 border-primary/20 bg-primary/5">
            <div className="flex items-start gap-3 mb-4">
              <Heart className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="mb-2">Безкоштовна підтримка</h3>
                <p className="text-foreground/70 mb-4">
                  Кризові консультації пов'язані із війною чи наслідками війни - безкоштовно
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-foreground/70">
              <p>
                <strong>Сексуальне насилля під час військових дій, на окупованих територіях</strong>
              </p>
              <p>
                <strong>Невизначена втрата, хтось з родичів у полоні</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <div className="p-8 rounded-lg border border-border bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="flex items-start gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="mb-2">Навчання на гештальт-терапевта</h2>
                <p className="text-muted-foreground mb-6">
                  Хочеш внутрішньої свободи? Відчути владу в житті і вирішити свої питання?
                </p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <p>Глибоке розуміння психіки та процесів</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <p>Навички для роботи з клієнтами та власного розвитку</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <p>Сертифікація, що відкриває двері до професійної практики</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <p>Сучасна психотерапія від інституту MIGIS (акредитований в EAGT)</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-background/50 border border-border/50 mb-6">
              <p className="mb-2">
                <strong>1 ступінь:</strong>  очно в Чернівцях та онлайн - 2 набори квітень 2026


              </p>
              <p className="text-muted-foreground">
                Вартість: <strong>125€</strong> за семінар
              </p>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Індивідуальна терапія • Супервізія • Курси • Розстановки • Сімейна терапія • Групова психотерапія
            </p>

            <div className="flex justify-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdv5eG16YmyBCVGcajZi6tytP0ZtefCkdJexUP0qhtCWct14g/viewform" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Записатися на навчання
              </a>
            </div>
          </div>
        </section>


<section className="mb-20 flex justify-center">
  <div className="p-8 rounded-xl border border-border/50 bg-gradient-to-br from-primary/5 via-background/50 to-primary/5 max-w-3xl w-full shadow-sm">

    <h2
  className="mb-10 text-center font-bold tracking-tight text-foreground"
  style={{
    fontSize: "2.25rem",
    lineHeight: "1.15"
  }}
>
  З якими запитами я працюю
</h2>

    {/* Група 1 */}
    <div className="mb-12 md:mb-16">
      <h3
        style={{
          fontSize: '1.5rem',
          '@media (min-width: 768px)': { fontSize: '2.5rem' },
          fontWeight: '500',  // ← нормальна вага (medium), без жирності
          lineHeight: '1.1',
          letterSpacing: '-0.025em',
          marginBottom: '1.5rem',
          color: '#030213'
        }}
      >
        Емоційні та психічні стани
      </h3>
      <div className="space-y-8 pl-4 text-xl md:text-2xl">
        <p><strong className="text-foreground">Емоційний стан:</strong> Тривожність, депресивні стани, внутрішня порожнеча, втрата енергії</p>
        <p><strong className="text-foreground">Панічні та тривожні розлади:</strong> Панічні атаки, страхи, фобії</p>
        <p><strong className="text-foreground">Робота зі страхами:</strong> Сміливість при збереженні гнучкості</p>
      </div>
    </div>

    {/* Група 2 */}
    <div className="mb-12 md:mb-16">
      <h3
        style={{
          fontSize: '1.5rem',
          '@media (min-width: 768px)': { fontSize: '2.5rem' },
          fontWeight: '500',
          lineHeight: '1.1',
          letterSpacing: '-0.025em',
          marginBottom: '1.5rem',
          color: '#030213'
        }}
      >
        Травма та минулий досвід
      </h3>
      <div className="space-y-8 pl-4 text-xl md:text-2xl">
        <p><strong className="text-foreground">Травматичний досвід:</strong> Травми, насилля, кПТСР, складне дитинство</p>
        <p><strong className="text-foreground">Дитячо-батьківські теми:</strong> Старі сценарії, вплив батьківської родини</p>
      </div>
    </div>

    {/* Група 3 */}
    <div className="mb-12 md:mb-16">
      <h3
        style={{
          fontSize: '1.5rem',
          '@media (min-width: 768px)': { fontSize: '2.5rem' },
          fontWeight: '500',
          lineHeight: '1.1',
          letterSpacing: '-0.025em',
          marginBottom: '1.5rem',
          color: '#030213'
        }}
      >
        Самооцінка та внутрішні конфлікти
      </h3>
      <div className="space-y-8 pl-4 text-xl md:text-2xl">
        <p><strong className="text-foreground">Самооцінка і внутрішня сила:</strong> Прийняття власної сили, здорової агресії, кордонів</p>
        <p><strong className="text-foreground">Сором і провина:</strong> Токсична провина, самосаботаж, самопошкодження</p>
        <p><strong className="text-foreground">Самотність:</strong> Відчуття покинутості, ізоляції, труднощі близькості</p>
      </div>
    </div>

    {/* Група 4 */}
    <div className="mb-12 md:mb-16">
      <h3
        style={{
          fontSize: '1.5rem',
          '@media (min-width: 768px)': { fontSize: '2.5rem' },
          fontWeight: '500',
          lineHeight: '1.1',
          letterSpacing: '-0.025em',
          marginBottom: '1.5rem',
          color: '#030213'
        }}
      >
        Стосунки
      </h3>
      <div className="space-y-8 pl-4 text-xl md:text-2xl">
        <p><strong className="text-foreground">Стосунки:</strong> Партнерські конфлікти, залежні стосунки, вихід із токсичних стосунків</p>
        <p><strong className="text-foreground">Самостійність у стосунках:</strong> Як бути близькою і залишатися собою</p>
        <p><strong className="text-foreground">Нові сценарії життя:</strong> Побудова інших, здоровіших стосунків</p>
      </div>
    </div>

    {/* Група 5 */}
    <div className="mb-12 md:mb-16">
      <h3
        style={{
          fontSize: '1.5rem',
          '@media (min-width: 768px)': { fontSize: '2.5rem' },
          fontWeight: '500',
          lineHeight: '1.1',
          letterSpacing: '-0.025em',
          marginBottom: '1.5rem',
          color: '#030213'
        }}
      >
        Тілесні та психосоматичні аспекти
      </h3>
      <div className="space-y-8 pl-4 text-xl md:text-2xl">
        <p><strong className="text-foreground">Психосоматика:</strong> Психосоматичні симптоми, тілесна напруга, зв'язок емоцій і тіла</p>
        <p><strong className="text-foreground">Тіло і психіка:</strong> Відчуття тіла, поєднання розуму і тілесності</p>
        <p><strong className="text-foreground">Харчова поведінка:</strong> Переїдання, емоційне харчування (без роботи з анорексією/булімією)</p>
        <p><strong className="text-foreground">Сексуальність:</strong> Прийняття своєї сексуальності, важливості, права на бажання</p>
        <p><strong className="text-foreground">Репродуктивні теми:</strong> Бажання завагітніти, емоційні блоки</p>
      </div>
    </div>

    {/* Група 6 */}
    <div className="mb-12 md:mb-16">
      <h3
        style={{
          fontSize: '1.5rem',
          '@media (min-width: 768px)': { fontSize: '2.5rem' },
          fontWeight: '500',
          lineHeight: '1.1',
          letterSpacing: '-0.025em',
          marginBottom: '1.5rem',
          color: '#030213'
        }}
      >
        Життєві кризи та глибина
      </h3>
      <div className="space-y-8 pl-4 text-xl md:text-2xl">
        <p><strong className="text-foreground">Життєві кризи:</strong> Розлучення, втрати, зміни в родині</p>
        <p><strong className="text-foreground">Робота зі снами:</strong> Сни як доступ до глибинних процесів</p>
      </div>
    </div>

  </div>
</section>

{/* -------------------- Блок 2: Моя терапія -------------------- */}
<section className="mb-20 flex justify-center">
  <div className="p-8 rounded-lg border border-border bg-gradient-to-br from-primary/5 to-primary/10 max-w-3xl w-full">

    <h2
      className="mb-6 text-center font-bold"
      style={{ color: "#111827", fontSize: "1.75rem" }}
    >
      Моя терапія для тих, хто…
    </h2>

    <div className="space-y-4 text-foreground/90 leading-loose">
      {[
        "шукає глибину, а не лише швидкі поради",
        "хоче розвитку, а не просто полегшення симптомів",
        "прагне краще зрозуміти себе",
        "хоче відчути свою силу й опору",
        "шукає внутрішнє світло і живість",
        "хоче будувати зрілі стосунки",
        "втомився повторювати старі сценарії",
        "хоче поєднати духовність, психіку і тіло",
        "готовий до чесного контакту із собою",
      ].map((item, i) => (
        <p key={i} className="flex items-start gap-2">
          <span className="text-primary mt-1">✓</span>
          <span>{item}</span>
        </p>
      ))}
    </div>
  </div>
</section>

{/* -------------------- Блок 3: Чому я -------------------- */}
<section className="mb-20 flex justify-center">
  <div className="p-8 rounded-lg border border-border bg-gradient-to-br from-primary/5 to-primary/10 max-w-3xl w-full">
    <h2
      className="mb-6 text-center font-bold"
      style={{ color: "#111827", fontSize: "1.75rem" }}
    >
      Чому я
    </h2>

    <div className="space-y-4 text-foreground/90 leading-loose">
      {[
        "Я постійно навчаюся й розвиваюся як психотерапевт, щоб у роботі спиратися на сучасні знання, професійні методи й глибоке розуміння психіки людини",
        "У терапії зі мною є повага до темпу, кордонів і вашій готовності. Я уважно відчуваю, що зараз потрібно, і допомагаю рухатися так, щоб ваші зміни були природними та стійкими.",
        "Моя робота — про глибину, чутливість і професійну опору. Я супроводжую вас в процесі, поки розкривається ваша внутрішня сила, ясність і здатність спиратися на себе у житті та стосунках.",
        "Мені важливо, щоб після терапії ви ставали більш самостійними, вільними у виборі та впевненими у власних рішеннях і при цьому відчувати що можна завжди звернутися.",
        "Часто клієнти приходять до мене за рекомендаціями тих, хто вже пройшов цей шлях і відчув зміни у своєму житті. Або просто вже побачили зміни людей поруч і захотіли собі таке ж =)"
      ].map((text, i) => (
        <p key={i} className="flex items-start gap-2">
          <span className="text-primary mt-1">✓</span>
          <span>{text}</span>
        </p>
      ))}
    </div>
  </div>
</section>










        {/* CTA Section */}
        <section className="mb-12">
          <div className="text-center p-8 rounded-lg bg-primary text-primary-foreground">
            <h2 className="mb-4">Обирай серцем</h2>
            <p className="mb-6">
              Якщо відгукується - напишіть мені.<br />
              Разом підберемо формат, який підтримає саме вас.
            </p>
            <a 
              href="https://t.me/yuliyastor" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg bg-background text-foreground hover:bg-background/90 transition-colors"
            >
              Записатися в Direct
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-border">
          <p className="text-center text-muted-foreground">
            © 2025 Юлія Сторожевська. Гештальт-терапевт, супервізор.
          </p>
        </footer>
      </div>
    </div>
  );
}
