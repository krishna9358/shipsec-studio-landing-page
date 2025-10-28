"use client";

import { Github, Twitter, Linkedin, Shield } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center">
              <Image src="/logo-shipsec.png" width={100} height={100}  alt="logo"/>
              </div>
              <h3 className="text-slate-900 text-2xl font-bold">ShipSecAI</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Your AI Security Copilot. Build and deploy security automations without code. The no-code security automation platform for modern teams.
            </p>
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

          <div>
            <h4 className="text-slate-900 font-bold mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            © 2025 ShipSecAI. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built by <a href="https://www.linkedin.com/in/aseem-shrey" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-emerald-600 transition-colors">Aseem Shrey</a> & <a href="https://www.linkedin.com/in/pranjal-paliwal" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-emerald-600 transition-colors">Pranjal Paliwal</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
