"use client";

import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Standard setup for formspree or similar mail endpoint if requested later
    // Currently simulates a successful submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
        <div className="h-1 w-20 bg-cyan-500 rounded-full mb-12"></div>
        
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700/50 shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                <input 
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                <input 
                  id="email"
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                  })}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
              <textarea 
                id="message"
                rows={5}
                {...register("message", { required: "Message is required" })}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
                placeholder="How can we work together?"
              />
              {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <FiSend size={18} />
            </button>
            
            {submitStatus === "success" && (
              <p className="text-green-400 text-sm mt-4">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
