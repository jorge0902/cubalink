// Remesas Cuba ⇄ Rusia — contacto entre personas que envían dinero (demo navegable)
// IMPORTANTE: CubaLink solo conecta personas. No participa en transacciones ni las garantiza.
// Referencia de cambio (moneda nacional): 1 RUB = 10.30 CUP

export const REFERENCE_RATE = '1 RUB = 10.30 CUP (peso cubano)'

export const remittanceTypes = [
  { id: 'rub_cup', label: 'Envío RUB → CUP', icon: 'currency_ruble', direction: 'send' },
  { id: 'rub_usd', label: 'Envío RUB → USD', icon: 'currency_exchange', direction: 'send' },
  { id: 'usdt_cup', label: 'Envío USDT → CUP', icon: 'currency_bitcoin', direction: 'send' },
  { id: 'efectivo', label: 'Cambio de efectivo', icon: 'payments', direction: 'exchange' },
  { id: 'compra_usdt', label: 'Compra de USDT', icon: 'add_card', direction: 'buy' },
  { id: 'venta_usdt', label: 'Venta de USDT', icon: 'currency_bitcoin', direction: 'sell' },
]

export const paymentMethods = [
  'Efectivo',
  'Transferencia SBP',
  'Tinkoff',
  'Sberbank',
  'Binance',
  'Bybit',
  'Western Union',
  'En persona',
]

export const remittances = [
  {
    id: 1,
    type: 'rub_cup',
    rate: '1 RUB = 10.30 CUP',
    commission: 'Sin comisión',
    method: 'Transferencia SBP',
    city: 'Moscú',
    date: 'Hoy',
    comments:
      'Envío a Cuba en el día, su familia recibe en MLC o efectivo según lo que pida. Llevo 3 años en esto con más de 400 operaciones. Se paga después de que la familia confirme la recepción. Gente seria por favor.',
    contact: '+7 926 556-77-88',
    posted: 'Hace 1 hora',
    verified: true,
  },
  {
    id: 2,
    type: 'rub_usd',
    rate: '1 USD = 95 RUB',
    commission: '2%',
    method: 'En persona',
    city: 'Moscú',
    date: 'Hoy',
    comments:
      'Compro dólares en efectivo en Moscú. Tasa del día, comisión 2%. Entregas y pagos en persona en metro, zona Centro. Para montos desde 500 USD. Solo gente seria, se coordina por privado.',
    contact: '+7 905 112-33-44',
    posted: 'Hace 3 horas',
    verified: false,
  },
  {
    id: 3,
    type: 'usdt_cup',
    rate: '1 USDT = 240 CUP',
    commission: 'Sin comisión',
    method: 'Binance',
    city: 'Online',
    date: 'Hoy',
    comments:
      'Cambio USDT a CUP para entrega en Cuba. La familia recibe en efectivo o transferencia en Cuba. Operación rápida, se hace en menos de 30 minutos. Sin pago adelantado hasta confirmar recepción.',
    contact: '+7 909 889-01-23',
    posted: 'Hace 5 horas',
    verified: true,
  },
  {
    id: 4,
    type: 'efectivo',
    rate: '1 USD = 94 RUB',
    commission: 'Negociable',
    method: 'En persona',
    city: 'San Petersburgo',
    date: 'Ayer',
    comments:
      'Cambio de efectivo dólares a rublos en San Petersburgo. Montos desde 300 USD. Nos vemos en metro, verificamos el dinero juntos y listo. Referencias disponibles de la comunidad.',
    contact: '+7 915 443-22-11',
    posted: 'Hace 1 día',
    verified: false,
  },
  {
    id: 5,
    type: 'compra_usdt',
    rate: '1 USDT = 97 RUB',
    commission: '1.5%',
    method: 'Tinkoff',
    city: 'Moscú',
    date: 'Ayer',
    comments:
      'Compro USDT por Tinkoff o SBP. Pago al momento de la transferencia. Montos desde 10 000₽. Operaciones rápidas y seguras, llevo años en el mercado. Precio según el día.',
    contact: '+7 913 556-77-88',
    posted: 'Hace 1 día',
    verified: true,
  },
  {
    id: 6,
    type: 'venta_usdt',
    rate: '1 USDT = 98 RUB',
    commission: 'Sin comisión',
    method: 'Bybit',
    city: 'Online',
    date: 'Ayer',
    comments:
      'Vendo USDT, entrego directo de mi billetera. Pago por SBP o Tinkoff. Monto mínimo 5 000₽. Operación en 15 minutos. Con referencias si las necesitas.',
    contact: '+7 920 445-66-77',
    posted: 'Hace 2 días',
    verified: false,
  },
  {
    id: 7,
    type: 'rub_cup',
    rate: '1 RUB = 10.30 CUP',
    commission: 'Sin comisión',
    method: 'Transferencia SBP',
    city: 'Moscú',
    date: 'Hace 2 días',
    comments:
      'Envío de rublos a Cuba, la familia recibe CUP o MLC. Trabajo con la red de confianza de la comunidad. Pago después de la confirmación de su familia. Operaciones desde 5 000₽.',
    contact: '+7 907 334-55-66',
    posted: 'Hace 2 días',
    verified: true,
  },
  {
    id: 8,
    type: 'usdt_cup',
    rate: '1 USDT = 238 CUP',
    commission: '1%',
    method: 'Binance',
    city: 'Online',
    date: 'Hace 2 días',
    comments:
      'Envío USDT a Cuba con entrega en CUP. La familia recibe en efectivo en su provincia. Comisión 1% sobre el monto. Coordinación por privado, se entrega en el día.',
    contact: '+7 910 334-55-66',
    posted: 'Hace 3 días',
    verified: false,
  },
  {
    id: 9,
    type: 'efectivo',
    rate: '1 EUR = 108 RUB',
    commission: '2%',
    method: 'En persona',
    city: 'Moscú',
    date: 'Hace 3 días',
    comments:
      'Cambio de euros a rublos en efectivo. Montos desde 200 EUR. Zona Centro, metro conveniente. Se verifica el dinero en el momento. Solo citas serias.',
    contact: '+7 916 778-88-99',
    posted: 'Hace 3 días',
    verified: false,
  },
  {
    id: 10,
    type: 'venta_usdt',
    rate: '1 USDT = 96.5 RUB',
    commission: '0.5%',
    method: 'Sberbank',
    city: 'Online',
    date: 'Hace 3 días',
    comments:
      'Vendo USDT con comisión mínima del 0.5%. Pago por Sberbank. Montos desde 3 000₽ hasta 200 000₽. Soy de los precios más bajos del mercado, operación garantizada.',
    contact: '+7 968 826-15-68',
    posted: 'Hace 3 días',
    verified: true,
  },
  {
    id: 11,
    type: 'rub_usd',
    rate: '1 USD = 93 RUB',
    commission: '3%',
    method: 'Western Union',
    city: 'Moscú',
    date: 'Hace 4 días',
    comments:
      'Envío dólares a Cuba por Western Union. La familia retira en CUP o USD según disponibilidad. Comisión 3% sobre el monto enviado. Se paga cuando la familia confirma.',
    contact: '+7 920 123-45-67',
    posted: 'Hace 4 días',
    verified: false,
  },
  {
    id: 12,
    type: 'compra_usdt',
    rate: '1 USDT = 98.5 RUB',
    commission: 'Sin comisión',
    method: 'Binance',
    city: 'Online',
    date: 'Hace 4 días',
    comments:
      'Compro USDT sin comisión, pago por Binance P2P o transferencia directa. Montos desde 20 000₽. Rapidez garantizada, respondo al momento. Preferible operaciones grandes.',
    contact: '+7 906 111-22-33',
    posted: 'Hace 4 días',
    verified: true,
  },
]

// Reglas de seguridad que la comunidad debe respetar — se muestran siempre en la sección
export const safetyRules = [
  'Nunca pagues por adelantado. El pago se hace cuando la familia confirma la recepción.',
  'Reúnete en lugares públicos y concurridos para los cambios de efectivo.',
  'Verifica la identidad y pide referencias antes de operar con alguien nuevo.',
  'No compartas claves, códigos ni accesos a tus billeteras con nadie.',
  'Si algo suena demasiado bueno para ser verdad, casi seguro lo es.',
]
