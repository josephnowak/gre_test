# Circles

Circles show up often on the GRE in geometry, coordinate geometry, and ratio problems. The main skills are knowing the standard formulas, recognizing when a square is inscribed in a circle, and using proportional reasoning when radii, circumferences, and areas are compared.

---

## Standard Notation

Suppose a circle has center `O`.

- A **radius** is any segment from the center to the circle. Its length is usually written as `r`.
- A **diameter** is a segment through the center whose endpoints lie on the circle. Its length is written as `d`.
- A diameter is always twice a radius:

```
d = 2r
```

- A **chord** is any segment whose endpoints lie on the circle.
- An **arc** is part of the circle's boundary.
- A **sector** is the region enclosed by two radii and the arc between them.
- A **central angle** is an angle whose vertex is at the center of the circle.

---

## Core GRE Circle Facts

### Radius, Diameter, and Circumference

The circumference is the distance around the circle.

```
C = 2πr = πd
```

Since `d = 2r`, you can switch between the two forms easily.

Useful quick facts:

- if you know `r`, then `d = 2r`,
- if you know `d`, then `r = d / 2`,
- circumference scales directly with radius.

For example, if one circle has twice the radius of another, it also has twice the circumference.

---

### Pi as Circumference Divided by Diameter

For every circle,

```
π = C / d
```

This means the ratio

```
circumference / diameter
```

is always the same constant, `π`.

So if you ever know the circumference and diameter, you can check that

```
C / d = π
```

This is also why the formula `C = πd` works.

---

### Area of a Circle

If the radius is `r`, then

```
A = πr²
```

Be careful not to confuse area and circumference:

- circumference uses `r`,
- area uses `r²`.

So if the radius doubles, the area becomes four times as large.

---

### Arc Length

An arc is a fraction of the full circumference.

If a sector has central angle `θ`, then

```
arc length = (θ / 360°) * 2πr
```

or, using the diameter,

```
arc length = (θ / 360°) * πd
```

If a circle is divided into `n` equal parts, then each arc has length

```
C / n
```

---

### Area of a Sector

Just as arc length is a fraction of the circumference, sector area is a fraction of the whole circle's area.

If the central angle is `θ`, then

```
sector area = (θ / 360°) * πr²
```

This is useful when the GRE asks about a shaded slice of a circle.

---

### Square Inscribed in a Circle

If a square is inscribed in a circle, the square's diagonal is the circle's diameter.

So if the circle has radius `r`, then the diameter is

```
2r
```

and this is also the diagonal of the square.

If `s` is the side length of the square, then

```
s√2 = 2r
```

So

```
s = (2r / √2) = r√2
```

From this, several useful formulas follow:

```
square side = r√2
square area = (r√2)² = 2r²
square perimeter = 4r√2
```

The area inside the circle but outside the square is

```
πr² - 2r² = r²(π - 2)
```

This relationship appears often on the GRE.

---

### Circle Ratios and Scaling

If two circles have radii in the ratio

```
a : b
```

then:

- their diameters are also in the ratio `a : b`,
- their circumferences are also in the ratio `a : b`,
- their areas are in the ratio `a² : b²`.

This is one of the fastest ways to solve comparison problems.

---

## Worked Examples

### Example 1: Arc Length from an Equal Division of the Circle

A circle has diameter `22` and is divided into `8` equal sections. What is the length of one arc?

First find the full circumference:

```
C = πd = 22π
```

Since the circle is divided into `8` equal parts, one arc is

```
22π / 8 = 11π / 4
```

Approximate value:

```
11π / 4 ≈ 8.64
```

Answer:

```
11π / 4
```

or approximately

```
8.64
```

---

### Example 2: Square Inside a Circle

A circle has radius `6`, and a square is inscribed in the circle. Find:

1. the side length of the square,
2. the area of the square,
3. the area of the circle,
4. the area inside the circle but outside the square,
5. the perimeter of the square.

The diameter of the circle is

```
2r = 12
```

This is the diagonal of the square. If `s` is the side of the square, then

```
s√2 = 12
s = 12 / √2 = 6√2
```

So the square's area is

```
s² = (6√2)² = 72
```

The circle's area is

```
πr² = π(6²) = 36π
```

The area inside the circle but outside the square is

```
36π - 72
```

The square's perimeter is

```
4s = 4(6√2) = 24√2
```

Answers:

```
side length = 6√2
square area = 72
circle area = 36π
outside area = 36π - 72
square perimeter = 24√2
```

If you use `π ≈ 3.14`, then

```
36π ≈ 113.04
36π - 72 ≈ 41.04
```

---

### Example 3: Ratio of Circumferences and Areas

Circle `A` has radius `3x`.

Circle `B` has circumference `x / 2`.

Find:

1. the ratio of the circumference of circle `A` to the circumference of circle `B`,
2. the ratio of the area of circle `A` to the area of circle `B`.

#### Step 1: Circumference of circle `A`

Since `r = 3x`,

```
C_A = 2πr = 2π(3x) = 6πx
```

We are already told that

```
C_B = x / 2
```

So the circumference ratio is

```
C_A : C_B = 6πx : x/2 = 12π : 1
```

#### Step 2: Area of circle `A`

```
A_A = π(3x)² = 9πx²
```

#### Step 3: Area of circle `B`

Use `C = 2πr`:

```
2πr = x / 2
r = x / (4π)
```

Then

```
A_B = πr²
    = π[x / (4π)]²
    = π[x² / (16π²)]
    = x² / (16π)
```

Now compare the areas:

```
A_A : A_B = 9πx² : x² / (16π) = 144π² : 1
```

Answers:

```
circumference ratio = 12π : 1
area ratio = 144π² : 1
```

---

## GRE Tips and Common Traps

1. **Do not confuse radius and diameter.** A very common mistake is to use `d` when the formula needs `r`, or vice versa.
2. **Area grows with the square of the radius.** If the radius doubles, the area becomes four times as large.
3. **Arc length and sector area are fractions of a whole.** Always compare the central angle to `360°`.
4. **For an inscribed square, the diagonal is the diameter.** This is usually the key step.
5. **Leave answers in terms of `π` unless the question asks for a decimal approximation.**

---

## Quick Summary Table

| Topic | Formula / Fact |
|------|-----------------|
| Diameter and radius | `d = 2r` |
| Circumference | `C = 2πr = πd` |
| Meaning of `π` | `π = C / d` |
| Area of a circle | `A = πr²` |
| Arc length | `(θ / 360°) * 2πr` |
| Sector area | `(θ / 360°) * πr²` |
| Inscribed square side | `s = r√2` |
| Inscribed square area | `2r²` |
| Inscribed square perimeter | `4r√2` |
| Circle area outside inscribed square | `πr² - 2r²` |
| Radius ratio `a : b` | circumference ratio `a : b`, area ratio `a² : b²` |