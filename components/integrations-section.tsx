"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const integrationsRow1 = [
  { name: "Jira", logo: "/integrations/jira.svg" },
  { name: "Slack", logo: "/integrations/slack.svg" },
  { name: "GitHub", logo: "/integrations/github.svg" },
  { name: "Okta", logo: "/integrations/okta.svg" },
  { name: "AWS", logo: "/integrations/aws.svg" },
  { name: "Datadog", logo: "/integrations/datadog.svg" },
  // Added more common integrations
  { name: "Google Cloud", logo: "/integrations/gcp.svg" },
  { name: "Stripe", logo: "/integrations/stripe.svg" },
  { name: "Notion", logo: "/integrations/notion.svg" },
  { name: "Asana", logo: "/integrations/asana.svg" },
];

const integrationsRow2 = [
  { name: "CrowdStrike", logo: "/integrations/crowdstrike.png" },
  { name: "Azure", logo: "/integrations/azure.svg" },
  { name: "PostgreSQL", logo: "/integrations/postgresql.svg" },
  { name: "Splunk", logo: "/integrations/splunk.svg" },
  { name: "OneLogin", logo: "/integrations/onelogin.png" },
  { name: "GitLab", logo: "/integrations/gitlab.svg" },
  // Added more common integrations
  { name: "ServiceNow", logo: "/integrations/servicenow.svg" },
  { name: "CircleCI", logo: "/integrations/circleci.svg" },
  { name: "Bitbucket", logo: "/integrations/bitbucket.svg" },
  { name: "Zendesk", logo: "/integrations/zendesk.svg" },
];

const integrationsRow3 = [
  { name: "SendGrid", logo: "/integrations/sendgrid.svg" },
  { name: "Jenkins", logo: "/integrations/jenkins.svg" },
  { name: "PagerDuty", logo: "/integrations/pagerduty.svg" },
  { name: "Auth0", logo: "/integrations/auth0.svg" },
  { name: "Docker", logo: "/integrations/docker.svg" },
  { name: "Kubernetes", logo: "/integrations/kubernetes.svg" },
  // Added more common integrations
  { name: "Snyk", logo: "/integrations/snyk.svg" },
  { name: "Snowflake", logo: "/integrations/snowflake.svg" },
  { name: "Salesforce", logo: "/integrations/salesforce.svg" },
  { name: "Grafana", logo: "/integrations/grafana.svg" },
];

const IntegrationRow = ({ integrations, direction = "left", duration = 40 }: { integrations: any[]; direction?: string; duration?: number }) => {
  const duplicated = [...integrations, ...integrations, ...integrations];

  return (
    <div className="relative">
      <motion.div
        animate={{
          x: direction === "left" ? [0, -1920] : [-1920, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
        className="flex gap-4"
      >
        {duplicated.map((integration, index) => (
          <motion.div
            key={`${integration.name}-${index}`}
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex-shrink-0 w-44 h-16 bg-white rounded-2xl border-2 border-slate-200 shadow-sm flex items-center justify-center gap-3 px-4 cursor-pointer transition-all hover:shadow-lg hover:border-blue-300"
          >
            <div className="shrink-0 flex items-center justify-center">
              <Image
                src={integration.logo}
                alt={`${integration.name} logo`}
                width={28}
                height={28}
                className="object-contain w-7 h-7"
              />
            </div>
            <span className="text-sm font-bold text-slate-800">
              {integration.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Integrate with Your Favorite Tools
          </h2>
          <p className="text-slate-600 text-base">
            Connect with 100+ security and productivity tools
          </p>
        </motion.div>
      </div>

      <div className="relative space-y-4">
        <IntegrationRow integrations={integrationsRow1} direction="left" duration={35} />
        <IntegrationRow integrations={integrationsRow2} direction="right" duration={40} />
        <IntegrationRow integrations={integrationsRow3} direction="left" duration={45} />

        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
