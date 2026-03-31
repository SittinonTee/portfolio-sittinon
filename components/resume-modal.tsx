"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText, X } from "lucide-react";
import { useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-[95vw] md:w-[80vw] lg:w-[1000px] h-[85vh] bg-card border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col z-[110]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:px-6 bg-muted/30 border-b border-border z-10">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <FileText className="w-5 h-5 text-muted-foreground" />
                Sittinon_Resume
              </h3>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors cursor-pointer"
                aria-label="Close Resume"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* PDF Wrapper */}
            <div className="flex-1 w-full bg-secondary/20 relative">
              {/* Fallback pattern / loading state background */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 z-0">
                <span className="animate-pulse font-medium tracking-widest text-sm uppercase">
                  Loading Document...
                </span>
              </div>
              {/* Iframe for PDF viewing */}
              <iframe
                src="/resume.pdf#view=FitH"
                className="absolute inset-0 w-full h-full border-none z-10"
                title="Sittinon Resume Preview"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
