# DevOps & Platform Engineering Roadmap 2025

> From sysadmin basics to cloud-native infrastructure - becoming a DevOps/Platform engineer

---

## DevOps Career Evolution

```
Career Progression
├── Junior DevOps Engineer
├── DevOps Engineer
├── Senior DevOps Engineer
├── Site Reliability Engineer (SRE)
├── Platform Engineer
├── Cloud Architect
├── DevSecOps Engineer
└── Principal/Staff Engineer
```

### The Modern Reality
- **DevOps** → Bridging dev and ops, automation focus
- **SRE** → Reliability, SLOs/SLAs, incident management
- **Platform Engineering** → Building internal developer platforms
- **DevSecOps** → Security integrated into pipeline

---

## Phase 1: Linux & OS Fundamentals (1-2 months)

### Linux Essentials
```
Linux Administration
├── Command line basics
├── File system navigation
├── File permissions & ownership
├── User management
├── Process management
├── Package management (apt, yum, dnf)
├── Service management (systemd)
├── Logs & journalctl
├── Shell scripting (bash)
└── Text processing (grep, sed, awk)
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Course | Linux Journey | https://linuxjourney.com |
| Course | Linux Upskill Challenge | https://linuxupskillchallenge.org |
| Practice | OverTheWire Bandit | https://overthewire.org/wargames/bandit/ |
| Book | The Linux Command Line | https://linuxcommand.org/tlcl.php |
| Practice | SadServers | https://sadservers.com |

### Shell Scripting
```
Bash Scripting
├── Variables & data types
├── Conditionals (if, case)
├── Loops (for, while)
├── Functions
├── Input/output redirection
├── Exit codes
├── Error handling
├── Script best practices
└── ShellCheck (linting)
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Tutorial | Bash Guide | https://mywiki.wooledge.org/BashGuide |
| Practice | Exercism Bash Track | https://exercism.org/tracks/bash |
| Tool | ShellCheck | https://www.shellcheck.net |

### Operating System Concepts
```
OS Fundamentals
├── Process management
├── Memory management
├── File systems
├── I/O operations
├── Networking stack
├── Virtualization basics
└── Resource limits (ulimit, cgroups)
```

---

## Phase 2: Networking (1-2 months)

### Networking Fundamentals
```
Core Networking
├── OSI model / TCP/IP
├── IP addressing & subnetting
├── DNS (how it works, dig, nslookup)
├── TCP vs UDP
├── HTTP/HTTPS
├── TLS/SSL certificates
├── Load balancing concepts
├── Firewalls & iptables/nftables
├── NAT & port forwarding
└── VPNs & tunneling
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Course | Networking Fundamentals | https://www.youtube.com/watch?v=qiQR5rTSshw |
| Book | Computer Networking: A Top-Down Approach | Textbook |
| Tool | Wireshark | https://www.wireshark.org |
| Practice | Packet Tracer | Cisco |

### Network Tools
```
Essential Tools
├── ping, traceroute
├── netstat, ss
├── curl, wget
├── dig, nslookup
├── tcpdump
├── nmap
├── iperf3
└── mtr
```

### DNS & Domain Management
```
DNS Operations
├── Record types (A, AAAA, CNAME, MX, TXT)
├── DNS propagation
├── Nameservers
├── DNS providers (Cloudflare, Route 53)
├── DNSSEC
└── Internal DNS
```

---

## Phase 3: Version Control & CI/CD (1-2 months)

### Git Mastery
```
Git Operations
├── Branching strategies (Git Flow, Trunk-based)
├── Merge vs rebase
├── Cherry-picking
├── Stashing
├── Tags & releases
├── Hooks (pre-commit, etc.)
├── Submodules & subtrees
├── Bisect (debugging)
└── Large file handling (Git LFS)
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Interactive | Learn Git Branching | https://learngitbranching.js.org |
| Book | Pro Git | https://git-scm.com/book |
| Practice | Oh My Git! | https://ohmygit.org |

### CI/CD Fundamentals
```
CI/CD Concepts
├── Continuous Integration
├── Continuous Delivery vs Deployment
├── Pipeline design
├── Build automation
├── Test automation
├── Artifact management
├── Deployment strategies
│   ├── Rolling deployment
│   ├── Blue-green deployment
│   ├── Canary releases
│   └── Feature flags
└── Rollback strategies
```

### CI/CD Tools
```
CI/CD Platforms
├── GitHub Actions (learn this first)
├── GitLab CI/CD
├── Jenkins (legacy but common)
├── CircleCI
├── ArgoCD (GitOps)
├── Flux (GitOps)
└── Dagger (portable pipelines)
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Docs | GitHub Actions | https://docs.github.com/en/actions |
| Docs | GitLab CI/CD | https://docs.gitlab.com/ee/ci/ |
| Course | CI/CD with GitHub Actions | https://docs.github.com/en/actions/learn-github-actions |
| Docs | ArgoCD | https://argo-cd.readthedocs.io |

### GitHub Actions Deep Dive
```
GitHub Actions
├── Workflow syntax
├── Jobs & steps
├── Actions marketplace
├── Secrets management
├── Matrix builds
├── Caching
├── Artifacts
├── Self-hosted runners
├── Reusable workflows
└── Composite actions
```

---

## Phase 4: Containers (2 months)

### Docker
```
Docker Fundamentals
├── Images vs containers
├── Dockerfile best practices
├── Multi-stage builds
├── Docker Compose
├── Volumes & bind mounts
├── Networking
├── Registry management
├── Image optimization
├── Security scanning
└── Docker alternatives (Podman)
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Docs | Docker Documentation | https://docs.docker.com |
| Course | Docker Deep Dive | https://www.pluralsight.com/courses/docker-deep-dive-update |
| Practice | Play with Docker | https://labs.play-with-docker.com |
| Best Practices | Dockerfile Best Practices | https://docs.docker.com/develop/develop-images/dockerfile_best-practices/ |

### Container Security
```
Container Security
├── Base image selection
├── Vulnerability scanning (Trivy, Snyk)
├── Non-root containers
├── Read-only filesystems
├── Resource limits
├── Network policies
├── Secrets management
└── Image signing
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Tool | Trivy | https://trivy.dev |
| Guide | OWASP Container Security | https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html |

---

## Phase 5: Container Orchestration (2-3 months)

### Kubernetes Fundamentals
```
Kubernetes Core Concepts
├── Architecture
│   ├── Control plane
│   ├── Worker nodes
│   ├── etcd
│   └── API server
├── Pods
├── Deployments
├── Services
├── ConfigMaps & Secrets
├── Namespaces
├── Labels & selectors
├── Resource requests & limits
└── kubectl commands
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Official | Kubernetes Docs | https://kubernetes.io/docs |
| Interactive | Kubernetes Tutorials | https://kubernetes.io/docs/tutorials/ |
| Course | KodeKloud | https://kodekloud.com |
| Practice | Killercoda | https://killercoda.com/playgrounds/scenario/kubernetes |
| Game | Kubernetes Challenge | https://github.com/dgkanatsios/CKAD-exercises |

### Kubernetes Advanced
```
Advanced Kubernetes
├── StatefulSets
├── DaemonSets
├── Jobs & CronJobs
├── Ingress & Ingress Controllers
├── Persistent Volumes & Claims
├── Storage Classes
├── RBAC (Role-Based Access Control)
├── Network Policies
├── Pod Security Standards
├── Horizontal Pod Autoscaler
├── Vertical Pod Autoscaler
├── Custom Resource Definitions (CRDs)
├── Operators
└── Helm charts
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Docs | Helm | https://helm.sh/docs |
| Course | CKA/CKAD Prep | Various providers |
| Practice | K8s Goat | https://madhuakula.com/kubernetes-goat/ |

### Kubernetes Tools
```
K8s Ecosystem
├── Helm (package manager)
├── Kustomize (configuration)
├── Lens / k9s (dashboard/CLI)
├── Telepresence (local dev)
├── Skaffold (dev workflow)
├── Krew (kubectl plugins)
├── kubectx/kubens
└── stern (log tailing)
```

### Managed Kubernetes
```
Managed K8s Services
├── EKS (AWS)
├── GKE (Google Cloud)
├── AKS (Azure)
├── DigitalOcean Kubernetes
└── Linode Kubernetes
```

---

## Phase 6: Cloud Platforms (2-3 months)

### Choose Your Primary Cloud
```
Cloud Providers (Learn 1 deeply)
├── AWS (most jobs)
├── Google Cloud (strong in ML/K8s)
├── Azure (enterprise)
└── Multi-cloud strategy
```

### AWS Core Services
```
AWS Essentials
├── Compute
│   ├── EC2
│   ├── ECS/Fargate
│   ├── Lambda
│   └── EKS
├── Storage
│   ├── S3
│   ├── EBS
│   └── EFS
├── Networking
│   ├── VPC
│   ├── Route 53
│   ├── CloudFront
│   ├── ALB/NLB
│   └── API Gateway
├── Database
│   ├── RDS
│   ├── DynamoDB
│   └── ElastiCache
├── Security
│   ├── IAM
│   ├── KMS
│   ├── Secrets Manager
│   └── Security Groups
└── Management
    ├── CloudWatch
    ├── CloudFormation
    └── Systems Manager
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Course | AWS Cloud Practitioner | https://aws.amazon.com/training/learn-about/cloud-practitioner/ |
| Course | AWS Solutions Architect | https://aws.amazon.com/certification/certified-solutions-architect-associate/ |
| Practice | AWS Free Tier | https://aws.amazon.com/free/ |
| Course | Adrian Cantrill's Courses | https://learn.cantrill.io |
| Practice | CloudGuru Labs | https://acloudguru.com |

### Google Cloud Core Services
```
GCP Essentials
├── Compute Engine
├── GKE (Kubernetes)
├── Cloud Run (serverless containers)
├── Cloud Functions
├── Cloud Storage
├── Cloud SQL
├── BigQuery
├── Pub/Sub
├── IAM
└── Cloud Build
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Course | Google Cloud Skills Boost | https://www.cloudskillsboost.google |
| Docs | GCP Documentation | https://cloud.google.com/docs |

---

## Phase 7: Infrastructure as Code (2 months)

### Terraform
```
Terraform Fundamentals
├── HCL (HashiCorp Configuration Language)
├── Providers
├── Resources
├── Data sources
├── Variables & outputs
├── State management
├── Remote backends
├── Modules
├── Workspaces
├── Import existing infrastructure
└── Terraform Cloud/Enterprise
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Official | Terraform Docs | https://developer.hashicorp.com/terraform/docs |
| Course | HashiCorp Learn | https://developer.hashicorp.com/terraform/tutorials |
| Practice | Terraform Exercises | https://github.com/hashicorp/learn-terraform-provision-eks-cluster |
| Tool | tflint | https://github.com/terraform-linters/tflint |

### Alternative IaC Tools
```
IaC Options
├── Pulumi (programming languages)
├── CloudFormation (AWS native)
├── Crossplane (K8s native)
├── CDK (AWS Cloud Development Kit)
├── CDKTF (Terraform with programming languages)
└── OpenTofu (Terraform fork)
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Docs | Pulumi | https://www.pulumi.com/docs/ |
| Docs | AWS CDK | https://docs.aws.amazon.com/cdk/ |

### Configuration Management
```
Configuration Tools
├── Ansible (most popular)
│   ├── Playbooks
│   ├── Roles
│   ├── Inventory
│   └── Galaxy
├── Salt
├── Chef
└── Puppet
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Docs | Ansible | https://docs.ansible.com |
| Course | Ansible for DevOps | https://www.ansiblefordevops.com |

---

## Phase 8: Observability (2 months)

### The Three Pillars
```
Observability Stack
├── Logs
│   ├── ELK Stack (Elasticsearch, Logstash, Kibana)
│   ├── Loki + Grafana
│   ├── CloudWatch Logs
│   └── Datadog Logs
├── Metrics
│   ├── Prometheus
│   ├── Grafana
│   ├── CloudWatch Metrics
│   └── Datadog Metrics
└── Traces
    ├── Jaeger
    ├── Zipkin
    ├── AWS X-Ray
    └── Datadog APM
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Docs | Prometheus | https://prometheus.io/docs |
| Docs | Grafana | https://grafana.com/docs |
| Docs | OpenTelemetry | https://opentelemetry.io/docs |

### Prometheus & Grafana
```
Monitoring Stack
├── Prometheus
│   ├── PromQL
│   ├── Alertmanager
│   ├── Service discovery
│   ├── Exporters
│   └── Recording rules
├── Grafana
│   ├── Dashboards
│   ├── Panels
│   ├── Variables
│   ├── Alerts
│   └── Data sources
└── Grafana Loki (logs)
```

### OpenTelemetry
```
OpenTelemetry (OTel)
├── Traces
├── Metrics
├── Logs
├── SDK instrumentation
├── Collector
├── Exporters
└── Vendor integrations
```

### SLOs, SLIs, SLAs
```
Reliability Engineering
├── Service Level Indicators (SLIs)
├── Service Level Objectives (SLOs)
├── Service Level Agreements (SLAs)
├── Error budgets
├── Burn rate alerts
└── SLO-based alerting
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Book | Site Reliability Engineering | https://sre.google/sre-book/table-of-contents/ |
| Book | The Site Reliability Workbook | https://sre.google/workbook/table-of-contents/ |

---

## Phase 9: Security (Ongoing)

### DevSecOps Practices
```
Security Integration
├── Shift-left security
├── SAST (Static Application Security Testing)
├── DAST (Dynamic Application Security Testing)
├── SCA (Software Composition Analysis)
├── Secret scanning
├── Container scanning
├── Infrastructure scanning
├── Compliance as code
└── Security policies (OPA, Kyverno)
```

### Security Tools
```
Security Tooling
├── Code scanning: Snyk, SonarQube, Semgrep
├── Container scanning: Trivy, Aqua
├── IaC scanning: Checkov, tfsec
├── Secret detection: GitLeaks, TruffleHog
├── Policy: OPA, Kyverno
├── Vault: HashiCorp Vault
└── Compliance: Cloud Custodian
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Tool | Trivy | https://trivy.dev |
| Tool | Snyk | https://snyk.io |
| Docs | HashiCorp Vault | https://developer.hashicorp.com/vault |
| Tool | Checkov | https://www.checkov.io |

### Secrets Management
```
Secrets Solutions
├── HashiCorp Vault
├── AWS Secrets Manager
├── Google Secret Manager
├── Azure Key Vault
├── Kubernetes Secrets
├── External Secrets Operator
└── SOPS (encrypted files)
```

---

## Phase 10: Platform Engineering (Advanced)

### Internal Developer Platforms
```
Platform Engineering
├── Developer experience (DevEx)
├── Self-service platforms
├── Golden paths
├── Platform APIs
├── Service catalogs
├── Backstage (Spotify)
├── Internal tooling
└── Platform teams
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Docs | Backstage | https://backstage.io/docs |
| Resource | Platform Engineering | https://platformengineering.org |
| Community | CNCF Platforms WG | https://tag-app-delivery.cncf.io/wgs/platforms/ |

### Service Mesh
```
Service Mesh Technologies
├── Istio
├── Linkerd
├── Cilium
├── Consul Connect
├── Traffic management
├── Security (mTLS)
├── Observability
└── Policy enforcement
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Docs | Istio | https://istio.io/latest/docs/ |
| Docs | Linkerd | https://linkerd.io/docs/ |

### GitOps
```
GitOps Principles
├── Git as source of truth
├── Declarative infrastructure
├── Automated sync
├── ArgoCD
├── Flux
├── Pull-based deployments
└── Drift detection
```

---

## DevOps Project Ideas

### Beginner Projects
- [ ] Automated deployment pipeline with GitHub Actions
- [ ] Docker Compose multi-container app
- [ ] Terraform deployment of basic AWS infrastructure
- [ ] Ansible playbook for server configuration

### Intermediate Projects
- [ ] Kubernetes deployment with Helm
- [ ] Complete CI/CD pipeline with testing
- [ ] Multi-environment infrastructure with Terraform
- [ ] Prometheus/Grafana monitoring stack
- [ ] Log aggregation with Loki

### Advanced Projects
- [ ] GitOps setup with ArgoCD
- [ ] Service mesh implementation
- [ ] Internal developer platform (mini-Backstage)
- [ ] Disaster recovery automation
- [ ] Multi-cluster Kubernetes setup
- [ ] Security pipeline integration

---

## Certifications Worth Pursuing

### Cloud Certifications
| Certification | Provider | Value |
|--------------|----------|-------|
| AWS Solutions Architect Associate | AWS | High |
| AWS DevOps Professional | AWS | High |
| CKA (Kubernetes Admin) | CNCF | Very High |
| CKAD (Kubernetes Developer) | CNCF | High |
| CKS (Kubernetes Security) | CNCF | High |
| Terraform Associate | HashiCorp | Medium |
| Google Cloud Professional DevOps | Google | High |

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Prep | KodeKloud | https://kodekloud.com |
| Prep | A Cloud Guru | https://acloudguru.com |
| Prep | Udemy CKA/CKAD Courses | Mumshad Mannambeth |

---

## Learning Path Timeline

```
Month 1-2:    Linux & networking fundamentals
Month 3:      Git & CI/CD basics
Month 4-5:    Docker & containers
Month 6-7:    Kubernetes
Month 8-9:    Cloud platform (AWS/GCP)
Month 10-11:  Infrastructure as Code
Month 12:     Observability & monitoring
Ongoing:      Security, platform engineering, specialization
```

---

## Essential Tools Summary

### Daily Tools
| Tool | Purpose |
|------|---------|
| Terminal | iTerm2, Warp, Alacritty |
| Editor | VS Code, Neovim |
| k9s | Kubernetes CLI UI |
| Lens | Kubernetes IDE |
| lazygit | Git TUI |
| lazydocker | Docker TUI |

### Infrastructure
| Tool | Purpose |
|------|---------|
| Terraform | IaC |
| Ansible | Configuration management |
| kubectl | Kubernetes CLI |
| helm | K8s package manager |
| aws/gcloud/az | Cloud CLIs |

### Monitoring
| Tool | Purpose |
|------|---------|
| Prometheus | Metrics |
| Grafana | Visualization |
| Loki | Logs |
| Jaeger | Tracing |

---

## Newsletters & Communities

| Resource | Link |
|----------|------|
| DevOps Weekly | https://devopsweekly.com |
| SRE Weekly | https://sreweekly.com |
| TLDR DevOps | https://tldr.tech/devops |
| KubeWeekly | https://www.cncf.io/kubeweekly/ |
| Reddit: r/devops | https://reddit.com/r/devops |
| Reddit: r/kubernetes | https://reddit.com/r/kubernetes |
| CNCF Slack | https://slack.cncf.io |

---

## YouTube Channels

- **TechWorld with Nana** - DevOps tutorials
- **KodeKloud** - Kubernetes & cloud
- **That DevOps Guy** - Real-world scenarios
- **DevOps Toolkit** - Viktor Farcic
- **Fireship** - Quick overviews
- **NetworkChuck** - Networking & cloud
- **Jeff Geerling** - Ansible & homelab

---

## Key DevOps Principles

1. **Automate everything** - If you do it twice, automate it
2. **Infrastructure as Code** - Version control your infrastructure
3. **Shift left** - Find problems earlier in the pipeline
4. **Measure everything** - You can't improve what you don't measure
5. **Embrace failure** - Build resilient systems that fail gracefully
6. **Security is everyone's job** - Integrate security early
7. **Document** - Your future self will thank you
8. **Keep learning** - The landscape changes constantly

---

## The DevOps Career Reality

### What Makes You Valuable
```
High-Value Skills
├── Problem-solving under pressure
├── Understanding entire system (not just tools)
├── Communication with dev teams
├── Cost optimization awareness
├── Security mindset
├── Incident management
└── Teaching others
```

### Career Tips
1. **Build a homelab** - Practice with real infrastructure
2. **Contribute to open source** - Visibility and learning
3. **Blog your learnings** - Builds reputation
4. **Get certified** - Opens doors (but skills matter more)
5. **Specialize** - Be T-shaped (broad + deep in one area)

---

*Last updated: January 2025*
