import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const ContactForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        variant="ghost"
        className="absolute -translate-x-2/4 text-white text-center text-[15px] font-light leading-[12.75px] underline decoration-solid decoration-auto underline-offset-auto w-[157px] h-[13px] left-2/4 bottom-[5%] max-md:text-[13px] max-sm:text-[11px] max-sm:w-[120px] max-sm:bottom-[3%] hover:bg-transparent hover:text-white/80 p-0 h-auto"
        aria-label="Open contact form"
      >
        info@coplusstudio.com
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-6 w-full max-w-md space-y-4"
        aria-label="Contact form"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
          <Button
            type="button"
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="sm"
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close contact form"
          >
            ×
          </Button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full"
              placeholder="Tell us about your project..."
            />
          </div>
        </div>
        
        <div className="flex gap-2 pt-4">
          <Button
            type="button"
            onClick={() => setIsOpen(false)}
            variant="outline"
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="flex-1"
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};
