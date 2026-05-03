# Divisibility Rules

## Divisibility rules from 1 to 9

Throughout, write a base-10 integer N in the form:
N = 10a + b
where b is the last digit and a is the number formed by the remaining digits.
This is the standard starting point for most divisibility proofs.

### 1. Divisibility by 1

**Rule:** Every integer is divisible by 1.

**Reason:** For every integer N, we have N = 1 * N.

### 2. Divisibility by 2

**Rule:** N is divisible by 2 if and only if its last digit is 0, 2, 4, 6, or 8.

**Proof:** Since N = 10a + b and 10a is divisible by 2, the divisibility of N by 2 depends only on b. The even digits are exactly 0, 2, 4, 6, and 8.

### 3. Divisibility by 3

**Rule:** N is divisible by 3 if and only if the sum of its digits is divisible by 3.

**Proof:** Write:
N = d_k 10^k + d_{k-1} 10^{k-1} + ... + d_1 10 + d_0

We use the following property of congruences:
If x is congruent to y modulo 3, then we may replace x by y inside sums and products without changing the remainder modulo 3.

Now:
10 = 9 + 1
and 9 is divisible by 3, so:
10 ≡ 1 (mod 3)

From this, multiplying both sides by 10 gives:
10^2 ≡ 10 (mod 3)
Since 10 ≡ 1 (mod 3), we get:
10^2 ≡ 1 (mod 3)

Repeating the same idea:
10^3 = 10 * 10^2 ≡ 1 * 1 ≡ 1 (mod 3)
and in general:
10^j ≡ 1 (mod 3) for every j >= 0

This is why the powers of 10 disappear modulo 3: each factor 10^j can be replaced by 1.

So, modulo 3:
N = d_k 10^k + d_{k-1} 10^{k-1} + ... + d_1 10 + d_0
  ≡ d_k * 1 + d_{k-1} * 1 + ... + d_1 * 1 + d_0
  ≡ d_k + d_{k-1} + ... + d_1 + d_0 (mod 3)

Therefore N and the sum of its digits have the same remainder modulo 3. In particular, N is divisible by 3 if and only if the sum of its digits is divisible by 3.

### 4. Divisibility by 4

**Rule:** N is divisible by 4 if and only if the number formed by its last two digits is divisible by 4.

**Proof:** Write N = 100a + b, where b is the last two-digit block. Since 100 is divisible by 4, the term 100a is divisible by 4. So N is divisible by 4 exactly when b is.

### 5. Divisibility by 5

**Rule:** N is divisible by 5 if and only if its last digit is 0 or 5.

**Proof:** Since N = 10a + b and 10a is divisible by 5, only the last digit matters. Among the digits 0 through 9, only 0 and 5 are divisible by 5.

### 6. Divisibility by 6

**Rule:** N is divisible by 6 if and only if it is divisible by both 2 and 3.

**Proof:** Since 6 = 2 * 3 and 2 and 3 are coprime, a number is divisible by 6 exactly when it has both factors 2 and 3. So we can combine the tests for 2 and 3.

### 7. Divisibility by 7

**Rule:** If N = 10a + b, then N is divisible by 7 if and only if a - 2b is divisible by 7. This step can be repeated until the result is easy to check.

**Proof:** We have:
N = 10a + b

If N is divisible by 7, then 10a + b ≡ 0 (mod 7).
Since 10 ≡ 3 (mod 7), this becomes:
3a + b ≡ 0 (mod 7)

Multiply both sides by 5, because 5 * 3 = 15 ≡ 1 (mod 7):
a + 5b ≡ 0 (mod 7)

Since 5 ≡ -2 (mod 7), this is equivalent to:
a - 2b ≡ 0 (mod 7)

So N is divisible by 7 if and only if a - 2b is divisible by 7.

**Example:**
203 is divisible by 7 because 20 - 2 * 3 = 14, and 14 is divisible by 7.

### 8. Divisibility by 8

**Rule:** N is divisible by 8 if and only if the number formed by its last three digits is divisible by 8.

**Proof:** Write N = 1000a + b, where b is the last three-digit block. Since 1000 is divisible by 8, the divisibility of N by 8 depends only on b.

### 9. Divisibility by 9

**Rule:** N is divisible by 9 if and only if the sum of its digits is divisible by 9.

**Proof:** Because 10 = 9 + 1, we have 10 ≡ 1 (mod 9), so every power of 10 is congruent to 1 modulo 9. Therefore N is congruent modulo 9 to the sum of its digits. So they are divisible by 9 together.

## Using small divisibility rules to test larger numbers

Sometimes a divisor can be factored into smaller numbers whose tests are easier.
For example:
35 = 5 * 7
So if a number is divisible by 35, then it must be divisible by both 5 and 7. This gives a quick necessary test.

### Important caution

To conclude that divisibility by both factors implies divisibility by their product, the factors must be coprime.

For example:
- Divisible by 2 and 3 implies divisible by 6, because gcd(2, 3) = 1
- Divisible by 5 and 7 implies divisible by 35, because gcd(5, 7) = 1

But:
- Divisible by 2 and 4 does not give a new test for 8

**The reliable rule is:**
If gcd(a, b) = 1, then divisibility by both a and b is equivalent to divisibility by ab.
