// ============================================================================
// 1. ICON COMPONENTS
// ============================================================================

/**
 * A collection of SVG icons used throughout the application.
 * They are defined as React components for reusability and clarity.
 */
const LogoIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="18" cy="18" r="18" fill="#14B8A6"/>
      <path d="M24.0326 18.0001C24.0326 21.3283 21.3282 24.0327 18 24.0327C14.6718 24.0327 11.9674 21.3283 11.9674 18.0001C11.9674 14.6719 14.6718 11.9675 18 11.9675C19.8248 11.9675 21.4682 12.723 22.636 13.9168" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.0688 10.9312L25.0688 13.9312L22.0688 16.9312" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  const ChecklistIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 2V8H20" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.00012 17.0001L11.0001 19.0001L15.0001 15.0001" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 13H15" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  const GearsIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.4 15L19.4 15C19.7314 15 20 15.2686 20 15.6V18.4C20 18.7314 19.7314 19 19.4 19H17.4C17.0686 19 16.8 18.7314 16.8 18.4V15.6C16.8 15.2686 17.0686 15 17.4 15H19.4Z" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.4 15L21.5 13.9" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.8 15L14.7 13.9" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.2 9.00002L9.3 10.1" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.6 9H6.6C6.93137 9 7.2 8.73137 7.2 8.4V5.6C7.2 5.26863 6.93137 5 6.6 5H4.6C4.26863 5 4 5.26863 4 5.6V8.4C4 8.73137 4.26863 9 4.6 9Z" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.2 9.00002L4.5 10.5" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.8 9.00002L19.5 7.5" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  const TourIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.1716 8.5 10.5 9.17157 10.5 10C10.5 10.3953 10.6552 10.7628 10.9149 11.0225" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 13.5V14" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
  
  const HamburgerIcon = () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
  );
  
  // ============================================================================
  // 2. REUSABLE UI COMPONENTS
  // ============================================================================
  
  /**
   * A styled, reusable button component with color variants.
   */
  const Button = ({ variant = 'primary', className = '', children, ...props }) => {
    const baseClasses = 'text-white font-semibold rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  
    const variantClasses = {
      primary: 'bg-teal-500 hover:bg-teal-600 focus-visible:outline-teal-600',
      blue: 'bg-blue-500 hover:bg-blue-600 focus-visible:outline-blue-600',
      purple: 'bg-purple-500 hover:bg-purple-600 focus-visible:outline-purple-600',
    };
  
    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
    return (
      <button className={classes} {...props}>
        {children}
      </button>
    );
  };
  
  
  /**
   * A card component to display a feature with an icon, title, description, and action button.
   */
  const FeatureCard = ({ variant, Icon, title, description, buttonText }) => {
    const variantStyles = {
      blue: {
        cardBg: 'bg-blue-50',
        iconBg: 'bg-blue-100',
      },
      green: {
        cardBg: 'bg-green-50',
        iconBg: 'bg-green-100',
      },
      purple: {
        cardBg: 'bg-purple-50',
        iconBg: 'bg-purple-100',
      },
    };
  
    const { cardBg, iconBg } = variantStyles[variant] || variantStyles.blue;
    const buttonVariant = variant === 'green' ? 'primary' : variant;
  
    return (
      <div className={`${cardBg} rounded-2xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1`}>
        <div className={`${iconBg} rounded-full p-4 mb-4`}>
          <Icon />
        </div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="text-slate-600 mt-1">{description}</p>
        <Button variant={buttonVariant} className="mt-6 py-3 px-8">
          {buttonText}
        </Button>
      </div>
    );
  };
  
  // ============================================================================
  // 3. LAYOUT & SECTION COMPONENTS
  // ============================================================================
  
  /**
   * The application logo with a link.
   */
  const Logo = () => (
    <a href="#" className="flex items-center gap-3">
      <LogoIcon />
      <span className="text-2xl font-bold text-slate-900">OnboardFlow</span>
    </a>
  );
  
  /**
   * The main navigation menu for desktop view.
   */
  const NavigationMenu = ({ links }) => (
    <nav className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
      {links.map((link) => (
        <a key={link.label} href={link.href} className="hover:text-teal-500 transition-colors">
          {link.label}
        </a>
      ))}
      <Button variant="primary" className="py-2.5 px-6">
        Sign Up
      </Button>
    </nav>
  );
  
  /**
   * The header component containing the logo, navigation, and mobile menu button.
   */
  const PageHeader = () => {
    const navLinks = [
      { href: '#', label: 'Features' },
      { href: '#', label: 'Pricing' },
      { href: '#', label: 'Help' },
      { href: '#', label: 'Log In' },
    ];
  
    return (
      <header className="flex justify-between items-center w-full">
        <Logo />
        <NavigationMenu links={navLinks} />
        <button className="md:hidden p-2">
          <HamburgerIcon />
          <span className="sr-only">Open menu</span>
        </button>
      </header>
    );
  };
  
  /**
   * The main hero section with the welcome message.
   */
  const WelcomeHero = () => (
    <>
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
        Welcome to OnboardFlow. <br /> Le&apos;ts get you started!
      </h1>
      <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
        Your journey to seamless integration begins here
      </p>
    </>
  );
  
  /**
   * Pagination dots, typically for a carousel or slider.
   */
  const PaginationDots = () => (
    <div className="flex justify-center items-center gap-3 mt-12">
      <button className="w-2.5 h-2.5 bg-teal-500 rounded-full" aria-label="Go to slide 1"></button>
      <button className="w-2 h-2 bg-slate-300 rounded-full hover:bg-slate-400" aria-label="Go to slide 2"></button>
      <button className="w-2 h-2 bg-slate-300 rounded-full hover:bg-slate-400" aria-label="Go to slide 3"></button>
    </div>
  );
  
  /**
   * The footer component with legal and contact links.
   */
  const PageFooter = () => (
    <footer className="w-full max-w-7xl mx-auto">
      <div className="flex justify-center items-center gap-6 text-sm text-slate-500">
        <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Contact Us</a>
      </div>
    </footer>
  );
  
  
  // ============================================================================
  // 4. MAIN PAGE COMPONENT
  // ============================================================================
  
  function OnboardingWelcomePage() {
    const features = [
      {
        variant: 'blue',
        Icon: ChecklistIcon,
        title: 'Create Your Profile',
        description: 'Tell us about yourself',
        buttonText: 'Get Started',
      },
      {
        variant: 'green',
        Icon: GearsIcon,
        title: 'Explore Features',
        description: 'Discover what we can do',
        buttonText: 'Learn More',
      },
      {
        variant: 'purple',
        Icon: TourIcon,
        title: 'Guided Tour',
        description: 'Warktrowh our tools',
        buttonText: 'Start Tour',
      },
    ];
  
    return (
      <div className="bg-slate-50 min-h-screen font-sans text-slate-800 flex flex-col items-center py-6 sm:py-10 px-4">
        <div className="w-full max-w-7xl">
          <PageHeader />
  
          <main className="w-full max-w-6xl mx-auto mt-16 sm:mt-24 mb-12 sm:mb-16 bg-white rounded-3xl shadow-xl p-8 sm:p-12 md:p-16 text-center">
            <WelcomeHero />
  
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
            
            <PaginationDots />
          </main>
        </div>
        
        <PageFooter />
      </div>
    );
  }