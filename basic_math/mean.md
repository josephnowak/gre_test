# Mean

The **mean** is the ordinary average. On the GRE, mean problems often test more than just the formula: they also test how the mean changes when you add or remove values, how to recover a missing value from an average, and how to spot special structures such as evenly spaced numbers.

---

## Key Concepts

### Definition and Core Formula

If a set has `n` values `x_1, x_2, ..., x_n`, then

```
Mean = (sum of all values) / (number of values)
```

That is,

```
Mean = (x_1 + x_2 + ... + x_n) / n
```

**Example:**
For the set `4, 7, 10`,

```
Mean = (4 + 7 + 10) / 3 = 21 / 3 = 7
```

---

### The Sum-Mean Relationship

Just as important as the mean formula is the rearranged version:

```
Sum of all values = Mean × Number of values
```

This is one of the fastest GRE shortcuts.

**Example:**
If 8 numbers have mean `12`, then their total sum is

```
8 × 12 = 96
```

If one value is missing, first find the total sum from the mean, then subtract the known values.

---

### Mean as a Balance Point

The mean is the **balance point** of a data set.

If one number is above the mean, some other number or numbers must be below the mean to balance it.

**Example:**
The mean of `8, 9, 10, 13` is `10` because

- `8` is 2 below `10`
- `9` is 1 below `10`
- `10` is exactly at `10`
- `13` is 3 above `10`

The total distance below the mean is `2 + 1 = 3`, which balances the total distance above the mean, `3`.

This viewpoint is especially useful in GRE comparison and estimation problems.

---

### Mean of Evenly Spaced Numbers

If the numbers in a set are equally spaced, then the mean is the middle of the set.

For an arithmetic sequence

```
a, a + d, a + 2d, ..., a + (n - 1)d
```

the mean is

```
(first term + last term) / 2
```

So,

```
Mean = (a + [a + (n - 1)d]) / 2
```

This is also the **median** of the set.

- If the set has an odd number of terms, the median is the single middle term.
- If the set has an even number of terms, the median is the average of the two middle terms.
- In either case, for an evenly spaced set, the mean equals the median.

**Important GRE Special Case:**
For consecutive integers,

```
Mean = (smallest + largest) / 2
```

The same idea works for consecutive even integers, consecutive odd integers, or any equally spaced list.

**Example 1:**
For `3, 6, 9, ..., 3k`, the terms are equally spaced, so

```
Mean = (3 + 3k) / 2 = 3(k + 1) / 2
```

That is also the median.

**Example 2:**
The mean of `14, 17, 20, 23, 26` is

```
(14 + 26) / 2 = 40 / 2 = 20
```

---

### Shifting and Scaling a Data Set

These shortcuts appear often:

- If you add the same number `c` to every value, the mean increases by `c`.
- If you subtract the same number `c` from every value, the mean decreases by `c`.
- If you multiply every value by `c`, the mean is multiplied by `c`.
- If you divide every value by `c`, the mean is divided by `c`.

**Example:**
If a set has mean `11`, then after adding `4` to every value, the new mean is `15`.

---

### Finding a Missing Value from the Mean

This is one of the most common GRE average problems.

**Example:**
The mean of 5 numbers is `18`. Four of the numbers are `12, 17, 21, 25`. Find the fifth number.

**Step 1: Find the total sum**

```
Total sum = 5 × 18 = 90
```

**Step 2: Add the known numbers**

```
12 + 17 + 21 + 25 = 75
```

**Step 3: Subtract**

```
Missing number = 90 - 75 = 15
```

---

### Adding or Removing One Value

When one value is added to a set:

- If the new value is greater than the old mean, the mean goes up.
- If the new value is less than the old mean, the mean goes down.
- If the new value equals the old mean, the mean stays the same.

Similarly, removing a value above the mean tends to lower the mean, and removing a value below the mean tends to raise it.

**Example:**
If the mean of a set is `20` and you add a new value of `35`, the new mean must be greater than `20`.

---

### Weighted Means and Combined Groups

Sometimes the GRE combines two groups with different averages.

**Key idea:** The combined mean is a weighted average, not a simple average unless the groups have the same size.

```
Combined mean = (total sum of both groups) / (total number of values)
```

**Example:**
Group A has 4 students with mean score `70`.
Group B has 6 students with mean score `80`.

Then

```
Total points in A = 4 × 70 = 280
Total points in B = 6 × 80 = 480
Combined mean = (280 + 480) / (4 + 6) = 760 / 10 = 76
```

Notice that the combined mean is closer to `80` because the larger group has 6 students.

---

## Worked Examples

### Example 1: Consecutive Integers

What is the mean of all integers from `41` to `57`, inclusive?

Because the integers are consecutive, they are evenly spaced. So the mean is

```
(41 + 57) / 2 = 98 / 2 = 49
```

You do **not** need to add every integer.

---

### Example 2: Mean Equals Median in an Evenly Spaced Set

Find the mean and median of `5, 8, 11, 14, 17, 20`.

**Mean:**

```
(5 + 20) / 2 = 25 / 2 = 12.5
```

**Median:**
There are 6 terms, so the median is the average of the two middle terms:

```
(11 + 14) / 2 = 25 / 2 = 12.5
```

So the mean and median are equal.

---

### Example 3: Combined Average

A class of 12 students has average age `15`. Another class of 18 students has average age `17`. What is the average age of all 30 students?

```
Total age of first class = 12 × 15 = 180
Total age of second class = 18 × 17 = 306
Combined total = 486
Combined mean = 486 / 30 = 16.2
```

---

## GRE Tips and Common Traps

1. **Do not average averages unless the groups have equal size.**
   - The average of `70` and `80` is `75`, but that is only the combined mean if both groups have the same number of values.

2. **For consecutive or evenly spaced numbers, use first and last.**
   - This is much faster than summing every term.

3. **Remember the hidden total.**
   - If you know the mean and number of values, you know the total sum immediately.

4. **The mean is affected by extreme values.**
   - One very large or very small number can pull the mean noticeably.

5. **Do not confuse mean with median.**
   - They are equal for evenly spaced sets, but not for arbitrary sets.

---

## Quick Summary Table

| Idea | Shortcut / Formula |
|------|--------------------|
| Mean of `n` values | `(sum of values) / n` |
| Sum from mean | `mean × n` |
| Mean of consecutive or evenly spaced values | `(first + last) / 2` |
| Evenly spaced set | `mean = median` |
| Add `c` to every value | mean increases by `c` |
| Multiply every value by `c` | mean is multiplied by `c` |
| Add a value above the mean | mean increases |
| Combined mean | `(combined total) / (combined number of values)` |