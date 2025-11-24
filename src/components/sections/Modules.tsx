import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BarChart3, Users, FolderKanban, UserCheck, ShoppingCart } from 'lucide-react';

type ModuleType = 'sales' | 'hrm' | 'project' | 'crm' | 'pos';

export const ModulesSection = () => {
  const [activeModule, setActiveModule] = useState<ModuleType>('sales');

  const modules = [
    { id: 'sales' as const, name: 'SALES', icon: BarChart3 },
    { id: 'hrm' as const, name: 'HRM', icon: Users },
    { id: 'project' as const, name: 'PROJECT', icon: FolderKanban },
    { id: 'crm' as const, name: 'CRM', icon: UserCheck },
    { id: 'pos' as const, name: 'POS', icon: ShoppingCart },
  ];

  const moduleContent = {
    sales: {
      title: 'Account Helps You Simplify Your Accounting and Billing',
      description: 'Manage your billing and accounting without little to no effort! Set financial goals and let the system monitor them for you, automate taxes, and more! - without lifting a finger.',
      features: [
        {
          title: 'Simplify Your Accounting and Billing',
          description: 'Simplify your accounting and make it easy to keep an eye on your money. Set financial goals and let the system monitor them for you, automate taxes, and more! - without lifting a finger.',
        },
        {
          title: 'Take Control Of Your Inventory',
          description: 'Save time by managing your entire inventory with a few clicks. Easily create categories and add products to them. Modify product prices whenever you want, assign SKUs, create different tax rates, and do so much more!',
        },
        {
          title: 'Take Your Project from Proposal to Payment',
          description: 'Land new clients in a flash, and get paid just as fast. Create proposal templates and pitch your future clients. Turn your accepted proposals into payable invoices, send reminders, and get paid fast - all in one place!',
        },
      ],
    },
    hrm: {
      title: 'Everything You Need For a Successful HRM - In One Place',
      description: 'This feature makes it easier for a company to maintain a record of an employee\'s personal, company, and Bank details along with their essential documentation. Employees could view and manage their profiles.',
      features: [
        {
          title: 'Manage Key Employee Matters Easily',
          description: 'Keep track of employee information, documentation, and company details all in one secure place.',
        },
        {
          title: 'Help Your Employees Become More Productive',
          description: 'Provide tools and resources that enable your team to work more efficiently and effectively.',
        },
        {
          title: 'Manage Payroll in Just a Few Clicks',
          description: 'Streamline payroll processing with automated calculations and easy-to-use management tools.',
        },
      ],
    },
    project: {
      title: 'Easily manage all your projects and keep your business growing',
      description: 'Got a big team or working on multiple projects at once? Manage task priorities or even create additional workspaces and use the built-in permission system to separate core projects.',
      features: [
        {
          title: 'Kanban Task Management',
          description: 'Visualize your workflow with intuitive Kanban boards and drag-and-drop task management.',
        },
        {
          title: 'Creating milestones and assigning subtasks',
          description: 'Break down projects into manageable milestones and delegate subtasks to team members efficiently.',
        },
        {
          title: 'Bugs Resolution',
          description: 'Track and resolve bugs systematically to maintain project quality and timelines.',
        },
      ],
    },
    crm: {
      title: 'Manage Your Leads Better. Convert Faster.',
      description: 'Skyrocket your sales with an effective lead management tool. Determine the value of leads and develop promising leads with ease. Get clearer action plans and make smarter and well-informed decisions.',
      features: [
        {
          title: 'Manage All Your Leads Under One Roof',
          description: 'Centralize your lead database and track every interaction from first contact to conversion.',
        },
        {
          title: 'Cost-Efficient Lead Management',
          description: 'Optimize your sales process and reduce acquisition costs with smart lead scoring and prioritization.',
        },
        {
          title: 'Get Tailored Reports',
          description: 'Access customizable reports and analytics to understand your sales pipeline and make data-driven decisions.',
        },
      ],
    },
    pos: {
      title: 'Ease in maintaining customer and vendor details',
      description: 'POS allows you to create and maintain the data of each customer and vendor. You get access to all essential information through a well-maintained format.',
      features: [
        {
          title: 'Manage vital information from one dashboard',
          description: 'Access customer profiles, purchase history, and vendor details in one centralized location.',
        },
        {
          title: 'Set your sales targets and achieve them faster',
          description: 'Define sales goals, track progress in real-time, and get insights to exceed your targets.',
        },
        {
          title: 'Manage your products with ease',
          description: 'Add, edit, and organize your product catalog with simple inventory management tools.',
        },
      ],
    },
  };

  const content = moduleContent[activeModule];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why BOMPS Modules Fit Every Business Like a Glove
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            With Bomps, you can conveniently manage all your business functions from a single location.
          </p>
        </div>

        {/* Module Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeModule === module.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-5 w-5" />
                {module.name}
              </button>
            );
          })}
        </div>

        {/* Module Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h3>
            <p className="text-gray-600 mb-8 text-lg">{content.description}</p>
            
            <div className="space-y-3 mb-8">
              {content.features.map((feature, index) => (
                <details key={index} className="group">
                  <summary className="flex items-start gap-3 cursor-pointer list-none">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-open:bg-primary-600">
                      <div className="w-2 h-2 rounded-full bg-primary-600 group-open:bg-white" />
                    </div>
                    <span className="text-gray-900 font-medium">{feature.title}</span>
                  </summary>
                  <p className="text-gray-600 ml-9 mt-2 text-sm">{feature.description}</p>
                </details>
              ))}
            </div>

            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

          <Card className="bg-gradient-to-br from-primary-50 to-gray-50 border-primary-100">
            <CardContent className="p-8">
              <div className="aspect-video bg-white rounded-lg shadow-inner flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    {(() => {
                      const module = modules.find(m => m.id === activeModule);
                      const Icon = module?.icon;
                      return Icon ? <Icon className="h-8 w-8" /> : null;
                    })()}
                  </div>
                  <p>Module Preview</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
