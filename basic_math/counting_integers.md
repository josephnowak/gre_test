# Counting Multiples in an Interval

## Rule

Let A, B, and X be integers with A <= B and X > 0. We want to count how many integers in the inclusive interval [A, B] are divisible by X.

**Key formula:**
`count = floor(B / X) - floor((A - 1) / X)`

## Why this works

For any integer N, the quantity `floor(N / X)` counts how many multiples of X are less than or equal to N:
`X, 2X, 3X, ..., floor(N / X) * X`

So:
- `floor(B / X)` is the number of multiples of X that are <= B.
- `floor((A - 1) / X)` is the number of multiples of X that are < A.

Subtracting them leaves exactly the multiples in [A, B].

## Proof

Let `S(N)` be the number of integers k such that `kX <= N`.
Then `kX <= N` if and only if `k <= N / X`, so the largest possible integer k is `floor(N / X)`. Therefore:
`S(N) = floor(N / X)`

The number of multiples of X in [A, B] is:
`S(B) - S(A - 1) = floor(B / X) - floor((A - 1) / X)`

## Equivalent viewpoint

You can also find:
- The smallest multiple of X greater than or equal to A.
- The largest multiple of X less than or equal to B.

If those multiples are `mX` and `nX` with `m <= n`, then the count is:
`n - m + 1`

This gives the same result as the floor formula, but the floor formula is usually simpler and less error-prone.

## Example

**How many multiples of 4 are in [7, 23]?**

`floor(23 / 4) - floor((7 - 1) / 4)`
`= floor(5.75) - floor(1.5)`
`= 5 - 1`
`= 4`

The multiples are: **8, 12, 16, 20**.
