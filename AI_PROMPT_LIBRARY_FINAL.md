# AI Prompt Library for Project Development
*A curated set of high-leverage prompts to accelerate project development from strategy to implementation.*

---

> **How to Use This Library**: Copy the prompt text and paste it into your AI assistant. Replace any placeholder text (indicated with [brackets]) with your specific details.

---

## Table of Contents

### Strategic Planning
- [Tech Stack Selection](#tech-stack-selection)
- [Product Vision & Strategy](#product-vision--strategy)
- [Audience & Needs Analysis](#audience--needs-analysis)
- [Jobs To Be Done Framework](#jobs-to-be-done-framework)
- [User Story Mapping](#user-story-mapping)
- [User Story Creation](#user-story-creation)
- [Phased Roadmap Development](#phased-roadmap-development)
- [Information Architecture](#information-architecture)
- [Lean Canvas Development](#lean-canvas-development)
- [PR-FAQ Creation](#pr-faq-creation)
- [Design System Establishment](#design-system-establishment)

### Technical Setup
- [GitHub Repository Configuration](#github-repository-configuration)
- [Hosting & Deployment Setup](#hosting--deployment-setup)

### Development Workflow
- [Architecture Planning](#architecture-planning)
- [Feature Implementation](#feature-implementation)
- [Testing Strategy](#testing-strategy)

### Startup Acceleration
- [Brand Logo Creation](#brand-logo-creation)
- [Responsive Navigation Structure](#responsive-navigation-structure)
- [Brand Style System](#brand-style-system)

---

# Strategic Planning

## Tech Stack Selection

**Prompt Name:** CTO Tech Stack Advisor  

**Purpose:** Helps you select the optimal tech stack for your specific project needs, balancing technical considerations with business requirements. 

**When to Use:** At the beginning of a project when you need to make foundational technology decisions.

**Prompt:**
```text
Act as an experienced CTO advising me on selecting the ideal tech stack for my project. I need comprehensive guidance that considers all critical factors.

First, ask me a series of targeted questions about:
- The nature and purpose of my application 
- My target platforms (web, mobile, desktop) 
- Expected user base and scaling requirements 
- My team's current technical expertise 
- Timeline and budget constraints 
- Long-term maintenance considerations 
- Any specific technical requirements or preferences 

After gathering this information, provide a structured recommendation that includes:

1. Frontend technology options with pros/cons for my specific case 
2. Backend technology options with pros/cons for my specific case 
3. Database recommendations based on my data structure and access patterns
4. Infrastructure and hosting considerations
5. Model Context Protocol tools and configuration (if applicable)
6. Development tools and workflow suggestions 
8. Potential technical challenges and mitigation strategies 
9. Trade-offs between different approaches (development speed vs. performance, etc.) 
10. Cost implications (both initial development and ongoing maintenance)

For each recommendation, explain WHY it's suitable for my specific needs rather than just listing technologies. If it's not suitable, explain why and suggest alternative options.

Finally, provide a concise summary of your top recommendation as a cohesive stack, explaining how the components work together and why they are the best fit for my specific needs.
```

**Example Usage:** When starting a new project and needing to decide between technologies like React vs. Flutter, Node.js vs. Django, SQL vs. NoSQL, etc.

**Expected Output:** A personalized tech stack recommendation based on your specific project requirements, with clear explanations of the trade-offs and reasoning behind each choice.

---

## Product Vision & Strategy

**Prompt Name:** Product Vision Architect  

**Purpose:** Helps you articulate a clear, compelling vision and strategy for your product that aligns with business goals and user needs.

**When to Use:** When initiating a new product or pivoting an existing one.

**Prompt:**
```text
Help me define a clear, compelling vision and strategy for my product. Guide me through a structured process that will help me articulate my thoughts clearly and ensure that the vision and strategy are aligned with my specific needs and constraints.

First, ask about:
- The core problem my product aims to solve
- The target market and key user segments
- My initial hypotheses about user needs
- Competitive landscape and market positioning
- Business model and revenue strategy
- Available resources and constraints
- Timeline and key milestones


Based on my responses, help me formulate:

1. A concise product vision statement (1-2 sentences that capture the essence and purpose)
2. A set of core product principles that will help guide decision-making 
3. Key value propositions that differentiate my product
4. Strategic objectives with mensurable success metrics
5. High-level feature categories aligned with strategic objectives
6. Potential risks and mitigation strategies
7. A narrative that connects user needs to product capabilities

For each component, provide examples and templates to help me articulate my thoughts clearly.
Challenge any assumptions or inconsistencies in my thinking, and help me refine my ideas into a cohesive strategy.

The final output should be structured as a comprehensive product strategy document that I can share with stakeholders to align everyone around a common vision.
```

**Example Usage:** When defining the strategic direction for a new product or major feature initiative.

**Expected Output:** A comprehensive product vision and strategy document that articulates what you're building, why it matters, and how you'll approach it.

---

## Audience & Needs Analysis Prompt

**Prompt Name:** User Needs Explorer

**Purpose:** Helps you identify and understand your target audience segments and their specific needs, pain points, and motivations.

**When to Use:** Early in product planning when defining who you're building for and what problems you're solving.

**Prompt:**
```text
Help me conduct a thorough analysis of my target audience and their needs. Guide me through a structured process to identify specific user segments, their pain points, and how my product can address them.

First, ask me about:
- The general market or domain my product serves
- Any initial hypotheses I have about potential user segments
- Problems I believe exists in this space
- Competitive or alternative solutions users currently employ
- Any user research or data I already have

Then, help me:

1. Define 3-5 distinct user segments with demographic and psychographic characteristics.
2. For each segment, identify:
   - Their current challenges and pain points (prioritized by severity and frequency)
   - Their goals and desired outcomes
   - Their surreal workaround or alternative solutions
   - Keym motivations and decision factors
   - Potential objections or adoption barries

3. Create provisional user personas for the primary segments, including:
   - Background and context
   - Needs hierarchy
   - A day-in-the-life scenario
   - Key quotes or sentiments
   - Influence on purchasing decisions

4. Map how mt product concept could address each segment's specific needs
5. Identify gaps where additional research is needed
6. Suggest methods for validating these audience insights

Challenge my assumnptions throughout this process and help me identify potential blind spots in my understanding of users. The output should be a comprehensive audience analysis that can inform product decisions.
```

**Example Usage:** When defining who your product serves and what specific problems it solves for them.

**Expected Output:** A detailed analysis of your target audience segments, their needs, and how your product addresses them.

---

## Jobs To Be Done Framework Prompt

**Prompt Name:** JTBD Framework Facilitator

**Purpose:** Helps you apply the Jobs to be Done (JTBD) framework to understand the functional, emotional, and social jobs your users are trying to accomplish.

**When to Use:** When you want to deeply understand user motivations beyond surface-level feature requests.

**Prompt:**
```text
Help me apply the Jobs to be Done (JTBD) framework to understand the core motivations driving my users. Guide me through identifying and classifying the functional, emotional, and social jobs that my product helps users accomplish.

First, ask me about:
- My product's purpose and target audience
- The context in which users would use my product
- The alternatives or competitors in this space
- Any insights I already have about user motivations

Then, helpme identify and classify:

1. Functional Jobs:
   - What practical tasks are users trying to accomplish?
   - What functional problems are they trying to solve?
   - What utility are they seeking?
   - How do they measure success for these tasks?

2. Emotional Jobs:
   - How do users want to feel when using the product?
   - What negative emotions are they trying to avoid?
   - What positive emotions are they seeking?
   - What gives them confidence or peace of mind?

3. Social Jobs:
   - How do users want to be perceived by others?
   - What social connections or status are they seeking?
   - What relationships are they trying to build or maintain?
   - How does this product affect their social identity?


For each job category, help me formulate clear JTBD statement in the format:
"When [situation], I want to [motivation], so I can [expected outcome]."

Then, guide me to:
- Prioritize these jobs based on importance to users
- Identify which jobs are currently underserved in the market
- Connect these jobs to potential product features and capabilities
- Determine how to measure succes in fullfilling these jobs

Challenge me to think beyong features and focus on the progress users are trying to make in their lives.
```

**Example Usage:** When you want to understand the deeper motivation behind user behavior to informs product decisions.

**Expected Output:** A comprehensive analysis of the functional, emotional, and social jobs your product helps users accomplish, formatted as clear JTBD statements.

---

## User Story Mapping

**Prompt Name:** User Journey Mapper

**Purpose:** Helps you create a strutured user story map that organizes user activities, tasks, and stories into a coherent narrative flow.

**When to Use:** When a planning product features and creating a development backlog that maintains focus on the user journey.

**Prompt:**
```text
Help me create a comprehensive user story map for my product. Guide me through the process of identifying user activities, breaking them down into tasks, and organizing them into a coherent journey.

First, ask me about:
- The primary user personas for my product
- The main goals these users are trying to achieve
- The overall scope and boundaries of the product

Then, help me build the story map by:

1. Identifying the major user activities (the backbone):
   - What are the key phases of the user journey?
   - What are the primary activities users perform to achieve their goals?
   - How do these activities flow in sequence?

2. Breaking down each activity into specific tasks:
   - What steps do users take to complete each activity?
   - What are the essential vs. optional tasks?
   - How do these tasks connect to create a complete workflow?

3. For each task, help me identify:
   - What the user is trying to accomplish
   - What information they need
   - What decisions they need to make
   - What output or result they expect

4. Organizing the map horizontally (narrative flow) and vertically (priority):
   - Arrange activities in chronological order from left to right
   - Prioritize tasks from top (must-have) to bottom (nice-to-have)

5. Identifying natural release slices across the story map:
   - What's the minimum viable product that delivers end-to-end user value?
   - What are logical feature increments for subsequent releases?
   - How can we ensure each release provides complete user value?

Throughout this procces, challlenge me to maintain focus on user goals rathen than implementation details. The final output should be a structured story map that can guide product development priorities while maintaining focus on the complete user experience.
```

**Example Usage:** When planning product features and creating a development roadmap that maintains focus on the user journey. 

**Expected Output:** A structured user story map that organizes user activities, tasks, and stories into a coherent narrative flow with clear prioritization and release planning.

---

## User Story Creation Prompt

**Prompt Name:** User Story Craftman

**Purpose:** Helps you create well-formed user stories at various levels of granularity, from epics to detailed implementation stories.

**When to Use:** When translating user needs into actionable development items for your backlog.

**Prompt:**
```text
Help me craft clear, effective user stories for my product backlog. Guide me through creating a hierarchy of stories from epics down to implementation-ready stories.

First, ask me about:
- The specific feature or capability we're focusing on
- The user personas involved
- The user goals and jobs to be done
- Key constraints or requirements to consider

Then, help me create:

1. Epic-level stories:
   - Broad user capabilities that might span multiple features
   - Format: "As a [persona], I want [capability], so that [benefit]"
   - Include success criteria and business value

2. Feature-level stories:
   - More specific capabilities that deliver distinct user value
   - Format: "As a [persona], I want [feature], so that [benefit]"
   - Include acceptance criteria and dependencies

3. Implementation-ready stories:
   - Granular stories that can be completed in a single sprint
   - Format: "As a [persona], I want [specific functionality], so that [specific benefit]"
   - Include detailed acceptance criteria using Given/When/Then format
   - Add technical notes, UI/UX considerations, and testing requirements

For each story level, help me ensure that it's:
- Independent (can be developed separately from other stories)
- Negotiable (leaves room for discussion)
- Valuable (delivers user on business benefit)
- Estimable (has enough detail to size)
- Small (approriate for its level in the hierarchy)
- Testable (has clear acceptance criteria)

Also guide me in:
- Breaking down larger stories into smaller ones when needed
- Identifying non-functional requirements as separate stories
- Creating technical stories that support user-facing functionality
- Prioritizing sotries based on value and dependencies

The output should be a well-structured set of a user stories that clearly communicate user needs at different levels of detail.
```

**Example Usage:** When creating a product backlog or planning a specific feature implementation.

**Expected Output:** A hierarchical set of well-formed user stories from epics to implementation-ready stories, with clear acceptance criteria and prioritization.

---

## Phased Roadmap Development Prompt

**Prompt Name:** Lean Roadmap Strategist

**Purpose:** Helps you establish a clear, phased product roadmap with defined milestones, success metrics, and prioritized deliverables following lean methodology.

**When to Use:** When planning the strategic evolution of your product over time and need to balance vision with practical execution.

**Prompt:**
```text
Help me establish a clear, phased roadmap for my product following lean methodology principles. Guide me through defining milestone outcomes, success metrics, prioritized deliverables that focus on learning and validation.

First, ask me about:
- My product vision and core value proposition
- The current state of my product (concept, MVP, established)
- Key hypotheses I need to validate
- Available resources and constraints
- Target timeline horizon (3 months, 6 months, 1 year+)
- Key business objectives and success criteria

1. Defining clear milestone outcomes:
   - What specific hypotheses will each milestone validate?
   - What user/business value will each milestone deliver?
   - How does each milestone build toward the larger vision?
   - What learning objectives are associated with each milestone?

2. Establishing success metrics for each milestone:
   - What quantitative metrics will indicate success?
   - What qualitative feedbackwill we seek?
   - What minimum thresholds must be met to proceed?
   - How will be collect and measure these metrics?

3. Prioritizing deliverables for each milestone:
   - What is the minimum scope needed to validate our hypotheses?
   - How can we batch user stories and technical tasks into coherent releases?
   - What dependencies exist between deliverables?
   - How should we balance new features vs. improvements to existing ones?

4. Incorporating supporting activities:
   - What marketing activities are needed to support each milestone?
   - What sales, customer success, or operational preparations are required?
   - What technical infrastruture or foundation work is necessary?
   - What user research should be conducted before/during/after each milestone?

5. Building in feedback loops and pivot points:
   - When and how will we evaluate progress against our metrics?
   - What criteria would trigger a pivot or change in direction?
   - How will we incorporate learning into subsequent milestones?

Throughout this process, challenge me to:
- Focus on outcomes rather than outputs
- Minimize scope to what's truly necessary for learning
- Consider both discovery (learning) and delivery (building) activities
- Balance short-term wins with long-term strategic objectives

The final output should be a flexible roadmap organized into clear phases, with defined outcomes, metrics, and prioritized deliverables for each phase.
```

**Example Usage:** When planning the strategic evolution of your product over time and need to balance vision with practical execution.

**Expected Output:** A comprehensive, phased roadmap with clear milestones, success metrics, and prioritized deliverables that follows lean methodology principles.

---

## Information Architecture Prompt

**Prompt Name:** Information Architecture Designer

**Purpose:** Helps you establish a clear, intuitive information architecturefor your website application or product that organizes content in a user-friendly way.

**When to Use:** When planning the structure and organization of content and functionality for a new product or redesigning an existing one.

**Prompt:**
```text
Help me establish a comprehensive information architecture for my (website/application/product).
Guide me through creating an intuitive structure that organizes content and funcitonality in a way that makes sense to users.

First, ask me about:
- The purpose and goals of my (website/application/product)
- My target audience and their primary tasks
- The types or content and functionality I need to include
- Any existing content structure (if redesigning)
- Key user flows and journeys
- Any specific organizational challenges I'm facing

Them help me develop:

1. Content inventory and audit (if applicable):
   - Categories of content to include
   - Content prioritization framework
   - Content dependencies and relationships
   - Content ownership and responsibility
   - Content that can be achived or removed

2. Site/aaplication structure:
   - Primary navigation categories
   - Secondary navigation organization
   - Hierarchical relationships between sections
   - Naming conventions for sections and pages

3. User flow mapping:
   - Key tasktask flows through the architecture
   - Entry points and exit points
   - Decision points and alternative paths
   - Potential friction points and solutions

4. Information organization principles:
   - Taxonomies and categorization systems
   - Tagging and metadata strategies
   - Search functionality requirements
   - Filter and sort capabilities

5. Visualization of the architecture:
   - Sitemap representation
   - Content model diagrams
   - User flow diagrams
   - Navigation models


Throughout this process, challenge me to:
- Focus on user needs rather than internal organization
- Use clear, user-centered language
- Create intuitive paths to high-value content
- Balance comprehensiveness with simplicity
- Consider future growth and content expansion

The output should be a comprehensive information architecture plan that I can use to guide the design and development while ensuring users easily find what they need.
```

**Example Usage:** When planning how to organize content and functionality for a new website or application.

**Expected Output:** A comprehensive information architecture plan that I can use to guide the design and development while ensuring users easily find what they need.

---

## Lean Canvas Development

**Prompt Name:** Lean Canvas Coach

**Purpose:** Helps founders and product teams rapidly develop a comprehensive Lean Canvas that captures the essences of their business model in a structured format.

**When to Use:** When starting a new venture or pivoting an existing one and need to clarify your business model fundamentals.

**Prompt:**
```text
Act as an experienced business coach helping me develop a comprehensive Lean Canvas for my startup or product idea. Guide me through each section with targeted questions and provide constructive feedback to strengthen my business model.

First, ask me for a brief overview of my business concept to establish context.

Then, systematically walk me through each section of the Lean Canvas in this order:

1. Problem:
   - What are the top 1-3 problems your target customers face?
   - What existing alternatives do they use to solve these problems?
   - What are current solutions inadequate?

2. Customer Segments:
   - Who are your target customers or users?
   - Who are your early adopters?
   - What characteristics define these segments?

3. Unique Value Proposition:
   - What is your single, clear, compelling message that states why you're different and worth paying attention to?
   - How does this connect to your customer's problems?
   - What makes your approach different from competitors/alternatives?

4. Solution:
   - What are the top features or capabilities that address each problem?
   - How do these solutions map to the problems identified?
   - What is the minimum viable solution?

5. Channels:
   - How will you reach your customers?
   - Which channels will be most effective for acquisition and retention?
   - How do these channels align with customer behaviors?

6. Revenue Streams:
   - How will you make money?
   - What is your pricing model?
   - What is the lifetime value of a customer?
   - What are your margins?

7. Cost Structure:
   - What are your fixed and variable costs?
   - What are the key resources you need to pay for?
   - What are your cost drivers?

8. Key Metrics:
   - What key activies will you measure?
   - What are the key indicators of success?
   - Which metrics will help you make decisions?

9. Unfair Advantage:
   - What can't be easily copied or bought?
   - What makes your business defensible?
   - What unique advantages do you have?

For each section:
- Challenge my assumptions and help me refine my thinking
- Provide examples relevant to my industry or business model
- Suggest ways to validate the most critical assumptions
- Highlight potential inconsistencies between sections

After completing all sections, help me identify:
- The riskiest assumptions that need validation first
- Potential experiemnts to test these assumptions
- How the different elements of the canvas connect and support each other

The output should be a comprehensive Lean Canvas that captures my business model in a clear, concise format, along with next steps for validation and refinement.
```

**Example Usage:** When starting a new feature or pivoting an existing one and need to clarify your business model fundamentals.

**Expected Output:** A complete Lean Canvas with well-articulated sections, identified assumptions, and validation strategies.

---

## PR-FAQ Creation

**Prompt Name:** PR-FAQ Architect

**Purpose:** Helps you create a compelling Press Release and FAQ document that clearly articulates your product vision, value proposition, and addresses potential questions from both internal and external stakeholders.

**When to Use:** When defining a new product or major feature to align stakeholders around a shared vision of the end result before development begins.

**Prompt:**
```text
Help me create a comprehensive PR-FAQ document for my product or feature following Amazon's "working backwards" methodology. Guide me through crafting both a compelling press release that communicates the customer value and a detailed FAQ that addresses stakeholder questions.

First, ask me about:
- The product or feature I'm developing
- The target customers and their pain points
- The key benefits and value proposition
- The timeline for launch
- Any specific concerns or challenges

Then, help me craft:

1. Press Release section including:
   - Attention-grabbing headline that focuses on customer benefit
   - Subheading that expands on the headline with additional context
   - Opening paragraph exploring the product, target customer, and market
   - Problem statement paragraph describing the customer pain point
   - Solution paragraph explaining how the product solves the problem
   - Quote from company leadership focusing on vision and strategy
   - Quote from a hypothetical customer describing their experience
   - Call to action and availability information
   - Boilerplate company description

2. FAQ section addressing:
   - Internal questions:
      * Why are we building this?
      * How does this align with out strategy?
      * What were the alternatives we considered?
      * What are the technical challenges?
      * What are the success metrics?
      * What is the rollout strategy?
      * What resources are required?

   - External questions:
      * How is this different from competitors?
      * What does it cost?
      * How do I get started?
      * What platforms/devices are supported?
      * How does it integrate with existing solutions?
      * What about security/privacy?
      * What support is available?

Throughout this process, challenge me to:
- Focus relentlessly on customer value
- Be specific and avoid vague marketing language
- Address difficult questions honestly
- Maintain a consistent voice and narrative
- Think through implications and edge cases

The output should be a polished PR-FAQ document that could theoretically be published (for the PR) and that thoroughly adresses stakeholder concerns (for the FAQ).
```

**Example Usage:** When defining a new product or major feature to align stakeholders around a shared vision before development begins.

**Expected Output:** A complete PR-FAQ document with compelling press release and comprehensive FAQ sections for both internal and external stakeholders.

---

## Design System Establishment Prompt

**Prompt Name:** Design System Architect

**Purpose:** Helps you establish a comprehensive design systems for your product that ensures visual consistency, improves development efficiency, and enhances user experience.

**When to Use:** When starting a new product or standardizing the design of an existing one to ensure consistency across all interfaces.

**Prompt:**
```text
Help me establish a comprehensive design system for my product. Guide me through creating a living design framework that ensures consistency, improves development efficiency, and enhances user experience.

First, ask me about:
- My product type and target platforms
- Brand personality and values
- Design inspirations and references I admire
- Existing design elements (if any)
- Team structure and workflow
- Technical constraints or preferences
- Specific areas where consistency is lacking

Then, help me develop:

1. Design principles and philosophy:
   - Core principles that guide design decisions
   - Brand personality traits and how they translate to UI
   - Design values and priorities
   - Design system documentation template

2. Core visual elements:
   - Color palette (primary, secondary, accent, neutral, semantic colors)
   - Typography system (fonts, sizes, weights, line heights)
   - Spacing and layout system (grid, margins, paddings)
   - Iconography style and guidelines
   - Imagery and illustration principles
   - Motion and animation guidelines

3. Component library structure:
   - Atomic design organization (atoms, molecules, organisms, templates, pages)
   - Component naming conventions and hierarchy
   - Component variants and states
   - Responsive behavior guidelines
   - Accessibility considerations for each component
   - Component documentation template

4. Pattern library:
   - Common UI patterns and when to use them
   - Navigation patterns
   - Form patterns
   - Data visualization patterns
   - Loading and error states
   - Feedback and notifications
   - Data entry and validation
   - Table and list patterns
   - Modal and dialog patterns
   - Tooltip and popover patterns
   - Carousel and slider patterns
   - Accordion and collapsible patterns
   - Tabs and pill navigation

5. Implementation guidelines:
   - Technical approach (CSS framework, component library, etc.)
   - Documentation standards
   - Version control and change management
   - Integration with development workflow
   - Measuring adoption and compliance

Throughout this process, encourage me to:
- Share specific examples of designs I admire
- Consider how the system will evolve over time
- Balance consistency with flexibility
- Consider both designer and developer experience
- Prioritize accessibility from the beginning

The output should be a structured plan for my design system, including specific recommendations for tools, processes, and governance to ensure its successful implementation and adoption.
```

**Example Usage:** When establishing visual and interaction standards for a new product or standardizing an existing one.

**Expected Output:** A comprehensive design system plan with visual elements, component specifications, and implementation guidelines tailored to your product needs.

---

# Technical Setup

## GitHub Repository Configuration

**Prompt Name:** Github Setup Specialist

**Purpose:** Helps you properly configure a GitHub repository for your project with best practices for collaboration, automation, and project management.

**When to Use:** When setting up a new project repository or improving the configuration of an existing one.

**Prompt:**
```text
Help me configure a GitHub repository following best practices for my project. Guide me through setting up not just the basic repository, but all the supporting elements that make for an efficient development workflow.

First, ask me about:
- The natrue of my project (language, framework, team size, etc.)
- My development workflow preferences
- CI/CD requirements
- Collaboration and review processes
- Any specific GitHub features I'm interested in

Then, help me configure:

1. Repository basics:
   - README.md structure and content
   - License selection and file
   - .gitignore appropriate for my tech stack
   - CONTRIBUTING.md guidelines
   - Issue and PR templates

2. Branch protection rules:
   - Main/master branch protection
   - Required reviews and approvals
   - Status check requirements
   - Merge strategy recommendations

3. GitHub Actions workflows:
   - CI pipeline for testing and valdiation
   - Automated dependency updates
   - Deployment workflows if applicable
   - Code quality checks (linting, static analysis)

4. Project management:
   - Issue labels and categorization
   - Project board setup
   - Milestone configuration and management
   - Release management process

5. Repository settings:
   - Security settings and vulnerability alerts
   - Access control and team permissions
   - Webhook configurations if needed
   - GitHub Pages if applicable

6. Required GitHub settings: protections, required checks, reviews
7. Onboarding checklist for new contributors

For each configuration area, provide specific code snippets, file contents, or step-by-step instructions. Explain the rationale behind each recommendation so I understand the benefits.

The output should be a comprehensive Github repository setup plan that I can implement immediately.
```

**Example Usage:** When setting up a new project repository or improving the configuration ofan existing one.
**Expected Output:** A detailed plan for configuring your GitHub with specific file contents, workflow configurations and settings recommendations.

---

## Hosting & Deployment Setup

**Prompt Name:** Hosting & Deployment Setup Specialist

**Purpose:** Helps you select and configure the appropriate hosting solution (like Netlify, Vercel, AWS, GCP, Azure, etc.) for your project, including CI/CD pipelines and environment management.

**When to Use:** When setting up hosting infrastructure for a new project or improving an existing deployment process.

**Prompt:**
```text
Help me set up a robust hosting and deployment infrastructure for my project. Guide me through selecting the appropriate hosting platform and configuring CI/CD pipelines, environments, and deployment workflows.

First, ask me about:
- My project type (static site, SPA, full-stack application, etc.)
- Expected traffic and scaling needs
- Budget constraints
- Performance requirements
- Security considerations
- Development workflow preferences
- Any specific hosting platforms I'm considering (Netlify, Vercel, AWS, GCP, Azure, etc.)

Then, help me:
1. Select the optimal hosting platform:
   - Compare options based on my specific reuqirements
   - Explain pros/cons of each relevant option
   - Recommend the best fit with justifications

2. Configure the selected platform:
   - Account setup and team access
   - Domain configuration and SSL
   - Environment variables management
   - Build settings and commands
   - Performance optimizations

3. Set up CI/CD pipelines:
   - Automated build and testing
   - Preview deployments for pull requests
   - Production deployment workflow
   - Rollback procedures

4. Establish environment management:
   - Development, staging, and production environments
   - Environment-specific configurations
   - Promotion process between environments
   - Database and backend service connections

5. Implement monitoring and maintenance:
   - Uptime and performance monitoring
   - Error tracking and alerting
   - Analytics integration
   - Regular maintenance procedures

For each step, provide specific commands, configuration files, or step-by-step instructions that I can follow. Include screenshots or diagrams where helpful.

The final output should be a comprehensive deployment setup plan tailored to my specific project needs.
```

**Example Usage:** When setting up hosting infrastructure for a new project or improving an existing deployment process.
**Expected Output:** A detailed plan for selecting and configuring your hosting platform, including specific configuration files, CI/CD workflows, and environment management strategies.

---

# Development Workflow

## Architecture Planning

**Prompt Name:** System Architecture Designer

**Purpose:** Helps you design a clean, scalable architecture for your application that follows best practices and accomodates your specific requirements.

**When to Use:** When planning the overall structure of your application before implementation begins.

**Prompt:**
```text
Help me design a clean, scalable architecture for my application. Guide me through creating a comprehensive architecture plan that follows best practices for my specific tech stack and requirements.

First, ask me about:
- My application type and purpose
- The selected tech stack
- Expected scale and performance needs
- Key technical requirements and constraints
- Team size and expertise
- Future expansion plans

Then, help me design:
1. Overall architectural pattern:
   - Recommend appropriate patterns (MVC, MVVM, Clean Architecture, etc.)
   - Explain the benefits for my specific case
   - Diagram the high-level architecture
   
2. Module/component breakdown:
   - Identify major modules and their responsibilities
   - Define boundaries and interfaces between modules
   - Establish naming conventions and organization

3. Data flow and state management:
   - Design data flow through the system
   - Recommend state management approaches
   - Define data models and schemas

4. API design (if applicable):
   - Define endpoints and their purpose
   - Specify request/response formats
   - REST/GraphQL endpoint structure
   - Describe error handling, status codes, and validation
   - Recommend authentication and authorization mechanisms
   - Documentation strategy

5. Infraestructure considerations:
   - Database design and access patterns
   - Caching strategy
   - Scaling approach (vertical vs. horizontal)
   - Cloud service integration
   - Containerization and orchestration
   - CI/CD pipeline configuration
   - Secret management
   - Environment variables
   - Performance optimization
   - Cost and scalability considerations

6. Cross-cutting concerns:
   - Logging and monitoring (metrics, alerts, dashboards)
   - Error handling and recovery (timeouts, retries, fallback)
   - Security measures and compliance (authN/authZ, data protection)
   - Performance optimization (caching, CDN, compression)
   - Documentation and knowledge transfer (API docs, developer guides)
   - Testing and quality assurance (unit tests, integration tests, end-to-end tests)
   - Deployment and release management (feature flags, canary releases, blue-green deployments)
   - Disaster recovery and business continuity (backup and recovery plans, failover mechanisms)
   - Compliance and regulatory requirements (GDPR, HIPAA, PCI DSS)
   - Accessibility and inclusive design (WCAG compliance, keyboard navigation, screen reader support)
   - Internationalization and localization (multilingual support, currency formatting, date and time formats)

For each architectural decision, explain the rationale and trade-offs. Provide diagrams where appropriate to illustrate relationships and flows.

The output should be a comprehensive architecture document that can guide implementation while remaining flexible enough to adapt to changing requirements.
```

**Example Usage:** When planning the overall structure of your application before implementation begins.
**Expected Output:** A detailed architecture plan with diagrams, component breakdowns, data flow descriptions, and implementation guidelines tailored to your specific project.

---

## Feature Implementation Prompt
**Prompt Name:** Feature Development Guide
**Purpose:** Helps you plan and implement a specific feature with a structured approach that considers all aspects from design to testing.
**When to Use:** When starting work on a new feature or major enhancement to your application.

**Prompt:**
```text
Helps me plan and implement a specific feature for my application. Guide me through a structured approach that covers all aspects from design to testing.

First, ask me about:
- The specific feature I want to implement
- How it fits into the overall application
- User sotries or requirements it addresses
- Any design or UX considerations
- Technical constraints or dependencies
- Timeline and priority

Then, help me create a comprehensive implementation plan that includes:

1. Feature design:
   - Component breakdown
   - UI/UX considerations
   - Data requirements
   - API endpoints needed
   - State management approach

2. Implementation steps:
   - Break down the work into logical tasks
   - Identify dependencies between tasks
   - Suggest an implementation order
   - Highlight potential technical challenges

3. Code structure:
   - File and folder organization
   - Key classes/compoenents to create
   - Interface definitions
   - Reusable utilities needed

4. Testing strategy:
   - Unit test coverage plan
   - Integragion test scenarios
   - Edge cases to cosnider
   - Performance testing if applicable

5. Deployment considerations:
   - Feature flags if needed
   - Database migrations
   - Backward compatibility issues
   - Rollout strategy

For each section, provide specific guidance, code snippets, or examples that are directly applicable to my tech stack and feature requirements.

The output should be a detailed implementation plan that I can follow to efficiently build the feature while maintaining quality and user experience.
```

**Example Usage:** When starting work on a new feature or a major enhancement to your application.  
**Expected Output:** A comprehensive feature implementation plan with specific tasks, code structure recommendations, testing strategies, and deployment considerations.

---

## Testing Strategy Prompt
**Prompt Name:** Test Coverage Estrategist
**Purpose:** Helps you develop a comprehensive testing strategy for your application that balances coverage, efficiency, and maintainability.
**When to Use:** When establishing testing practices for a new project or improving testing coverage for an existing one.

**Prompt:**
```text
Help me develop a comprehensive testing strategy for my application. Guide me through creating a balanced approach that ensures quality while remaining practical to implement and maintain.

First, ask me about:
- My application type and tech stack
- Current testing practices (if any)
- Team size and testing expertise
- CI/CD environment
- Time constraints and priorities
- Specific quality concerns

Then, help me create a testing strategy that includes:

1. Testing pyramid implementation:
   - Unit testing approach and coverage goals
   - Integration testing scope and approach
   - End-to-end testing strategy
   - Manual vs. automated testing balance

2. Test organization:
   - Folder structure and naming conventions
   - Test categorization (smoke, regression, etc.)
   - Shared fixtures and utilities

3. Testing tools selection:
   - Recommended testing frameworks for my stack
   - Mocking and stubbing tools
   - Code coverage tools
   - UI/visual testing tools if applicable

4. Test-driven development approach:
   - When and how to apply TDD
   - Best practices for writing tests first
   - Balancing TDD with other development approaches

5. CI/CD integration:
   - Test automation in the pipeline
   - Test parallelization for speed
   - Failure handling and reporting
   - Test environment management

6. Special testing considerations:
   - Performance testing
   - Security testing
   - Accessibility testing
   - Mobile/responsive testing if applicable

For each component of the strategy, provide specific examples, code snippets, or configuration details relevant to my tech stack.

The output should be practical testing strategy document that balances thoroughness with implementation reality, and includes specific next steps to implement or improve our testing approach.
```

**Example Usage:** When establishing testing practices for a new project or improving testing coverage for an existing one.  
**Expected Output:** A detailed testing strategy with specific recommendations for testing tools, organization, coverage goals, and CI/CD integration tailored to your project.

---

# Startup Acceleration

These prompts address common time-consuming challenges that founders and product teams face in early startup development. When building a new product you should NOT be spending weeks dithering over colours, logos, and navigation. Use these prompts to save time and focus on the core value of your product.

## Brand Logo Creation

**Prompt Name:** Startup Logo Designer

**Purpose:** Helps founders quickly create a simple, professional SVG-based logo and favicon without spending excessive time and resources on early-stage branding.  

**When to Use:** When you need a professional-looking logo for your MVP or early-stage product without hiring a design agency.

**Prompt:**
```text
Help me create a simple, professional SVG logo and favicon for my startup. I need something that looks polished but doesn't require extensive design resources at this early stage.

First, ask me about:
- My startup/product name
- The industry or sector I'm in
- Target audience demographics
- Core value proposition in 1-2 sentences
- Any color preferences or existing brand elements
- Style preferences (minimalist, bold, playful, corporate, etc.)
- Any symbols or imagery that represent my product
- Competitors' logos and how I want to differentiate

Then, help me by:

1. Proposing 3-5 logo concept directions with:
   - A brief explanation of the concept and rationale
   - Description of the visual elements
   - How it connects to my brand values
   - Simple text description of what it would look like

2. After I select a direction, create:
   - SVG code for the logo that I can directly use
   - A simplified version suitable for favicon use
   - Recommendations for background colors/contexts
   - Guidelines for minimum size and spacing

3. Provide implementation instructions:
   - How to save and use the SVG file
   - How to convert to favicon formats (.ico, .png)
   - HTML code for including both in a website
   - Suggestions for using the logo consistently

Focus on creating something simple, distinctive, and versatile that works well across different sizes and contexts. The logo should be professional enough to establish credibility but can evolve as the company grows.
```

**Example Usage:** When launching an MVP and needing a professional visual identity without the time and expense of a full branding process.

**Expected Output:** SVG code for a simple, professional logo, favicon versions, and implementation instructions.

---

## Responsive Navigation Structure Prompt

**Prompt Name:** Navigation Architect Designer

**Purpose:** Helps teams implement a clean, responsive navigation structure early in development to avoid future technical debt and UX issues.

**When to Use:** When setting up the initial structure of a website or application before significant content is developed.

**Prompt:**
```text
Help me design and implement a clean, responsive navigation structure for my website/application that works across all devices and degrades gracefully if Javascript is disabled.

First, ask me about:
- The purpose and scope of my website/application
- The primary user tasks and information hierarchy
- The target devices and breakpoints
- Any existing navigation patterns or constraints

Then, help me design:

1. Recommended navigation pattern:
   - Desktop (sidebar/topbar/hybrid)
   - Tablet
   - Mobile (tab bar/drawer/bottom nav)

2. Sitemap and route structure:
   - Key sections and their relationships
   - Breadcrumb and deep linking requirements
   - Search placement and functionality

3. Navigation rules:
   - What goes global vs contextual
   - Breadcrumbs and deep linking
   - Search placement

4. Component specification:
   - States (active/hover/collapsed)
   - Badges, notifications, shortcuts
   - Accessibility (keyboard, ARIA)

5. Implementation notes:
   - Framework-specific recommendations (e.g., Next.js router)
   - CSS class naming conventions
   - Responsive behavior guidelines

For each component, provide specific examples, code snippets, or configuration details relevant to my tech stack.

The output should be a comprehensive navigation blueprint that I can use to implement the structure early in development.
```

**Example Usage:** When setting up the initial structure of a website or application before significant content is developed.  
**Expected Output:** A comprehensive navigation blueprint with specific recommendations for navigation patterns, sitemap structure, navigation rules, component specification, and implementation notes tailored to your project.

---

## Brand Style System Prompt

**Prompt Name:** Brand Style System Creator

**Purpose:** Helps you create a lightweight style guide (colors, type, voice) consistent across product + marketing.

**When to Use:** When writing UI copy and marketing pages.

**Prompt:**
```text
Help me create a lightweight style guide (colors, type, voice) consistent across product + marketing. Guide me through creating a brand style system that ensures consistency and enhances user experience.

First, ask me about:
- My brand personality and values
- The target audience and their preferences
- Any existing brand assets or guidelines
- Technical constraints or platform requirements
- Accessibility needs and compliance requirements

Then, help me develop:

1. Color palette:
   - Primary colors and their purpose
   - Secondary colors and their purpose
   - Accent colors and their purpose
   - Neutral colors and their purpose
   - Semantic colors and their purpose

2. Typography system:
   - Font families and their purpose
   - Font sizes and their purpose
   - Font weights and their purpose
   - Line heights and their purpose
   - Letter spacing and their purpose
   - Paragraph spacing and their purpose

3. Voice and tone:
   - The tone of voice I want to use
   - The tone of voice I want to use
```

**Example Usage:** When writing UI copy and marketing pages to ensure consistency and enhance user experience.

**Expected Output:** A comprehensive brand style system with specific recommendations for colors, typography, voice, and tone tailored to your product and brand.

---