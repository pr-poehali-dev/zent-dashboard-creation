import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const mockData = {
    totalFees: 1247850,
    distributedToHolders: 873695,
    buybackFunds: 374155,
    tokensInCirculation: 10000000,
    holders: 3542,
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">Z</span>
            </div>
            <span className="text-2xl font-bold">ZENT</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'dashboard', 'tokenomics', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all ${
                  activeSection === section ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {section === 'home' ? 'Main' : section}
              </button>
            ))}
          </div>

          <Button>Connect Wallet</Button>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-right">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span>ZENT</span>
              </h1>
              <p className="text-3xl text-primary font-medium">Transparency That Pays</p>
              <p className="text-xl text-muted-foreground">
                Zenith Entry Network — revolutionary crypto project built on Solana blockchain with 100% transparent revenue distribution
              </p>
              
              <div className="flex space-x-4">
                <Button size="lg" className="glow-purple" onClick={() => scrollToSection('dashboard')}>
                  <Icon name="BarChart3" className="mr-2" size={20} />
                  View Dashboard
                </Button>
                <Button size="lg" variant="outline" className="gradient-border" onClick={() => scrollToSection('about')}>
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-left">
              <Card className="relative gradient-border subtle-gradient">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Total Trading Fees</span>
                      <Icon name="TrendingUp" className="text-secondary" />
                    </div>
                    <div className="text-4xl font-bold">
                      ${mockData.totalFees.toLocaleString()}
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">To Holders (70%)</span>
                        <span className="text-secondary font-bold">${mockData.distributedToHolders.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Buyback (30%)</span>
                        <span className="text-primary font-bold">${mockData.buybackFunds.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in">About ZENT</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Shield',
                title: '100% Transparent',
                description: 'All transactions and revenue distribution are publicly visible on blockchain',
              },
              {
                icon: 'Zap',
                title: 'Solana Speed',
                description: 'Lightning-fast transactions with minimal fees on Solana network',
              },
              {
                icon: 'Users',
                title: 'Community First',
                description: '70% of all fees go directly to token holders',
              },
            ].map((feature, index) => (
              <Card key={index} className="gradient-border hover:scale-105 transition-transform duration-300 animate-fade-in subtle-gradient" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon name={feature.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold">Why ZENT?</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ZENT revolutionizes crypto investing with a fair, transparent model. Unlike traditional projects, 
              we distribute 70% of trading fees directly to holders, creating sustainable passive income. 
              The remaining 30% funds strategic buybacks and partnerships, ensuring continuous growth.
            </p>
          </div>
        </div>
      </section>

      <section id="dashboard" className="min-h-screen flex items-center py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in">Live Dashboard</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Total Fees Collected', value: `$${mockData.totalFees.toLocaleString()}`, icon: 'DollarSign', color: 'text-secondary' },
              { label: 'Distributed to Holders', value: `$${mockData.distributedToHolders.toLocaleString()}`, icon: 'TrendingUp', color: 'text-primary' },
              { label: 'Buyback Fund', value: `$${mockData.buybackFunds.toLocaleString()}`, icon: 'Wallet', color: 'text-secondary' },
              { label: 'Tokens in Circulation', value: mockData.tokensInCirculation.toLocaleString(), icon: 'Coins', color: 'text-primary' },
              { label: 'Total Holders', value: mockData.holders.toLocaleString(), icon: 'Users', color: 'text-secondary' },
              { label: 'APY (Est.)', value: '24.5%', icon: 'Percent', color: 'text-primary' },
            ].map((stat, index) => (
              <Card key={index} className="gradient-border hover:scale-105 transition-transform duration-300 animate-fade-in subtle-gradient" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <Icon name={stat.icon as any} className={stat.color} size={24} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="gradient-border animate-fade-in subtle-gradient">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Revenue Distribution</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Holders (70%)</span>
                    <span className="text-secondary font-bold">70%</span>
                  </div>
                  <div className="h-4 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[70%] animate-slide-right" />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Buyback & Partnerships (30%)</span>
                    <span className="text-primary font-bold">30%</span>
                  </div>
                  <div className="h-4 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[30%] animate-slide-right" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="tokenomics" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in">Tokenomics</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-right">
              <Card className="gradient-border subtle-gradient">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Icon name="PieChart" className="mr-2 text-primary" />
                    Distribution Model
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Total Supply</span>
                      <span className="font-bold">10,000,000 ZENT</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Initial Liquidity</span>
                      <span className="font-bold">2,000,000 ZENT</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Public Sale</span>
                      <span className="font-bold">6,000,000 ZENT</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Team & Development</span>
                      <span className="font-bold">2,000,000 ZENT</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-border subtle-gradient">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Icon name="Repeat" className="mr-2 text-secondary" />
                    Revenue Flow
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start space-x-3">
                      <Icon name="ArrowRight" className="text-primary mt-1" size={16} />
                      <span>Trading fees collected from all transactions</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="ArrowRight" className="text-primary mt-1" size={16} />
                      <span>70% automatically distributed to holders proportionally</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="ArrowRight" className="text-primary mt-1" size={16} />
                      <span>30% allocated for buyback programs and strategic partnerships</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="animate-slide-left">
              <Card className="gradient-border relative overflow-hidden subtle-gradient">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary mb-2">70/30</div>
                      <div className="text-xl text-muted-foreground">Split Ratio</div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-card/50 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg font-bold">Holder Rewards</span>
                          <Icon name="TrendingUp" className="text-secondary" size={24} />
                        </div>
                        <div className="text-3xl font-bold text-secondary mb-2">70%</div>
                        <p className="text-sm text-muted-foreground">Passive income for all token holders</p>
                      </div>

                      <div className="bg-card/50 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg font-bold">Growth Fund</span>
                          <Icon name="Rocket" className="text-primary" size={24} />
                        </div>
                        <div className="text-3xl font-bold text-primary mb-2">30%</div>
                        <p className="text-sm text-muted-foreground">Buybacks & strategic partnerships</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-card/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8 animate-fade-in">Join ZENT Community</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Be part of the future of transparent crypto investing
          </p>
          
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
            {[
              { icon: 'Twitter', label: 'Twitter' },
              { icon: 'MessageCircle', label: 'Telegram' },
              { icon: 'Github', label: 'GitHub' },
              { icon: 'FileText', label: 'Whitepaper' },
            ].map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="gradient-border hover:scale-110 transition-transform"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon name={social.icon as any} className="mr-2" />
                {social.label}
              </Button>
            ))}
          </div>

          <Card className="max-w-md mx-auto gradient-border animate-fade-in subtle-gradient">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Subscribe for Updates</h3>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary outline-none transition-colors"
                />
                <Button>
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-2xl font-bold text-primary">ZENT</span>
            </div>
            
            <div className="text-muted-foreground">
              © 2024 ZENT. Transparency That Pays.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;