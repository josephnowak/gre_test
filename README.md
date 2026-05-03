# 🎓 GRE Practice

<div align="center">

**Free, browser-based GRE-style practice for people who want structure without another expensive paywall.**

**15 practice tests • 5 sections per test • timed mode • saved progress • score history • full review**

</div>

---

## 🚀 What Is This?

**GRE Practice** is a fully functional static webpage for GRE-style preparation. It runs directly in the browser and gives students a complete practice environment: timed sections, multiple test modes, question suggestions, saved in-progress sessions, scores, charts, and detailed review.

The main app lives in [`gre_practice`](gre_practice).

You do not need an account, backend, subscription, installation, or payment. Open the webpage and start practicing.

---

## 💡 Why I Built It

GRE preparation can become expensive very quickly. Paying large amounts of money just to practice does not make sense for many students, especially when the goal is simply to prepare, learn from mistakes, and improve over time.

This project exists to make life easier for people in that situation.

I am also not a big fan of this kind of standardized test, but I need to take it because I am trying to get a place in a master's program. I am not a math teacher, and English is not my native language, but I tried to make the webpage as useful, clear, and practical as possible for other people preparing under the same pressure.

The idea is simple:

> **Good practice should be accessible. Studying should not require spending hundreds or thousands of dollars.**

---

## 💸 Why Free Matters: Real GRE Prep Prices

Public prices change often, but this snapshot shows why a free practice tool can be useful. Prices below were checked on **May 3, 2026** from public official product or pricing pages.

| Provider | Public GRE prep offer | Price shown |
| --- | --- | --- |
| [ETS POWERPREP](https://www.in.ets.org/preparation-gre/powerprep.html) | Official POWERPREP Online practice tests | **Free** for two practice tests |
| [ETS POWERPREP PLUS](https://www.ets.org/gre/revised_general/prepare/powerprep/) | Official paid practice tests | **$44.95 USD per practice test** |
| [Magoosh GRE](https://gre.magoosh.com/plans) | Premium GRE plan | **$149 USD** for 1 month, **$179 USD** for 6 months |
| [GregMat](https://www.gregmat.com/pricing) | GregMat+ subscription | **$7.99/month**, or **$9.99/month** with PrepSwift |
| [Target Test Prep GRE](https://gre.targettestprep.com/plans) | Self-study and live plans | **$179/month**, **$449** for 4 months, **$499** for 6 months, **$1,299** with live classes |
| [Kaplan GRE](https://www.kaptest.com/gre/courses/gre-prep-live-online) | GRE Live Online course | **$1,099 USD** |
| [Manhattan Prep GRE](https://www.manhattanprep.com/gre) | On-demand and live GRE prep | About **$299-$499** for on-demand courses; complete course starts at **$1,399** |
| [The Princeton Review](https://www.princetonreview.com/product/details?id=GRE-LOL-TUT-165&z=10011) | GRE 165+ tutoring, 32 hours | **$4,999 USD** |

This project is not here to say paid resources are useless. Many paid tools are serious and well built. The point is different: **basic practice, explanations, timing, progress tracking, and review should also exist in a free and accessible form.**

---

## ✨ Feature Showcase

### 🧪 Multiple Practice Tests

- **15 GRE-style practice tests**
- **5 sections per test**
- Writing, verbal reasoning, and quantitative reasoning
- Mixed full-review tests and targeted topic-focus tests
- Search and filters to find the right test quickly

### ⏱️ Realistic Section Timing

Each test is divided into GRE-style timed sections:

- **Analytical Writing**
- **Verbal Reasoning Section 1**
- **Quantitative Reasoning Section 1**
- **Verbal Reasoning Section 2**
- **Quantitative Reasoning Section 2**

The timer runs per section, helping you practice pacing instead of only solving questions casually.

### 🧭 Two Study Modes

| Mode | Best for | Behavior |
| --- | --- | --- |
| **Practice Mode** | Learning, reviewing, flexible study | Pause, exit, save progress, resume later |
| **Real Mode** | Simulating pressure | Timer cannot be paused and the test cannot be exited until completion |

### 🧠 Question Suggestions

Every question can include a **Suggestion** button. It gives a small hint without immediately giving away the answer, so you can still think through the problem.

### 🚩 Mark Questions

Use **Mark** to flag difficult questions and return to them before finishing a section. Marking does not change the score; it is only a study tool.

### 💾 In-Progress Sessions

In practice mode, you can exit a test and continue later.

Saved sessions include:

- Current test
- Current section
- Current question
- Answers
- Marked questions
- Remaining section time
- Completed sections

### 📊 Scores And Progress

After completing a test, the webpage shows:

- Scored accuracy
- Verbal score breakdown
- Quant score breakdown
- Writing word count
- Correct and incorrect answers
- Score history
- Best accuracy
- Average accuracy
- Latest test result
- Real-mode run count
- Accuracy trend chart
- Verbal vs. quant balance chart

### 🔍 Detailed Review

The review screen shows each question with:

- Question type
- Your answer
- Correct answer
- Correct / wrong / unscored status
- Full explanation
- Passage, table, or quantitative comparison data when needed

---

## 🧩 Question Coverage

The app includes original GRE-style practice across common question formats:

- ✍️ Analytical Writing issue prompts
- 📚 Text Completion
- 🔁 Sentence Equivalence
- 📖 Reading Comprehension
- ⚖️ Quantitative Comparison
- 🔢 Single-answer quantitative questions
- ✅ Multiple-answer quantitative questions
- 🧮 Numeric entry
- 📊 Data Interpretation

Quantitative practice includes arithmetic, algebra, geometry, rates, percents, averages, number properties, data interpretation, and mixed review. Some tests focus on specific areas such as geometry, algebra, arithmetic, or data; others are broader official-style mixed practice sets.

---

## 🤖 Question Generation And Originality

Most questions in the webpage were created through **synthetic generation with AI**.

The process used a large set of GRE-related questions found online as reference material to understand the kinds of skills, formats, traps, and reasoning patterns that GRE practice normally tests. From that reference, the AI generated new questions designed to evaluate similar abilities without copying, lightly paraphrasing, or making only subtle changes to existing questions.

The goal is for the practice content to be original and legally safe to share as an independent study tool. This README is not legal advice, but the project is built around a clear principle:

> **Reference material should guide topic coverage, difficulty, and question style. It should not be reproduced.**

---

## 🕹️ How To Use It

Open [`gre_practice/index.html`](gre_practice/index.html) in a browser.

Then:

1. Go to **Tests**.
2. Search or filter the available practice tests.
3. Choose a starting section, or enable **Real Mode**.
4. Work through the questions using timer, navigation, mark, and suggestion controls.
5. Finish all sections to see your summary.
6. Review each question and explanation.
7. Return later to **In Progress** or **Scores** to continue sessions and track improvement.

Because this is a static webpage, no installation is required.

---

## 🔐 Data And Privacy

Saved sessions and score history are stored in the browser's **local storage**.

- No account is required.
- Nothing is uploaded to a server.
- No backend is needed.
- Clearing browser data can remove saved sessions and scores.
- Scores do not automatically transfer between browsers or computers.

---

## 📁 Project Structure

```text
gre_test/
  gre_practice/
    index.html              # Main webpage
    styles.css              # Application styling
    app.js                  # Tests, questions, scoring, sessions, and UI logic
    GRE_Prep_COVERAGE.md    # Notes about topic coverage
  basic_math/               # Additional study material
  verbal_reasoning/         # Additional verbal material
  reference/                # Local references used for topic analysis
```

---

## ⚠️ Important Notes

This is an independent study tool. It is **not** an official GRE product, is **not** affiliated with ETS, and should **not** be treated as an exact predictor of an official score.

The goal is to provide useful practice, explanations, structure, and confidence while keeping access free.

If you find an incorrect question, unclear explanation, typo, awkward wording, or a better way to teach something, improvements are welcome.

---

## 🌟 Final Idea

This project was made for students who are trying to move forward with limited time, limited money, and a test they may not even like but still need to face.

If it helps even one person practice more comfortably without paying for another expensive platform, then it is doing its job.
