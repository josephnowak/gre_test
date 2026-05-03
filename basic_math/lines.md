# Lines in the Coordinate Plane

This section covers the most important facts about lines that frequently appear on the GRE: slope, equations of lines, parallel and perpendicular relationships, midpoint, and the distance between two points.

---

## Core Formulas

### Slope Between Two Points

For points `(x₁, y₁)` and `(x₂, y₂)`:

```
m = (y₂ - y₁) / (x₂ - x₁)
```

Important ideas:

- Positive slope: line rises from left to right
- Negative slope: line falls from left to right
- Zero slope: horizontal line
- Undefined slope: vertical line

---

### Distance Between Two Points

For points `(x₁, y₁)` and `(x₂, y₂)`:

```
d = √((x₂ - x₁)² + (y₂ - y₁)²)
```

This comes from the Pythagorean theorem: the horizontal and vertical changes form the legs of a right triangle.

**GRE shortcut:** Sometimes you only need to compare distances. In that case, compare

```
(x₂ - x₁)² + (y₂ - y₁)²
```

instead of taking square roots.

---

### Midpoint Formula

For endpoints `(x₁, y₁)` and `(x₂, y₂)`:

```
Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)
```

The midpoint averages the x-coordinates and the y-coordinates separately.

---

## Equations of Lines

### Slope-Intercept Form

```
y = mx + b
```

Where:

- `m` is the slope
- `b` is the y-intercept

This is the fastest form to use when the slope and y-intercept are known.

Example:

```
y = 3x - 5
```

has slope `3` and y-intercept `-5`.

---

### Point-Slope Form

If a line has slope `m` and passes through `(x₁, y₁)`:

```
y - y₁ = m(x - x₁)
```

This is the fastest form when the GRE gives one point and a slope.

Example: slope `2`, passing through `(3, 4)`:

```
y - 4 = 2(x - 3)
```

---

### Standard Form

```
Ax + By = C
```

This form is often useful for:

- spotting intercepts quickly
- comparing equations
- solving systems of equations

Example:

```
2x + 3y = 12
```

---

## Special Types of Lines

### Horizontal Lines

Horizontal lines have the form:

```
y = constant
```

Examples:

```
y = 4
y = -2
```

Properties:

- slope = `0`
- all points on the line have the same y-coordinate

---

### Vertical Lines

Vertical lines have the form:

```
x = constant
```

Examples:

```
x = 7
x = -1
```

Properties:

- slope is undefined
- all points on the line have the same x-coordinate

---

## Parallel and Perpendicular Lines

### Parallel Lines

Two non-vertical lines are parallel if they have the same slope.

```
m₁ = m₂
```

Examples:

```
y = 2x + 1
y = 2x - 8
```

These are parallel because both have slope `2`.

Vertical lines are also parallel to each other.

---

### Perpendicular Lines

Two non-vertical lines are perpendicular if their slopes are negative reciprocals.

```
m₁ × m₂ = -1
```

If one slope is:

```
m
```

then the perpendicular slope is:

```
-1 / m
```

Example:

- A line with slope `3` has a perpendicular line with slope `-1/3`
- A line with slope `-2/5` has a perpendicular line with slope `5/2`

Also:

- horizontal lines are perpendicular to vertical lines

---

## Angle Relationships Formed by Lines

When lines intersect, the GRE often gives one angle and asks for another. The key is to recognize whether the angles add to a fixed amount or are equal.

### Supplementary Angles

Supplementary angles add to `180°`.

```
A + B = 180°
```

Common GRE situation:

- two angles form a straight line
- two same-side interior angles are formed by parallel lines and a transversal

Example:

If one angle on a straight line is `125°`, the adjacent angle is:

```
180° - 125° = 55°
```

---

### Complementary Angles

Complementary angles add to `90°`.

```
A + B = 90°
```

Common GRE situation:

- a right angle is split into two smaller angles
- perpendicular lines create `90°` angles

Example:

If a right angle is split into angles of `x°` and `35°`, then:

```
x + 35 = 90
x = 55
```

---

### Adjacent Angles

Adjacent angles are next to each other. They share:

- the same vertex
- one common side
- no overlap

Adjacent angles are not automatically equal. If adjacent angles form a straight line, then they are supplementary.

Example:

If adjacent angles on a straight line are `3x` and `2x`, then:

```
3x + 2x = 180
5x = 180
x = 36
```

So the angles are:

```
3x = 108°
2x = 72°
```

---

### Vertical Angles

Vertical angles are opposite angles formed when two lines intersect.

Vertical angles are always equal.

```
A = C
B = D
```

Example:

If one angle is `70°`, the vertical angle across from it is also:

```
70°
```

The two adjacent angles are supplementary:

```
180° - 70° = 110°
```

---

## Intercepts

### y-Intercept

The y-intercept is where the line crosses the y-axis, so `x = 0`.

Example:

```
3x + 2y = 10
```

Set `x = 0`:

```
2y = 10
y = 5
```

So the y-intercept is `(0, 5)`.

### x-Intercept

The x-intercept is where the line crosses the x-axis, so `y = 0`.

Using the same line:

```
3x + 2y = 10
```

Set `y = 0`:

```
3x = 10
x = 10/3
```

So the x-intercept is `(10/3, 0)`.

---

## Worked Examples

### Example 1: Find the Distance Between Two Points

Find the distance between `(1, 2)` and `(5, 11)`.

```
d = √((5 - 1)² + (11 - 2)²)
  = √(4² + 9²)
  = √(16 + 81)
  = √97
```

Answer:

```
√97
```

---

### Example 2: Find the Midpoint

Find the midpoint of the segment joining `(2, -3)` and `(8, 5)`.

```
Midpoint = ((2 + 8)/2, (-3 + 5)/2)
         = (10/2, 2/2)
         = (5, 1)
```

Answer:

```
(5, 1)
```

---

### Example 3: Find the Equation of a Line Through Two Points

Find the equation of the line through `(1, 3)` and `(5, 11)`.

**Step 1: Find the slope**

```
m = (11 - 3) / (5 - 1) = 8 / 4 = 2
```

**Step 2: Use point-slope form**

Using point `(1, 3)`:

```
y - 3 = 2(x - 1)
```

**Step 3: Simplify**

```
y - 3 = 2x - 2
y = 2x + 1
```

Answer:

```
y = 2x + 1
```

---

## GRE Tips and Common Traps

1. **Watch for vertical lines.** If `x₂ - x₁ = 0`, the slope is undefined.
2. **Do not confuse midpoint with distance.** Midpoint gives a point; distance gives a length.
3. **Use squared distance when possible.** This avoids unnecessary square roots in comparison questions.
4. **Parallel = same slope.** Perpendicular = negative reciprocal slope.
5. **In intercept questions, plug in zero.** For x-intercepts set `y = 0`; for y-intercepts set `x = 0`.
6. **Supplementary means 180°.** This is especially common when angles form a straight line.
7. **Complementary means 90°.** This is especially common when a right angle is split into two parts.
8. **Adjacent angles are not automatically equal.** Look for a straight line, right angle, or other given information.
9. **Vertical angles are equal.** Opposite angles formed by intersecting lines have the same measure.
10. **Translate words into geometry.** “Equidistant from two points” usually means using the distance formula or recognizing a perpendicular bisector.

---

## Quick Summary Table

| Topic | Formula / Fact |
|------|-----------------|
| Slope | `m = (y₂ - y₁) / (x₂ - x₁)` |
| Distance | `d = √((x₂ - x₁)² + (y₂ - y₁)²)` |
| Midpoint | `((x₁ + x₂)/2, (y₁ + y₂)/2)` |
| Slope-intercept form | `y = mx + b` |
| Point-slope form | `y - y₁ = m(x - x₁)` |
| Standard form | `Ax + By = C` |
| Horizontal line | `y = constant` |
| Vertical line | `x = constant` |
| Parallel lines | same slope |
| Perpendicular lines | slopes are negative reciprocals |
| Supplementary angles | add to `180°` |
| Complementary angles | add to `90°` |
| Adjacent angles | share a vertex and a side |
| Vertical angles | opposite angles are equal |
