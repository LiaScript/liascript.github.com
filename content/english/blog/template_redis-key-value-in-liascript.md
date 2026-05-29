---
title: "Redis for LiaScript: Explore Key-Value Stores and Data Structures in the Browser"
slug: "redis-key-value-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/Redis"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Database
    - JavaScript
    - No Server
    - Developers
    - Computer Science

liascript: true

description: "Use the Redis template to teach key-value stores, Redis data structures, TTL, transactions, and caching patterns — directly in your LiaScript courses, with no server needed."
---

Redis is one of the most widely used databases in the world — but teaching it interactively has always meant running a Redis server.
The [Redis template](https://github.com/LiaTemplates/Redis) removes that requirement entirely.

Based on [ioredis-mock](https://github.com/stipsan/ioredis-mock), a feature-complete in-browser mock of the Redis API, this LiaScript template lets students write real Redis commands in JavaScript and see the results immediately.
Strings, hashes, lists, sets, sorted sets, TTL, transactions, pub/sub — all supported, all in the browser.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Redis/0.0.1/README.md
-->
```

Two macros are available: `@Redis.eval` for self-contained examples and `@Redis.terminal` for interactive sessions.

---

## Macro 1: `@Redis.eval` — Execute Once

Attach `@Redis.eval` after any JavaScript code block to create a fresh Redis instance, run the code, and display console output.

```` markdown
```js
const redis = new Redis();

await redis.set('course', 'LiaScript');
await redis.set('version', '1.0');

const name    = await redis.get('course');
const version = await redis.get('version');
console.log(`${name} ${version}`);
```
@Redis.eval
````

---

## Data Types

Redis is not a simple key-value store — it natively supports five rich data structures.

### Strings

The basic type: text, numbers, counters.

```` markdown
```js
const redis = new Redis();

await redis.set('hits', '0');
await redis.incr('hits');
await redis.incr('hits');
await redis.incrby('hits', 8);

console.log('Total hits:', await redis.get('hits'));
```
@Redis.eval
````

### Hashes — Structured Objects

Store objects as field-value maps.
Ideal for user profiles, configuration, and entities.

```` markdown
```js
const redis = new Redis();

await redis.hset('user:1001', 'name', 'Alice');
await redis.hset('user:1001', 'email', 'alice@example.com');
await redis.hset('user:1001', 'role', 'admin');

const user = await redis.hgetall('user:1001');
console.log('User:', user);
```
@Redis.eval
````

### Lists — Queues and Stacks

Ordered collections, push/pop from both ends.

```` markdown
```js
const redis = new Redis();

await redis.rpush('queue', 'task-1', 'task-2', 'task-3');
console.log('Queue length:', await redis.llen('queue'));

const next = await redis.lpop('queue');
console.log('Processing:', next);
console.log('Remaining:', await redis.lrange('queue', 0, -1));
```
@Redis.eval
````

### Sets — Unique Collections

Unordered, deduplicated.
Supports intersection, union, and difference.

```` markdown
```js
const redis = new Redis();

await redis.sadd('alice:skills', 'Python', 'Redis', 'Docker');
await redis.sadd('bob:skills',   'Python', 'Java',  'Redis');

const shared = await redis.sinter('alice:skills', 'bob:skills');
console.log('Shared skills:', shared);
```
@Redis.eval
````

### Sorted Sets — Ranked Data

Members with scores, automatically kept sorted.
The canonical Redis leaderboard structure.

Try it live:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Redis/0.0.1/README.md
-->

# Redis Demo – Leaderboard

```js
const redis = new Redis();

await redis.zadd('leaderboard', 1500, 'Alice');
await redis.zadd('leaderboard', 2300, 'Bob');
await redis.zadd('leaderboard', 1800, 'Carol');
await redis.zadd('leaderboard', 2100, 'Diana');
await redis.zadd('leaderboard', 1950, 'Eve');

const top = await redis.zrevrange('leaderboard', 0, -1, 'WITHSCORES');

console.log('Leaderboard:');
for (let i = 0; i < top.length; i += 2) {
  const rank  = i / 2 + 1;
  const name  = top[i];
  const score = top[i + 1];
  console.log(`  ${rank}. ${name} — ${score} pts`);
}

// Boost Alice's score
await redis.zincrby('leaderboard', 700, 'Alice');
console.log('\nAfter Alice scores 700 more:');
const newScore = await redis.zscore('leaderboard', 'Alice');
const newRank  = await redis.zrevrank('leaderboard', 'Alice');
console.log(`  Alice: ${newScore} pts (rank ${newRank + 1})`);
```
@Redis.eval
{{< /liascript >}}

---

## Expiration and TTL

Redis supports key expiration — essential for caching, sessions, and temporary tokens.

```` markdown
```js
const redis = new Redis();

await redis.setex('session:abc', 30, 'user_data');  // expires in 30s
await redis.set('cache:result', 'value');
await redis.expire('cache:result', 60);

console.log('session TTL:', await redis.ttl('session:abc'));
console.log('cache TTL:',   await redis.ttl('cache:result'));
```
@Redis.eval
````

---

## Transactions

Atomic multi-command execution with `MULTI` / `EXEC`:

```` markdown
```js
const redis = new Redis();

await redis.set('account:alice', '1000');
await redis.set('account:bob',   '500');

// Transfer 200 atomically
await redis.multi()
  .decrby('account:alice', 200)
  .incrby('account:bob',   200)
  .exec();

console.log('Alice:', await redis.get('account:alice'));  // 800
console.log('Bob:',   await redis.get('account:bob'));    // 700
```
@Redis.eval
````

---

## Macro 2: `@Redis.terminal` — Interactive Session

The terminal macro initializes the Redis instance and opens an interactive prompt.
The scope (including all variables and data) persists across commands — ideal for live demonstrations and step-by-step exercises.

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Redis/0.0.1/README.md
-->

# Redis Demo – Terminal

```js
const redis = new Redis();

await redis.set('counter', '0');
await redis.hset('config', 'theme', 'dark', 'lang', 'en');

console.log('Redis terminal ready!');
console.log('Try:  await redis.incr("counter")');
console.log('      await redis.get("counter")');
console.log('      await redis.hgetall("config")');
console.log('      await redis.hset("config", "lang", "de")');
```
@Redis.terminal
{{< /liascript >}}

---

## Pre-Populated Databases

You can seed a Redis instance with initial data using the `data` constructor option:

```` markdown
```js
const redis = new Redis({
  data: {
    'user:1': { name: 'Alice', role: 'admin' },
    'user:2': { name: 'Bob',   role: 'user'  },
    'counter': '42'
  }
});

const user = await redis.hgetall('user:1');
console.log('Pre-loaded user:', user);
```
@Redis.eval
````

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/Redis/main/README.md" >}}

---

## Use Cases

**Database and backend courses** — Teach key-value store concepts, Redis data types, and caching strategies without spinning up a server.
Students interact with real Redis commands from the first minute.

**System design** — Illustrate session management, rate limiting, distributed counters, and pub/sub patterns with runnable examples.

**Leaderboards and real-time data** — Use sorted sets to demonstrate ranking, score updates, and top-N queries — a classic Redis use case that resonates with students.

**Caching and TTL** — Demonstrate cache eviction, expiration, and the `SET ... EX` pattern.
These are concepts every backend developer needs.

**Computer science** — Explore data structure trade-offs: when to use a list vs. a set vs. a sorted set.
Redis makes these abstract differences concrete.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — ioredis-mock (JavaScript) |
| **Server required** | No |
| **Data types** | Strings, Hashes, Lists, Sets, Sorted Sets |
| **Transactions** | Yes — `MULTI` / `EXEC` |
| **TTL / expiration** | Yes |
| **Pattern matching** | Yes — `keys('pattern:*')` |
| **Lua scripting** | Yes — `defineCommand()` |
| **Multiple instances** | Yes — isolated by port number |
| **Based on** | ioredis-mock |
| **License** | MIT |
| **Maintained** | Yes (TypeScript, version 0.0.1) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/Redis/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/Redis/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/Redis" label="View on GitHub" >}}

---

## Related Templates

- [**PouchDB**](/blog/pouchdb-nosql-in-liascript) — document-oriented NoSQL with Mango queries
- [**SQLite**](/blog/sqlite-sql-in-liascript) — relational SQL, useful as contrast to Redis's key-value model
- [**AlaSQL**](/blog/alasql-sql-in-liascript) — SQL over JavaScript arrays and JSON
- [**DuckDB**](/blog/duckdb-analytics-in-liascript) — analytical SQL, columnar execution
