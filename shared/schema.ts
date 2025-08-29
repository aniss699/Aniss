
import { pgTable, serial, varchar, timestamp, text, integer, decimal, boolean, jsonb } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

// Tables Drizzle
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }),
  role: varchar('role', { length: 50 }).notNull().default('CLIENT'),
  rating_mean: decimal('rating_mean', { precision: 3, scale: 2 }),
  rating_count: integer('rating_count').default(0),
  profile_data: jsonb('profile_data'),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull()
});

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 500 }).notNull(),
  description: text('description').notNull(),
  budget: varchar('budget', { length: 100 }),
  category: varchar('category', { length: 100 }).notNull(),
  quality_target: varchar('quality_target', { length: 20 }),
  risk_tolerance: decimal('risk_tolerance', { precision: 3, scale: 2 }),
  geo_required: boolean('geo_required').default(false),
  onsite_radius_km: integer('onsite_radius_km'),
  status: varchar('status', { length: 50 }).notNull().default('draft'),
  loc_score: decimal('loc_score', { precision: 5, scale: 2 }),
  client_id: integer('client_id').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull()
});

export const bids = pgTable('bids', {
  id: serial('id').primaryKey(),
  project_id: integer('project_id').notNull(),
  provider_id: integer('provider_id').notNull(),
  amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
  timeline_days: integer('timeline_days').notNull(),
  message: text('message').notNull(),
  score_breakdown: jsonb('score_breakdown'),
  is_leading: boolean('is_leading').default(false),
  flagged: boolean('flagged').default(false),
  created_at: timestamp('created_at').defaultNow().notNull()
});

// Schemas Zod
export const insertUserSchema = createInsertSchema(users);
export const insertProjectSchema = createInsertSchema(projects);
export const insertBidSchema = createInsertSchema(bids);

// Types
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
export type Bid = typeof bids.$inferSelect;
export type NewBid = typeof bids.$inferInsert;

// Legacy interfaces pour compatibilité

// Interfaces legacy maintenues pour compatibilité
export interface LegacyUser {
  id: string;
  email: string;
  role: 'CLIENT' | 'PRO' | 'PERSON' | 'ADMIN';
  rating_mean?: number;
  rating_count?: number;
  created_at: Date;
}

export interface LegacyProject {
  id: string;
  title: string;
  description: string;
  budget: string;
  category: string;
  quality_target?: 'low' | 'medium' | 'high';
  risk_tolerance?: number;
  geo_required?: boolean;
  onsite_radius_km?: number;
  status: 'draft' | 'published' | 'in_progress' | 'completed';
  loc_score?: number;
  client_id: string;
  created_at: Date;
  updated_at: Date;
}

// NOUVEAU: Standardisation d'annonces
export interface ProjectStandardization {
  id: string;
  project_id: string;
  title_std: string;
  summary_std: string;
  acceptance_criteria: string[];
  category_std: string;
  sub_category_std: string;
  tags_std: string[];
  tasks_std: any[];
  deliverables_std: any[];
  skills_std: string[];
  constraints_std: string[];
  brief_quality_score: number;
  richness_score: number;
  missing_info: any[];
  price_suggested_min?: number;
  price_suggested_med?: number;
  price_suggested_max?: number;
  delay_suggested_days?: number;
  loc_uplift_reco?: any;
  rewrite_version: string;
  created_at: Date;
  updated_at: Date;
}

// NOUVEAU: Sources Web
export interface WebSource {
  id: string;
  domain: string;
  robots_txt?: any;
  crawl_policy?: any;
  last_ok_at?: Date;
  blocked: boolean;
  created_at: Date;
}

export interface WebDoc {
  id: string;
  url: string;
  domain: string;
  type: 'HOME' | 'ABOUT' | 'SERVICES' | 'PORTFOLIO' | 'PRICING' | 'CONTACT' | 'OTHER';
  title: string;
  text_summary: string;
  lang: string;
  published_at?: Date;
  fetched_at: Date;
  etag?: string;
  hash: string;
  source_type: 'RSS' | 'SITEMAP' | 'CRAWL';
  meta?: any;
}

export interface ExternalCompany {
  id: string;
  name: string;
  siren?: string;
  siret?: string;
  naf_code?: string;
  website?: string;
  emails: string[];
  phones: string[];
  address?: any;
  city?: string;
  postal_code?: string;
  country?: string;
  geo?: { lat: number; lng: number };
  social?: any;
  raw_tags: string[];
  skills: string[];
  confidence: number;
  first_seen_at: Date;
  last_seen_at: Date;
}

export interface ExternalCompanySignal {
  id: string;
  company_id: string;
  kind: 'PRICE' | 'AVAILABILITY' | 'PORTFOLIO' | 'RATING' | 'CLAIMED';
  payload: any;
  score: number;
  seen_at: Date;
}

export interface SourcingMatch {
  id: string;
  project_id: string;
  company_id: string;
  lead_score: number;
  reasons: any;
  status: 'CANDIDATE' | 'CONTACTED' | 'REFUSED' | 'CONVERTED';
  created_at: Date;
}

export interface LegacyBid {
  id: string;
  project_id: string;
  provider_id: string;
  amount: number;
  timeline_days: number;
  message: string;
  score_breakdown?: any;
  is_leading: boolean;
  flagged: boolean;
  created_at: Date;
}
