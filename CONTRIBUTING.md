# Contributing to Game Price Pal

Thank you for your interest in contributing to Game Price Pal! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Git installed
- Code editor (VS Code recommended)
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Development Setup
1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/game-price-pal.git
   cd game-price-pal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📋 Development Guidelines

### Code Style
- **TypeScript**: Use strict typing, avoid `any`
- **Components**: Functional components with hooks
- **Styling**: Tailwind CSS utility classes
- **File naming**: PascalCase for components, camelCase for utilities
- **Imports**: Use absolute imports with `@/` prefix

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Custom components
├── pages/              # Application pages/routes
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── data/               # Static data and mock data
├── lib/                # Utility functions
└── assets/             # Static assets
```

### Component Guidelines
1. **Component Structure**
   ```typescript
   interface ComponentProps {
     // Define props with proper types
   }

   export function Component({ prop1, prop2 }: ComponentProps) {
     // Component logic
     return (
       <div className="tailwind-classes">
         {/* JSX content */}
       </div>
     );
   }
   ```

2. **Custom Hooks**
   ```typescript
   export function useCustomHook() {
     const [state, setState] = useState();
     
     // Hook logic
     
     return { state, setState };
   }
   ```

3. **Type Definitions**
   ```typescript
   // src/types/feature.ts
   export interface FeatureType {
     id: string;
     name: string;
     // Other properties
   }
   ```

## 🎯 Contributing Areas

### High Priority
- **API Integration**: Replace mock data with real APIs
- **Performance**: Optimize loading and rendering
- **Accessibility**: Improve ARIA labels and keyboard navigation
- **Mobile**: Enhance mobile responsiveness
- **Testing**: Add unit and integration tests

### Medium Priority
- **Features**: New game filtering options
- **UI/UX**: Design improvements and animations
- **Documentation**: Code comments and guides
- **Internationalization**: Multi-language support

### Low Priority
- **Desktop App**: Electron implementation
- **Mobile App**: Capacitor/React Native version
- **Advanced Features**: Price predictions, recommendations

## 🐛 Bug Reports

### Before Reporting
1. Check existing issues
2. Reproduce the bug
3. Test in different browsers
4. Check console for errors

### Bug Report Template
```markdown
**Bug Description**
Clear description of the bug

**Steps to Reproduce**
1. Go to...
2. Click on...
3. See error

**Expected Behavior**
What should happen

**Screenshots**
If applicable

**Environment**
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 91]
- Version: [e.g., 1.0.0]
```

## ✨ Feature Requests

### Feature Request Template
```markdown
**Feature Description**
Clear description of the feature

**Problem Statement**
What problem does this solve?

**Proposed Solution**
How should it work?

**Alternatives**
Other solutions considered

**Additional Context**
Screenshots, mockups, etc.
```

## 🔄 Pull Request Process

### Before Submitting
1. **Test your changes**
   ```bash
   npm run build    # Ensure it builds
   npm run lint     # Check for linting errors
   npm run type-check  # TypeScript validation
   ```

2. **Update documentation** if needed

3. **Follow commit conventions**
   ```bash
   feat: add new search filter
   fix: resolve price display issue
   docs: update README
   style: format code
   refactor: improve component structure
   test: add unit tests
   ```

### Pull Request Template
```markdown
**Description**
Brief description of changes

**Type of Change**
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

**Testing**
- [ ] Tested locally
- [ ] Added/updated tests
- [ ] Checked different browsers

**Screenshots**
If applicable

**Checklist**
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

## 🧪 Testing Guidelines

### Testing Strategy
1. **Unit Tests**: Individual components and functions
2. **Integration Tests**: Component interactions
3. **E2E Tests**: Full user workflows

### Writing Tests
```typescript
// Component test example
import { render, screen } from '@testing-library/react';
import { GameCard } from './GameCard';

test('renders game title', () => {
  const mockGame = {
    title: 'Test Game',
    // ... other properties
  };
  
  render(<GameCard game={mockGame} />);
  expect(screen.getByText('Test Game')).toBeInTheDocument();
});
```

### Running Tests
```bash
npm run test          # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

## 📚 Documentation

### Code Documentation
- Add JSDoc comments for complex functions
- Document component props with TypeScript
- Include usage examples for custom hooks

### README Updates
- Keep installation instructions current
- Update feature lists
- Add new configuration options

## 🎨 Design Guidelines

### UI/UX Principles
- **Consistency**: Follow existing design patterns
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Optimize for speed
- **Mobile-first**: Responsive design approach

### Color Scheme
- Primary: Blue (#3B82F6)
- Secondary: Gray (#6B7280)
- Success: Green (#10B981)
- Warning: Yellow (#F59E0B)
- Error: Red (#EF4444)

### Typography
- Headings: Inter font family
- Body: System font stack
- Code: Fira Code or monospace

## 🚀 Release Process

### Version Numbering
- **Major**: Breaking changes (1.0.0 → 2.0.0)
- **Minor**: New features (1.0.0 → 1.1.0)
- **Patch**: Bug fixes (1.0.0 → 1.0.1)

### Release Checklist
1. Update version in package.json
2. Update CHANGELOG.md
3. Create release branch
4. Test thoroughly
5. Create GitHub release
6. Deploy to production

## 🤝 Community

### Communication
- **GitHub Issues**: Bug reports and feature requests
- **Discussions**: General questions and ideas
- **Pull Requests**: Code contributions

### Code of Conduct
- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow project guidelines

## 📞 Getting Help

### Resources
- **Documentation**: README.md and docs/
- **Examples**: Check existing components
- **Issues**: Search existing issues first
- **Discussions**: Ask questions in GitHub Discussions

### Mentorship
New contributors are welcome! Don't hesitate to:
- Ask questions in issues or discussions
- Request code reviews
- Suggest improvements to this guide

## 🏆 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation

Thank you for contributing to Game Price Pal! 🎮