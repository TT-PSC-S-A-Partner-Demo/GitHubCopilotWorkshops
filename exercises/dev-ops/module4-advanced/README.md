# Module 4: Advanced Features and Debugging with GitHub Copilot

## Introduction
This module explores advanced GitHub Copilot features that transform it from a code completion tool into a full-fledged AI assistant for DevOps engineers. You'll learn how to use Copilot Chat for code explanation and debugging, leverage agentic capabilities for complex workflows, and customize Copilot for your specific needs.

## Learning Objectives
- Master Copilot Chat commands for code explanation, testing, and debugging
- Understand how to use Copilot's agentic capabilities for complex DevOps workflows
- Customize Copilot with repository-specific instructions and prompt files
- Learn debugging techniques with Copilot assistance

## Prerequisites
- Completion of Modules 1-3
- Proficiency with GitHub Copilot basic features
- A complex project or codebase to practice with

## Exercises

### Beginner Level

#### Exercise 4.1: Copilot Chat Commands
1. Open an existing complex code file (e.g., a Terraform configuration or script)
2. Practice using these Copilot Chat commands:
   - `/explain` - Ask Copilot to explain what the code does
   - `/tests` - Generate test cases for the code
   - `/fix` - Identify and fix issues in the code
   - `/doc` - Generate documentation for the code

#### Exercise 4.2: Debugging with Copilot
1. Create a file with a deliberate bug (e.g., a script with logic errors)
2. Use Copilot Chat to:
   - Analyze the code for bugs
   - Explain why the bug occurs
   - Suggest a fix
3. Try debugging real errors you encounter in your code

### Intermediate Level

#### Exercise 4.3: Real-time Debugging Session
1. Set up a debugging session in VS Code for a Python or JavaScript application
2. While in debug mode, use Copilot Chat to:
   - Ask about variable values using the `#` symbol (e.g., "Why is #myVariable null?")
   - Request suggestions for fixes while the debugger is paused
   - Generate test cases that would reproduce the current state

#### Exercise 4.4: Repository-specific Instructions
1. Create a `.github/copilot-instructions.md` file in a repository
2. Write custom instructions that help Copilot understand:
   - Project structure and architecture
   - Coding standards and patterns
   - Common terminology and abbreviations
   - Testing requirements
   ```markdown
   # Copilot Instructions for [Project Name]
   
   ## Project Overview
   [Brief description of the project]
   
   ## Architecture
   [Description of key components and their relationships]
   
   ## Coding Standards
   - [Standard 1]
   - [Standard 2]
   
   ## Common Patterns
   [Describe patterns that should be followed]
   
   ## Testing Requirements
   [Explain how code should be tested]
   ```
3. Test how these instructions influence Copilot's suggestions

### Advanced Level

#### Exercise 4.5: Agentic DevOps
1. Set up a complex task that requires multiple steps, such as:
   - Analyzing application logs for errors
   - Identifying the cause of issues
   - Proposing fixes
   - Implementing the changes
   - Creating tests to verify the fix
2. Use Copilot Chat in agent mode to walk through the entire process
3. Observe how Copilot breaks down the problem and approaches each step

#### Exercise 4.6: Prompt Files for Reusable Workflows
1. Create `.prompt.md` files for common DevOps tasks:
   - Security vulnerability scanning
   - Performance optimization
   - Compliance checks
   - Disaster recovery testing
2. Structure these files with clear context and instructions
3. Use these prompt files as templates for consistent workflows

## Challenges

### Challenge 1: Incident Response Automation
Use Copilot to help you create an incident response system:
1. Develop scripts to detect and analyze common failure patterns
2. Create chatops commands for incident management
3. Implement automated recovery procedures
4. Generate post-incident analysis reports

### Challenge 2: Custom Copilot Instructions for Team Standards
Create a comprehensive set of Copilot instructions that encode your team's:
1. Architecture principles
2. Security requirements
3. Performance standards
4. Code quality expectations
5. Test this with various scenarios to ensure Copilot follows the guidance

### Challenge 3: Full-cycle Problem Solving
Identify a real production issue in your environment and use Copilot to:
1. Analyze logs and metrics to identify the root cause
2. Develop a fix
3. Create tests to verify the solution
4. Document the issue and solution
5. Implement monitoring to prevent recurrence

## Additional Resources
- [GitHub Copilot Chat Documentation](https://docs.github.com/en/copilot/github-copilot-chat/using-github-copilot-chat)
- [VS Code Debugging Documentation](https://code.visualstudio.com/docs/editor/debugging)
- [GitHub Repository Custom Instructions](https://docs.github.com/en/copilot/github-copilot-in-the-cli/using-github-copilot-in-the-cli#using-a-repository-custom-instructions-file)
- [DevOps Incident Response Best Practices](https://cloud.google.com/architecture/devops/devops-process-incident-management)
- [GitHub Copilot for Business Documentation](https://docs.github.com/en/enterprise-cloud@latest/copilot/overview-of-github-copilot-for-business)

## Reference Resources
- [maxmash1/copilot-workshop](https://github.com/maxmash1/copilot-workshop) - Includes practical projects for DevSecOps and CI/CD migration
- [microsoft/github-copilot-workshops-labs](https://github.com/microsoft/github-copilot-workshops-labs) - Official workshops and labs for GitHub Copilot
