# Conversions

Unit conversion is the process of changing a quantity from one unit of measurement to another while maintaining the same physical value. This is essentially a special case of working with **ratios**.

---

## Applying the Ratio Method to Conversions

Just like in the [Ratios](ratios.md#the-simplified-method-divide-then-multiply) section, we can use the **Divide then Multiply** logic to convert units.

### The Logic:
1.  **Identify the Ratio:** A conversion factor (like 1 pound = 453.6 grams) is a ratio (1:453.6).
2.  **Divide:** Divide the quantity you have by its corresponding part in the ratio to find the "scale factor" (the value of one unit).
3.  **Multiply:** Multiply that scale factor by the target part of the ratio.

**Example:** Convert 8.96g to pounds using the ratio 1 lb : 453.6 g.
- **Divide:** $8.96 \text{ g} \div 453.6 \text{ g} = 0.01975...$ (This is our scale factor $k$).
- **Multiply:** $k \times 1 \text{ pound} = 0.01975... \text{ pounds}$.

Mathematically, this looks like:
$$\text{Amount in pounds} = \frac{8.96 \text{ g}}{453.6 \text{ g}} \times 1 \text{ lb}$$

---

## Problem 1: Copper Density

> **Problem:** The density of copper is $8.96 \text{ g/cm}^3$. What is this in pounds per cubic inch?
> - Use $1 \text{ pound} = 453.6 \text{ grams}$
> - Use $1 \text{ inch} = 2.54 \text{ cm}$

### Step 1: Convert Mass (grams to pounds)
Using the ratio **1 lb : 453.6 g**:
- $k = 8.96 / 453.6 \approx 0.01975$
- Mass in lb $= 1 \times k \approx 0.01975 \text{ lb}$

### Step 2: Convert Volume ($\text{cm}^3$ to $\text{in}^3$)
First, find the volume ratio for cubic units:
- $1 \text{ inch} = 2.54 \text{ cm}$
- $(1 \text{ inch})^3 = (2.54 \text{ cm})^3$
- $1 \text{ in}^3 = 16.387064 \text{ cm}^3$

Now, convert $1 \text{ cm}^3$ to $\text{in}^3$ using the ratio **$1 \text{ in}^3 : 16.387064 \text{ cm}^3$**:
- $k = 1 / 16.387064 \approx 0.06102$
- Volume in $\text{in}^3 = 1 \times k \approx 0.06102 \text{ in}^3$

### Step 3: Combine for Density
$$\text{Density} = \frac{\text{Mass}}{\text{Volume}} = \frac{0.01975 \text{ lb}}{0.06102 \text{ in}^3} \approx 0.3237 \text{ lb/in}^3$$

**Calculation Note:** For better accuracy, do it in one step:
$$\text{Density} = \frac{8.96}{453.6} \times 16.387064 \approx \mathbf{0.3237 \text{ lb/in}^3}$$

---

## Problem 2: Speed of Sound

> **Problem:** The speed of sound in air is about $343 \text{ meters per second}$. What is this in feet per hour?
> - Use $1 \text{ meter} = 3.28 \text{ feet}$
> - Use $1 \text{ hour} = 3600 \text{ seconds}$

### Method 1: The Ratio Method

**1. Convert Distance ($343 \text{ m}$ to feet):**
Ratio **1 m : 3.28 ft**.
- $k = 343 / 1 = 343$
- Distance in feet $= 3.28 \times 343 = 1,125.04 \text{ ft}$

**2. Convert Time ($1 \text{ s}$ to hours):**
Ratio **1 h : 3600 s**.
- $k = 1 / 3600$
- Time in hours $= 1 \times k = 1/3600 \text{ h}$

**3. Calculate Speed:**
$$\text{Speed} = \frac{\text{Distance}}{\text{Time}} = \frac{1,125.04 \text{ ft}}{1/3600 \text{ h}} = 1,125.04 \times 3600 = \mathbf{4,050,144 \text{ ft/h}}$$

### Method 2: Standard Dimensional Analysis (The Algebraic Method)

This is the standard way to verify that the units cancel out correctly. We multiply the starting quantity by fractions that equal 1.

$$\frac{343 \text{ m}}{1 \text{ s}} \times \left( \frac{3.28 \text{ ft}}{1 \text{ m}} \right) \times \left( \frac{3600 \text{ s}}{1 \text{ h}} \right)$$

1.  The **meters** cancel out.
2.  The **seconds** cancel out.
3.  We are left with **ft/h**:
$$343 \times 3.28 \times 3600 = \mathbf{4,050,144 \text{ ft/h}}$$

---

## Summary of Conversion Ratios

| Conversion | Ratio | Logic |
| :--- | :--- | :--- |
| **Small to Large** (e.g., g to lb) | $1 : 453.6$ | Divide by ratio part (453.6) |
| **Large to Small** (e.g., m to ft) | $1 : 3.28$ | Multiply by ratio part (3.28) |
| **Compound Units** (e.g., density) | Multiple Ratios | Convert numerator and denominator separately |

---

## The Regular Method (Dimensional Analysis)

While the ratio method is great for understanding the logic, the "regular" method used in science is **Dimensional Analysis**. This method uses conversion factors as fractions to "cancel out" units until you reach the desired ones.

### Illustrative Example: Copper Density
To convert $8.96 \text{ g/cm}^3$ to $\text{lb/in}^3$:

1.  **Start with the original value:**
    $$\frac{8.96 \text{ g}}{1 \text{ cm}^3}$$

2.  **Multiply by the mass conversion factor:**
    To cancel **grams (g)**, put it in the denominator:
    $$\frac{8.96 \text{ g}}{1 \text{ cm}^3} \times \left( \frac{1 \text{ lb}}{453.6 \text{ g}} \right)$$

3.  **Multiply by the volume conversion factors:**
    To cancel **$\text{cm}^3$**, we need **cm** in the numerator. Since we have $\text{cm}^3$, we must multiply by the conversion factor ($1 \text{ in} = 2.54 \text{ cm}$) **three times**:
    $$\frac{8.96 \text{ g}}{1 \text{ cm}^3} \times \left( \frac{1 \text{ lb}}{453.6 \text{ g}} \right) \times \left( \frac{2.54 \text{ cm}}{1 \text{ in}} \right) \times \left( \frac{2.54 \text{ cm}}{1 \text{ in}} \right) \times \left( \frac{2.54 \text{ cm}}{1 \text{ in}} \right)$$

4.  **Simplify the volume part:**
    This is equivalent to multiplying by the conversion factor cubed:
    $$\frac{8.96 \text{ g}}{1 \text{ cm}^3} \times \left( \frac{1 \text{ lb}}{453.6 \text{ g}} \right) \times \frac{2.54^3 \text{ cm}^3}{1 \text{ in}^3}$$

5.  **Cancel units and calculate:**
    - **Grams** cancel.
    - **$\text{cm}^3$** cancel.
    - We are left with **$\text{lb/in}^3$**.

$$\frac{8.96 \times 1 \times 2.54^3}{453.6} = \frac{8.96 \times 16.387}{453.6} \approx \mathbf{0.3237 \text{ lb/in}^3}$$
