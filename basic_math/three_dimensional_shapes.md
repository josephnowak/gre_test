# 3D Shapes

Solid geometry appears less often than plane geometry on the GRE, but when it does, the questions are usually very formula-driven. The main goals are to recognize the solid, match the correct formula, and avoid mixing up linear measure, surface area, and volume.

The highest-value solids to know are cubes, rectangular solids, cylinders, and spheres. Even if a question looks complicated, it often reduces to a familiar area formula, a volume formula, or the Pythagorean theorem used inside a hidden cross-section.

---

## Standard Notation

Here are the most common symbols used in GRE solid geometry.

- For a **cube**, let the side length be `s`.
- For a **rectangular solid** (rectangular prism or box), let the length, width, and height be `l`, `w`, and `h`.
- For a **cylinder**, let the radius of the base be `r` and the height be `h`.
- For a **sphere**, let the radius be `r` and the diameter be `d`.

Remember:

```
d = 2r
```

Also keep these measurement types separate:

- **length**: one-dimensional measure such as an edge, radius, height, or diagonal,
- **surface area**: square units,
- **volume**: cubic units.

---

## Core GRE Solid Geometry Facts

### Cubes

If a cube has side length `s`, then

```
volume = s^3
surface area = 6s^2
```

Why is the surface area `6s^2`?

- A cube has `6` congruent square faces.
- Each face has area `s^2`.

So

```
surface area = 6(s^2) = 6s^2
```

Two diagonals are especially important:

1. **Face diagonal**: diagonal across one square face

```
face diagonal = s√2
```

2. **Space diagonal**: diagonal from one vertex of the cube to the opposite vertex through the interior

```
space diagonal = s√3
```

The space diagonal comes from using the Pythagorean theorem twice:

- first on a face to get `s√2`,
- then again with height `s`.

So

```
space diagonal = √[(s√2)^2 + s^2]
               = √(2s^2 + s^2)
               = √(3s^2)
               = s√3
```

---

### Rectangular Solids and the 3D Pythagorean Theorem

This is one of the most useful GRE extensions of the ordinary hypotenuse idea.

For a rectangular solid with length `l`, width `w`, and height `h`:

```
volume = lwh
surface area = 2(lw + lh + wh)
```

The diagonal across the base is

```
base diagonal = √(l^2 + w^2)
```

Then the full diagonal through the solid is

```
space diagonal = √(l^2 + w^2 + h^2)
```

This is the 3D version of finding a hypotenuse. On the GRE, the test may describe it as:

- the distance between opposite corners of a box,
- the longest rod that can fit inside a rectangular solid,
- a wire stretched from one corner to the opposite corner,
- or a hidden diagonal formed by unfolding a solid into right triangles.

A reliable method is:

1. find a diagonal on one rectangular face,
2. use that result as one leg of a second right triangle,
3. solve again with the Pythagorean theorem.

---

### Cylinders

A cylinder is built from circular bases, so circle formulas matter immediately.

If the radius is `r` and the height is `h`, then the base circumference is

```
base circumference = 2πr
```

and the base area is

```
base area = πr^2
```

The volume is

```
volume = πr^2h
```

because volume is

```
base area * height
```

The **lateral surface area** is the area of the curved side only:

```
lateral surface area = 2πrh
```

This works because if you unwrap the curved surface, it becomes a rectangle with:

- width `2πr`,
- height `h`.

So its area is

```
(2πr)(h) = 2πrh
```

If the cylinder is closed on both ends, the **total surface area** is

```
total surface area = 2πrh + 2πr^2
```

or factored,

```
total surface area = 2πr(h + r)
```

---

### Spheres

If a sphere has radius `r`, then

```
surface area = 4πr^2
volume = (4/3)πr^3
```

Also,

```
diameter = 2r
```

Unlike cubes and cylinders, spheres do not have flat faces, edges, or corners. So GRE sphere questions are usually about:

- radius or diameter,
- volume,
- surface area,
- or comparisons between a sphere and another solid.

One especially useful relationship is scaling:

- if the radius doubles, the surface area becomes `4` times as large,
- if the radius doubles, the volume becomes `8` times as large.

Two common comparison facts are also worth remembering:

- if a sphere is inscribed in a cube of side length `s`, then the sphere's diameter is `s`,
- if a cube is inscribed in a sphere, then the cube's space diagonal equals the sphere's diameter.

---

### Scaling Rules for 3D Figures

If every linear dimension of a solid is multiplied by `k`, then:

- all lengths scale by `k`,
- all surface areas scale by `k^2`,
- all volumes scale by `k^3`.

This is very useful on the GRE because many comparison questions are faster with scaling than with full computation.

For example:

- if a cube's side length doubles, its surface area becomes `4` times as large and its volume becomes `8` times as large,
- if a cylinder's radius and height both double, its volume becomes `8` times as large,
- if a sphere's radius triples, its surface area becomes `9` times as large and its volume becomes `27` times as large.

---

## Worked Examples

### Example 1: Cube Formulas from One Side Length

A cube has side length `4`.

Find:

1. the volume,
2. the surface area,
3. the face diagonal,
4. the space diagonal.

#### Step 1: Volume

```
V = s^3 = 4^3 = 64
```

#### Step 2: Surface Area

```
SA = 6s^2 = 6(4^2) = 6(16) = 96
```

#### Step 3: Face Diagonal

```
face diagonal = s√2 = 4√2
```

#### Step 4: Space Diagonal

```
space diagonal = s√3 = 4√3
```

Answers:

```
volume = 64
surface area = 96
face diagonal = 4√2
space diagonal = 4√3
```

---

### Example 2: Finding the Hypotenuse in 3D

A rectangular solid has dimensions `3`, `4`, and `12`.

Find the distance between opposite corners of the solid.

#### Step 1: Find a diagonal on the base

The base is a `3` by `4` rectangle, so its diagonal is

```
√(3^2 + 4^2) = √(9 + 16) = √25 = 5
```

#### Step 2: Use that diagonal with the height

Now form a right triangle with legs `5` and `12`:

```
space diagonal = √(5^2 + 12^2)
               = √(25 + 144)
               = √169
               = 13
```

Answer:

```
distance between opposite corners = 13
```

This is exactly why the 3D hypotenuse idea matters on the GRE: a solid geometry question often hides an ordinary right triangle inside a box.

---

### Example 3: Cylinder Formula Review

A closed cylinder has radius `3` and height `10`.

Find:

1. the circumference of the base,
2. the volume,
3. the lateral surface area,
4. the total surface area.

#### Step 1: Base Circumference

```
2πr = 2π(3) = 6π
```

#### Step 2: Volume

```
V = πr^2h = π(3^2)(10) = 90π
```

#### Step 3: Lateral Surface Area

```
LSA = 2πrh = 2π(3)(10) = 60π
```

#### Step 4: Total Surface Area

```
TSA = 2πrh + 2πr^2
    = 60π + 2π(9)
    = 60π + 18π
    = 78π
```

Answers:

```
base circumference = 6π
volume = 90π
lateral surface area = 60π
total surface area = 78π
```

---

### Example 4: Sphere with a Given Diameter

A sphere has diameter `10`.

Find its surface area and volume.

#### Step 1: Find the radius

```
r = d / 2 = 10 / 2 = 5
```

#### Step 2: Surface Area

```
SA = 4πr^2 = 4π(5^2) = 100π
```

#### Step 3: Volume

```
V = (4/3)πr^3 = (4/3)π(5^3) = 500π / 3
```

Answers:

```
surface area = 100π
volume = 500π / 3
```

---

## GRE Tips and Common Traps

1. **Do not mix up area and volume.** Surface area is in square units, but volume is in cubic units.
2. **For cylinders, circumference belongs to the circular base.** The whole solid does not have a single "circumference" in the same way a circle does.
3. **For 3D diagonals, use the Pythagorean theorem twice when needed.** First find a face diagonal, then combine it with the height.
4. **Memorize the cube shortcuts.** `s^3`, `6s^2`, `s√2`, and `s√3` are all high-value formulas.
5. **Know whether a cylinder is closed or open.** If one or both circular ends are missing, adjust the surface area.
6. **Watch scaling carefully.** Doubling a dimension does not double area or volume in the same way.
7. **Leave answers in terms of `π` unless the question asks for a decimal approximation.**
8. **Translate words into geometry.** "Distance through the box," "longest segment inside," and "corner to opposite corner" usually mean a space diagonal.

---

## Quick Summary Table

| Topic | Formula / Fact |
|------|-----------------|
| Cube volume | `s^3` |
| Cube surface area | `6s^2` |
| Cube face diagonal | `s√2` |
| Cube space diagonal | `s√3` |
| Rectangular solid volume | `lwh` |
| Rectangular solid surface area | `2(lw + lh + wh)` |
| Rectangular solid space diagonal | `√(l^2 + w^2 + h^2)` |
| Cylinder base circumference | `2πr` |
| Cylinder base area | `πr^2` |
| Cylinder volume | `πr^2h` |
| Cylinder lateral surface area | `2πrh` |
| Cylinder total surface area | `2πrh + 2πr^2` |
| Sphere diameter | `2r` |
| Sphere surface area | `4πr^2` |
| Sphere volume | `(4/3)πr^3` |
| Sphere inscribed in cube | sphere diameter `= s` |
| Cube inscribed in sphere | sphere diameter `= s√3` |
| Scaling by factor `k` | lengths `k`, area `k^2`, volume `k^3` |