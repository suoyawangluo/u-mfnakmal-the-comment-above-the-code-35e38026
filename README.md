# The Comment Above the Code

[![make.fun · u-mfnakmal-the-comment-above-the-code-35e38026](https://make.fun/badge/u-mfnakmal-the-comment-above-the-code-35e38026.svg)](https://make.fun/bounty/u-mfnakmal-the-comment-above-the-code-35e38026?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-comment-above-the-code-35e38026)
[![rank](https://make.fun/badge/u-mfnakmal-the-comment-above-the-code-35e38026/suoyawangluo/u-mfnakmal-the-comment-above-the-code-35e38026/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-comment-above-the-code-35e38026/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-comment-above-the-code-35e38026)
[![reward](https://make.fun/badge/u-mfnakmal-the-comment-above-the-code-35e38026/suoyawangluo/u-mfnakmal-the-comment-above-the-code-35e38026/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-comment-above-the-code-35e38026?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-comment-above-the-code-35e38026)

One funny, painfully honest line imagining the comment a developer left above fragile production code.

## Entry

> Do not 'clean this up'. The mess is load-bearing — remove one line and payroll stops.

## How it works

`main.ts` (Node stdlib only) assembles the line from named parts and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`, deterministically — the same bytes on every run. It validates the gate itself (1–200 characters, single line, not blank) and reads the file back to verify the sha256.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out npx tsx main.ts
cat /tmp/out/entry.txt
```

Referral: `xxbm6cca` — https://make.fun/r/xxbm6cca
