# Module 3: Scripts and Automation with GitHub Copilot

## Introduction
This module focuses on using GitHub Copilot to enhance scripting and automation capabilities for DevOps engineers. You'll learn how to leverage Copilot to write, understand, and debug scripts in Bash, Python, and PowerShell for system administration, file management, API interactions, and more.

## Learning Objectives
- Create Bash scripts for system administration and complex command pipelines
- Develop Python scripts for task automation, API interactions, and file management
- Build PowerShell scripts for Windows environment automation
- Understand how to debug and improve scripts with Copilot assistance

## Prerequisites
- Completion of Modules 1 and 2
- Basic knowledge of at least one scripting language (Bash, Python, or PowerShell)
- Access to appropriate environments for testing scripts (Linux/Unix for Bash, Windows for PowerShell)

## Exercises

### Beginner Level

#### Exercise 3.1: Basic Bash Scripting
1. Create a file named `system_info.sh`
2. Use Copilot to write a script that gathers and displays:
   ```bash
   # Script to display system information:
   # - OS details and kernel version
   # - CPU information (model, cores, usage)
   # - Memory usage (total, used, free)
   # - Disk usage for all mounted filesystems
   ```
3. Create a `log_cleanup.sh` script:
   ```bash
   # Script to find and compress log files older than 7 days
   # then delete logs older than 30 days
   ```

#### Exercise 3.2: Simple Python Automation
1. Create a file named `file_organizer.py`
2. Use Copilot to write a script that:
   ```python
   # Python script to organize files in a directory based on their extension
   # Group files into folders named: Documents, Images, Videos, Music, Archives, Others
   ```
3. Create a script to monitor a directory for new files:
   ```python
   # Script to watch a directory and notify when new files are added
   # Log file creation events with timestamp
   ```

### Intermediate Level

#### Exercise 3.3: Advanced Bash Scripting
1. Create a file named `backup_script.sh`
2. Use Copilot to generate a script that:
   ```bash
   # Backup script that:
   # - Takes source and destination directories as parameters
   # - Creates incremental backups with date-stamped directories
   # - Uses rsync with appropriate flags for efficiency
   # - Compresses the backup
   # - Maintains a log of each backup operation
   # - Includes error handling and notifications
   ```
3. Enhance the script to include backup rotation (keeping last 7 daily, 4 weekly, and 3 monthly backups)

#### Exercise 3.4: Python API Interaction
1. Create a file named `github_stats.py`
2. Use Copilot to write a script that:
   ```python
   # Script to interact with GitHub API to:
   # - Fetch repository information for a given user or organization
   # - Calculate statistics (stars, forks, issues, etc.)
   # - Generate a report of most active repositories
   # - Include proper authentication and error handling
   ```
3. Extend the script to compare activity across multiple repositories or organizations

#### Exercise 3.5: PowerShell for Windows Administration
1. Create a file named `windows_admin.ps1`
2. Use Copilot to generate a script that:
   ```powershell
   # PowerShell script to:
   # - Check and report on Windows services status
   # - Restart specified services if they're not running
   # - Verify Windows updates status
   # - Clean up temporary files and old log files
   # - Generate a health report for the system
   ```
3. Add functionality to schedule this script as a recurring task

### Advanced Level

#### Exercise 3.6: Cross-Platform Monitoring Script
1. Create a file named `monitor.py`
2. Use Copilot to develop a comprehensive monitoring script that:
   ```python
   # Create a cross-platform monitoring script that:
   # - Collects system metrics (CPU, memory, disk, network)
   # - Monitors specific application processes
   # - Checks endpoint availability
   # - Stores historical data in a simple database
   # - Generates alerts based on thresholds
   # - Provides a simple web interface for viewing status
   ```
3. Include functionality to export metrics to common monitoring systems

#### Exercise 3.7: Bash Script for Container Health Checks
1. Create a file named `container_health.sh`
2. Use Copilot to write a script that:
   ```bash
   # Create a script that monitors Docker container health:
   # - Checks status of all running containers
   # - Validates that containers respond to health check endpoints
   # - Restarts unhealthy containers
   # - Collects and analyzes container logs for errors
   # - Sends notifications for persistent issues
   # - Maintains a dashboard of container status
   ```
3. Extend the script to include Kubernetes pod health monitoring

## Challenges

### Challenge 1: Multi-Environment Deployment Script
Create a script that can deploy an application across multiple environments (dev, staging, production):
1. Should handle different configuration for each environment
2. Include pre-deployment checks
3. Perform the deployment with proper error handling
4. Run post-deployment verification
5. Support rollback if verification fails

### Challenge 2: Log Analysis and Anomaly Detection
Create a script that:
1. Processes application logs from multiple sources
2. Identifies patterns and anomalies
3. Generates alerts for suspicious activity
4. Provides visualization of log trends

### Challenge 3: Infrastructure Automation Suite
Develop a collection of scripts that work together to:
1. Provision new development environments
2. Configure standardized tooling
3. Implement security policies
4. Provide self-service capabilities to developers

## Reference Repositories
- Bash: [microsoft/bash-for-beginners](https://github.com/microsoft/bash-for-beginners) - Basics of Bash scripting
- Bash: [denysdovhan/bash-handbook](https://github.com/denysdovhan/bash-handbook) - Comprehensive Bash learning resource
- Bash: [awesome-lists/awesome-bash](https://github.com/awesome-lists/awesome-bash) - Curated list of Bash resources
- Python: [practical-tutorials/project-based-learning](https://github.com/practical-tutorials/project-based-learning#python) - Project-based Python learning

## Additional Resources
- [Bash Scripting Cheat Sheet](https://devhints.io/bash)
- [Python Automation Documentation](https://docs.python.org/3/library/automation.html)
- [PowerShell Documentation](https://docs.microsoft.com/en-us/powershell/)
- [GitHub CLI Documentation](https://cli.github.com/manual/)
- [GitHub Copilot for CLI Documentation](https://docs.github.com/en/copilot/github-copilot-in-the-cli)
