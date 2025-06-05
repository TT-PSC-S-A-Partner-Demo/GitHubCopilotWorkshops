# Module 1: Basics of GitHub Copilot

## Introduction
This module introduces GitHub Copilot as a powerful AI assistant for DevOps engineers. You'll learn how to set up GitHub Copilot, understand its basic functionality, and start using it to accelerate your everyday tasks.

## Learning Objectives
- Install and configure GitHub Copilot and Copilot Chat
- Understand how to effectively prompt Copilot for better results
- Learn to use Copilot in different contexts (editor, terminal)
- Get familiar with basic Copilot features and limitations

## Prerequisites
- GitHub account with Copilot subscription
- Visual Studio Code
- GitHub CLI installed on your machine

## Exercises

### Beginner Level

#### Exercise 1.1: Installation and Setup
1. Install GitHub Copilot extension in Visual Studio Code:
   - Open VS Code and navigate to Extensions (Ctrl+Shift+X)
   - Search for "GitHub Copilot" and install
   - Sign in with your GitHub account

2. Install GitHub Copilot Chat:
   - Search for "GitHub Copilot Chat" in the Extensions marketplace
   - Install and verify it's working

3. Setup GitHub Copilot CLI:
   - Install GitHub CLI if not already installed
   - Run: `gh extension install github/gh-copilot`
   - Verify with: `gh copilot --help`

#### Exercise 1.2: First Steps with Copilot
1. Create a new file called `hello.sh`
2. Type a comment: `# Script to print hello world and current date`
3. Observe Copilot's suggestion and accept it with Tab
4. Try modifying the comment to be more specific: `# Script to print hello world, current date, and username`
5. Compare the differences in Copilot's suggestions

### Intermediate Level

#### Exercise 1.3: Working with Copilot Chat
1. Open Copilot Chat panel in VS Code (Ctrl+Shift+I)
2. Try the following prompts and observe the responses:
   - "How can I check disk usage in Linux?"
   - "What's the difference between `apt` and `apt-get`?"
   - "Explain how Docker containers differ from virtual machines"

#### Exercise 1.4: Using Copilot in the Terminal
1. Open a terminal in VS Code
2. Use the following command to get explanations:
   ```
   gh copilot explain "find . -type f -name '*.log' -mtime +30 -exec rm {} \;"
   ```
3. Try getting suggestions for commands:
   ```
   gh copilot suggest "How to find the largest files in a directory"
   ```
4. Practice with at least 3 more command explanations and suggestions relevant to DevOps tasks

### Advanced Level

#### Exercise 1.5: Prompt Engineering
1. Create a file called `complex_prompt.md`
2. Experiment with different prompt formulations to generate a Docker Compose file for a web application with a database:
   - Start with a simple prompt: "Docker compose for web app with database"
   - Try a more detailed prompt: "Docker compose for a Node.js application with MongoDB, including volumes for data persistence and environment variables for configuration"
   - Add specific requirements: "Docker compose for a Node.js application with MongoDB, expose port 3000, add healthchecks, restart policies, and named volumes"
3. Compare the results and note how prompt specificity affects output quality

#### Exercise 1.6: Understanding Copilot's Limitations
1. Try prompting Copilot for information about very recent technologies or updates
2. Attempt to generate code for complex security configurations
3. Document cases where Copilot's suggestions need significant modifications
4. Reflect on the ethical considerations of using AI-generated code in production environments

## Challenges

### Challenge 1: Copilot Configuration File
Create a VS Code settings file that optimizes GitHub Copilot for DevOps work. Include settings for auto-suggestions, code completion, and any other relevant preferences.

### Challenge 2: Compare with Manual Coding
1. Choose a simple task (e.g., creating a script to backup files)
2. Implement it twice:
   - First manually without Copilot
   - Then with Copilot's assistance
3. Compare the time taken, code quality, and your experience

## Additional Resources
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [VS Code Copilot Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- [GitHub Copilot for CLI](https://docs.github.com/en/copilot/github-copilot-in-the-cli)
- [Microsoft Learn: Introduction to GitHub Copilot](https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/)
