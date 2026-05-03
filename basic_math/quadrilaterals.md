# Quadrilaterals

Quadrilaterals appear on the GRE in geometry, coordinate geometry, and word problems about area and perimeter. The most valuable skills are recognizing the main quadrilateral types, knowing which diagonal properties are always true, and choosing the fastest area formula for the information given.

---

## Standard Notation

Suppose we have quadrilateral `ABCD`.

- The vertices are `A`, `B`, `C`, and `D`.
- The sides are `AB`, `BC`, `CD`, and `DA`.
- The diagonals are `AC` and `BD`.
- `∠ABC` means the angle at `B`.
  - As with triangles, the middle letter tells you where the angle is.
- Opposite sides are `AB` and `CD`, and also `BC` and `DA`.
- Adjacent sides share a vertex, such as `AB` and `BC`.

Important GRE language:

- A **quadrilateral** is any polygon with four sides.
- A **diagonal** joins two non-adjacent vertices.
- A **height** is the perpendicular distance between parallel sides, not a slanted side length.

---

## Types of Quadrilaterals

### Parallelogram

- Both pairs of opposite sides are parallel.
- Opposite sides are equal.
- Opposite angles are equal.
- Consecutive angles are supplementary.
- Diagonals bisect each other.

### Rectangle

- A parallelogram with four right angles.
- Opposite sides are equal and parallel.
- Diagonals are equal in length.
- Diagonals bisect each other.

### Square

- A rectangle with all four sides equal.
- It is also a rhombus.
- Diagonals are equal, perpendicular, and bisect each other.
- Each diagonal also bisects a pair of opposite angles.

### Rhombus

- A parallelogram with all four sides equal.
- Opposite angles are equal.
- Diagonals bisect each other.
- Diagonals are perpendicular.
- Each diagonal bisects a pair of opposite angles.

### Trapezoid

- Has at least one pair of parallel sides.
- The parallel sides are called the bases.
- The perpendicular distance between the bases is the height.

For an **isosceles trapezoid**:

- the nonparallel sides are equal,
- the base angles come in equal pairs,
- the diagonals are equal.

### Kite

- Has two pairs of adjacent equal sides.
- One diagonal is the perpendicular bisector of the other.
- One diagonal also bisects a pair of opposite angles.

---

## Core GRE Quadrilateral Facts

### Sum of the Interior Angles

For any quadrilateral,

```
∠A + ∠B + ∠C + ∠D = 360°
```

This is often the first equation to write in angle-chasing problems.

#### Proof

Draw diagonal `AC`. This splits quadrilateral `ABCD` into triangles `ABC` and `ACD`.

Each triangle has angle sum `180°`, so together they contribute

```
180° + 180° = 360°
```

These are exactly the four interior angles of the quadrilateral, so the total is `360°`.

---

### Area of a Rectangle

If a rectangle has length `l` and width `w`, then

```
Area = l * w
```

Since all angles are right angles, the width is already perpendicular to the length, so this is just base times height.

For a square with side `s`, this becomes

```
Area = s²
```

---

### Area of a Parallelogram

If a parallelogram has base `b` and height `h`, then

```
Area = b * h
```

#### Proof

Take the triangular piece on one side of the parallelogram and slide it to the other side. This rearranges the parallelogram into a rectangle with the same base `b` and the same height `h`.

Because rearranging without overlap or gaps does not change area, the parallelogram has the same area as that rectangle. Therefore,

```
Area = b * h
```

GRE reminder:

- use the perpendicular height,
- not the slanted side, unless that side is actually perpendicular to the base.

---

### Area of a Trapezoid

If a trapezoid has bases `b₁` and `b₂` and height `h`, then

```
Area = ((b₁ + b₂) * h) / 2
```

#### Proof

Take two congruent copies of the trapezoid and fit them together to form a parallelogram.

- The new parallelogram has base `b₁ + b₂`.
- It has the same height `h`.

So the parallelogram area is

```
(b₁ + b₂) * h
```

But this is made of two congruent trapezoids, so one trapezoid has half that area:

```
Area = ((b₁ + b₂) * h) / 2
```

---

### Area of a Rhombus or Kite Using Diagonals

If the diagonals are perpendicular and have lengths `d₁` and `d₂`, then

```
Area = (d₁ * d₂) / 2
```

This formula works in particular for a rhombus, a square, and a kite.

#### Proof

Perpendicular diagonals split the figure into four right triangles.

If one diagonal has length `d₁` and the other has length `d₂`, then the total area of those four right triangles combines to

```
(d₁ * d₂) / 2
```

Another quick way to see this is to notice that the diagonals act like the base and height of a pair of matching triangles whose combined area is the whole figure.

---

### Diagonal of a Rectangle

If a rectangle has side lengths `l` and `w` and diagonal `d`, then

```
d² = l² + w²
```

So

```
d = √(l² + w²)
```

#### Proof

A diagonal of a rectangle splits it into two right triangles with legs `l` and `w`. Applying the Pythagorean theorem gives

```
d² = l² + w²
```

For a square of side `s`, this becomes

```
d = s√2
```

which is the same ratio as a `45-45-90` triangle.

---

### Diagonal Properties That Appear Often on the GRE

#### Parallelogram

- diagonals bisect each other,
- opposite sides are equal,
- opposite angles are equal.

If diagonals `AC` and `BD` intersect at `M`, then

```
AM = MC
BM = MD
```

#### Rectangle

- diagonals bisect each other,
- diagonals are equal.

So if diagonals are `AC` and `BD`, then

```
AC = BD
```

#### Rhombus

- diagonals bisect each other,
- diagonals are perpendicular,
- diagonals bisect opposite angles.

#### Square

- diagonals are equal,
- diagonals are perpendicular,
- diagonals bisect each other,
- diagonals bisect the angles.

#### Isosceles Trapezoid

- diagonals are equal.

#### Kite

- diagonals are perpendicular,
- one diagonal bisects the other,
- one diagonal bisects a pair of opposite angles.

---

### Coordinate Geometry Shortcuts

In coordinate geometry problems, combine quadrilateral facts with the formulas from the lines section:

- use the **distance formula** to compare side lengths and diagonals,
- use the **midpoint formula** to check whether diagonals bisect each other,
- use **slope** to test whether sides are parallel or perpendicular.

Fast identification patterns:

- same midpoint for both diagonals often signals a parallelogram,
- equal diagonals plus right angles often signal a rectangle,
- equal sides plus perpendicular diagonals often suggest a rhombus or square.

---

## Worked Examples

### Example 1: Area of a Parallelogram

A parallelogram has base `12` and height `7`. Find its area.

```
Area = b * h = 12 * 7 = 84
```

Answer:

```
84
```

---

### Example 2: Area of a Trapezoid

A trapezoid has bases `8` and `14`, and height `5`. Find its area.

```
Area = ((b₁ + b₂) * h) / 2
     = ((8 + 14) * 5) / 2
     = (22 * 5) / 2
     = 55
```

Answer:

```
55
```

---

### Example 3: Diagonal of a Rectangle

A rectangle has side lengths `9` and `12`. Find its diagonal.

```
d = √(9² + 12²)
  = √(81 + 144)
  = √225
  = 15
```

Answer:

```
15
```

---

### Example 4: Area of a Square from Its Diagonal

A square has diagonal `10`. Find its area.

If `s` is the side length, then

```
s√2 = 10
s = 10 / √2 = 5√2
```

So the area is

```
s² = (5√2)² = 50
```

A faster method is to use the diagonal-area formula for a rhombus or square:

```
Area = (d₁ * d₂) / 2 = (10 * 10) / 2 = 50
```

Answer:

```
50
```

---

### Example 5: Missing Angle in a Quadrilateral

The interior angles of a quadrilateral are `80°`, `95°`, `110°`, and `x`. Find `x`.

Since the angle sum is `360°`, we have

```
80 + 95 + 110 + x = 360
285 + x = 360
x = 75
```

Answer:

```
75°
```

---

## Practice Exercises

1. A parallelogram has base `18` and height `11`. What is its area?
2. A trapezoid has bases `6` and `20` and height `9`. What is its area?
3. A rectangle has perimeter `34` and width `5`. What is its diagonal?
4. A rhombus has diagonals `16` and `12`. What is its area?
5. The angles of a quadrilateral are `x`, `x`, `x + 20`, and `x + 40`. Find `x`.
6. A square has area `98`. What is the length of its diagonal?

### Answer Key

1.

```
198
```

2.

```
117
```

3.

The side lengths are `5` and `12`, so the diagonal is

```
13
```

4.

```
(16 * 12) / 2 = 96
```

5.

```
x + x + (x + 20) + (x + 40) = 360
4x + 60 = 360
4x = 300
x = 75
```

6.

If `s² = 98`, then `s = 7√2`, so the diagonal is

```
s√2 = 14
```

---

## GRE Tips and Common Traps

1. **Do not assume a quadrilateral is a rectangle or square unless the problem tells you enough to prove it.**
2. **For area, always use a perpendicular height.** A slanted side is not automatically a height.
3. **Memorize which diagonal properties belong to which figure.** Equal diagonals and perpendicular diagonals are not the same fact.
4. **In coordinate geometry, slopes and midpoints are often faster than pure angle-chasing.**
5. **A square satisfies the properties of both a rectangle and a rhombus.**
6. **A trapezoid area formula uses the average of the two bases, then multiplies by height.**

---

## Quick Summary Table

| Topic | Formula / Fact |
|------|-----------------|
| Interior angle sum | `360°` |
| Rectangle area | `l * w` |
| Square area | `s²` |
| Parallelogram area | `b * h` |
| Trapezoid area | `((b₁ + b₂) * h) / 2` |
| Rhombus / kite area | `(d₁ * d₂) / 2` when diagonals are perpendicular |
| Rectangle diagonal | `√(l² + w²)` |
| Square diagonal | `s√2` |
| Parallelogram diagonals | bisect each other |
| Rectangle diagonals | equal and bisect each other |
| Rhombus diagonals | perpendicular and bisect each other |
| Square diagonals | equal, perpendicular, and bisect each other |
| Isosceles trapezoid diagonals | equal |
| Kite diagonals | perpendicular, and one bisects the other |