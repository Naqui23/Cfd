# 📊 CFD Analyzer

Ferramenta de análise técnica com sinais automáticos de compra e venda, usando dados reais do Finnhub.

## Funcionalidades

- **Indicadores técnicos**: RSI, MACD, SMA 20/50, Bollinger Bands, Fibonacci, Suporte/Resistência
- **Sinais automáticos**: Compra/Venda com força de 1-6 baseados em confluência de indicadores
- **Recomendação**: COMPRA FORTE → NEUTRO → VENDA FORTE
- **Multi-ativos**: Ações, Commodities, Forex, Crypto
- **Notificações push**: Alertas quando surgem sinais fortes
- **PWA**: Instala no ecrã inicial do iPhone/Android como app nativa
- **Auto-refresh**: Atualização automática a cada 30 segundos
- **100% grátis**: Usa a API gratuita do Finnhub (60 req/min)

## Como instalar

### 1. Ativar GitHub Pages

1. Vai a **Settings** → **Pages**
2. Em **Source**, seleciona **Deploy from a branch**
3. Seleciona **main** e **/ (root)**
4. Clica **Save**
5. Espera 1-2 minutos, o site ficará em: `https://SEU-USERNAME.github.io/NOME-REPO/`

### 2. Obter API Key (grátis)

1. Vai a [finnhub.io/register](https://finnhub.io/register)
2. Cria conta grátis
3. Copia a API key do dashboard

### 3. Usar no iPhone

1. Abre o link do GitHub Pages no Safari
2. Introduz a API key
3. Safari → **Partilhar** → **Adicionar ao ecrã inicial**
4. Pronto! Funciona como app nativa

## Estrutura

```
index.html    → App principal (tudo num ficheiro)
manifest.json → Configuração PWA
sw.js         → Service Worker (cache + notificações)
icon-192.png  → Ícone PWA 192x192
icon-512.png  → Ícone PWA 512x512
```

## Limites da API gratuita

- 60 chamadas por minuto
- Com auto-refresh (30s) e 10 ativos: ~20 chamadas/refresh = bem dentro do limite
- Dados de velas diárias (não intraday no plano grátis)

## Aviso

⚠️ Ferramenta educativa. Não constitui aconselhamento financeiro. CFDs são instrumentos de alto risco com alavancagem. Consulte um profissional antes de investir.
