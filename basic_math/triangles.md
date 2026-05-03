# Triangles

Triangles appear often on the GRE. The test expects you to recognize the standard notation quickly, classify triangles by sides and angles, and remember a small set of high-value facts such as the angle sum, triangle inequality, area formula, and special right-triangle ratios.

---

## Standard Notation

Suppose we have triangle `ABC`.

- The vertices are `A`, `B`, and `C`.
- The sides are `AB`, `BC`, and `CA`.
- `∠ABC` means the angle with vertex at `B`.
  - The middle letter tells you where the angle is.
  - So `∠XYZ` is the angle at `Y`.
- `∠A`, `∠B`, and `∠C` are shorthand when there is no ambiguity.

It is also common to name side lengths by the opposite vertex:

- `a = BC` is opposite `∠A`
- `b = AC` is opposite `∠B`
- `c = AB` is opposite `∠C`

This convention is useful because many formulas are written in terms of opposite sides and angles.

Example:

- If `∠ABC = 50°`, then the angle is at `B`.
- The side opposite that angle is `AC`.

---

## Types of Triangles

### By Side Lengths

#### Scalene Triangle

- All three sides have different lengths.
- All three angles are different.

#### Isosceles Triangle

- At least two sides are equal.
- Angles opposite equal sides are equal.

If `AB = AC`, then

```
∠B = ∠C
```

This is one of the most frequently tested triangle facts.

#### Equilateral Triangle

- All three sides are equal.
- All three angles are equal.
- Since the angles of a triangle sum to `180°`, each angle is

```
180° / 3 = 60°
```

---

### By Angle Size

#### Acute Triangle

- All three angles are less than `90°`.

#### Right Triangle

- One angle is `90°`.
- The side opposite the right angle is the hypotenuse.

#### Obtuse Triangle

- One angle is greater than `90°`.

---

## Core GRE Triangle Facts

### Angle Sum of a Triangle

If the interior angles are `A`, `B`, and `C`, then

```
A + B + C = 180°
```

This is one of the first facts to check in any GRE triangle question.

---

### Exterior Angle Theorem

An exterior angle of a triangle equals the sum of the two remote interior angles.

If one exterior angle is `x`, and the two remote interior angles are `A` and `B`, then

```
x = A + B
```

This is often faster than using a long chain of angle equations.

---

### Bigger Side, Bigger Opposite Angle

Important note:

In any triangle, the bigger side is always opposite the bigger angle.

So:

- the longest side is opposite the largest angle,
- the shortest side is opposite the smallest angle,
- equal sides are opposite equal angles.

Example:

If a triangle has side lengths `5`, `7`, and `9`, then the largest side is `9`. Therefore, the largest angle is the angle opposite the side of length `9`.

Graphic:

```
          A
        /   \
   7   /     \   5
      /       \
     B---------C
          9
```

In this triangle:

- side `BC = 9`, so the angle opposite it, `∠A`, is the largest angle,
- side `AC = 5`, so the angle opposite it, `∠B`, is the smallest angle,
- side `AB = 7`, so the angle opposite it, `∠C`, is the middle angle.

This helps on GRE problems when you do not need exact angle measures. Sometimes you only need to know which angle is largest or smallest.

---

### Triangle Inequality

For side lengths `a`, `b`, and `c` of a nondegenerate triangle,

```
|a - b| < c < a + b
```

Equivalent forms are

```
a + b > c
a + c > b
b + c > a
```

GRE use:

- to test whether three lengths can form a triangle,
- to find the possible range of an unknown side.

Example:

If two sides are `5` and `9`, then the third side `x` must satisfy

```
|9 - 5| < x < 9 + 5
4 < x < 14
```

---

### Area of a Triangle

If a triangle has base `b` and corresponding height `h`, then

```
Area = (b * h) / 2
```

The height must be perpendicular to the chosen base.

So if you know the area and the base, you can solve for the height immediately:

```
h = 2A / b
```

where `A` is the area.

### Useful Height Formulas

On the GRE, the most useful idea is that the same triangle can be described in different ways depending on what information is given.

#### 1. Height from Two Sides and the Included Angle

If sides `a` and `b` include angle `C`, then

```
Area = (1/2)ab sin C
```

Since area is also `(1/2)(base)(height)`, if you use side `a` as the base, then

```
h = b sin C
```

If you use side `b` as the base, then

```
h = a sin C
```

This is one of the cleanest ways to find a height when an angle is given.

#### 2. Height from Three Sides

If the three sides are `a`, `b`, and `c`, first compute the semiperimeter

```
s = (a + b + c) / 2
```

Then Heron's formula gives the area:

```
A = √(s(s - a)(s - b)(s - c))
```

So the height to side `a` is

```
h_a = 2√(s(s - a)(s - b)(s - c)) / a
```

Similarly,

```
h_b = 2A / b
h_c = 2A / c
```

For the GRE, you usually do not need to memorize the full height version if you already know Heron's formula and `h = 2A / base`.

#### 3. Height in an Equilateral Triangle

If each side is `s`, then the altitude splits the triangle into two `30-60-90` triangles, so

```
h = (√3 / 2)s
```

and therefore the area is

```
A = (√3 / 4)s²
```

This formula is very common on the GRE.

#### 4. Height in a Right Triangle

If the legs are `a` and `b`, then each leg can serve as the height to the other leg.

So if base `= a`, then

```
h = b
```

and if base `= b`, then

```
h = a
```

If the hypotenuse is `c`, then the altitude to the hypotenuse is often useful. Since

```
Area = (1/2)ab = (1/2)ch
```

we get

```
h = ab / c
```

#### 5. Height in an Isosceles Triangle

If the equal sides are `a` and the base is `b`, the altitude from the top vertex bisects the base into two pieces of length `b/2`.

Using the Pythagorean theorem,

```
h = √(a² - (b/2)²)
```

This is useful when the diagram shows symmetry.

#### 6. Height from Circumradius or Inradius

These are less common, but sometimes useful in harder problems.

If `R` is the circumradius and side `a` is opposite angle `A`, then

```
a = 2R sin A
```

and the height to side `a` can be written as

```
h_a = c sin B = b sin C
```

If `r` is the inradius and `s` is the semiperimeter, then

```
A = rs
```

so the height to side `a` is

```
h_a = 2rs / a
```

#### Fast GRE Takeaways

- If area and base are known, use `h = 2A / b`.
- If two sides and the included angle are known, use `h = side * sin(angle)`.
- If all three sides are known, use Heron's formula first.
- In an equilateral triangle with side `s`, memorize `h = (√3 / 2)s`.
- In a right triangle, the legs are already perpendicular, so one leg is the height to the other.
- If you are only given two sides with no angle information, you usually cannot determine a unique height.

---

### Right Triangle Facts

If a triangle is right with legs `a` and `b` and hypotenuse `c`, then

```
a² + b² = c²
```

This is the Pythagorean theorem.

Common GRE triples:

- `3-4-5`
- `5-12-13`
- `8-15-17`

Multiples of these also work.

---

### Pythagorean Triplets

A Pythagorean triplet is a set of three positive integers `(a, b, c)` that satisfy the Pythagorean theorem:

```
a^2 + b^2 = c^2
```

That means the three numbers can be the side lengths of a right triangle.

The most important example is:

```
3-4-5
```

because

```
3^2 + 4^2 = 5^2
9 + 16 = 25
```

So yes: if a triangle has side lengths `3`, `4`, and `5`, then it is a right triangle. The largest side, `5`, is the hypotenuse.

The use of `3-4-5` is not that every right triangle is `3-4-5`. The use is that many GRE problems hide a `3-4-5` pattern, or a scaled version of it, so you can recognize the right triangle or find a missing side quickly.

Common triplets to memorize for the GRE:

- `3-4-5`
- `5-12-13`
- `7-24-25`
- `8-15-17`

Any positive multiple of a triplet is also a triplet. For example:

- `6-8-10` from `2(3-4-5)`
- `9-12-15` from `3(3-4-5)`
- `10-24-26` from `2(5-12-13)`

#### What are triplets used for?

Use Pythagorean triplets to:

- recognize that a triangle is right when the side lengths match a triplet,
- find a missing side without doing the full Pythagorean theorem,
- check whether three given side lengths could form a right triangle,
- notice a hidden right triangle inside a geometry diagram.

#### Example 1: Recognize a right triangle

Question:

Do side lengths `6`, `8`, and `10` form a right triangle?

Answer:

Yes. These are all `2` times the famous `3-4-5` triangle:

```
3-4-5  ->  6-8-10
```

So a triangle with sides `6`, `8`, and `10` is a right triangle. The hypotenuse is `10`.

You could also check directly:

```
6^2 + 8^2 = 10^2
36 + 64 = 100
```

#### Example 2: Find the hypotenuse quickly

Question:

If a right triangle has legs `9` and `12`, find the hypotenuse.

Step 1: Notice that both numbers are multiples of the familiar triple `3-4-5`.

```
9 = 3(3)
12 = 3(4)
```

Step 2: Scale the whole triple by `3`.

```
3-4-5  ->  9-12-15
```

Step 3: The missing side must be `15`.

This is faster than writing:

```
9^2 + 12^2 = c^2
```

#### Example 3: Find a missing leg

Question:

A right triangle has hypotenuse `13` and one leg `5`. Find the other leg.

This matches the triplet:

```
5-12-13
```

So the missing leg is `12`.

You can verify:

```
5^2 + 12^2 = 13^2
25 + 144 = 169
```

#### Example 4: Check whether the triangle is right

Question:

Does a triangle with side lengths `7`, `24`, and `25` have a right angle?

Answer:

Yes. `7-24-25` is a Pythagorean triplet:

```
7^2 + 24^2 = 25^2
49 + 576 = 625
```

Since the equation works, the triangle is right. The right angle is opposite the longest side, `25`.

#### Example 5: Common trap

Question:

Does a triangle with side lengths `4`, `5`, and `6` have to be a right triangle?

Answer:

No. It is a valid triangle, but it is not a right triangle:

```
4^2 + 5^2 = 41
6^2 = 36
```

Since `41` is not equal to `36`, the triangle is not right.

Do not assume "three nice integer sides" means "right triangle." It must match `a^2 + b^2 = c^2`, with `c` as the largest side.

#### Mini Checks

- `10-24-26` is right because it is `2(5-12-13)`.
- `15-20-25` is right because it is `5(3-4-5)`.
- `8-15-17` is right because it is a memorized triplet.
- `5-6-7` is not right because `5^2 + 6^2` does not equal `7^2`.

#### Important Limit

If you are given the hypotenuse instead:

- The hypotenuse alone is **not enough** to determine both legs of a right triangle.
- You need one more piece of information, such as one leg, an acute angle, or a special triangle ratio.

Examples:

- If the hypotenuse is `13` and one leg is `5`, then the other leg is `12` because

```
5^2 + b^2 = 13^2
25 + b^2 = 169
b^2 = 144
b = 12
```

- If the hypotenuse is `10` in a `30-60-90` triangle, then `2x = 10`, so `x = 5` and the legs are `5` and `5sqrt(3)`.
- If the hypotenuse is `10` in a `45-45-90` triangle, then `xsqrt(2) = 10`, so each leg is `10 / sqrt(2) = 5sqrt(2)`.

GRE takeaway:

- If a problem gives only the hypotenuse, do not assume you can find the other sides.
- Look for one more clue: a leg, an angle, a diagram showing a special right triangle, or a familiar triplet such as `5-12-13`.

---

### Special Right Triangles

#### `45-45-90`

Side ratio:

```
1 : 1 : √2
```

So if each leg is `x`, the hypotenuse is

```
x√2
```

#### `30-60-90`

Side ratio:

```
1 : √3 : 2
```

More precisely:

- shortest side is opposite `30°`
- longest side is the hypotenuse, opposite `90°`
- the remaining side is opposite `60°`

If the shortest side is `x`, then the other two sides are

```
x√3 and 2x
```

---

### Isosceles Triangle Shortcut

In an isosceles triangle, the altitude from the vertex between the equal sides also acts as:

- an angle bisector,
- a median,
- and a perpendicular bisector of the base.

This can simplify many GRE diagrams.

---

### Similar Triangles

Two triangles are similar if their corresponding angles are equal.

Then:

- corresponding sides are proportional,
- corresponding angle measures are equal,
- areas scale by the square of the similarity ratio.

If the side ratio is `k`, then the area ratio is

```
k²
```

---

## GRE Tips and Common Traps

1. **Do not assume a triangle is right or isosceles unless the figure or information guarantees it.**
2. **Use the triangle inequality for hidden range questions.**
3. **In area problems, height means perpendicular height, not a slanted side.**
4. **If a problem gives two sides and an included angle, think `Area = (1/2)ab sin C` and convert that into height if needed.**
5. **If all three sides are given, Heron's formula can unlock the height even when no angle is shown.**
6. **The longest side lies opposite the largest angle.**
7. **The shortest side lies opposite the smallest angle.**
8. **An exterior angle is supplementary to its adjacent interior angle and equal to the sum of the two remote interior angles.**

---

## Quick Summary Table

| Topic | Formula / Fact |
|------|-----------------|
| Angle notation | `∠XYZ` is the angle at `Y` |
| Angle sum | `A + B + C = 180°` |
| Exterior angle | `Exterior = sum of the two remote interior angles` |
| Side-angle relationship | longest side is opposite largest angle; shortest side is opposite smallest angle |
| Triangle inequality | `|a - b| < c < a + b` |
| Area | `(base * height) / 2` |
| Height from area and base | `h = 2A / b` |
| Height from two sides and included angle | `h = b sin C` if side `a` is the base |
| Height in an equilateral triangle | `(√3 / 2)s` |
| Altitude to hypotenuse in a right triangle | `h = ab / c` |
| Right triangle | `a² + b² = c²` |
| Pythagorean triplets | `3-4-5`, `5-12-13`, `7-24-25`, `8-15-17` and multiples |
| `45-45-90` triangle | `x, x, x√2` |
| `30-60-90` triangle | `x, x√3, 2x` |
| Equilateral triangle | all angles are `60°` |
| Isosceles triangle | equal sides imply equal opposite angles |

---

## Proof That the Interior Angles of a Triangle Sum to `180°`

Let triangle `ABC` have interior angles `∠A`, `∠B`, and `∠C`.

Draw a line through `A` parallel to side `BC`.

Then:

- the angle formed between this new line and side `AB` is equal to `∠B` by the alternate interior angles theorem,
- the angle formed between this new line and side `AC` is equal to `∠C` by the alternate interior angles theorem.

At point `A`, these two copied angles together with `∠A` lie on a straight line. Therefore their sum is `180°`.

So,

```
∠B + ∠A + ∠C = 180°
```

or equivalently,

```
∠A + ∠B + ∠C = 180°
```

This proves that the interior angles of any triangle in Euclidean geometry sum to `180°`.
