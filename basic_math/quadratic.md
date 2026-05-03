# Quadratic Forms and Special Products

In algebra, certain quadratic forms appear frequently and are essential for solving equations and simplifying expressions.

## The Three Most Common Special Quadratic Forms

These forms can be viewed in two ways: **expansion** (multiplying out) and **factorization** (writing as a product).

### 1. Square of a Sum
- **Expanded form:** `(A + B)^2 = A^2 + 2AB + B^2`
- **Factorized form:** `A^2 + 2AB + B^2 = (A + B)^2`
- **Example:** `x^2 + 4x + 4` fits this case where `A = x` and `B = 2`.
  - `x^2 + 2(x)(2) + 2^2 = (x + 2)^2`

### 2. Square of a Difference
- **Expanded form:** `(A - B)^2 = A^2 - 2AB + B^2`
- **Factorized form:** `A^2 - 2AB + B^2 = (A - B)^2`
- **Example:** `x^2 - 10x + 25` fits this case where `A = x` and `B = 5`.
  - `x^2 - 2(x)(5) + 5^2 = (x - 5)^2`

### 3. Difference of Squares
- **Expanded form:** `(A + B)(A - B) = A^2 - B^2`
- **Factorized form:** `A^2 - B^2 = (A + B)(A - B)`
- **Example:** `x^2 - 49` fits this case where `A = x` and `B = 7`.
  - `x^2 - 7^2 = (x + 7)(x - 7)`

---

## Completing the Square: General Case

Any quadratic equation of the form $ax^2 + bx + c = 0$ can be rewritten in a way that reveals a perfect square. This process is called **completing the square**.

It can be shown that:
$$ax^2 + bx + c = a(x + d)^2 + e$$
Where:
- $d = \frac{b}{2a}$
- $e = c - \frac{b^2}{4a}$

This form is particularly useful for solving quadratic equations and finding the vertex of a parabola.

### Proof

To prove that $ax^2 + bx + c = a(x + d)^2 + e$ with the given $d$ and $e$:

1.  **Start with the general quadratic expression:**
    $$ax^2 + bx + c$$
2.  **Factor $a$ out of the first two terms:**
    $$a\left(x^2 + \frac{b}{a}x\right) + c$$
3.  **Complete the square inside the parentheses.** We need to add and subtract $(\frac{b}{2a})^2$:
    $$a\left(x^2 + \frac{b}{a}x + \frac{b^2}{4a^2} - \frac{b^2}{4a^2}\right) + c$$
4.  **Distribute $a$ to the subtracted term to move it out of the parentheses:**
    $$a\left(x^2 + \frac{b}{a}x + \frac{b^2}{4a^2}\right) - a\left(\frac{b^2}{4a^2}\right) + c$$
5.  **Simplify the terms and recognize the perfect square:**
    $$a\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a} + c$$
6.  **Substitute $d = \frac{b}{2a}$ and $e = c - \frac{b^2}{4a}$:**
    $$a(x + d)^2 + e$$

Thus, the equation $ax^2 + bx + c = 0$ is equivalent to $a(x + d)^2 + e = 0$.

---

## How to Find the Vertex

For a quadratic written as:
$$y = ax^2 + bx + c$$
the vertex is the highest or lowest point of the parabola.

- If `a > 0`, the parabola opens upward, so the vertex is a **minimum**.
- If `a < 0`, the parabola opens downward, so the vertex is a **maximum**.

The most useful form for understanding the vertex is the **vertex form**:
$$y = a(x - h)^2 + k$$

In this form:
- `h` tells you the x-coordinate of the vertex.
- `k` tells you the y-coordinate of the vertex.

So the vertex is:
$$ (h, k) $$

Also, `k` is a constant, so it does not change where the minimum or maximum happens horizontally. It only shifts the whole parabola up or down on the y-axis.

### Step 1: Find the x-coordinate of the vertex

The x-coordinate is:
$$x = -\frac{b}{2a}$$

This comes from completing the square.

Starting with:
$$y = ax^2 + bx + c$$
factor out `a` from the first two terms:
$$y = a\left(x^2 + \frac{b}{a}x\right) + c$$

Now complete the square inside the parentheses:
$$y = a\left(x^2 + \frac{b}{a}x + \frac{b^2}{4a^2} - \frac{b^2}{4a^2}\right) + c$$

Rearrange:
$$y = a\left(x + \frac{b}{2a}\right)^2 + c - \frac{b^2}{4a}$$

The squared term is centered at:
$$x = -\frac{b}{2a}$$

So the vertex always occurs when:
$$x = -\frac{b}{2a}$$

This is the same as writing the quadratic in vertex form:
$$y = a(x - h)^2 + k$$
Because
$$x + \frac{b}{2a} = x - \left(-\frac{b}{2a}\right)$$
we get:
$$h = -\frac{b}{2a}$$

### Another way to find the vertex x-coordinate: the midpoint of the roots

When a quadratic has two real roots, the vertex lies exactly halfway between them.

If the roots are `r₁` and `r₂`, then the x-coordinate of the vertex is:
$$x = \frac{r_1 + r_2}{2}$$

This works because a parabola is symmetric. The two roots are equally far from the vertical line that passes through the vertex, so the vertex must sit at their midpoint.

Now use the quadratic formula:
$$r_1 = \frac{-b + \sqrt{b^2 - 4ac}}{2a}, \qquad r_2 = \frac{-b - \sqrt{b^2 - 4ac}}{2a}$$

Add the two roots:
$$r_1 + r_2 = \frac{-b + \sqrt{b^2 - 4ac}}{2a} + \frac{-b - \sqrt{b^2 - 4ac}}{2a} = \frac{-2b}{2a} = -\frac{b}{a}$$

Now divide by `2` to get the midpoint:
$$\frac{r_1 + r_2}{2} = \frac{-b/a}{2} = -\frac{b}{2a}$$

So the midpoint between the roots is exactly:
$$x = -\frac{b}{2a}$$

That gives the same vertex formula as completing the square.

### Step 2: Find the y-coordinate of the vertex

Substitute `x = -\frac{b}{2a}` back into the original equation.

That gives the y-coordinate of the vertex.

### Why the vertex is always a minimum or maximum

Once a quadratic is written as:
$$y = a(x - h)^2 + k$$
the reason becomes very clear.

The key fact is:
$$ (x - h)^2 \ge 0 $$
for every real value of `x`.

The smallest possible value of a square is `0`, and that happens exactly when:
$$x - h = 0$$
so:
$$x = h$$

Now look at the two cases.

#### Case 1: `a > 0`

If `a` is positive, then multiplying a nonnegative number by `a` keeps it nonnegative:
$$a(x - h)^2 \ge 0$$

So:
$$y = a(x - h)^2 + k \ge k$$

That means the y-value can never go below `k`.
So the smallest value of the quadratic is:
$$k$$
and it happens when:
$$x = h$$

Therefore, the vertex `(h, k)` is a **minimum**.

#### Case 2: `a < 0`

If `a` is negative, then multiplying a nonnegative number by `a` makes it nonpositive:
$$a(x - h)^2 \le 0$$

So:
$$y = a(x - h)^2 + k \le k$$

That means the y-value can never go above `k`.
So the largest value of the quadratic is:
$$k$$
and it happens when:
$$x = h$$

Therefore, the vertex `(h, k)` is a **maximum**.

### Why `k` only moves the graph up or down

In
$$y = a(x - h)^2 + k$$
the part `(x - h)^2` controls the shape and the turning point.

The `+ k` is just adding the same constant to every y-value:
- if `k` increases, the whole parabola moves up;
- if `k` decreases, the whole parabola moves down.

So `k` does not change which x-value gives the minimum or maximum. It only changes the y-value of that minimum or maximum.

### Example

Find the vertex of:
$$y = -x^2 + 6x - 5$$

Here:
- `a = -1`
- `b = 6`

So the x-coordinate is:
$$x = -\frac{6}{2(-1)} = 3$$

Now plug in `x = 3`:
$$y = -(3)^2 + 6(3) - 5 = -9 + 18 - 5 = 4$$

So the vertex is:
$$ (3, 4) $$

Because `a = -1 < 0`, the parabola opens downward, so this vertex is a **maximum**.

You can also see it from the inequality idea. Rewrite:
$$y = -(x - 3)^2 + 4$$

Since:
$$ (x - 3)^2 \ge 0 $$
we have:
$$ -(x - 3)^2 \le 0 $$

So:
$$y = -(x - 3)^2 + 4 \le 4$$

That means the greatest possible value of `y` is `4`, and it happens when:
$$x = 3$$
So the vertex `(3, 4)` is the maximum point.

### GRE shortcut

If you rewrite a quadratic in vertex form:
$$y = a(x - h)^2 + k$$
then the vertex is simply:
$$ (h, k) $$

For example:
$$y = -2(x - 4)^2 + 7$$
has vertex:
$$ (4, 7) $$

---

## Advanced Examples and Change of Variables

Sometimes, an equation does not look like a quadratic at first glance, but it can be converted into one using a **change of variable**.

### Example: Higher Powers (e.g., x^8)
Consider the expression: `x^8 - y^8`.
This can be seen as a difference of squares if we let `A = x^4` and `B = y^4`.
- `x^8 - y^8 = (x^4)^2 - (y^4)^2`
- Using the Difference of Squares: `(x^4 + y^4)(x^4 - y^4)`
- We can further factorize `x^4 - y^4`: `(x^4 + y^4)(x^2 + y^2)(x^2 - y^2)`
- And finally: `(x^4 + y^4)(x^2 + y^2)(x + y)(x - y)`

### Example: Substitution in Equations
Change of variables can also help solve higher-degree equations that follow a quadratic pattern.
Consider: `x^4 - 13x^2 + 36 = 0`.
- Let `u = x^2`. The equation becomes: `u^2 - 13u + 36 = 0`.
- Factorize: `(u - 9)(u - 4) = 0`.
- Substitute back: `(x^2 - 9)(x^2 - 4) = 0`.
- Factorize again using **Difference of Squares**: `(x + 3)(x - 3)(x + 2)(x - 2) = 0`.
- Solutions: `x = -3, 3, -2, 2`.

### Example: Hidden Quadratic Forms
Some equations require grouping or slight factorization to reveal a special form.

Consider: `x^2 + 6x + 9 - y^2`.
- Notice that `x^2 + 6x + 9` is the expanded form of `(x + 3)^2`.
- So the expression becomes: `(x + 3)^2 - y^2`.
- This is now a **Difference of Squares** where `A = (x + 3)` and `B = y`.
- Final factorization: `((x + 3) + y)((x + 3) - y) = (x + y + 3)(x - y + 3)`.

### Example: Equations that don't look like special forms
Consider: `4x^2 + 12xy + 9y^2`.
- Is `4x^2` a square? Yes, `(2x)^2`.
- Is `9y^2` a square? Yes, `(3y)^2`.
- Is the middle term `2 * (2x) * (3y)`? `2 * 2 * 3 * x * y = 12xy`. Yes!
- So, `4x^2 + 12xy + 9y^2 = (2x + 3y)^2`.

---

- [**Practice Exercises**](practice_quadratic.md)
