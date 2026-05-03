# Number Lines

## Key Concepts

### Evenly Spaced Marks

When a problem states that marks on a number line are **evenly spaced**, you can calculate the distance between consecutive marks.

**Formula:**
```
Distance between marks = |X - Y| / N
```

Where:
- `X` and `Y` are two known points on the line
- `N` is the number of **intervals** (jumps) between them

**Important:** Count the number of **jumps**, not the number of marks!

```
Example: Points at positions 2, 4, 6, 8, 10

|----|----|----|----|
2    4    6    8    10

Marks: 5
Jumps (intervals): 4

Distance = |10 - 2| / 4 = 8 / 4 = 2
```

---

### Counting Intervals vs Marks

**Common Mistake:** Counting marks instead of intervals.

**Rule:** The number of intervals between N marks is always `N - 1`.

```
Marks:     |    |    |    |    |
Count:     1    2    3    4    5

Intervals:    1    2    3    4
```

When calculating distance per interval, always use the number of **jumps** you can make, which equals the number of marks minus 1.

---

### Midpoint Problems

Many problems involve midpoints. Key relationships:

**If M is the midpoint of segment AB:**
```
|AM| = |MB| = |AB| / 2
|AB| = 2 × |AM| = 2 × |MB|
```

---

### Tips for Number Line Problems

1. **Draw it out:** Always sketch the number line, even if not to scale
2. **Label positions:** Mark what you know (points, distances, midpoints)
3. **Watch for unlabeled positions:** Questions often provide letters without specifying exact locations
4. **Use variables:** Assign variables to unknown distances and set up equations

---

## Worked Example

### Exercise: Midpoint Problem

**Problem:**
> W, X, Y and Z are points on a number line.
> - Y is the midpoint of segment WX
> - Z is the midpoint of segment WY
>
> **Quantity A:** |WZ| / |XY|
> **Quantity B:** |WY| / |WX|
>
> A) Quantity A is greater
> B) Quantity B is greater
> C) Both quantities are equal
> D) Cannot be determined

---

**Solution:**

**Step 1: Draw the number line**

Since Y is the midpoint of WX, and Z is the midpoint of WY, we can determine the relative positions:

```
|    |    |         |
W    Z    Y         X
```

**Step 2: Assign variables**

Let's say `|WY| = 1` (we can use any value since we're comparing ratios).

**Step 3: Find all segment lengths**

From the given information:
- `|WY| = 1` (our chosen value)
- `|WX| = 2 × |WY| = 2` (since Y is midpoint of WX)
- `|WZ| = |WY| / 2 = 0.5` (since Z is midpoint of WY)
- `|XY| = |WX| - |WY| = 2 - 1 = 1`

**Step 4: Calculate the quantities**

```
Quantity A = |WZ| / |XY| = 0.5 / 1 = 1/2

Quantity B = |WY| / |WX| = 1 / 2 = 1/2
```

**Answer: C) Both quantities are equal**

---

### Key Properties Discovered

From this example, we can derive general relationships:

| If Y is midpoint of WX and Z is midpoint of WY: |
|-------------------------------------------------|
| `|XY| = 2 × |WZ|` |
| `|WZ| = |WY| / 2` |
| `|WX| = 2 × |WY|` |
| `|WZ| / |XY| = |WY| / |WX| = 1/2` |

---

## Python Verification

```python
def verify_midpoint_problem():
    """Verify the worked example with actual numbers."""
    
    # Let W be at position 0
    W = 0
    
    # Let X be at position 4 (arbitrary choice)
    X = 4
    
    # Y is midpoint of WX
    Y = (W + X) / 2  # Y = 2
    
    # Z is midpoint of WY
    Z = (W + Y) / 2  # Z = 1
    
    # Calculate segment lengths
    WZ = abs(Z - W)  # 1
    XY = abs(Y - X)  # 2
    WY = abs(Y - W)  # 2
    WX = abs(X - W)  # 4
    
    # Calculate quantities
    quantity_A = WZ / XY
    quantity_B = WY / WX
    
    print(f"Points: W={W}, Z={Z}, Y={Y}, X={X}")
    print(f"|WZ| = {WZ}, |XY| = {XY}, |WY| = {WY}, |WX| = {WX}")
    print(f"Quantity A = |WZ|/|XY| = {WZ}/{XY} = {quantity_A}")
    print(f"Quantity B = |WY|/|WX| = {WY}/{WX} = {quantity_B}")
    print(f"Equal? {quantity_A == quantity_B}")

verify_midpoint_problem()
```

**Output:**
```
Points: W=0, Z=1, Y=2, X=4
|WZ| = 1, |XY| = 2, |WY| = 2, |WX| = 4
Quantity A = |WZ|/|XY| = 1/2 = 0.5
Quantity B = |WY|/|WX| = 2/4 = 0.5
Equal? True
```
