import { ChartLine, ShieldCheck, Zap, DollarSign, Activity, Globe } from 'lucide-react';
import { Statistic, Feature, PricingTier, FaqItem, ChartDataPoint } from './types';

export const LINKS = {
  MYFXBOOK: "https://www.myfxbook.com/members/sonch09/qqqkqe-high-risk/11832927",
  TELEGRAM: "https://t.me/Millonii47",
  PHONE: "+998 90 049 51 51",
  PHONE_CLEAN: "+998900495151",
  PHONE_URL: "tel:+998900495151"
};

export const CHART_DATA: ChartDataPoint[] = [
  { month: '1', gain: 0 },
  { month: '2', gain: 15 },
  { month: '3', gain: 32 },
  { month: '4', gain: 45 },
  { month: '5', gain: 68 },
  { month: '6', gain: 95 },
  { month: '7', gain: 120 },
  { month: '8', gain: 145.41 },
];

interface ContentType {
  nav: {
    results: string;
    features: string;
    faq: string;
    buy: string;
  };
  hero: {
    badge: string;
    title_profit: string;
    title_risk: string;
    description: string;
    cta_buy: string;
    cta_proof: string;
    trust_myfxbook: string;
    trust_mt5: string;
    trust_withdraw: string;
  };
  stats: Statistic[];
  proof: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    card_withdraw_title: string;
    card_withdraw_desc: string;
    card_return_title: string;
    card_return_desc: string;
    link_text: string;
    chart_title: string;
    chart_source: string;
    chart_updated: string;
  };
  features: {
    heading_small: string;
    heading_main_1: string;
    heading_main_2: string;
    heading_main_3: string;
    description: string;
    items: Feature[];
  };
  pricing: {
    heading_main: string;
    heading_highlight: string;
    subheading: string;
    tier: PricingTier;
    secure_text: string;
  };
  faq: {
    heading: string;
    items: FaqItem[];
  };
  footer: {
    links: {
      terms: string;
      privacy: string;
      support: string;
    };
    contact_title: string;
    disclaimer_title: string;
    disclaimer_text_1: string;
    disclaimer_text_2: string;
    copyright: string;
  };
}

export type { ContentType };

export const CONTENT: Record<'uz' | 'ru', ContentType> = {
  uz: {
    nav: {
      results: "Natijalar",
      features: "Imkoniyatlar",
      faq: "FAQ",
      buy: "Sotib Olish"
    },
    hero: {
      badge: "Tasdiqlangan Jonli Natijalar",
      title_profit: "Oyiga 34% Sof Foyda",
      title_risk: "Faqat 6% Risk Bilan",
      description: "**CZ MINNER EA** – MetaTrader 5 uchun eng xavfsiz va daromadli savdo roboti. Qo'lda savdo qilishni to'xtating. Sarmoyangizni avtomatlashtiring.",
      cta_buy: "Sotib Olish - $500",
      cta_proof: "Natijalarni Ko'rish",
      trust_myfxbook: "Myfxbook Tasdiqlagan",
      trust_mt5: "MetaTrader 5 Mosligi",
      trust_withdraw: "$44k+ Yechib Olingan"
    },
    stats: [
      { label: "Jami O'sish", value: "+145.41%", highlight: true },
      { label: "Oylik Foyda", value: "~34.84%" },
      { label: "Maksimal Risk", value: "6.19%", subtext: "Minimal Xavf" },
      { label: "Yechib Olingan", value: "$44,600", highlight: true },
      { label: "Sof Foyda", value: "$53,329.87" },
    ],
    proof: {
      badge: "Barqaror O'sish",
      title: "Raqamlar Aldamaydi.",
      subtitle: "Haqiqiy Pul, Haqiqiy Natija.",
      description: "Ko'pchilik savdo robotlari faqat \"Demo\" hisoblarda foyda ko'rsatadi. CZ MINNER EA esa real kapital bilan ishlaydi va foyda muntazam ravishda bank kartalariga yechib olinadi.",
      card_withdraw_title: "$44,600+ Yechib Olingan",
      card_withdraw_desc: "Biz shunchaki qog'ozdagi foydani ko'paytirmaymiz. Biz foydani real hisoblarga yechib olamiz va ishlatamiz.",
      card_return_title: "~35% Oylik Barqarorlik",
      card_return_desc: "An'anaviy bank foizlaridan o'nlab barobar yuqori daromad. Murakkab trend algoritmi orqali barqaror o'sish.",
      link_text: "Myfxbook hisobotini ko'rish",
      chart_title: "Umumiy O'sish",
      chart_source: "* Manba: Myfxbook",
      chart_updated: "Yangilandi: Bugun"
    },
    features: {
      heading_small: "Nega Aynan CZ MINNER EA?",
      heading_main_1: "Barqarorlik",
      heading_main_2: "va",
      heading_main_3: "Yuqori Foyda",
      description: "Hisobni \"yoqib yuboradigan\" oddiy grid botlardan farqli o'laroq, CZ MINNER EA bozor tahlili asosida aniq kirish va chiqish nuqtalarini belgilaydi.",
      items: [
        {
          title: "Tasdiqlangan MT5 Natijalari",
          description: "MetaTrader 5 uchun maxsus ishlab chiqilgan bo'lib, buyruqlarni tezkor bajarish va spreadni optimallashtirishga qaratilgan.",
          icon: ChartLine
        },
        {
          title: "Minimal Risk Himoyasi",
          description: "Bizning algoritm kapitalni saqlashni birinchi o'ringa qo'yadi. Tarixiy maksimal risk (drawdown) 6.19% dan oshmagan.",
          icon: ShieldCheck
        },
        {
          title: "Avtomatlashtirilgan Daromad",
          description: "100% passiv daromad. Robotni o'rnating va bozor tahlilini CZ MINNER EA ga topshiring. 24/7 ishlaydi.",
          icon: Zap
        },
        {
          title: "Isbotlangan Likvidlik",
          description: "Biz faqat raqamlarni ko'rsatmaymiz, biz foydani yechib olamiz. $44,600 dan ortiq mablag' real hisobdan yechib olingan.",
          icon: DollarSign
        },
        {
          title: "Jonli Kuzatuv",
          description: "Mobil ilova orqali real vaqt rejimida savdolarni kuzatib boring va bildirishnomalarni qabul qiling.",
          icon: Activity
        },
        {
          title: "Barcha Brokerlar Bilan",
          description: "Har qanday litsenziyalangan MT5 brokerida ishlaydi (RoboForex, Exness, IC Markets va boshqalar).",
          icon: Globe
        }
      ]
    },
    pricing: {
      heading_main: "Oddiy Narxlar,",
      heading_highlight: "Premium Sifat",
      subheading: "Bir martalik to'lov. Umrbod foydalanish. Oylik to'lovlar yo'q.",
      tier: {
        name: "Umrbod Litsenziya",
        price: 500,
        features: [
          "Cheksiz Real Hisoblar",
          "To'liq O'rnatish Qo'llanmasi",
          "24/7 Texnik Yordam",
          "Bepul Yangilanishlar",
          "Risk Menejment Sozlamalari",
          "Yopiq Telegram Kanalga Kirish"
        ],
        cta: "Hozir Sotib Olish",
        popular: true
      },
      secure_text: "Xavfsiz 256-bit SSL shifrlangan to'lov. Darhol yuklab olish."
    },
    faq: {
      heading: "Ko'p Beriladigan Savollar",
      items: [
        {
          question: "Bu haqiqiy hisobmi (Real) yoki Demo?",
          answer: "Barcha ko'rsatilgan statistika Real hisobga tegishli. Biz $44,600 dan ortiq mablag'ni muvaffaqiyatli yechib olganmiz, bu strategiyaning haqiqiy ekanligini isbotlaydi."
        },
        {
          question: "Pulimni yo'qotishim mumkinmi?",
          answer: "Har qanday savdo risk bilan bog'liq. Biroq, CZ MINNER EA minimal risk (drawdown 6.19%). Используется жесткий Stop-Loss для защиты капитала."
        },
        {
          question: "Menga savdo tajribasi kerakmi?",
          answer: "Yo'q. Bu to'liq avtomatlashtirilgan Expert Advisor. MT5 platformasiga o'rnatilgandan so'ng, u o'zi tahlil qiladi va savdoga kiradi."
        },
        {
          question: "Minimal depozit qancha bo'lishi kerak?",
          answer: "Biz $500 dan $1,000 gacha boshlashni tavsiya qilamiz. Bu risk menejment tizimi to'g'ri ishlashi uchun muhim."
        }
      ]
    },
    footer: {
      links: {
        terms: "Foydalanish Shartlari",
        privacy: "Maxfiylik Siyosati",
        support: "Yordam"
      },
      contact_title: "Bog'lanish",
      disclaimer_title: "OGOHLANTIRISH & RISK TAVSIFI",
      disclaimer_text_1: "Forex (Valyuta bozori) va CFD (Farqlar shartnomasi) savdosi yuqori darajadagi xavfga ega bo'lib, barcha investorlar uchun mos kelmasligi mumkin. Yuqori leveraj sizning foydangizga ham, zararingizga ham ishlashi mumkin. Sarmoya kiritishdan oldin o'z tajribangiz, maqsadlaringiz va risk darajangizni to'liq baholab chiqing.",
      disclaimer_text_2: "\"CZ MINNER EA\" ning o'tmishdagi natijalari kelajakdagi daromadni kafolatlamaydi. Ushbu veb-saytda ko'rsatilgan statistika Myfxbook tomonidan tasdiqlangan real hisob ma'lumotlariga asoslangan. Biz aniq foyda va'da qilmaymiz.",
      copyright: "CZ MINNER EA Trading Solutions. Barcha huquqlar himoyalangan."
    }
  },
  ru: {
    nav: {
      results: "Результаты",
      features: "Возможности",
      faq: "FAQ",
      buy: "Купить"
    },
    hero: {
      badge: "Подтвержденные Живые Результаты",
      title_profit: "34% Чистой Прибыли",
      title_risk: "Всего с 6% Риска",
      description: "**CZ MINNER EA** – Самый безопасный и прибыльный торговый робот для MetaTrader 5. Хватит торговать вручную. Автоматизируйте свои инвестиции.",
      cta_buy: "Купить - $500",
      cta_proof: "Смотреть Результаты",
      trust_myfxbook: "Проверено Myfxbook",
      trust_mt5: "Совместим с MT5",
      trust_withdraw: "$44k+ Выведено"
    },
    stats: [
      { label: "Общий Прирост", value: "+145.41%", highlight: true },
      { label: "Ежемесячно", value: "~34.84%" },
      { label: "Макс. Просадка", value: "6.19%", subtext: "Мин. Риск" },
      { label: "Выведено", value: "$44,600", highlight: true },
      { label: "Чистая Прибыль", value: "$53,329.87" },
    ],
    proof: {
      badge: "Стабильный Рост",
      title: "Цифры Не Врут.",
      subtitle: "Реальные Деньги, Реальный Результат.",
      description: "Многие торговые роботы показывают прибыль только на «Демо» счетах. CZ MINNER EA работает с реальным капиталом, и прибыль регулярно выводится на банковские карты.",
      card_withdraw_title: "$44,600+ Выведено",
      card_withdraw_desc: "Мы не просто увеличиваем бумажную прибыль. Мы выводим прибыль на реальные счета и используем её.",
      card_return_title: "~35% Стабильность",
      card_return_desc: "Доходность в десятки раз выше банковских депозитов. Стабильный рост благодаря сложному трендовому алгоритму.",
      link_text: "Смотреть отчет Myfxbook",
      chart_title: "Общий Рост",
      chart_source: "* Источник: Myfxbook",
      chart_updated: "Обновлено: Сегодня"
    },
    features: {
      heading_small: "Почему CZ MINNER EA?",
      heading_main_1: "Создан для",
      heading_main_2: "Стабильности",
      heading_main_3: "и Прибыли",
      description: "В отличие от простых сеточных ботов, которые «сливают» счета, CZ MINNER EA определяет точные точки входа и выхода на основе анализа рынка.",
      items: [
        {
          title: "Проверено на MT5",
          description: "Разработан специально для MetaTrader 5, с акцентом на быстрое исполнение ордеров и оптимизацию спреда.",
          icon: ChartLine
        },
        {
          title: "Защита Капитала",
          description: "Наш алгоритм ставит сохранение капитала на первое место. Историческая максимальная просадка не превышала 6.19%.",
          icon: ShieldCheck
        },
        {
          title: "Автоматический Доход",
          description: "100% пассивный доход. Установите робота и доверьте анализ рынка CZ MINNER EA. Работает 24/7.",
          icon: Zap
        },
        {
          title: "Доказанная Ликвидность",
          description: "Мы не просто показываем цифры, мы выводим прибыль. Более $44,600 выведено с реального счета.",
          icon: DollarSign
        },
        {
          title: "Живой Мониторинг",
          description: "Следите за торгами в реальном времени через мобильное приложение и получайте уведомления.",
          icon: Activity
        },
        {
          title: "Работает со всеми брокерами",
          description: "Работает с любым лицензированным брокером MT5 (RoboForex, Exness, IC Markets и другие).",
          icon: Globe
        }
      ]
    },
    pricing: {
      heading_main: "Простая Цена,",
      heading_highlight: "Премиум Качество",
      subheading: "Единоразовый платеж. Пожизненный доступ. Никаких ежемесячных комиссий.",
      tier: {
        name: "Пожизненная Лицензия",
        price: 500,
        features: [
          "Безлимитные Реальные Счета",
          "Полное Руководство по Установке",
          "24/7 Техническая Поддержка",
          "Бесплатные Обновления",
          "Настройки Риск-Менеджмента",
          "Доступ в Закрытый Telegram Канал"
        ],
        cta: "Купить Сейчас",
        popular: true
      },
      secure_text: "Безопасная оплата. Мгновенная загрузка."
    },
    faq: {
      heading: "Часто Задаваемые Вопросы",
      items: [
        {
          question: "Это реальный счет или Демо?",
          answer: "Все показанные статистики относятся к Реальному счету. Мы успешно вывели более $44,600, что доказывает эффективность стратегии."
        },
        {
          question: "Могу ли я потерять деньги?",
          answer: "Любая торговля сопряжена с риском. Однако CZ MINNER EA настроен на минимальный риск (просадка 6.19%). Используется жесткий Stop-Loss для защиты капитала."
        },
        {
          question: "Нужен ли мне опыт торговли?",
          answer: "Нет. Это полностью автоматизированный советник. После установки на платформу MT5 он сам анализирует и торгует."
        },
        {
          question: "Каков минимальный депозит?",
          answer: "Мы рекомендуем начинать с $500 до $1,000. Это важно для правильной работы системы риск-менеджмента."
        }
      ]
    },
    footer: {
      links: {
        terms: "Условия Использования",
        privacy: "Политика Конфиденциальности",
        support: "Поддержка"
      },
      contact_title: "Контакты",
      disclaimer_title: "ПРЕДУПРЕЖДЕНИЕ О РИСКАХ",
      disclaimer_text_1: "Торговля на Forex и CFD сопряжена с высоким уровнем риска и может подходить не всем инвесторам. Высокое кредитное плечо может работать как в вашу пользу, так и против вас.",
      disclaimer_text_2: "Прошлые результаты \"CZ MINNER EA\" не гарантируют будущих доходов. Статистика основана на данных реального счета Myfxbook. Мы не обещаем конкретной прибыли.",
      copyright: "CZ MINNER EA Trading Solutions. Все права защищены."
    }
  }
};
