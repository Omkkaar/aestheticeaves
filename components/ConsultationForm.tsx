import React, { useState, useEffect } from 'react';
import { 
  PRIVACY_POLICY_URL, 
  RAZORPAY_INTERIOR_URL, 
  RAZORPAY_ARCHITECTURE_URL 
} from '../constants';
import Button from './Button';

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
  onLegalLinkClick: (type: 'terms' | 'refund' | 'privacy') => void;
}

type ServiceType = 'Interior Design' | 'Architecture Design' | null;

const ConsultationForm: React.FC<ConsultationFormProps> = ({ isOpen, onClose, onLegalLinkClick }) => {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<ServiceType>(null);
  const [agreements, setAgreements] = useState({ privacy: false, terms: false, refund: false });
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const savedStep = sessionStorage.getItem("ae_form_partial_step");
      if (savedStep) {
        setStep(parseInt(savedStep));
      }
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    if (step > 1 && step < 10) {
      sessionStorage.setItem("ae_form_partial_step", step.toString());
    }
  }, [step]);

  useEffect(() => {
    if (step === 10) {
      localStorage.setItem("ae_form_submitted", "true");
      sessionStorage.removeItem("ae_form_partial_step");
    }
  }, [step]);

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    if (step === 1 && !formData.name) newErrors.name = "Please provide your full name.";
    if (step === 2) {
      const phone = formData.phone || "";
      const phoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
      if (!phone) newErrors.phone = "WhatsApp number is required.";
      else if (!phoneRegex.test(phone.replace(/\s/g, ""))) newErrors.phone = "Please enter a valid Indian WhatsApp number.";
    }
    if (step === 3) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email) newErrors.email = "Email ID is required.";
      else if (!emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email address.";
    }
    if (step === 4 && !service) newErrors.service = "Please select a service to proceed.";

    if (service === 'Interior Design') {
      if (step === 5 && !formData.i_type) newErrors.i_type = "Please select the type of interior.";
      if (step === 6 && !formData.i_budget) newErrors.i_budget = "Please select your budget range.";
      if (step === 7 && !formData.i_location) newErrors.i_location = "Location is required.";
      if (step === 8 && !formData.i_stage) newErrors.i_stage = "Please select property stage.";
      if (step === 9 && !formData.i_timeline) newErrors.i_timeline = "Please select your timeline.";
    } else if (service === 'Architecture Design') {
      if (step === 5 && !formData.a_type) newErrors.a_type = "Please select architecture service type.";
      if (step === 6 && !formData.a_budget) newErrors.a_budget = "Please select investment range.";
      if (step === 7 && !formData.a_location) newErrors.a_location = "Site details are required.";
      if (step === 8 && !formData.a_timeline) newErrors.a_timeline = "Please select your timeline.";
      if (step === 9 && !formData.a_source) newErrors.a_source = "Please tell us how you found us.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xzdzzwpl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          selected_service: service,
          submission_date: new Date().toLocaleString(),
          origin_url: window.location.href
        })
      });

      if (response.ok) {
        setStep(10);
      } else {
        const data = await response.json();
        alert(data.error || "Submission failed. Please try again.");
      }
    } catch (error) {
      alert("A network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      if (!agreements.privacy || !agreements.terms || !agreements.refund) {
        alert("Please accept all legal policies to proceed.");
        return;
      }
      
      // If we are at the last info step, submit to Formspree
      if (step === 9) {
        handleSubmit();
      } else {
        setStep(prev => prev + 1);
      }
    }
  };

  const prevStep = () => setStep(prev => prev - 1);

  const totalSteps = service ? 10 : 4;

  const renderProgress = () => (
    <div className="mb-10">
      <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">
        <span>Step {step} of {totalSteps}</span>
        <span>{Math.round((step / totalSteps) * 100)}%</span>
      </div>
      <div className="h-1 bg-gray-100 w-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-500" 
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-serif text-3xl text-primary">May we have your full name?</h2>
            <input 
              type="text" 
              placeholder="e.g. Rahul Sharma"
              className={`w-full border-b-2 bg-transparent py-4 text-xl outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-gray-200 focus:border-primary'}`}
              value={formData.name || ""}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
            {errors.name && <p className="text-red-500 text-xs font-sans italic">{errors.name}</p>}
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-serif text-3xl text-primary">What is your WhatsApp number?</h2>
            <input 
              type="tel" 
              placeholder="+91 XXXXXXXXXX"
              className={`w-full border-b-2 bg-transparent py-4 text-xl outline-none transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-primary'}`}
              value={formData.phone || ""}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
            <p className="text-gray-400 text-xs font-sans italic">We use this for professional advisory communications only.</p>
            {errors.phone && <p className="text-red-500 text-xs font-sans italic">{errors.phone}</p>}
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-serif text-3xl text-primary">And your professional Email ID?</h2>
            <input 
              type="email" 
              placeholder="name@example.com"
              className={`w-full border-b-2 bg-transparent py-4 text-xl outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-primary'}`}
              value={formData.email || ""}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-xs font-sans italic">{errors.email}</p>}
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="font-serif text-3xl text-primary">Please select the service you are enquiring about:</h2>
            <div className="grid gap-4">
              {['Interior Design', 'Architecture Design'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => { setService(opt as ServiceType); setStep(5); }}
                  className={`w-full text-left px-8 py-5 border-2 transition-all duration-300 font-sans tracking-wider ${service === opt ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 hover:border-primary/20 text-gray-600'}`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {errors.service && <p className="text-red-500 text-xs font-sans italic">{errors.service}</p>}
          </div>
        );

      case 5:
        if (service === 'Interior Design') return (
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-serif text-3xl text-primary">What type of interior are you looking for?</h2>
            <div className="grid gap-3">
              {['2 / 2.5 BHK Home Interior', '3 / 4 BHK Home Interior', 'Bungalow / Villa', 'Shop / Office / Clinic', 'Hotel / Restaurant'].map(opt => (
                <button key={opt} onClick={() => handleInputChange('i_type', opt)} className={`p-4 border text-left ${formData.i_type === opt ? 'border-primary bg-primary/5' : 'border-gray-100'}`}>{opt}</button>
              ))}
            </div>
          </div>
        );
        if (service === 'Architecture Design') return (
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-serif text-3xl text-primary">Type of architecture service:</h2>
            <div className="grid gap-3">
              {['Residential Bungalow', 'Residential / Commercial Building', 'Farm House / Holiday Home', 'Hotel & Restaurant Building', 'Hospital / Clinic Building', 'Industrial Project'].map(opt => (
                <button key={opt} onClick={() => handleInputChange('a_type', opt)} className={`p-4 border text-left ${formData.a_type === opt ? 'border-primary bg-primary/5' : 'border-gray-100'}`}>{opt}</button>
              ))}
            </div>
          </div>
        );
        break;

      case 6:
        if (service === 'Interior Design') return (
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-serif text-3xl text-primary">Budget range for your interiors?</h2>
            <div className="grid gap-3">
              {['₹15L – ₹20L', '₹20L – ₹30L', '₹30L – ₹50L', '₹50L – ₹2 Cr', 'Luxury Interiors'].map(opt => (
                <button key={opt} onClick={() => handleInputChange('i_budget', opt)} className={`p-4 border text-left ${formData.i_budget === opt ? 'border-primary bg-primary/5' : 'border-gray-100'}`}>{opt}</button>
              ))}
            </div>
          </div>
        );
        if (service === 'Architecture Design') return (
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-serif text-3xl text-primary">Project investment range?</h2>
            <div className="grid gap-3">
              {['₹1 Cr – ₹5 Cr', '₹5 Cr – ₹10 Cr', '₹10 Cr – ₹30 Cr', '₹30 Cr – ₹50 Cr', 'Above ₹50 Cr'].map(opt => (
                <button key={opt} onClick={() => handleInputChange('a_budget', opt)} className={`p-4 border text-left ${formData.a_budget === opt ? 'border-primary bg-primary/5' : 'border-gray-100'}`}>{opt}</button>
              ))}
            </div>
          </div>
        );
        break;

      case 7:
        if (service === 'Interior Design') return (
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-serif text-3xl text-primary">Where is the site located? (City / Area)</h2>
            <input type="text" className="w-full border-b-2 py-4 text-xl outline-none border-gray-200 focus:border-primary" value={formData.i_location || ""} onChange={(e) => handleInputChange('i_location', e.target.value)} placeholder="e.g. Pune, Kothrud" />
          </div>
        );
        if (service === 'Architecture Design') return (
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-serif text-3xl text-primary">Site location & Approx. Plot Size?</h2>
            <textarea className="w-full border-b-2 py-4 text-xl outline-none border-gray-200 focus:border-primary" value={formData.a_location || ""} onChange={(e) => handleInputChange('a_location', e.target.value)} placeholder="e.g. Mumbai, 2000 sq.ft." rows={3} />
          </div>
        );
        break;

      case 8:
        if (service === 'Interior Design') return (
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-serif text-3xl text-primary">Current property stage?</h2>
            <div className="grid gap-3">
              {['Possession soon', 'Already shifted', 'Under construction'].map(opt => (
                <button key={opt} onClick={() => handleInputChange('i_stage', opt)} className={`p-4 border text-left ${formData.i_stage === opt ? 'border-primary bg-primary/5' : 'border-gray-100'}`}>{opt}</button>
              ))}
            </div>
          </div>
        );
        if (service === 'Architecture Design') return (
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-serif text-3xl text-primary">Expected timeline for project start?</h2>
            <div className="grid gap-3">
              {['Immediately', '1–2 months', '3+ months'].map(opt => (
                <button key={opt} onClick={() => handleInputChange('a_timeline', opt)} className={`p-4 border text-left ${formData.a_timeline === opt ? 'border-primary bg-primary/5' : 'border-gray-100'}`}>{opt}</button>
              ))}
            </div>
          </div>
        );
        break;

      case 9:
        if (service === 'Interior Design') return (
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-serif text-3xl text-primary">When do you plan to start?</h2>
            <div className="grid gap-3">
              {['Immediately', '1–2 months', '3+ months'].map(opt => (
                <button key={opt} onClick={() => handleInputChange('i_timeline', opt)} className={`p-4 border text-left ${formData.i_timeline === opt ? 'border-primary bg-primary/5' : 'border-gray-100'}`}>{opt}</button>
              ))}
            </div>
          </div>
        );
        if (service === 'Architecture Design') return (
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-serif text-3xl text-primary">How did you hear about us?</h2>
            <div className="grid gap-3">
              {['Referral', 'Google', 'Instagram', 'Facebook'].map(opt => (
                <button key={opt} onClick={() => handleInputChange('a_source', opt)} className={`p-4 border text-left ${formData.a_source === opt ? 'border-primary bg-primary/5' : 'border-gray-100'}`}>{opt}</button>
              ))}
            </div>
          </div>
        );
        break;

      case 10:
        return (
          <div className="space-y-8 animate-fade-in-up text-center">
            <h2 className="font-serif text-4xl text-primary leading-tight">Thank you for sharing your {service === 'Interior Design' ? 'vision' : 'project details'}!</h2>
            <div className="w-12 h-px bg-secondary mx-auto"></div>
            <p className="font-sans text-gray-600 leading-relaxed">
              Based on the {service === 'Interior Design' ? 'details you have shared' : 'information provided'}, your project requires a structured {service === 'Interior Design' ? 'Interior Architecture' : 'Architectural Design'} consultation.
            </p>
            <p className="font-sans text-gray-600 leading-relaxed">
              To understand {service === 'Interior Design' ? 'how we work and the next steps involved' : 'our professional approach, scope of services, and the next steps involved'}, please proceed to review our Design Consultation Process.
            </p>
            <div className="pt-8">
              <a 
                href={service === 'Interior Design' ? RAZORPAY_INTERIOR_URL : RAZORPAY_ARCHITECTURE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-secondary text-primary border-secondary hover:bg-dark hover:text-white px-12 py-5 font-bold tracking-[0.2em] shadow-xl">
                  Understand Our Design Process
                </Button>
              </a>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <div className="absolute top-0 left-0 w-full p-8 md:p-12 flex justify-between items-center z-20">
        <h1 className="font-serif text-primary text-xl font-bold tracking-tight">Aesthetic Eaves</h1>
        <button onClick={onClose} className="text-gray-400 hover:text-primary text-4xl leading-none">&times;</button>
      </div>

      <div className="w-full max-w-2xl px-8 md:px-12 flex flex-col justify-center h-full pt-20">
        {step < 10 && renderProgress()}
        
        <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
          {renderStepContent()}
        </div>

        {/* Action Controls & Policies */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 p-6 md:p-12 z-30">
          <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
            {/* Policies Grid */}
            <div className="space-y-2 w-full md:w-auto">
              {[
                { id: 'privacy', label: 'I agree to the Privacy Policy', type: 'privacy' },
                { id: 'terms', label: 'I agree to the Terms & Conditions', type: 'terms' },
                { id: 'refund', label: 'I agree to the Refund Policy', type: 'refund' }
              ].map(policy => (
                <label key={policy.id} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={agreements[policy.id as keyof typeof agreements]} 
                    onChange={() => setAgreements(prev => ({ ...prev, [policy.id]: !prev[policy.id] }))}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-[10px] text-gray-500 font-sans uppercase tracking-widest hover:text-primary transition-colors">
                    {policy.label}
                  </span>
                  <button 
                    onClick={() => onLegalLinkClick(policy.type as any)} 
                    className="ml-auto text-[8px] text-secondary font-bold hover:underline"
                  >
                    View
                  </button>
                </label>
              ))}
              <p className="text-[9px] text-gray-400 font-sans italic pt-2">Note: Know Our Design Process Call fee is non-refundable.</p>
            </div>

            {/* Navigation Buttons */}
            {step < 10 && (
              <div className="flex gap-4 w-full md:w-auto">
                {step > 1 && (
                  <Button variant="outline" onClick={prevStep} className="px-8 border-gray-200 text-gray-400 hover:border-primary hover:text-primary" disabled={isSubmitting}>
                    Back
                  </Button>
                )}
                <Button onClick={nextStep} className="flex-1 md:flex-none px-12" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : (step === 9 ? 'Finish & Submit' : (step === 4 ? 'Continue' : 'Next Question'))}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;