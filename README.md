# CFD Analyzer Pro — Yahoo Finance Edition

## 🚀 Deploy no GitHub Pages

1. Substitui o `index.html` no teu repo `naqui23/Cfd`
2. Substitui o `manifest.json` e `sw.js`
3. Mantém os ícones `icon192.png` e `icon512.png`
4. Commit + Push → GitHub Pages atualiza automaticamente

## ✅ O que mudou vs versão anterior

### Bugs corrigidos
- ❌ Removida dependência de Finnhub API → Yahoo Finance via CORS proxies
- ❌ Corrigido erro de sintaxe na renderHist() (linha 325)
- ❌ Fibonacci agora usa últimos 60 dias (não dataset inteiro)
- ❌ MIN_SIG aumentado de 3 para 4 (menos falsos positivos)
- ❌ ADX fraco agora reduz score em 50% (era 40%)
- ❌ Nomes de ícones no manifest corrigidos (icon192.png, não icon-192.png)
- ❌ Service Worker não faz cache de pedidos API

### Funcionalidades novas
- ✅ **Sem API Key** — entra direto, Yahoo Finance gratuito
- ✅ **Backtesting funcional** — 2, 3 ou 5 anos com simulação SL/TP
- ✅ **Validação de estratégia** — PF ≥ 1.3 e Drawdown ≤ 25%
- ✅ **Gestão de Risco real** — Capital, risco/trade, alavancagem, max posições, perda diária
- ✅ **Limite diário** — Bloqueia novas posições ao atingir perda máxima
- ✅ **Validação de posição** — Verifica se tamanho excede limite por posição
- ✅ **Trailing Stop** — Opção ao registar posição
- ✅ **Spreads XTB** — Descontados nos cálculos de P&L
- ✅ **Exportação CSV** — Dados + indicadores + histórico de trades
- ✅ **Horário de mercado** — Detecta NYSE/NASDAQ, Forex, Crypto
- ✅ **Modo Ações vs CFDs** — Ações = Long only, CFDs = Bidirecional
- ✅ **Tab Estatísticas** — Win rate, profit factor, max drawdown, avg win/loss
- ✅ **Tab Backtest** — Resultados detalhados com lista de trades
- ✅ **Yahoo Finance symbols** — AAPL, EURUSD=X, BTC-USD, GC=F, etc.

### Símbolos Yahoo Finance
| Tipo | Exemplo |
|------|---------|
| Ações | AAPL, MSFT, TSLA |
| Forex | EURUSD=X, GBPUSD=X |
| Crypto | BTC-USD, ETH-USD, SOL-USD |
| Commodities | GC=F (Ouro), SI=F (Prata), CL=F (Petróleo) |

## 📋 Estrutura de ficheiros
```
├── index.html      ← App principal (single file)
├── manifest.json   ← PWA manifest
├── sw.js           ← Service Worker
├── icon192.png     ← Ícone 192x192
├── icon512.png     ← Ícone 512x512
└── README.md       ← Este ficheiro
```
