# Module 2: Infrastructure as Code with GitHub Copilot

## Introduction
This module focuses on leveraging GitHub Copilot to accelerate Infrastructure as Code (IaC) development. You'll learn how to use Copilot to generate, understand, and modify configurations for popular IaC tools including Terraform, Ansible, Kubernetes, and Docker.

## Learning Objectives
- Generate and modify Terraform configurations with Copilot assistance
- Create Ansible playbooks for configuration management
- Develop Kubernetes manifests for container orchestration
- Build Dockerfiles for application containerization

## Prerequisites
- Completion of Module 1
- Basic understanding of Infrastructure as Code concepts
- Familiarity with at least one IaC tool (Terraform, Ansible, Kubernetes, or Docker)
- Local environment with relevant tools installed (optional, but recommended)

## Exercises

### Beginner Level

#### Exercise 2.1: Terraform Basics with Copilot
1. Create a new file named `main.tf`
2. Use Copilot to generate a basic AWS EC2 instance resource:
   - Type a comment: `# Create an AWS EC2 instance with t2.micro instance type`
   - Accept Copilot's suggestion
3. Add a comment to create an S3 bucket: `# Create an S3 bucket with versioning enabled`
4. Use Copilot to add AWS provider configuration: `# Configure AWS provider for us-east-1 region`

#### Exercise 2.2: Simple Ansible Playbook
1. Create a new file named `webserver.yml`
2. Type a comment: `# Ansible playbook to install and configure Nginx on Ubuntu servers`
3. Let Copilot generate a basic playbook structure
4. Add another task: `# Add task to copy a custom index.html file`
5. Expand with: `# Add handlers to restart Nginx when configuration changes`

### Intermediate Level

#### Exercise 2.3: Kubernetes Manifests
1. Create a file named `deployment.yaml`
2. Use Copilot to generate a Deployment for a web application:
   ```yaml
   # Create a Kubernetes Deployment for a web application with:
   # - 3 replicas
   # - container image: nginx:latest
   # - resource limits: 512Mi RAM, 0.5 CPU
   # - resource requests: 256Mi RAM, 0.2 CPU
   # - readiness and liveness probes
   ```
3. Create a `service.yaml` file for exposing the deployment:
   ```yaml
   # Create a Kubernetes Service to expose the web application:
   # - Type: LoadBalancer
   # - Port: 80
   # - Target Port: 8080
   ```
4. Create an `ingress.yaml` file with TLS configuration

#### Exercise 2.4: Multi-Stage Dockerfile
1. Create a file named `Dockerfile`
2. Use Copilot to generate a multi-stage Dockerfile for a Node.js application:
   ```dockerfile
   # Create a multi-stage Dockerfile for a Node.js application
   # - Use node:18-alpine as the build stage
   # - Use node:18-alpine-slim for the production stage
   # - Include best security practices
   # - Optimize for caching and image size
   ```
3. Modify the Dockerfile to add environment variables and healthcheck

### Advanced Level

#### Exercise 2.5: Terraform Modules
1. Create a directory structure for a Terraform module:
   ```
   modules/
   └── vpc/
       ├── main.tf
       ├── variables.tf
       ├── outputs.tf
       └── README.md
   ```
2. In `variables.tf`, use Copilot to define variables for a flexible VPC configuration
3. In `main.tf`, generate a complete AWS VPC with:
   - Multiple subnets across availability zones
   - Route tables
   - Internet Gateway
   - NAT Gateways
   - Security Groups
4. In `outputs.tf`, define useful outputs for the module
5. Use Copilot to generate documentation in the README.md file

#### Exercise 2.6: Complex Ansible Role
1. Create an Ansible role structure:
   ```
   roles/
   └── web_application/
       ├── defaults/
       │   └── main.yml
       ├── handlers/
       │   └── main.yml
       ├── tasks/
       │   └── main.yml
       ├── templates/
       │   └── app.conf.j2
       └── vars/
           └── main.yml
   ```
2. Use Copilot to generate a complete role for deploying a web application with:
   - Dynamic configuration via templates
   - Environment-specific variables
   - Proper handlers for service management
   - Conditional execution based on OS family

## Challenges

### Challenge 1: Infrastructure for Microservices
Use Copilot to help you design a complete infrastructure for a microservices application:
1. Create Terraform configuration for the underlying cloud resources
2. Develop Kubernetes manifests for all services
3. Set up proper networking, monitoring, and security
4. Include infrastructure for CI/CD

### Challenge 2: Configuration Drift Detection
Create a script with Copilot's help that can:
1. Detect configuration drift in your infrastructure
2. Generate reports of differences
3. Provide recommendations for remediation

### Challenge 3: IaC Security Analysis
Use Copilot to:
1. Review your IaC files for security issues
2. Recommend improvements based on best practices
3. Implement automated security checks

## Reference Repositories
- Terraform: [corymhall/example-terraform-project](https://github.com/corymhall/example-terraform-project) - Example of Terraform repository structure and modules
- Ansible: [rahulwagh/ansible-examples](https://github.com/rahulwagh/ansible-examples) - Various examples of Ansible playbooks
- Kubernetes: [kubernetes/examples](https://github.com/kubernetes/examples) - Examples of Kubernetes manifests and patterns

## Additional Resources
- [Terraform Best Practices](https://www.terraform-best-practices.com/)
- [Ansible Documentation](https://docs.ansible.com/)
- [Kubernetes Documentation](https://kubernetes.io/docs/home/)
- [Docker Documentation](https://docs.docker.com/)
- [GitHub Copilot for IaC Development](https://github.blog/2023-10-09-github-copilot-in-the-cli-is-now-generally-available/)
