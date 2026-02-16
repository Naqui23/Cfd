# 📊 CFD Analyzer Pro

Ferramenta de análise técnica com sinais automáticos de compra e venda, usando dados reais do Finnhub.

## Funcionalidades

- **Indicadores técnicos**: RSI, MACD, SMA 20/50, Bollinger Bands, Fibonacci, Suporte/Resistência, ATR, ADX
- **Sinais automáticos**: Compra/Venda com força de 1-8 baseados em confluência de indicadores
- **Recomendação**: COMPRA FORTE → AGUARDAR → VENDA FORTE
- **Multi-ativos**: Ações, Commodities, Forex, Crypto
- **Multi-timeframe**: Análise diária + semanal combinada
- **Gestão de posições**: Registar entradas, SL/TP com alertas em tempo real
- **Histórico de trades**: P&L total, win rate, registo completo
- **Notificações push**: Alertas quando surgem sinais fortes ou SL/TP atingidos
- **PWA**: Instala no ecrã inicial do iPhone/Android como app nativa
- **Auto-refresh**: Atualização automática a cada 30 segundos
- **100% grátis**: Usa a API gratuita do Finnhub (60 req/min)

## Como instalar

### 1. Ativar GitHub Pages

1. Vai a **Settings** → **Pages**
1. Em **Source**, seleciona **Deploy from a branch**
1. Seleciona **main** e **/ (root)**
1. Clica **Save**
1. Espera 1-2 minutos, o site ficará em: `https://SEU-USERNAME.github.io/NOME-REPO/`

### 2. Obter API Key (grátis)

1. Vai a [finnhub.io/register](https://finnhub.io/register)
1. Cria conta grátis
1. Copia a API key do dashboard

### 3. Usar no iPhone

1. Abre o link do GitHub Pages no Safari
1. Introduz a API key
1. Safari → **Partilhar** → **Adicionar ao ecrã inicial**
1. Pronto! Funciona como app nativa

## Estrutura

```
index.html    → App principal (tudo num ficheiro)
manifest.json → Configuração PWA
sw.js         → Service Worker (cache + notificações)
icon192.png   → Ícone PWA 192x192
icon512.png   → Ícone PWA 512x512
```

## Limites da API gratuita

- 60 chamadas por minuto
- Com auto-refresh (30s) e ~6 ativos: ~20 chamadas/refresh = dentro do limite
- Dados de velas diárias (não intraday no plano grátis)

## Aviso

⚠️ Ferramenta educativa. Não constitui aconselhamento financeiro. CFDs são instrumentos de alto risco com alavancagem. Consulte um profissional antes de investir.