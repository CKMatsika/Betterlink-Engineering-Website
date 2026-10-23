export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string;
          division: string;
          title: string;
          slug: string;
          summary: string | null;
          description: string | null;
          cover_image_url: string | null;
          tags: string[];
          featured: boolean;
          published: boolean;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          division: string;
          title: string;
          slug: string;
          summary?: string | null;
          description?: string | null;
          cover_image_url?: string | null;
          tags?: string[];
          featured?: boolean;
          published?: boolean;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          division?: string;
          title?: string;
          slug?: string;
          summary?: string | null;
          description?: string | null;
          cover_image_url?: string | null;
          tags?: string[];
          featured?: boolean;
          published?: boolean;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      services: {
        Row: {
          id: string;
          division: string | null;
          title: string;
          description: string | null;
          icon: string | null;
          published: boolean;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          division?: string | null;
          title: string;
          description?: string | null;
          icon?: string | null;
          published?: boolean;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          division?: string | null;
          title?: string;
          description?: string | null;
          icon?: string | null;
          published?: boolean;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      gallery_items: {
        Row: {
          id: string;
          image_url: string;
          caption: string | null;
          category: string | null;
          published: boolean;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          image_url: string;
          caption?: string | null;
          category?: string | null;
          published?: boolean;
          sort_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          image_url?: string;
          caption?: string | null;
          category?: string | null;
          published?: boolean;
          sort_order?: number;
          created_at?: string;
        };
      };
      stats: {
        Row: {
          id: string;
          scope: string | null;
          label: string;
          value: string;
          sub: string | null;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          scope?: string | null;
          label: string;
          value: string;
          sub?: string | null;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          scope?: string | null;
          label?: string;
          value?: string;
          sub?: string | null;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string | null;
          body: string | null;
          cover_image_url: string | null;
          published: boolean;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          excerpt?: string | null;
          body?: string | null;
          cover_image_url?: string | null;
          published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          excerpt?: string | null;
          body?: string | null;
          cover_image_url?: string | null;
          published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      site_settings: {
        Row: {
          key: string;
          value: Json;
          updated_at: string;
        };
        Insert: {
          key: string;
          value?: Json;
          updated_at?: string;
        };
        Update: {
          key?: string;
          value?: Json;
          updated_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
