"use client";

import { Github, Twitter, Linkedin, Shield } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-16 md:grid-cols-[1.5fr,2fr]">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                <Image src="/logo-shipsec.png" width={100} height={100} alt="ShipSec logo" className="my-auto" />
              </div>
              <h3 className="text-slate-900 text-2xl font-bold my-auto">ShipSec.ai</h3>
            </div>
            <p className="text-slate-600 text-lg mb-6">
              Autonomous Security for Every Business
            </p>
            <a 
              href="mailto:connect@shipsec.ai" 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 mb-6"
            >
              connect@shipsec.ai
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/shipsecai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-blue-600 flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-slate-700 group-hover:text-white" />
              </a>
              <a
                href="https://github.com/shipsecai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-800 flex items-center justify-center transition-colors group"
              >
                <Github className="w-5 h-5 text-slate-700 group-hover:text-white" />
              </a>
              <a
                href="https://twitter.com/shipsecai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-sky-500 flex items-center justify-center transition-colors group"
              >
                <Twitter className="w-5 h-5 text-slate-700 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-slate-900 font-semibold mb-4">Product</h4>
              <div className="flex flex-col gap-3">
                <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
                <a href="#integrations" className="text-slate-600 hover:text-slate-900 transition-colors">Integrations</a>
                <a href="#docs" className="text-slate-600 hover:text-slate-900 transition-colors">Documentation</a>
              </div>
            </div>

            <div>
              <h4 className="text-slate-900 font-semibold mb-4">Company</h4>
              <div className="flex flex-col gap-3">
                <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
                <a href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors">Blog</a>
                <a href="#careers" className="text-slate-600 hover:text-slate-900 transition-colors">Careers</a>
                <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="text-slate-900 font-semibold mb-4">Resources</h4>
              <div className="flex flex-col gap-3">
                <a href="#docs" className="text-slate-600 hover:text-slate-900 transition-colors">API Docs</a>
                <a href="#guides" className="text-slate-600 hover:text-slate-900 transition-colors">Security Guides</a>
                <a href="#support" className="text-slate-600 hover:text-slate-900 transition-colors">Support</a>
                <a href="#status" className="text-slate-600 hover:text-slate-900 transition-colors">Status</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <span className="text-sm text-slate-600">© 2025 ShipSec.ai. All rights reserved.</span>
              <div className="flex items-center gap-6">
                <a href="/privacy-policy" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Privacy Policy</a>
                <a href="#terms" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Terms of Service</a>
                <a href="#security" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Security</a>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </footer>
  );
}
