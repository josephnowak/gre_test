# Statistics

Statistics questions on the GRE usually test whether you understand what a measure says about a data set, not just whether you can plug numbers into a formula. The most important ideas are the **mean**, **median**, **mode**, **percentiles**, **quantiles**, **standard deviation**, and the effect of extreme values.

---

## Key Concepts

### Mean

The **mean** is the ordinary average.

If a set has `n` values `x_1, x_2, ..., x_n`, then

```
Mean = (x_1 + x_2 + ... + x_n) / n
```

Equivalently,

```
Sum of all values = Mean * Number of values
```

This second form is one of the fastest GRE shortcuts.

**Example:**
For the set `4, 7, 9, 12`,

```
Mean = (4 + 7 + 9 + 12) / 4 = 32 / 4 = 8
```

---

### Median

The **median** is the middle value after the numbers are arranged from least to greatest.

Let the ordered values be

```
x_1 <= x_2 <= ... <= x_n
```

If `n` is odd:

```
Median = x_((n + 1) / 2)
```

If `n` is even:

```
Median = (x_(n / 2) + x_(n / 2 + 1)) / 2
```

**Example 1: odd number of values**

For `2, 4, 7, 9, 15`, the median is the third value:

```
Median = 7
```

**Example 2: even number of values**

For `1, 3, 8, 12`, the median is

```
(3 + 8) / 2 = 11 / 2 = 5.5
```

**GRE warning:** Always sort the list first. Median is about position.

---

### Mode

The **mode** is the value that occurs most often.

If `f(x)` is the frequency of value `x`, then

```
Mode = value(s) with the greatest f(x)
```

A set can have:

- One mode
- More than one mode
- No mode, if every value occurs the same number of times

**Example 1:**
For `4, 6, 6, 9, 10`, the mode is

```
6
```

**Example 2:**
For `2, 2, 5, 5, 8`, the modes are

```
2 and 5
```

**GRE warning:** The mode is about frequency, not size. The largest value is not automatically the mode.

---

### Percentiles

A percentile describes position in an ordered data set.

The `p`th percentile is a value such that approximately `p%` of the data are at or below that value.

One useful formula for percentile rank is

```
Percentile rank = (number of values at or below x / total number of values) * 100
```

For GRE-style ordered-list problems, a common percentile rule is:

```
Position = (p / 100) * n
```

where `n` is the number of values.

Then interpret the position like this:

- If the position is **not an integer**, round up to the next whole-number position.
- If the position is **an integer**, average the value at that position and the value at the next position.

For example, position `2.25` and position `2.75` both round up to position `3`. But position `12` means average the 12th and 13th values.

**Example:**
A data set has 20 ordered values. The position of the 60th percentile is

```
(60 / 100) * 20 = 12
```

Since `12` is an integer, the 60th percentile is the average of the 12th and 13th values.

**Important percentile facts:**

- 25th percentile = first quartile, `Q1`
- 50th percentile = median, `Q2`
- 75th percentile = third quartile, `Q3`

**GRE warning:** Percentile is not the same as percent. The 80th percentile is not necessarily `80%` of the maximum value.

---

### Quantiles

A **quantile** is a cut point that splits an ordered data set into equal-sized parts.

Percentiles are one kind of quantile: they split the data into 100 parts. The `p`th percentile marks the point where about `p%` of the data are at or below that value.

The main idea is:

```
Sort the data first.
Then use the requested percentile or quantile to locate a position in the ordered list.
```

Common quantiles:

| Quantile Type | Splits Data Into | Important Cut Points |
|---------------|------------------|----------------------|
| Median | 2 equal parts | 50th percentile |
| Quartiles | 4 equal parts | 25th, 50th, 75th percentiles |
| Quintiles | 5 equal parts | 20th, 40th, 60th, 80th percentiles |
| Deciles | 10 equal parts | 10th, 20th, ..., 90th percentiles |
| Percentiles | 100 equal parts | 1st, 2nd, ..., 99th percentiles |

For example, quartiles divide an ordered data set into four parts:

```
Q1 = 25th percentile
Q2 = 50th percentile = median
Q3 = 75th percentile
```

So if a value is at the 75th percentile, then about `75%` of the data are at or below it, and about `25%` of the data are above it.

For GRE-style position problems, use the same percentile-position idea:

```
Position = (p / 100) * n
```

**Example:**
A data set has 16 ordered values. Which position is the third quartile?

The third quartile is the 75th percentile, so

```
Position = (75 / 100) * 16
Position = 12
```

Since `12` is an integer, the third quartile is the average of the 12th and 13th values.

**GRE warning:** A quantile describes position, not value size. The 75th percentile is not `75%` of the largest number; it is a location in the sorted data.

---

### Standard Deviation

The **standard deviation** measures how spread out the data are from the mean.

- A small standard deviation means the values are close to the mean.
- A large standard deviation means the values are more spread out.
- If every value in a data set is the same, the standard deviation is `0`.

You usually do not need to calculate standard deviation from scratch on the GRE. More often, you need to understand what it means.

Standard deviation is based on the distance of each value from the mean:

```
deviation = value - mean
```

Values far from the mean increase the standard deviation. Values close to the mean keep the standard deviation small.

**Example:**

Compare these two sets:

```
Set A: 8, 9, 10, 11, 12
Set B: 2, 6, 10, 14, 18
```

Both sets have mean `10`, but Set B has a larger standard deviation because its values are farther from `10`.

#### Standard Deviation and Normal Distributions

For a **normal distribution**, the data follow a bell-shaped curve centered at the mean.

On the GRE, the most important rule is the **68-95-99.7 rule**:

| Range Around the Mean | Approximate Percent of Data |
|-----------------------|-----------------------------|
| Within 1 standard deviation | `68%` |
| Within 2 standard deviations | `95%` |
| Within 3 standard deviations | `99.7%` |

If the mean is `m` and the standard deviation is `s`, then:

```
Within 1 standard deviation: m - s to m + s
Within 2 standard deviations: m - 2s to m + 2s
Within 3 standard deviations: m - 3s to m + 3s
```

**Example:**

A test score distribution is normal with mean `500` and standard deviation `100`.

```
Within 1 standard deviation: 400 to 600 -> about 68%
Within 2 standard deviations: 300 to 700 -> about 95%
Within 3 standard deviations: 200 to 800 -> about 99.7%
```

Because the normal curve is symmetric:

- About `34%` of the data are between the mean and `1` standard deviation above the mean.
- About `34%` of the data are between the mean and `1` standard deviation below the mean.
- About `13.5%` of the data are between `1` and `2` standard deviations on either side.
- About `2.35%` of the data are between `2` and `3` standard deviations on either side.
- About `0.15%` of the data are beyond `3` standard deviations on either side.

**GRE warning:** These percentages apply to normal distributions. Do not assume the 68-95-99.7 rule applies unless the problem says or shows that the distribution is normal.

---

### Outliers

An **outlier** is a value much larger or much smaller than the rest of the data.

Outliers usually affect the measures differently:

- Mean: strongly affected
- Median: less affected
- Mode: affected only if the frequency pattern changes

**Example:**
Compare `3, 4, 5, 6, 7` with `3, 4, 5, 6, 30`.

Original mean:

```
(3 + 4 + 5 + 6 + 7) / 5 = 25 / 5 = 5
```

New mean:

```
(3 + 4 + 5 + 6 + 30) / 5 = 48 / 5 = 9.6
```

Original median:

```
5
```

New median:

```
5
```

The outlier changes the mean a lot, but the median does not change.

---

## Worked Examples

### Example 1: Find a Missing Value from the Mean

The mean of 5 numbers is `18`. Four of the numbers are `11, 16, 20, 24`. What is the fifth number?

First find the total sum:

```
Total sum = 5 * 18 = 90
```

Then add the known values:

```
11 + 16 + 20 + 24 = 71
```

Subtract:

```
Missing value = 90 - 71 = 19
```

So the fifth number is

```
19
```

---

### Example 2: Mean After Adding a New Value

A set of 6 numbers has mean `14`. A seventh number is added, and the new mean is `16`. What number was added?

Original total:

```
6 * 14 = 84
```

New total:

```
7 * 16 = 112
```

Added number:

```
112 - 84 = 28
```

So the added number is

```
28
```

This is a common GRE pattern: compare the old total with the new total.

---

### Example 3: Find a Missing Value from the Median

The ordered set is `2, 5, x, 11, 14`, and the median is `8`. Find `x`.

There are 5 values, so the median is the third value.

```
x = 8
```

---

### Example 4: Median with an Even Number of Values

The ordered set is `3, 7, x, y, 18, 20`, and the median is `11`. What is `x + y`?

There are 6 values, so the median is the average of the third and fourth values.

```
(x + y) / 2 = 11
x + y = 22
```

You do not need to know `x` and `y` separately.

---

### Example 5: GRE Percentile Rule

A data set contains 40 values arranged from least to greatest. How is the 85th percentile found?

Use the percentile-position rule:

```
Position = (85 / 100) * 40
Position = 34
```

Since `34` is an integer, the 85th percentile is the average of the 34th and 35th values.

---

### Example 6: Which Measure Changes?

A set has values `2, 4, 4, 5, 9`. If `9` is replaced by `30`, which of the mean, median, and mode changes?

Original set:

```
2, 4, 4, 5, 9
```

New set:

```
2, 4, 4, 5, 30
```

The median stays `4`, and the mode stays `4`. The mean changes because the total sum changes.

So only the **mean** changes.

---

## Practice Exercises

### Exercise 1: Missing Value from Mean

The mean of `6, 9, 13, x, 17` is `12`. Find `x`.

**Solution:**

```
Total sum = 5 * 12 = 60
Known sum = 6 + 9 + 13 + 17 = 45
x = 60 - 45 = 15
```

---

### Exercise 2: New Value Added

The average of 8 numbers is `21`. After one number is added, the average becomes `23`. What number was added?

**Solution:**

```
Original total = 8 * 21 = 168
New total = 9 * 23 = 207
Added number = 207 - 168 = 39
```

---

### Exercise 3: Mean and Median Together

The ordered set `4, 6, x, 12, 18` has mean `10`. What is the median?

**Solution:**

```
Total sum = 5 * 10 = 50
Known sum = 4 + 6 + 12 + 18 = 40
x = 10
```

The ordered set is `4, 6, 10, 12, 18`, so the median is

```
10
```

---

### Exercise 4: Mode Constraint

The set `3, 5, 5, 7, x` has exactly one mode, and the mode is `5`. Which values can `x` not be?

**Solution:**

If `x = 3`, then `3` appears twice and `5` appears twice, so there are two modes.

If `x = 7`, then `7` appears twice and `5` appears twice, so there are two modes.

So `x` cannot be

```
3 or 7
```

If `x = 5`, then `5` appears three times, so `5` is still the only mode.

---

### Exercise 5: Percentile Rank

In a class of 25 students, 20 students scored at or below Ana's score. What is Ana's percentile rank?

**Solution:**

```
Percentile rank = (20 / 25) * 100 = 80
```

Ana is at the 80th percentile.

---

## GRE Tips and Common Traps

1. **Sort before finding the median or percentiles.**
   - These are position-based ideas.

2. **Use total = mean * number of values.**
   - This is the key move for missing-value and added-value problems.

3. **Do not average averages unless the groups have the same size.**
   - A group with more values has more weight.

4. **The mean can be pulled by an extreme value.**
   - The median is usually more stable.

5. **Mode is about repetition.**
   - A set can have more than one mode or no mode.

6. **Use the GRE percentile-position rule carefully.**
   - Compute `(p / 100) * n`. If the result is not an integer, round up. If the result is an integer, average that value and the next value.

7. **Quantiles split sorted data into equal groups.**
   - Quartiles split data into 4 groups, deciles into 10 groups, and percentiles into 100 groups.

8. **Standard deviation measures spread from the mean.**
   - For a normal distribution, remember the 68-95-99.7 rule.

---

## Quick Summary Table

| Idea | Formula / Rule |
|------|----------------|
| Mean | `(sum of values) / n` |
| Sum from mean | `mean * n` |
| Median, odd `n` | middle value after sorting |
| Median, even `n` | average of the two middle values |
| Mode | value(s) with greatest frequency |
| Percentile rank | `(values at or below x / total values) * 100` |
| GRE `p`th percentile position | Compute `(p / 100) * n`; round up if not an integer; if integer, average that value and the next value |
| Quantile | cut point that splits sorted data into equal-sized parts |
| Quartiles | `Q1 = 25th percentile`, `Q2 = median`, `Q3 = 75th percentile` |
| 50th percentile | median |
| Standard deviation | measures how spread out values are from the mean |
| Normal distribution rule | within 1 SD: `68%`; within 2 SD: `95%`; within 3 SD: `99.7%` |
| Outlier effect | mean usually changes more than median |

