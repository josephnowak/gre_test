# Fractions

## Tricks

### Divide two fractions

Suppose A is a fraction and B is a fraction and we want A / B.

Doing divisions is "hard" so we can convert B into 1 if we find a C such that C * B = 1.
Which means that A * C / (B * C) = A / B.
And this is also equal to A * C, because B * C = 1.
And we can find C very easily, it is equal to B^-1 because B * B^-1 = 1.

The rule used in English is called:
**"Keep it, change it, flip it"** because they keep one fraction, they change the numerator and denominator of the other and they flip the sign from division to multiplication.

### Sum two fractions

We have A/C and B/D.
We need to guarantee that both fractions have the same denominator in order to sum them. So we need to find two numbers E and F such that:
E * A/C + F * B/D = A/C + B/C
and C * E = D * F

The easiest way to achieve this is to multiply one fraction by the denominator of the other and vice versa.

So we end up with:
D/D * A/C + C/C * B/D = (A * D) / (C * D) + (B * C) / (D * C)

And now we have the same denominator on both fractions and we can simply sum:
**(A * D + B * C) / (D * C)**

### Fraction Increasing

#### General Principle: The X/Y Attractor Rule

**The Fundamental Rule:**
When you add `X` to the numerator and `Y` to the denominator of a fraction `n/d`, the resulting fraction `(n+X)/(d+Y)` moves **closer to the value `X/Y`**.

- If `n/d < X/Y`: The fraction **increases** (moving up toward X/Y)
- If `n/d > X/Y`: The fraction **decreases** (moving down toward X/Y)
- If `n/d = X/Y`: The fraction **stays the same**

**This is the key insight for solving fraction increase/decrease problems:**
1. First, determine what ratio `X/Y` represents (the "attractor")
2. Compare your original fraction `n/d` to `X/Y`
3. The fraction will move toward `X/Y`, so it increases if below and decreases if above

**Special Case:** When `X = Y` (adding the same amount to both), then `X/Y = 1`, so the fraction is pulled toward 1.

---

#### Proof Using Limits: Why X/Y Controls the Final Value

**Intuition:** As we repeatedly add `X` to the numerator and `Y` to the denominator, the fraction converges to `X/Y`.

**Limit Proof:**
Consider what happens when we add `X` and `Y` multiple times (k times):

```
After k additions:
New fraction = (n + k*X) / (d + k*Y)
```

As `k → ∞` (many additions):

```
lim     (n + k*X)     lim    n/k + X       0 + X       X
k→∞    ----------  =  k→∞   --------   =  -------  =  ---
        (d + k*Y)           d/k + Y       0 + Y       Y
```

**Explanation:**
- Divide both numerator and denominator by `k`
- As `k → ∞`, the terms `n/k` and `d/k` approach 0
- What remains is `X/Y`

**This proves that `X/Y` is the "attractor" — the value that the fraction approaches with repeated additions.**

**Alternative View: Single Addition as Weighted Average**

The new fraction `(n+X)/(d+Y)` can be understood as a value between `n/d` and `X/Y`:

```
Original fraction: n/d (weight: d)
Added ratio: X/Y (weight: Y)

The result (n+X)/(d+Y) is closer to whichever ratio has more "weight"
```

As you keep adding, the weight of `X/Y` grows, pulling the fraction toward it.

---

#### Numerical Demonstration of the Limit

```
Start with: 1/10 = 0.1
Add X=3, Y=2 repeatedly (target ratio: 3/2 = 1.5)

After 1 addition:  (1+3)/(10+2)   = 4/12  ≈ 0.333
After 2 additions: (4+3)/(12+2)   = 7/14  = 0.500
After 3 additions: (7+3)/(14+2)   = 10/16 = 0.625
After 5 additions: (13+3)/(18+2)  = 16/20 = 0.800
After 10 additions: (31+3)/(30+2) = 34/32 = 1.063
After 50 additions: ...           ≈ 1.46
After 100 additions: ...          ≈ 1.485

Converging to X/Y = 1.5 ✓
```

Since 1/10 < 3/2, the fraction **increases** toward 3/2.

---

#### Python Code: Demonstrating the Limit Behavior

```python
def demonstrate_limit(n, d, X, Y, iterations=20):
    """Show how fraction converges to X/Y with repeated additions."""
    target = X / Y
    print(f"Original: {n}/{d} = {n/d:.4f}")
    print(f"Target (X/Y): {X}/{Y} = {target:.4f}")
    print(f"Direction: {'INCREASING' if n/d < target else 'DECREASING' if n/d > target else 'NO CHANGE'}")
    print("-" * 40)
    
    for i in range(1, iterations + 1):
        n, d = n + X, d + Y
        value = n / d
        print(f"After {i:2d} additions: {n:4d}/{d:4d} = {value:.6f}")
    
    print(f"\nFinal value: {n/d:.6f}")
    print(f"Target X/Y:  {target:.6f}")
    print(f"Converging? {'YES ✓' if abs(n/d - target) < 0.01 else 'Getting closer...'}")

# Example: 1/10 approaching 3/2 = 1.5
demonstrate_limit(1, 10, 3, 2)
```

---
---

### Special Case: Adding the Same Amount (X = Y)

When you add the **same amount** `x` to both numerator and denominator, this is equivalent to setting `X = Y = x`, which means the attractor is `X/Y = x/x = 1`.

**Rule (Special Case of General Principle):**
- If the fraction is **smaller than 1**: Adding the same positive amount to both numerator and denominator will **increase** the value.
- If the fraction is **bigger than 1**: Adding the same positive amount to both numerator and denominator will **decrease** the value.
- If the fraction **equals 1**: The value remains unchanged (still equals 1).

---

#### Intuition: "Pulling Toward 1"

Think of it this way: When you add the same amount `x` to both numerator and denominator, you're making the fraction "more balanced" — you're pulling it closer to the ratio `1/1 = 1`.

- If your fraction starts **below 1** (like `1/4 = 0.25`), moving toward 1 means **increasing**.
- If your fraction starts **above 1** (like `4/1 = 4`), moving toward 1 means **decreasing**.

As `x` gets very large, the fraction approaches 1:
```
(n + x) / (d + x)  →  x/x = 1   as x → infinity
```

---

#### Algebraic Proof

**Goal:** Compare the original fraction `n/d` with the new fraction `(n+x)/(d+x)`, where `x > 0`.

**Step 1: Set up the comparison**
```
We want to know: Is (n+x)/(d+x) greater than, less than, or equal to n/d?
```

**Step 2: Cross-multiply to compare (assuming d > 0 and d+x > 0)**
```
n/d  vs  (n+x)/(d+x)

Cross-multiply:
n * (d + x)  vs  d * (n + x)
```

**Step 3: Expand both sides**
```
Left side:   n*d + n*x
Right side:  d*n + d*x
```

**Step 4: Simplify by canceling common terms**
```
Since n*d = d*n, we can subtract this from both sides:

n*x  vs  d*x
```

**Step 5: Factor out x (since x > 0, inequality direction is preserved)**
```
n  vs  d
```

**Step 6: Draw conclusions**
```
- If n < d (fraction < 1): Then n*x < d*x
  → Left side < Right side
  → n/d < (n+x)/(d+x)
  → The new fraction is LARGER (value INCREASED)

- If n > d (fraction > 1): Then n*x > d*x
  → Left side > Right side
  → n/d > (n+x)/(d+x)
  → The new fraction is SMALLER (value DECREASED)

- If n = d (fraction = 1): Then n*x = d*x
  → Both fractions equal 1 (no change)
```

---

#### Numerical Examples

**Example 1: Fraction less than 1**
```
Original: 1/4 = 0.25
Add x = 3 to both:
New: (1+3)/(4+3) = 4/7 ≈ 0.571

Result: 0.25 → 0.571 (INCREASED, moving toward 1)
```

**Example 2: Fraction greater than 1**
```
Original: 5/2 = 2.5
Add x = 3 to both:
New: (5+3)/(2+3) = 8/5 = 1.6

Result: 2.5 → 1.6 (DECREASED, moving toward 1)
```

**Example 3: Fraction equals 1**
```
Original: 3/3 = 1
Add x = 5 to both:
New: (3+5)/(3+5) = 8/8 = 1

Result: 1 → 1 (NO CHANGE)
```

---

#### Python Verification Code

```python
def compare_fractions(n, d, x):
    """Demonstrate the fraction increasing rule."""
    original = n / d
    new = (n + x) / (d + x)
    
    print(f"Original: {n}/{d} = {original:.4f}")
    print(f"After adding {x}: ({n}+{x})/({d}+{x}) = {n+x}/{d+x} = {new:.4f}")
    
    if original < 1:
        print(f"Fraction < 1: Value {'INCREASED' if new > original else 'ERROR!'}")
    elif original > 1:
        print(f"Fraction > 1: Value {'DECREASED' if new < original else 'ERROR!'}")
    else:
        print(f"Fraction = 1: Value UNCHANGED")
    print()

# Test cases
compare_fractions(1, 4, 3)   # Less than 1
compare_fractions(5, 2, 3)   # Greater than 1
compare_fractions(3, 3, 5)   # Equals 1
```

---

### Generalized Fraction Change (Adding Different Amounts)

What happens if we add **different amounts** to the numerator and denominator? Instead of adding `x` to both, we add `x` to the numerator and `y` to the denominator.

**Rule:**
- If `n/d < x/y`: The new fraction `(n+x)/(d+y)` is **larger** than `n/d` (value INCREASES)
- If `n/d > x/y`: The new fraction `(n+x)/(d+y)` is **smaller** than `n/d` (value DECREASES)
- If `n/d = x/y`: The new fraction equals the original (NO CHANGE)

---

#### Intuition: "Pulling Toward x/y"

The fraction moves toward the ratio `x/y`. Think of it as a weighted average:
- If you're adding more to the numerator relative to what you're adding to the denominator (`x/y > n/d`), the fraction increases.
- If you're adding more to the denominator relative to what you're adding to the numerator (`x/y < n/d`), the fraction decreases.

The special case where `x = y` (adding the same amount to both) gives `x/y = 1`, which is why the fraction moves toward 1 in that case.

---

#### Algebraic Proof

**Goal:** Compare `n/d` with `(n+x)/(d+y)`, where `x > 0` and `y > 0`.

**Step 1: Set up the comparison**
```
We want to know: Is (n+x)/(d+y) greater than, less than, or equal to n/d?
```

**Step 2: Cross-multiply (assuming d > 0 and d+y > 0)**
```
n/d  vs  (n+x)/(d+y)

Cross-multiply:
n * (d + y)  vs  d * (n + x)
```

**Step 3: Expand both sides**
```
Left side:   n*d + n*y
Right side:  d*n + d*x
```

**Step 4: Simplify by canceling common terms**
```
Since n*d = d*n, we can subtract this from both sides:

n*y  vs  d*x
```

**Step 5: Divide by d*y (assuming both positive)**
```
n/d  vs  x/y
```

**Step 6: Draw conclusions**
```
- If n/d < x/y (equivalently n*y < d*x):
  → Left side < Right side
  → n/d < (n+x)/(d+y)
  → The new fraction is LARGER (value INCREASED)

- If n/d > x/y (equivalently n*y > d*x):
  → Left side > Right side
  → n/d > (n+x)/(d+y)
  → The new fraction is SMALLER (value DECREASED)

- If n/d = x/y (equivalently n*y = d*x):
  → Both fractions are equal (no change)
```

---

#### Numerical Examples

**Example 1: n/d < x/y (fraction increases)**
```
Original: 1/4 = 0.25
Add x=5 to numerator, y=2 to denominator
x/y = 5/2 = 2.5

Since 0.25 < 2.5, the fraction should INCREASE.

New: (1+5)/(4+2) = 6/6 = 1.0

Result: 0.25 → 1.0 (INCREASED toward x/y = 2.5)
```

**Example 2: n/d > x/y (fraction decreases)**
```
Original: 3/2 = 1.5
Add x=1 to numerator, y=4 to denominator
x/y = 1/4 = 0.25

Since 1.5 > 0.25, the fraction should DECREASE.

New: (3+1)/(2+4) = 4/6 ≈ 0.667

Result: 1.5 → 0.667 (DECREASED toward x/y = 0.25)
```

**Example 3: n/d = x/y (no change)**
```
Original: 2/3 ≈ 0.667
Add x=4 to numerator, y=6 to denominator
x/y = 4/6 = 2/3 ≈ 0.667

Since n/d = x/y, the fraction should be UNCHANGED.

New: (2+4)/(3+6) = 6/9 = 2/3 ≈ 0.667

Result: 0.667 → 0.667 (NO CHANGE, n/d already equals x/y)
```

---

#### Python Verification Code

```python
def compare_fractions_general(n, d, x, y):
    """Demonstrate the generalized fraction change rule."""
    original = n / d
    ratio = x / y
    new = (n + x) / (d + y)
    
    print(f"Original: {n}/{d} = {original:.4f}")
    print(f"Ratio x/y: {x}/{y} = {ratio:.4f}")
    print(f"After adding {x} to num, {y} to denom: ({n}+{x})/({d}+{y}) = {n+x}/{d+y} = {new:.4f}")
    
    if original < ratio:
        result = "INCREASED" if new > original else "ERROR!"
        print(f"n/d < x/y: Value {result}")
    elif original > ratio:
        result = "DECREASED" if new < original else "ERROR!"
        print(f"n/d > x/y: Value {result}")
    else:
        print(f"n/d = x/y: Value UNCHANGED")
    print()

# Test cases
compare_fractions_general(1, 4, 5, 2)   # n/d < x/y (increases)
compare_fractions_general(3, 2, 1, 4)   # n/d > x/y (decreases)
compare_fractions_general(2, 3, 4, 6)   # n/d = x/y (no change)
```
