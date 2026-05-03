# Quantitative Comparison

Quantitative Comparison is a special GRE question type. Instead of finding one numerical answer, you compare **Quantity A** and **Quantity B**.

The answer choices are always:

```
A. Quantity A is greater.
B. Quantity B is greater.
C. The two quantities are equal.
D. The relationship cannot be determined from the information given.
```

The key GRE idea is this: sometimes a problem looks impossible because there is not enough information to find exact values. But you may still be able to determine the relationship by testing **edge cases**, **signs**, **zero**, **fractions**, and **extreme values**.

---

## Key Strategy

### Do Not Try to Solve More Than Necessary

In Quantitative Comparison, you only need to compare the two quantities.

You do not always need to find the exact value of each quantity.

**Example:**

If `x > 5`, compare:

| Quantity A | Quantity B |
|------------|------------|
| `x + 2` | `7` |

Since `x > 5`, then

```
x + 2 > 7
```

So Quantity A is greater.

Answer:

```
A
```

---

### Always Consider Edge Cases

Edge cases are values at the boundary of what is allowed.

Common GRE edge cases:

- `0`
- `1`
- `-1`
- Positive fractions, such as `1/2`
- Negative fractions, such as `-1/2`
- Values just above or below a boundary
- Very large positive numbers
- Very large negative numbers

If different valid cases give different relationships, the answer is

```
D. The relationship cannot be determined.
```

---

### Test More Than One Value

If variables are not fixed, one example is not enough.

You need to test whether the relationship is always the same.

**Danger pattern:**

```
x^2 compared with x
```

The relationship changes depending on whether `x` is negative, between `0` and `1`, equal to `1`, or greater than `1`.

---

## Important GRE Patterns

### Squaring Is Not Always Bigger

Compare `x^2` and `x`.

- If `x = 2`, then `x^2 = 4`, so `x^2 > x`.
- If `x = 1/2`, then `x^2 = 1/4`, so `x^2 < x`.
- If `x = 0`, then `x^2 = x`.

So without more information, the relationship cannot be determined.

---

### Multiplying by a Variable Can Reverse the Relationship

If `a > b`, you can multiply both sides by a positive number and keep the inequality direction.

But if you multiply by a negative number, the inequality reverses.

If the sign of the multiplier is unknown, be careful.

**Example:**
Given `x > y`, compare:

| Quantity A | Quantity B |
|------------|------------|
| `xz` | `yz` |

If `z > 0`, then `xz > yz`.

If `z < 0`, then `xz < yz`.

If `z = 0`, then `xz = yz`.

Answer:

```
D
```

---

### Absolute Value Measures Distance from Zero

Absolute value is always nonnegative.

```
|x| >= 0
```

But `|x|` may be greater than, equal to, or less than another expression depending on the value of `x`.

---

### Fractions Between 0 and 1 Behave Differently

If `0 < x < 1`, then

```
x^2 < x
```

and

```
1 / x > 1
```

This is a major GRE trap. Squaring a fraction between `0` and `1` makes it smaller.

---

## Worked Examples

### Example 1: Edge Cases with a Square

Given:

```
x > 0
```

Compare:

| Quantity A | Quantity B |
|------------|------------|
| `x^2` | `x` |

Test values:

If `x = 2`:

```
x^2 = 4
x = 2
```

Quantity A is greater.

If `x = 1/2`:

```
x^2 = 1/4
x = 1/2
```

Quantity B is greater.

Because different valid values give different results, the answer is

```
D
```

---

### Example 2: Looks Unknown but Is Determined

Given:

```
x > 3
```

Compare:

| Quantity A | Quantity B |
|------------|------------|
| `2x + 1` | `7` |

Since `x > 3`,

```
2x > 6
2x + 1 > 7
```

Quantity A is always greater.

Answer:

```
A
```

---

### Example 3: Unknown Sign

Given:

```
x > y
```

Compare:

| Quantity A | Quantity B |
|------------|------------|
| `-x` | `-y` |

Multiplying by `-1` reverses the inequality:

```
x > y
-x < -y
```

Quantity B is greater.

Answer:

```
B
```

---

### Example 4: Absolute Value Edge Cases

Given:

```
-2 < x < 2
```

Compare:

| Quantity A | Quantity B |
|------------|------------|
| `|x|` | `1` |

Test values:

If `x = 0`:

```
|x| = 0
```

Quantity B is greater.

If `x = 3/2`:

```
|x| = 3/2
```

Quantity A is greater.

Different valid values give different relationships.

Answer:

```
D
```

---

### Example 5: Even Powers Hide the Sign

Given:

```
x < 0
```

Compare:

| Quantity A | Quantity B |
|------------|------------|
| `x^2` | `x` |

If `x < 0`, then `x^2` is positive and `x` is negative.

So

```
x^2 > x
```

Quantity A is greater.

Answer:

```
A
```

---

### Example 6: Reciprocal Trap

Given:

```
0 < x < 1
```

Compare:

| Quantity A | Quantity B |
|------------|------------|
| `1 / x` | `x` |

If `0 < x < 1`, then `1 / x > 1`, while `x < 1`.

So

```
1 / x > x
```

Quantity A is greater.

Answer:

```
A
```

---

### Example 7: Cannot Determine from Sum Alone

Given:

```
x + y = 10
```

Compare:

| Quantity A | Quantity B |
|------------|------------|
| `x` | `y` |

Test values:

If `x = 6` and `y = 4`, Quantity A is greater.

If `x = 4` and `y = 6`, Quantity B is greater.

If `x = 5` and `y = 5`, the quantities are equal.

Answer:

```
D
```

---

### Example 8: Product with Positive Variables

Given:

```
x > 1
y > 1
```

Compare:

| Quantity A | Quantity B |
|------------|------------|
| `xy` | `x + y` |

Test values:

If `x = 2` and `y = 2`:

```
xy = 4
x + y = 4
```

The quantities are equal.

If `x = 3` and `y = 3`:

```
xy = 9
x + y = 6
```

Quantity A is greater.

Different valid values give different relationships.

Answer:

```
D
```

---

## Practice Exercises

### Exercise 1

Given:

```
n is an integer greater than 1
```

Compare:

| Quantity A | Quantity B |
|------------|------------|
| `n^2` | `2n` |

**Solution:**

Test the smallest edge case:

If `n = 2`,

```
n^2 = 4
2n = 4
```

The quantities are equal.

If `n = 3`,

```
n^2 = 9
2n = 6
```

Quantity A is greater.

Answer:

```
D
```

---

### Exercise 2

Given:

```
-1 < x < 1
```

Compare:

| Quantity A | Quantity B |
|------------|------------|
| `x^2` | `x` |

**Solution:**

If `x = 1/2`,

```
x^2 = 1/4
```

Quantity B is greater.

If `x = -1/2`,

```
x^2 = 1/4
x = -1/2
```

Quantity A is greater.

Answer:

```
D
```

---

### Exercise 3

Given:

```
a > b > 0
```

Compare:

| Quantity A | Quantity B |
|------------|------------|
| `1 / a` | `1 / b` |

**Solution:**

For positive numbers, the larger number has the smaller reciprocal.

Since `a > b > 0`,

```
1 / a < 1 / b
```

Quantity B is greater.

Answer:

```
B
```

---

### Exercise 4

Given:

```
x is a nonzero number
```

Compare:

| Quantity A | Quantity B |
|------------|------------|
| `x` | `1 / x` |

**Solution:**

If `x = 2`,

```
x = 2
1 / x = 1/2
```

Quantity A is greater.

If `x = 1/2`,

```
x = 1/2
1 / x = 2
```

Quantity B is greater.

Answer:

```
D
```

---

### Exercise 5

Given:

```
x < y < 0
```

Compare:

| Quantity A | Quantity B |
|------------|------------|
| `x^2` | `y^2` |

**Solution:**

Both numbers are negative, and `x` is farther left on the number line.

Example:

```
x = -5
y = -2
```

Then

```
x^2 = 25
y^2 = 4
```

Since `x < y < 0`, `x` has the larger absolute value, so `x^2 > y^2`.

Answer:

```
A
```

---

## GRE Tips and Common Traps

1. **Use the four fixed answer choices.**
   - A means Quantity A is always greater.
   - B means Quantity B is always greater.
   - C means they are always equal.
   - D means more than one relationship is possible.

2. **One example cannot prove A, B, or C.**
   - A single example can disprove a fixed relationship, but it cannot prove the relationship is always true.

3. **Test edge cases first.**
   - Try `0`, `1`, `-1`, fractions, and boundary values.

4. **Be careful with signs.**
   - Negative numbers reverse inequalities when multiplying or dividing.

5. **Fractions between `0` and `1` are common traps.**
   - Squaring them makes them smaller.
   - Taking their reciprocal makes them larger.

6. **For answer D, you need two valid cases with different results.**
   - For example, one case where A is greater and another where B is greater.

---

## Quick Summary Table

| Situation | GRE Move |
|-----------|----------|
| Variables have ranges | test boundary values and fractions |
| Expression has squares | test negative, zero, fraction, and large values |
| Expression has reciprocals | check sign and whether value is between `0` and `1` |
| Inequality multiplied by variable | check whether the multiplier could be negative |
| "At least" or "at most" | test the equality boundary |
| Looks impossible | look for whether multiple valid cases give different answers |
| Need answer D | show two valid cases with different relationships |
