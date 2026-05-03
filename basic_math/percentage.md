# Percentages

## Key Concepts

### "X% Greater Than" vs "X% Of"

When someone says **"Price is X% greater than Y"**, this means:

```
Final Price = Y + (X% of Y) = Y * (1 + X/100)
```

**Common Mistake:** Multiplying Y directly by X% gives you only the increase amount, not the final value.

**Example:**
- "Price is 175% greater than Y" means:
  - Final = Y × (1 + 1.75) = Y × 2.75
  - NOT Y × 1.75 (that would give you only the 175% portion)

---

### Finding What Percentage One Number Is of Another

**Question:** "Y is what percentage of X?"

**Formula:**
```
Percent / 100 = Part / Total

Percent = (Part / Total) × 100
Percent = (Y / X) × 100
```

**Example:**
- "15 is what percentage of 60?"
- Percent = (15 / 60) × 100 = 25%

---

### Finding X% of a Number

**Question:** "What is X% of Y?"

**Formula:**
```
Result = (X / 100) × Y
```

**Example:**
- "What is 20% of 150?"
- Result = (20 / 100) × 150 = 30

---

### Working Backwards from "X% Greater"

**Problem Type:** Given the final price after an X% increase, find the original price.

**Example:**
> Tim sells his CDs for $4. Tim's price is 25% greater than Mary's price.
> How much is Mary selling for?

**Solution:**
```
Tim's Price = Mary's Price × (1 + X/100)
$4 = Mary's Price × (1 + 0.25)
$4 = Mary's Price × 1.25
Mary's Price = $4 / 1.25 = $3.20
```

**General Formula:**
```
Original = Final / (1 + X/100)
```

---

## Summary Table

| Question Type | Formula |
|---------------|---------|
| X% of Y | (X/100) × Y |
| Y is what % of X? | (Y/X) × 100 |
| X% greater than Y | Y × (1 + X/100) |
| Find original from X% increase | Final / (1 + X/100) |
| X% less than Y | Y × (1 - X/100) |
| Find original from X% decrease | Final / (1 - X/100) |

---

## Python Verification

```python
def percent_of(x_percent, y):
    """What is X% of Y?"""
    return (x_percent / 100) * y

def what_percent(part, total):
    """Part is what percent of Total?"""
    return (part / total) * 100

def percent_greater(y, x_percent):
    """X% greater than Y"""
    return y * (1 + x_percent / 100)

def find_original_from_increase(final, x_percent):
    """Find original value before X% increase"""
    return final / (1 + x_percent / 100)

# Examples
print(f"20% of 150 = {percent_of(20, 150)}")           # 30
print(f"15 is {what_percent(15, 60)}% of 60")          # 25%
print(f"25% greater than $3.20 = ${percent_greater(3.20, 25)}")  # $4.00
print(f"Original before 25% increase to $4 = ${find_original_from_increase(4, 25)}")  # $3.20
```
