# Prime Factorization and Number of Divisors

Suppose a positive integer N has prime factorization:
`N = p_1^a_1 * p_2^a_2 * ... * p_k^a_k`
where `p_1, p_2, ..., p_k` are distinct primes and each exponent `a_i` is positive.

## Number of positive divisors

The number of positive divisors of N is:
`(a_1 + 1)(a_2 + 1) ... (a_k + 1)`

### Why this formula is true

Any positive divisor `d` of N must be built only from the primes that already appear in N. So `d` has the form:
`d = p_1^b_1 * p_2^b_2 * ... * p_k^b_k`
where each exponent `b_i` satisfies:
`0 <= b_i <= a_i`

For each prime `p_i`, there are exactly `a_i + 1` choices for `b_i`:
`0, 1, 2, ..., a_i`

The choices are independent. By the multiplication principle, the total number of divisors is:
`(a_1 + 1)(a_2 + 1) ... (a_k + 1)`

This is the cleanest proof: counting divisors is the same as counting all possible exponent choices.

### Example

Take **45 = 3^2 * 5^1**.
A divisor of 45 must look like:
`3^b * 5^c`
with:
- `0 <= b <= 2`
- `0 <= c <= 1`

So:
- `b` has 3 choices: 0, 1, 2
- `c` has 2 choices: 0, 1

Hence the number of positive divisors is:
`(2 + 1)(1 + 1) = 6`
They are: **1, 3, 5, 9, 15, 45**.

## Why prime factorization matters

The reason this works is that prime factorization is unique. Once N is written as a product of prime powers, every divisor is determined exactly by choosing how many copies of each prime to keep.

### Common interpretation

If `N = p_1^a_1 * p_2^a_2 * ... * p_k^a_k`, then:
- `a_i` tells us the maximum exponent of `p_i` available in a divisor of N.
- `a_i + 1` counts how many exponent choices are possible for `p_i`.

Multiplying these counts gives the total number of divisors.

### Remark

This is sometimes described with dynamic programming intuition, building the count one prime at a time. That intuition is fine, but the direct combinatorial proof above is simpler and more precise.

## Examples of Factorization

- **25** = 5 * 5 = 5^2
- **36** = 3 * 3 * 2 * 2 = 3^2 * 2^2
- **90** = 2 * 3 * 3 * 5 = 2 * 3^2 * 5
- **1416** = 2 * 2 * 2 * 3 * 59 = 2^3 * 3 * 59
- **75** = 5 * 5 * 3 = 5^2 * 3
- **60** = 5 * 3 * 2 * 2 = 5 * 3 * 2^2