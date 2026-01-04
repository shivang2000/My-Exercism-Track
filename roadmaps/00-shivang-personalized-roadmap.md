# Shivang's Personalized Tech Roadmap 2025

> From Mid-Level Frontend Engineer → Senior/Staff Full-Stack Engineer

---

## Your Current Profile

```
Shivang Chheda - ~3 Years Experience
├── Role: Frontend / Full-Stack Engineer
├── Companies: Trestle, Zania (AI), FactWise (SaaS), Wow Rooms
├── Location: Remote India → US Startups
└── Target: Senior/Staff Engineer or AI-Focused Full Stack
```

### Skills You Already Have (Skip These Basics)

| Category | Your Level | Evidence |
|----------|------------|----------|
| **React** | ✅ Advanced | Data-heavy dashboards, performance optimization, Redux architecture |
| **TypeScript** | ✅ Strong | Production usage across all roles |
| **Next.js** | ✅ Intermediate | Listed skill, likely used at Zania/Trestle |
| **Node.js/Express** | ✅ Intermediate | Built backend services at Wow Rooms |
| **Go** | ✅ Beginner-Intermediate | High-performance search API |
| **Performance Optimization** | ✅ Strong | Explicit focus on re-renders, latency |
| **Component Architecture** | ✅ Strong | Atomic components, minimal props |
| **Mentoring** | ✅ Yes | Mentored 2-3 interns/juniors |
| **Remote/US Teams** | ✅ Yes | All recent roles |

### Gaps to Address

| Gap | Priority | Why It Matters |
|-----|----------|----------------|
| **Database/SQL** | 🔴 High | Not mentioned - critical for full-stack |
| **System Design** | 🔴 High | Required for Senior+ roles |
| **Testing** | 🔴 High | Not mentioned - expected at senior level |
| **DevOps Basics** | 🟡 Medium | CI/CD, Docker at minimum |
| **AI Integration** | 🟡 Medium | You worked on AI platform but likely as consumer |
| **Cloud (AWS/GCP)** | 🟡 Medium | Expected for full-stack senior |

---

## Recommended Career Paths

### Path A: Staff Frontend Engineer (Specialist)
```
You → Senior Frontend → Staff Frontend → Principal Frontend
Focus: Deep React expertise, performance, design systems, architecture
Timeline: 2-3 years to Staff
```

### Path B: Senior Full-Stack Engineer (Generalist)
```
You → Senior Full-Stack → Staff Full-Stack → Tech Lead
Focus: Backend depth, databases, system design, end-to-end ownership
Timeline: 1-2 years to Senior Full-Stack
```

### Path C: AI-Focused Full-Stack Engineer (Emerging)
```
You → AI Product Engineer → Senior AI Engineer
Focus: LLM integration, RAG systems, AI-native products
Timeline: 1 year to differentiate
```

**My Recommendation**: **Path B with elements of Path C** - You have good frontend depth. Adding backend/infra depth + AI integration skills will make you rare and valuable.

---

## Phase 1: Fill Critical Gaps (Next 3 Months)

### 1.1 Database & SQL (HIGH PRIORITY)
*You likely interact with data but don't design schemas*

```
What to Learn
├── PostgreSQL fundamentals
├── SQL queries (complex joins, CTEs, window functions)
├── Database design & normalization
├── Indexing & query optimization
├── Prisma ORM (if not already)
└── Connection pooling concepts
```

#### Resources
| Type | Resource | Time |
|------|----------|------|
| Interactive | [SQLBolt](https://sqlbolt.com) | 1 week |
| Course | [PostgreSQL Tutorial](https://www.postgresqltutorial.com) | 2 weeks |
| Practice | [LeetCode SQL](https://leetcode.com/problemset/database/) | Ongoing |
| ORM | [Prisma Docs](https://www.prisma.io/docs) | 1 week |

#### Project Idea
Build a dashboard with proper data modeling - maybe rebuild a simplified FactWise BOM system with proper PostgreSQL schema design.

---

### 1.2 Testing (HIGH PRIORITY)
*Senior engineers are expected to write tests*

```
Testing Stack for You
├── Vitest (unit tests - faster than Jest)
├── React Testing Library (component tests)
├── Playwright (E2E tests)
├── MSW (API mocking)
└── Test-driven development mindset
```

#### Resources
| Type | Resource | Time |
|------|----------|------|
| Course | [Testing JavaScript](https://testingjavascript.com) - Kent C. Dodds | 2 weeks |
| Docs | [Vitest](https://vitest.dev) | 3 days |
| Docs | [Playwright](https://playwright.dev) | 1 week |
| Practice | Add tests to a side project | Ongoing |

#### Action Item
Go back to one of your projects and add:
- [ ] Unit tests for utility functions
- [ ] Component tests for critical UI
- [ ] E2E test for main user flow

---

### 1.3 System Design Fundamentals (HIGH PRIORITY)
*This is THE skill that separates Senior from Mid-level*

```
System Design for Full-Stack
├── API design patterns
├── Database schema design
├── Caching strategies (Redis)
├── Message queues basics
├── Load balancing concepts
├── Microservices vs Monolith trade-offs
├── Rate limiting
└── Authentication architecture
```

#### Resources
| Type | Resource | Time |
|------|----------|------|
| Course | [System Design Primer](https://github.com/donnemartin/system-design-primer) | 4 weeks |
| YouTube | [ByteByteGo](https://www.youtube.com/@ByteByteGo) | Ongoing |
| Book | [Designing Data-Intensive Applications](https://dataintensive.net) | 2 months (read alongside) |
| Practice | Design systems you've built before (BOM, search API) | Ongoing |

#### Practice Exercise
Design these systems (whiteboard/paper):
- [ ] Design the FactWise BOM system from scratch
- [ ] Design a hotel booking search system (like Wow Rooms)
- [ ] Design an AI compliance platform (like Zania)

---

## Phase 2: Deepen Backend & Infra (Months 4-6)

### 2.1 Go Deeper (Build on Your Strength)
*You built a high-performance search API - go deeper*

```
Go Advanced Topics
├── Concurrency patterns (goroutines, channels)
├── Error handling best practices
├── Testing in Go
├── Building REST/gRPC APIs
├── Database access (sqlx, pgx)
└── Performance profiling
```

#### Resources
| Type | Resource | Time |
|------|----------|------|
| Book | [Learn Go with Tests](https://quii.gitbook.io/learn-go-with-tests) | 3 weeks |
| Book | [100 Go Mistakes](https://100go.co) | 2 weeks |
| Practice | [Exercism Go Track](https://exercism.org/tracks/go) | Ongoing |

#### Project Idea
Build a complete backend service in Go:
- REST API with proper error handling
- PostgreSQL integration
- Redis caching
- Unit & integration tests
- Docker deployment

---

### 2.2 DevOps Essentials (Just Enough)
*You don't need to be a DevOps engineer, but need the basics*

```
DevOps for Full-Stack Engineers
├── Docker (containerization)
├── Docker Compose (local dev)
├── GitHub Actions (CI/CD)
├── Basic AWS/Vercel deployment
├── Environment management
└── Monitoring basics (Sentry already likely)
```

#### Resources
| Type | Resource | Time |
|------|----------|------|
| Docs | [Docker Getting Started](https://docs.docker.com/get-started/) | 1 week |
| Docs | [GitHub Actions](https://docs.github.com/en/actions) | 1 week |
| Practice | Dockerize one of your projects | 1 week |

#### Action Items
- [ ] Dockerize a full-stack project
- [ ] Set up CI/CD pipeline with tests
- [ ] Deploy to Vercel/Railway with proper env management

---

### 2.3 Cloud Basics (AWS Focus)
*Most US startups use AWS*

```
AWS Essentials (Not Full DevOps)
├── S3 (file storage)
├── RDS (managed PostgreSQL)
├── Lambda (serverless functions)
├── CloudFront (CDN)
├── IAM basics
└── EC2 basics (understanding, not daily use)
```

#### Resources
| Type | Resource | Time |
|------|----------|------|
| Course | [AWS Cloud Practitioner](https://aws.amazon.com/training/learn-about/cloud-practitioner/) | 2 weeks |
| Practice | AWS Free Tier | Ongoing |

---

## Phase 3: AI Integration Skills (Months 7-9)

*You worked at Zania on AI compliance - now understand HOW it works*

### 3.1 LLM Integration
```
AI Engineering for Product Developers
├── OpenAI/Anthropic API usage
├── Prompt engineering
├── Streaming responses
├── Function calling / Tool use
├── Token management & costs
└── Error handling for AI
```

#### Resources
| Type | Resource | Time |
|------|----------|------|
| Docs | [OpenAI API](https://platform.openai.com/docs) | 1 week |
| Docs | [Vercel AI SDK](https://sdk.vercel.ai/docs) | 1 week |
| Course | [DeepLearning.AI Prompt Engineering](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) | 2 days |

---

### 3.2 RAG Systems
```
RAG (Retrieval Augmented Generation)
├── Vector databases (Pinecone, pgvector)
├── Embedding models
├── Document chunking strategies
├── Retrieval strategies
├── LangChain basics
└── Evaluation methods
```

#### Resources
| Type | Resource | Time |
|------|----------|------|
| Course | [LangChain Course](https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/) | 1 week |
| Docs | [LlamaIndex](https://docs.llamaindex.ai) | 1 week |
| Practice | Build a RAG chatbot for your own docs | 2 weeks |

#### Project Idea
Build an AI-powered documentation assistant:
- Index your own code/docs
- RAG-based Q&A
- Nice React frontend
- Shows your AI + Full-Stack skills

---

## Phase 4: Senior Engineer Skills (Months 10-12)

### 4.1 Technical Leadership
```
Staff-Level Skills
├── RFC/Design doc writing
├── Architecture decision records (ADRs)
├── Technical roadmap planning
├── Cross-team collaboration
├── Mentoring formalization
└── Code review excellence
```

#### Resources
| Type | Resource | Link |
|------|----------|------|
| Book | Staff Engineer by Will Larson | https://staffeng.com/book |
| Newsletter | Pragmatic Engineer | https://newsletter.pragmaticengineer.com |
| Article | [Writing Technical Design Docs](https://www.industrialempathy.com/posts/design-docs-at-google/) | Google |

---

### 4.2 Open Source & Visibility
```
Building Reputation
├── Contribute to tools you use (React, Next.js, etc.)
├── Write technical blog posts
├── Share learnings on Twitter/LinkedIn
├── Create useful open source tools
└── Speak at meetups (remote okay)
```

#### Action Items
- [ ] Write 1 blog post per month about something you learned
- [ ] Make 1 meaningful open source contribution
- [ ] Share your BOM/dashboard architecture learnings

---

## Personalized Project Roadmap

### Project 1: Full-Stack SaaS with Proper Architecture
*Demonstrate end-to-end ownership*

```
Tech Stack
├── Frontend: Next.js 14+, TypeScript, TailwindCSS, shadcn/ui
├── Backend: Next.js API routes OR separate Go service
├── Database: PostgreSQL + Prisma
├── Auth: NextAuth.js or Clerk
├── Testing: Vitest + Playwright
├── Deployment: Vercel + Railway (for Go)
└── Monitoring: Sentry
```

**Idea**: Build a simplified "Bill of Materials" SaaS
- You have domain knowledge from FactWise
- Recursive data structures (show your strength)
- Complex UI with good performance
- Full backend with proper schema

---

### Project 2: AI-Powered Tool
*Combine your AI platform experience with building skills*

```
Build an AI Compliance Helper (like mini Zania)
├── Upload documents (PDF, etc.)
├── RAG-based Q&A about compliance
├── Checklist generator
├── React frontend with streaming responses
├── Go or Node.js backend
└── Vector database for embeddings
```

---

### Project 3: High-Performance API in Go
*Double down on your Go strength*

```
Build a Search/Analytics API
├── Go with Gin or Echo
├── PostgreSQL with proper indexing
├── Redis caching layer
├── Rate limiting
├── Full test coverage
├── Docker deployment
└── Benchmark and document performance
```

---

## Skills Checklist

### Must Have for Senior Full-Stack (Your Focus)
- [x] React (Advanced)
- [x] TypeScript (Advanced)
- [x] Next.js (Intermediate)
- [x] Node.js (Intermediate)
- [x] Go (Beginner)
- [ ] PostgreSQL & SQL (Learning)
- [ ] System Design (Learning)
- [ ] Testing (Add this!)
- [ ] Docker basics (Add this!)
- [ ] CI/CD (Add this!)

### Nice to Have (Differentiators)
- [ ] AI/LLM Integration
- [ ] RAG Systems
- [ ] AWS basics
- [ ] Redis caching
- [ ] Technical writing

---

## 90-Day Action Plan

### Month 1: Database & Testing
```
Week 1-2: SQLBolt + PostgreSQL basics
Week 3-4: Testing (Vitest, RTL, Playwright)
Outcome: Can design schemas, write tests confidently
```

### Month 2: System Design & DevOps
```
Week 1-2: System Design Primer (read + practice)
Week 3: Docker + Docker Compose
Week 4: GitHub Actions CI/CD
Outcome: Can design systems, deploy with confidence
```

### Month 3: AI Integration & Project
```
Week 1-2: LLM APIs + Prompt Engineering
Week 3-4: Build AI-powered project
Outcome: Portfolio piece showing full-stack + AI skills
```

---

## Interview Prep Focus

### For Senior Full-Stack Roles
```
What You'll Be Asked
├── System design (design X system)
├── React deep dive (performance, hooks, patterns)
├── TypeScript advanced (generics, utility types)
├── Database design (schema, queries)
├── API design (REST best practices)
├── Testing strategy
├── Behavioral (leadership, conflict, mentoring)
└── Live coding (React + some algorithm)
```

### Your Unique Selling Points
1. **Performance expertise** - Data-heavy dashboards, re-render optimization
2. **Complex data structures** - Recursive BOM experience
3. **US startup experience** - Know the culture, async work
4. **AI platform experience** - Worked on AI product (Zania)
5. **Go + Node** - Rare combination, can choose right tool
6. **Mentoring** - Already have leadership experience

---

## Resources Tailored for You

### Newsletters
| Newsletter | Why |
|------------|-----|
| [This Week in React](https://thisweekinreact.com) | Stay current on React |
| [Bytes.dev](https://bytes.dev) | Fun JS/TS updates |
| [Pragmatic Engineer](https://newsletter.pragmaticengineer.com) | Senior/Staff career growth |
| [ByteByteGo](https://blog.bytebytego.com) | System design |

### YouTube
| Channel | Focus |
|---------|-------|
| **Theo (t3.gg)** | Modern web dev, strong opinions |
| **Jack Herrington** | React patterns, advanced |
| **Matt Pocock** | TypeScript mastery |
| **ByteByteGo** | System design visuals |

### Books (Priority Order)
1. **Designing Data-Intensive Applications** - System design bible
2. **Staff Engineer** - Career growth
3. **100 Go Mistakes** - Level up Go
4. **Testing JavaScript** (online course) - Fill the testing gap

---

## Timeline Summary

```
Current State: Mid-Level Frontend Engineer (strong React/TS)

Month 1-3:   Fill gaps (DB, Testing, System Design basics)
Month 4-6:   Deepen backend (Go, DevOps basics, Cloud)
Month 7-9:   AI integration skills + portfolio project
Month 10-12: Leadership skills, open source, visibility

Target State: Senior Full-Stack Engineer with AI expertise
             Ready for Staff-track conversations
```

---

## Key Metrics to Track

- [ ] Can design a database schema from scratch
- [ ] Can write comprehensive tests (unit, integration, E2E)
- [ ] Can explain system design for past projects
- [ ] Have 1 full-stack project with proper architecture
- [ ] Have 1 AI-integrated project
- [ ] Written 3+ technical blog posts
- [ ] Made 1+ open source contribution

---

**Remember**: You're not starting from zero. You have strong foundations. This roadmap fills gaps and accelerates you to Senior/Staff level. Focus on depth over breadth now.

---

*Personalized for Shivang Chheda | January 2025*
