# AI Testing Agents - Quick Start Guide

## What I've Created for You

I've created a comprehensive AI agent system for enhancing your testing workflow. Here's what's available:

### 📁 Files Created

1. **`D4_AI_Agent_Testing_Enhancements.md`** - Comprehensive guide on AI agents for testing
2. **`artifacts/tests/ai_test_agents.py`** - Production-ready agent implementations
3. **`artifacts/tests/example_ai_agent_usage.py`** - Working examples you can run

---

## Quick Start

### 1. Generate Tests Automatically

```python
from tests.ai_test_agents import TestGeneratorAgent
from utils import load_artifact

# Load your app code
app_code = load_artifact("app/main.py")

# Create agent
agent = TestGeneratorAgent()

# Generate comprehensive tests for an endpoint
tests = agent.generate_tests(
    app_code=app_code,
    endpoint="POST /users/",
    test_type="comprehensive"  # or "happy_path", "edge_cases", "errors"
)

# Save or use the generated tests
print(tests)
```

### 2. Discover Edge Cases

```python
from tests.ai_test_agents import EdgeCaseAgent

agent = EdgeCaseAgent()
edge_cases = agent.discover_edge_cases(
    app_code=app_code,
    endpoint="/users/"
)

# Returns structured JSON with edge cases categorized by:
# - Boundary values
# - Null/empty inputs
# - Type mismatches
# - Security concerns
# - Concurrency issues
```

### 3. Generate Test Data

```python
from tests.ai_test_agents import TestDataGeneratorAgent

agent = TestDataGeneratorAgent()

# Define your model schema
user_schema = {
    "name": {"type": "string", "required": True},
    "email": {"type": "string", "format": "email", "required": True},
    "role": {"type": "string", "enum": ["New Hire", "Manager", "HR"]}
}

# Generate diverse test data
test_data = agent.generate_test_data(
    model_schema=user_schema,
    scenario="edge_cases",  # or "happy_path", "invalid", "stress"
    count=10
)
```

### 4. Analyze Test Failures

```python
from tests.ai_test_agents import FailureAnalyzerAgent

agent = FailureAnalyzerAgent()

# Analyze a failure
analysis = agent.analyze_failure(
    test_output="<pytest failure output>",
    source_code="<your code>",
    test_code="<test code>"  # optional
)

# Returns:
# - Root cause
# - Suggested fix
# - Confidence level
# - Affected tests
```

### 5. Find Coverage Gaps

```python
from tests.ai_test_agents import CoverageGapAgent

agent = CoverageGapAgent()

# Analyze coverage report
analysis = agent.analyze_coverage(
    coverage_report="<pytest-cov output>",
    source_code=app_code
)

# Returns:
# - Coverage summary
# - Uncovered code locations
# - Suggested tests
# - Priority rankings
```

---

## Run the Examples

```bash
# From the project root
cd artifacts/tests
python example_ai_agent_usage.py
```

This will demonstrate all the agents in action.

---

## Integration into Your Workflow

### Option 1: Manual Use
Use agents interactively when writing tests:
```python
# Jupyter notebook or Python script
agent = TestGeneratorAgent()
tests = agent.generate_tests(app_code, "/new-endpoint/")
# Review and integrate the generated tests
```

### Option 2: Pre-commit Hook
Generate tests automatically when you add new endpoints:
```python
# In a git hook or script
agent = TestGeneratorAgent()
new_tests = agent.generate_tests(app_code, new_endpoint)
# Save to test file
```

### Option 3: CI/CD Integration
Run agents in your pipeline:
```yaml
# In GitHub Actions
- name: AI Test Generation
  run: python -m tests.ai_test_agents --endpoint "/users/" --generate
```

---

## Agent Types Overview

| Agent | Purpose | Best For |
|-------|---------|----------|
| **TestGeneratorAgent** | Generate complete test suites | New endpoints, comprehensive testing |
| **EdgeCaseAgent** | Discover edge cases | Finding bugs, improving robustness |
| **TestDataGeneratorAgent** | Generate test data | Property-based testing, diverse datasets |
| **FailureAnalyzerAgent** | Analyze failures | Debugging, faster issue resolution |
| **CoverageGapAgent** | Find coverage gaps | Improving test coverage, CI metrics |

---

## Advanced Use Cases

### 1. Continuous Test Improvement
```python
# Run weekly to discover new edge cases
agent = EdgeCaseAgent()
edge_cases = agent.discover_edge_cases(app_code, endpoint)
# Review and add new tests based on findings
```

### 2. Test Maintenance
```python
# When code changes, regenerate tests
agent = TestGeneratorAgent()
updated_tests = agent.generate_tests(updated_code, endpoint)
# Compare with existing tests, update as needed
```

### 3. Property-Based Testing
```python
# Generate test data for hypothesis
agent = TestDataGeneratorAgent()
data_samples = agent.generate_test_data(model_schema, "edge_cases", count=100)

# Use with hypothesis
from hypothesis import given, strategies as st
@given(st.sampled_from(data_samples))
def test_property(data):
    # Test your invariants
    pass
```

---

## Tips & Best Practices

1. **Review AI Output**: Always review generated tests before committing
2. **Iterate on Prompts**: Refine agent prompts based on results
3. **Combine Agents**: Use multiple agents together for comprehensive testing
4. **Version Control**: Track AI-generated tests like any code
5. **Human in Loop**: Keep humans reviewing critical test decisions

---

## Next Steps

1. ✅ Review the comprehensive guide: `D4_AI_Agent_Testing_Enhancements.md`
2. ✅ Run the examples: `python artifacts/tests/example_ai_agent_usage.py`
3. ✅ Try generating tests for a new endpoint
4. ✅ Integrate agents into your workflow
5. ✅ Measure improvements in coverage and bug detection

---

## Questions or Issues?

- Check the comprehensive guide for detailed explanations
- Review the example code for implementation patterns
- Test with a simple endpoint first before scaling up

Happy testing with AI! 🚀

