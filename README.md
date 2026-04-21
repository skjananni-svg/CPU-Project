#  Smart CPU Job Scheduling System with ML Prediction

##  Overview

This project is a web-based simulation of a *Smart CPU Job Scheduling System* that enhances the traditional Shortest Job First (SJF) algorithm using a lightweight Machine Learning approach.

Instead of relying on manually provided burst times, the system *predicts burst time dynamically* using a pre-trained linear regression model. This makes the scheduling process more realistic and intelligent.



##  Objective

* Simulate CPU scheduling in an interactive way
* Improve traditional SJF by eliminating manual burst time dependency
* Introduce a simple ML-based prediction mechanism
* Reduce waiting time and improve scheduling efficiency



##  Key Concept

### 🔹Traditional SJF

In standard SJF scheduling:

* The process with the *smallest burst time* is selected first
* Requires *exact burst time input*, which is not practical in real systems



###  Proposed Smart SJF (ML-Based)

This system predicts burst time using a *linear regression model*:

predictedBurst = 0.381 × arrival_mod + 1.115 × priority + 0.468 × past_burst

Where:

* arrival_mod → Arrival time % 10
* priority → User-defined priority (1–10)
* past_burst → Average of previous burst times

This allows the system to:

* Estimate execution time
* Perform scheduling without exact prior knowledge
* Adapt dynamically



##  How It Works

1. User inputs:

   * Arrival Time
   * Priority
   * Past Burst

2. System computes:

   * Predicted Burst Time using the ML formula

3. Scheduling:

   * Processes are sorted using *predicted burst time (SJF)*

4. Execution:

   * Processes are executed in sorted order
   * Waiting Time and Turnaround Time are calculated

5. Output:

   * Gantt Chart (execution order)
   * Performance metrics



##  Features

*  Smart SJF Scheduling using predicted burst time
*  Lightweight ML model (no training required)
* Interactive user input
* Gantt Chart visualization
* Waiting Time & Turnaround Time calculation
*  CSV dataset integration for testing
* Comparison with traditional scheduling (optional)



##  Dataset

The project uses a dataset (burst_dataset.csv) with the following structure:

| arrival_mod | priority | past_burst | burst |
| ----------- | -------- | ---------- | ----- |
| 1           | 5        | 10         | 12    |
| 3           | 2        | 5          | 7     |

This dataset is used to:

* Validate prediction accuracy
* Compare predicted vs actual burst times



##  Technologies Used

* HTML
* CSS
* JavaScript
* PapaParse (for CSV parsing)
* Chart libraries (for visualization)



##  Why This is Smart

* Eliminates need for exact burst time
* Uses data-driven prediction
* Prevents inefficiencies in scheduling
* Demonstrates real-world applicability of ML in OS concepts



##  Explanation (For Presentation)

> This project enhances the traditional SJF scheduling algorithm by integrating a lightweight machine learning model that predicts burst time based on process attributes. This makes scheduling more adaptive, efficient, and closer to real-world CPU behavior.



##  Future Enhancements

* Integrate advanced ML models (e.g., neural networks)
* Use TensorFlow.js for real-time training
* Add more scheduling algorithms (Round Robin, Priority Scheduling)
* Improve prediction accuracy with larger datasets



##  Conclusion

This project demonstrates how *Operating System concepts can be combined with Machine Learning* to build smarter and more efficient systems. It provides a practical and interactive way to understand CPU scheduling with modern enhancements.
