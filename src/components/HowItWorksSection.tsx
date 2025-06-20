import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: 'AI Verification',
      description: 'Our system verifies clinic credentials through MDA license verification and credential analysis with 98.7% match accuracy',
      color: 'bg-blue-600'
    },
    {
      number: 2,
      title: 'Smart Matching',
      description: 'Priority clinic matching based on your treatment needs, location preferences, and quality requirements',
      color: 'bg-blue-600'
    },
    {
      number: 3,
      title: 'Traffic-Aware Scheduling',
      description: 'Integrated scheduling using real-time traffic data with automatic rescheduling for causeway delays',
      color: 'bg-blue-600'
    },
    {
      number: 4,
      title: '24/7 Support',
      description: 'Continuous support throughout your treatment journey with emergency hotline and follow-up coordination',
      color: 'bg-blue-600'
    }
  ];

  const verificationFeatures = [
    {
      title: 'MDA License Verification',
      description: 'Cross-check with Malaysian dental board registrations'
    },
    {
      title: 'Credential Analysis',
      description: 'Continuing education records and specialization verification'
    },
    {
      title: 'Facility Inspection',
      description: 'Hygiene scoring and certification protocol compliance'
    },
    {
      title: 'Patient Safety',
      description: 'Emergency procedures and medical evacuation protocols'
    }
  ];

  const sentimentFeatures = [
    {
      title: 'Fake Review Detection',
      description: 'Advanced algorithms identify bot-generated and paid reviews with 94.2% accuracy'
    },
    {
      title: 'Linguistic Analysis',
      description: 'Natural language processing detects authentic patient experiences vs promotional content'
    },
    {
      title: 'Pattern Recognition',
      description: 'Identifies suspicious review patterns, timing clusters, and coordinated posting activities'
    },
    {
      title: 'Confidence Scoring',
      description: 'Each review gets a confidence score based on authenticity, detail level, and verification status'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Step-by-step process for safe, affordable dental care
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step) => (
            <Card key={step.number} className="bg-light-card border-gray-200 hover:border-teal-accent transition-all duration-300 shadow-sm hover:shadow-md">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Features with Tabs */}
        <Card className="bg-light-card border-gray-200 shadow-sm">
          <CardContent className="p-8">
            <Tabs defaultValue="verification" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-100 border-gray-200">
                <TabsTrigger value="verification" className="text-gray-700 data-[state=active]:bg-teal-accent data-[state=active]:text-white">
                  AI Verification System
                </TabsTrigger>
                <TabsTrigger value="sentiment" className="text-gray-700 data-[state=active]:bg-teal-accent data-[state=active]:text-white">
                  Sentiment Analysis
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="verification" className="mt-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Verification System</h3>
                  <p className="text-gray-600">Our advanced verification process ensures every partner clinic meets the highest standards</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {verificationFeatures.map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-teal-accent/10 p-4 rounded-lg mb-4 border border-teal-accent/20">
                        <h4 className="text-gray-900 font-semibold mb-2">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="sentiment" className="mt-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Sentiment Analysis</h3>
                  <p className="text-gray-600 mb-6">
                    Beyond simple Google ratings - our proprietary system provides authentic patient feedback analysis
                  </p>
                  <div className="bg-teal-accent/5 border border-teal-accent/30 rounded-lg p-6 mb-8">
                    <h4 className="text-teal-accent font-bold text-lg mb-2">Platform Superiority</h4>
                    <p className="text-gray-700 text-sm">
                      While Google ratings can be easily manipulated through fake reviews, paid comments, and bot-generated content, 
                      our AI-powered sentiment analysis provides genuine insights into patient experiences with 94.2% accuracy in detecting fraudulent reviews.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {sentimentFeatures.map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-blue-500/10 p-4 rounded-lg mb-4 border border-blue-500/20">
                        <h4 className="text-gray-900 font-semibold mb-2">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h4 className="text-gray-900 font-semibold mb-3">Why This Matters for International Patients</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      When seeking dental care across borders, authentic patient feedback is crucial for safety and quality assurance. 
                      Our sentiment analysis ensures you're making decisions based on genuine patient experiences, not manipulated ratings.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HowItWorksSection;
