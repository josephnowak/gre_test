# Combinatorics and Counting

Combinatorics is the math of counting possibilities. On the GRE, these problems usually test whether you can decide whether **order matters**, whether **repetition is allowed**, and whether the problem is asking for a direct count or the complement.

The main tools are factorials, the fundamental counting principle, permutations, and combinations.

---

## Key Concepts

### Factorials

A **factorial** is the product of all positive integers from `1` to `n`.

```
n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1
```

Important values:

```
0! = 1
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120
6! = 720
```

**Example:**

```
5! = 5 * 4 * 3 * 2 * 1 = 120
```

**GRE shortcut: simplify before multiplying.**

```
8! / 6! = (8 * 7 * 6!) / 6! = 8 * 7 = 56
```

---

### Fundamental Counting Principle

If one task can be done in `a` ways and a second task can be done in `b` ways, then both tasks together can be done in

```
a * b
```

ways.

For several stages:

```
Total ways = choices for stage 1 * choices for stage 2 * choices for stage 3 * ...
```

**GRE translation:**

- **AND** usually means multiply.
- **OR** usually means add, as long as the cases do not overlap.

**Example:**
A lunch has 3 sandwich choices, 2 drink choices, and 4 dessert choices.

```
Total lunches = 3 * 2 * 4 = 24
```

---

### Permutations

A **permutation** is an arrangement where order matters.

The number of ways to arrange `r` objects chosen from `n` different objects is

```
P(n, r) = n! / (n - r)!
```

This is also written as `nPr`.

**Example:**
How many ways can gold, silver, and bronze medals be awarded among 8 runners?

Order matters because first, second, and third place are different.

```
P(8, 3) = 8! / (8 - 3)!
P(8, 3) = 8! / 5!
P(8, 3) = 8 * 7 * 6 = 336
```

If all `n` objects are arranged, then

```
P(n, n) = n!
```

---

### Permutations with Repetition Allowed

If there are `n` choices for each slot and repetition is allowed, then the number of ordered outcomes for `r` slots is

```
n^r
```

**Example:**
A 4-digit code uses digits `0` through `9`, and digits may repeat. How many codes are possible?

There are 10 choices for each of 4 slots:

```
10^4 = 10,000
```

**GRE warning:** If the first digit cannot be `0`, handle that slot separately.

Example:

```
9 * 10 * 10 * 10 = 9,000
```

---

### Combinations

A **combination** is a selection where order does not matter.

The number of ways to choose `r` objects from `n` different objects is

```
C(n, r) = n! / (r! * (n - r)!)
```

This is also written as `nCr` or "n choose r."

**Example:**
How many ways can a committee of 3 people be chosen from 8 people?

Order does not matter because the committee `{A, B, C}` is the same as `{C, B, A}`.

```
C(8, 3) = 8! / (3! * 5!)
C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1)
C(8, 3) = 336 / 6 = 56
```

Important symmetry:

```
C(n, r) = C(n, n - r)
```

Choosing 3 people to be on a committee is the same as choosing `n - 3` people to leave out.

---

### Permutations vs Combinations

The key question is:

```
Does order matter?
```

If order matters, use permutations or the counting principle.

If order does not matter, use combinations.

| Situation | Use |
|----------|-----|
| Race rankings | Permutation |
| Seating people in a row | Permutation |
| Passwords or codes | Counting principle |
| Committees | Combination |
| Choosing books from a shelf | Combination |
| Choosing and then assigning roles | Combination, then permutation |

---

### Arrangements with Repeated Items

If a word or list has repeated items, divide by the factorials of the repeated counts.

For `n` total objects, with repeated groups of sizes `a`, `b`, `c`, and so on:

```
Number of distinct arrangements = n! / (a! * b! * c! * ...)
```

**Example:**
How many distinct arrangements are there of the letters in `LEVEL`?

There are 5 letters:

- `L` appears 2 times
- `E` appears 2 times
- `V` appears 1 time

So

```
5! / (2! * 2!) = 120 / 4 = 30
```

---

### Restricted Counting

GRE counting problems often include restrictions. The safest method is to handle the most restricted slots first.

**Example:**
How many 3-digit numbers can be formed from the digits `0, 1, 2, 3, 4` if no digit repeats?

The hundreds digit cannot be `0`, so it has 4 choices: `1, 2, 3, 4`.

After that, there are 4 choices left for the tens digit and 3 choices left for the ones digit.

```
4 * 4 * 3 = 48
```

---

### Block Method

If some objects must stay together, treat them as one block first.

**Example:**
In how many ways can `A, B, C, D` be arranged if `A` and `B` must be together?

Treat `AB` as one block. Then the objects are:

```
AB, C, D
```

These 3 objects can be arranged in

```
3! = 6
```

ways.

Inside the block, `A` and `B` can be arranged in

```
2! = 2
```

ways.

Total:

```
3! * 2! = 6 * 2 = 12
```

---

### Complement Counting

If a problem says "at least one," it is often easier to count the opposite and subtract.

```
At least one = Total - None
```

**Example:**
A 4-question true/false quiz has `2^4 = 16` possible answer patterns. How many patterns have at least one true answer?

Only one pattern has no true answers:

```
FFFF
```

So

```
16 - 1 = 15
```

---

### Counting and Probability

Counting problems often connect to probability.

If all outcomes are equally likely:

```
Probability = favorable outcomes / total outcomes
```

**Example:**
If 2 students are chosen from 5 students, how many possible pairs are there?

```
C(5, 2) = 5! / (2! * 3!) = 10
```

If Ana and Ben are one specific pair, the probability that both are chosen is

```
1 / 10
```

---

## Worked Examples

### Example 1: Factorial Simplification

Simplify:

```
10! / 8!
```

Cancel `8!`:

```
10! / 8! = (10 * 9 * 8!) / 8! = 10 * 9 = 90
```

---

### Example 2: Choosing a Committee

A club has 9 members. How many ways can a committee of 4 members be chosen?

Order does not matter, so use combinations:

```
C(9, 4) = 9! / (4! * 5!)
C(9, 4) = (9 * 8 * 7 * 6) / (4 * 3 * 2 * 1)
C(9, 4) = 3024 / 24 = 126
```

---

### Example 3: Assigning Roles

A club has 9 members. How many ways can it choose a president, vice president, and treasurer?

Order matters because the roles are different.

```
P(9, 3) = 9! / 6!
P(9, 3) = 9 * 8 * 7 = 504
```

---

### Example 4: Choose Then Arrange

From 8 students, how many ways can 3 students be chosen and then seated in a row?

Choose the 3 students:

```
C(8, 3) = 56
```

Arrange those 3 students:

```
3! = 6
```

Total:

```
56 * 6 = 336
```

This equals `P(8, 3)`, but breaking it into two steps makes the logic clearer.

---

### Example 5: At Least One Restriction

A password has 3 letters, and each letter can be `A`, `B`, or `C`. Repetition is allowed. How many passwords contain at least one `A`?

Total passwords:

```
3^3 = 27
```

Passwords with no `A` use only `B` and `C`:

```
2^3 = 8
```

Therefore:

```
27 - 8 = 19
```

---

### Example 6: Repeated Letters

How many distinct arrangements are there of the letters in `BANANA`?

There are 6 letters:

- `A` appears 3 times
- `N` appears 2 times
- `B` appears 1 time

So

```
6! / (3! * 2!) = 720 / 12 = 60
```

---

## Practice Exercises

### Exercise 1: Permutation

Six runners are in a race. How many ways can first, second, and third place be awarded?

**Solution:**

```
P(6, 3) = 6! / 3!
P(6, 3) = 6 * 5 * 4 = 120
```

---

### Exercise 2: Combination

How many ways can 5 books be chosen from 12 books?

**Solution:**

```
C(12, 5) = 12! / (5! * 7!)
C(12, 5) = (12 * 11 * 10 * 9 * 8) / (5 * 4 * 3 * 2 * 1)
C(12, 5) = 792
```

---

### Exercise 3: Restricted Digits

How many 4-digit numbers can be made from the digits `1, 2, 3, 4, 5` if no digit repeats?

**Solution:**

There are 5 choices for the first digit, then 4, then 3, then 2.

```
5 * 4 * 3 * 2 = 120
```

---

### Exercise 4: At Least One

A 5-question multiple-choice quiz has 4 answer choices per question. How many answer patterns have at least one answer choice `A`?

**Solution:**

Total patterns:

```
4^5 = 1024
```

Patterns with no `A`:

```
3^5 = 243
```

So:

```
1024 - 243 = 781
```

---

### Exercise 5: Repeated Objects

How many distinct arrangements are there of the letters in `MAMMA`?

**Solution:**

There are 5 letters:

- `M` appears 3 times
- `A` appears 2 times

```
5! / (3! * 2!) = 120 / 12 = 10
```

---

## GRE Tips and Common Traps

1. **Ask whether order matters.**
   - If changing the order creates a new outcome, use permutations or slot counting.
   - If changing the order does not create a new outcome, use combinations.

2. **Handle restrictions first.**
   - In digit problems, deal with "first digit cannot be zero" before the other slots.

3. **Use complement counting for "at least one."**
   - Count total outcomes and subtract the cases with none.

4. **Do not multiply when cases overlap.**
   - If using OR, make sure the cases are separate or subtract overlap.

5. **Cancel factorials before multiplying.**
   - GRE answers are often designed so huge factorials simplify quickly.

6. **Committees are combinations. Roles are permutations.**
   - A committee member has no special position, but a president and treasurer are different roles.

---

## Quick Summary Table

| Idea | Formula / Rule |
|------|----------------|
| Factorial | `n! = n * (n - 1) * ... * 1` |
| Zero factorial | `0! = 1` |
| Fundamental counting principle | multiply the choices for each stage |
| Permutation | `P(n, r) = n! / (n - r)!` |
| Combination | `C(n, r) = n! / (r! * (n - r)!)` |
| With repetition allowed | `n^r` |
| Repeated arrangements | `n! / (a! * b! * c! * ...)` |
| At least one | `total - none` |
| Probability from counting | `favorable outcomes / total outcomes` |
