# Double Matrices

Double matrices (also known as "Two-Way Tables" or "Overlapping Set Grids") are powerful tools for solving word problems involving two or more categories of variables. 

When you have multiple variables that intersect (e.g., Types of flowers and Colors), a matrix allows you to organize the data such that the sum of each row and each column equals a total.

## The "One Empty Cell" Rule

The core principle of using a double matrix is simple:
**If a row or column has only one empty cell, you can calculate its value by subtracting the known values from the total for that row or column.**

---

## Worked Example: The Flower Garden

### The Problem
> A garden contains three types of flowers: **sunflowers, roses, and tulips**. All three types can be one of three colors: **red, blue, or yellow**.
> - Total flowers: 278
> - Yellow sunflowers: 29
> - Blue tulips: 67
> - Red roses: 49
> - Red tulips: 1
> - Yellow tulips: 4
> - Total blue flowers: 103
> - Total yellow flowers: 70
> - Equal number of roses and sunflowers.
>
> **Question:** What is the average of the total number of blue sunflowers and yellow roses?

### Step 1: Set up the Matrix and Fill in Given Information
Start by creating a grid with the categories as rows and columns, including a "Total" row and column.

| | Rose | Tulips | Sunflower | Total |
| :--- | :---: | :---: | :---: | :---: |
| **Red** | 49 | 1 | | |
| **Yellow** | | 4 | 29 | 70 |
| **Blue** | | 67 | | 103 |
| **Total** | | | | **278** |

### Step 2: Use the "One Empty Cell" Rule to Fill the Grid

1.  **Total Row/Total Column:**
    *   Find **Total Red**: $278 \text{ (Total)} - 70 \text{ (Yellow)} - 103 \text{ (Blue)} = 105$.
    *   Find **Total Tulips**: $1 \text{ (Red)} + 4 \text{ (Yellow)} + 67 \text{ (Blue)} = 72$.

2.  **Using the "Equal number of roses and sunflowers" clue:**
    *   Total non-tulip flowers: $278 - 72 = 206$.
    *   Since Roses = Sunflowers: $206 / 2 = 103$ each.
    *   **Total Rose = 103**, **Total Sunflower = 103**.

3.  **Filling Rows/Columns with only one missing value:**
    *   **Yellow Roses:** $70 \text{ (Total Yellow)} - 4 \text{ (Tulips)} - 29 \text{ (Sunflowers)} = \mathbf{37}$.
    *   **Red Sunflowers:** $105 \text{ (Total Red)} - 49 \text{ (Roses)} - 1 \text{ (Tulips)} = \mathbf{55}$.
    *   **Blue Roses:** $103 \text{ (Total Rose)} - 49 \text{ (Red)} - 37 \text{ (Yellow)} = \mathbf{17}$.
    *   **Blue Sunflowers:** $103 \text{ (Total Sunflower)} - 55 \text{ (Red)} - 29 \text{ (Yellow)} = \mathbf{19}$.

### Step 3: Final Matrix State

| | Rose | Tulips | Sunflower | Total |
| :--- | :---: | :---: | :---: | :---: |
| **Red** | 49 | 1 | 55 | 105 |
| **Yellow** | **37** | 4 | 29 | 70 |
| **Blue** | 17 | 67 | **19** | 103 |
| **Total** | 103 | 72 | 103 | 278 |

### Step 4: Solve the Question
The question asks for the **average of blue sunflowers and yellow roses**.

*   Blue Sunflowers = 19
*   Yellow Roses = 37
*   Average = $\frac{19 + 37}{2} = \frac{56}{2} = \mathbf{28}$.

---

## Tips for Success
1.  **Identify the variables:** Usually, you have two main categories (e.g., Color and Type).
2.  **Always include a "Total" row and column.**
3.  **Check your math:** The sums across rows must match the sums down columns at the Grand Total cell.
4.  **Look for hidden info:** Phrases like "equal number" or "twice as many" allow you to fill totals even when a specific number isn't given.
