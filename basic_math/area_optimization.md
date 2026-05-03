# Area and Perimeter Optimization

Optimization problems on the GRE often come down to one core idea: if a total amount is fixed, the best result usually comes from balancing the pieces instead of making one piece too large and another too small.

This is the same logic behind facts such as:

- with fixed sum, the product is largest when the numbers are equal;
- with fixed product, the sum is smallest when the numbers are equal;
- with fixed perimeter, the most symmetric shape gives the greatest area.

---

## The Core Balancing Rule

### Fixed Sum -> Maximum Product

Suppose

```
x + y = S
```

Write the two numbers around their midpoint:

```
x = S/2 + d
y = S/2 - d
```

Then

```
xy = (S/2 + d)(S/2 - d)
   = S^2/4 - d^2
```

Since

```
d^2 >= 0
```

we get

```
xy <= S^2/4
```

The largest product happens when `d = 0`, which means

```
x = y = S/2
```

So when the sum is fixed, the product is largest at an equal split.

### Fixed Product -> Minimum Sum

Suppose

```
xy = K
```

Start from the fact that a square is always nonnegative:

```
(sqrt(x) - sqrt(y))^2 >= 0
```

Expand:

```
x - 2*sqrt(xy) + y >= 0
```

So

```
x + y >= 2*sqrt(xy)
```

If

```
xy = K
```

then

```
x + y >= 2*sqrt(K)
```

Equality happens only when

```
sqrt(x) = sqrt(y)
```

so

```
x = y
```

So when the product is fixed, the sum is smallest at an equal split.

---

## Rectangles and Squares

### Rectangle: Maximum Area for a Fixed Perimeter

Let a rectangle have side lengths `x` and `y`, and let its perimeter be `P`.

Then

```
2x + 2y = P
```

so

```
x + y = P/2
```

The area is

```
A = xy
```

Now the sum `x + y` is fixed, so by the balancing rule above, the product `xy` is largest when

```
x = y
```

That means the rectangle with the largest area is actually a square.

Since

```
x = y = P/4
```

the maximum area is

```
A_max = (P/4)^2 = P^2/16
```

#### Why this is easy to remember

For a fixed perimeter, making one side longer forces the other side shorter. Once the two sides stop being balanced, the product drops.

Example with perimeter `40`:

```
10 by 10 -> area 100
12 by 8  -> area 96
15 by 5  -> area 75
```

The square gives the biggest area.

### Rectangle: Minimum Perimeter for a Fixed Area

Now suppose the rectangle has fixed area `A`.

Then

```
xy = A
```

Its perimeter is

```
P = 2x + 2y = 2(x + y)
```

So minimizing perimeter means minimizing `x + y`.

But when the product is fixed, the sum is smallest when

```
x = y
```

Therefore the rectangle with smallest perimeter is also a square.

If

```
x = y = sqrt(A)
```

then

```
P_min = 4*sqrt(A)
```

### The Area-Perimeter Tradeoff

This is the same idea viewed from two directions:

- if perimeter is fixed, stretching a square into a non-square rectangle lowers the area;
- if area is fixed, stretching a square into a non-square rectangle raises the perimeter.

Example with area `100`:

```
10 by 10 -> perimeter 40
20 by 5  -> perimeter 50
25 by 4  -> perimeter 58
```

The more unbalanced the sides become, the more perimeter you need for the same area.

---

## Triangle Optimization

### Triangle: Maximum Area for a Fixed Perimeter

For a triangle with side lengths `a`, `b`, and `c`, let the semiperimeter be

```
s = (a + b + c) / 2
```

Heron's formula says

```
Area^2 = s(s - a)(s - b)(s - c)
```

If the perimeter is fixed, then `s` is fixed. Also,

```
(s - a) + (s - b) + (s - c) = s
```

So the three factors

```
s - a, s - b, s - c
```

have a fixed sum.

By the same balancing logic, their product is largest when they are equal:

```
s - a = s - b = s - c
```

which gives

```
a = b = c
```

So the triangle with largest area for a fixed perimeter is an equilateral triangle.

If the perimeter is `P`, then each side is

```
P/3
```

#### Why this matches the balancing idea

If one side is too long while another is too short, the triangle becomes less balanced and loses height for the same perimeter budget. The most balanced triangle is the equilateral triangle, so it gives the greatest area.

### Triangle: Minimum Perimeter for a Fixed Area

The reverse statement is also true:

- among triangles with a fixed perimeter, the equilateral triangle has the greatest area;
- so among triangles with a fixed area, the equilateral triangle has the smallest perimeter.

The idea is the same as with rectangles: once the sides stop being balanced, you need more perimeter to enclose the same area.

---

## Octagon Optimization

### Octagon: Maximum Area for a Fixed Perimeter

For an octagon, the same symmetry principle applies:

- if one side or corner gets too large while another gets too small, the shape becomes less balanced;
- rebalancing the side lengths and angles increases the enclosed area;
- the process stops when all eight sides and all eight angles match.

So among octagons with a fixed perimeter, the maximum area is achieved by the regular octagon.

#### Proof idea based on balancing

Think of the octagon as being built from 8 pieces around its center.

- If one side or angle is too large while another is too small, then the shape is unbalanced.
- That imbalance pulls part of the boundary inward and wastes perimeter on a shape that does not spread out efficiently.
- If you rebalance those uneven pieces, the octagon encloses more area without changing the total perimeter.

So the best octagon is the one where no such rebalancing is possible, meaning:

```
all 8 sides are equal
all 8 angles are equal
```

That is exactly a regular octagon.

This is the same memory rule as before:

```
fixed perimeter + more symmetry -> more area
```

For a regular polygon, another useful formula is

```
Area = (perimeter * apothem) / 2
```

So once the perimeter is fixed, a larger apothem means a larger area. The regular octagon is the balanced octagon that pushes the sides outward evenly, which is why it gives the greatest area.

If a regular octagon has side length `s`, then

```
Perimeter = 8s
Area = 2(1 + sqrt(2)) * s^2
```

So if the perimeter is `P`, then

```
s = P/8
```

and the maximum area is

```
Area_max = 2(1 + sqrt(2)) * (P/8)^2
         = ((1 + sqrt(2)) / 32) * P^2
```

### Octagon: Minimum Perimeter for a Fixed Area

Read the same result backward:

- if the regular octagon gives the greatest area for a fixed perimeter,
- then for a fixed area, the regular octagon uses the smallest perimeter.

So the perimeter optimum also occurs at the most symmetric octagon: the regular octagon.

---

## General Geometry Rule to Remember

These optimization facts all come from the same memory pattern:

1. If a total is fixed, balance the pieces.
2. Equal pieces usually maximize a product or an area.
3. The most symmetric shape usually gives the area maximum.
4. The same shape then gives the perimeter minimum when the area is fixed.

That gives the standard GRE results:

- among rectangles with fixed perimeter, the square has maximum area;
- among rectangles with fixed area, the square has minimum perimeter;
- among triangles with fixed perimeter, the equilateral triangle has maximum area;
- among triangles with fixed area, the equilateral triangle has minimum perimeter;
- among octagons with fixed perimeter, the regular octagon has maximum area;
- among octagons with fixed area, the regular octagon has minimum perimeter.

---

## Quick Summary Table

| Shape | Fixed quantity | Optimum | Best shape |
| --- | --- | --- | --- |
| Rectangle | Perimeter | Maximum area | Square |
| Rectangle | Area | Minimum perimeter | Square |
| Triangle | Perimeter | Maximum area | Equilateral triangle |
| Triangle | Area | Minimum perimeter | Equilateral triangle |
| Octagon | Perimeter | Maximum area | Regular octagon |
| Octagon | Area | Minimum perimeter | Regular octagon |

---

## Practice Exercises

1. Two positive numbers have sum `30`. What is the greatest possible product?
2. A rectangle has perimeter `40`. Among all rectangles with this perimeter, which length and width give the greatest possible area, and what is that area?
3. A rectangle has area `144`. What dimensions give the smallest perimeter, and what is that perimeter?
4. A triangle has perimeter `27`. If its area is as large as possible, what is the length of each side?
5. True or false: among all triangles with the same area, an equilateral triangle has the greatest perimeter.
6. A regular octagon has perimeter `32`. What is its area?
7. Two numbers multiply to `81`. What is the smallest possible value of their sum if both numbers are positive?
8. Rectangle A has sides `6` and `10`. Rectangle B is a square with the same perimeter as Rectangle A. Which rectangle has the greater area?
9. A rectangle has side lengths `x` and `18 - x`. For what value of `x` is the area greatest?
10. Fill in the rule: with fixed perimeter, the most __________ shape gives the greatest area.

### Answer Key

1.

The product is largest when the two numbers are equal, so the numbers are `15` and `15`.

```
15 * 15 = 225
```

2.

The rectangle with maximum area is a square.

```
4s = 40
s = 10
Area = 10 * 10 = 100
```

3.

The rectangle with minimum perimeter for a fixed area is a square.

```
s^2 = 144
s = 12
Perimeter = 4 * 12 = 48
```

4.

The largest-area triangle with fixed perimeter is equilateral.

```
27 / 3 = 9
```

So each side is `9`.

5.

False.

Among triangles with a fixed area, the equilateral triangle has the **smallest** perimeter.

6.

For a regular octagon,

```
8s = 32
s = 4
Area = 2(1 + sqrt(2)) * s^2
     = 2(1 + sqrt(2)) * 16
     = 32(1 + sqrt(2))
```

7.

The sum is smallest when the two positive numbers are equal.

```
sqrt(81) = 9
9 + 9 = 18
```

8.

Rectangle A has perimeter

```
2(6 + 10) = 32
```

So the matching square has side length `8` and area `64`.

Rectangle A has area

```
6 * 10 = 60
```

So Rectangle B, the square, has the greater area.

9.

The area is

```
x(18 - x)
```

This is largest when the two factors are equal:

```
x = 18 - x
2x = 18
x = 9
```

10.

```
symmetric
```

---

## GRE Tip

When you see an optimization problem, ask:

- what is fixed?
- what expression is being maximized or minimized?
- can I rewrite it as a product with fixed sum, a sum with fixed product, or a symmetry problem?

That question often points directly to the correct shape.