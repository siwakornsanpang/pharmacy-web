export interface WebSettings {
    id?: number;
    siteNameTh: string;
    siteNameEn: string;
    slogan?: string | null;
    logoPath?: string | null;
    address?: string | null;
    phone?: string | null;
    fax?: string | null;
    email?: string | null;
    googleMapsUrl?: string | null;
    googleMapsEmbed?: string | null;
    facebookUrl?: string | null;
    lineId?: string | null;
    youtubeUrl?: string | null;
}

export type NewsCategory = 'news' | 'recruitment' | 'procurement';

export interface News {
    id: number;
    title: string;
    content: string;
    thumbnailUrl?: string | null;
    status: 'draft' | 'published';
    category: NewsCategory;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string | null;
    isHighlight: boolean;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getWebSettings(): Promise<WebSettings> {
    if (!API_BASE_URL) {
        console.error('NEXT_PUBLIC_API_URL is not defined');
        return {
            siteNameTh: 'สภาเภสัชกรรม',
            siteNameEn: 'The Pharmacy Council of Thailand',
        };
    }

    try {
        const res = await fetch(`${API_BASE_URL}/web-settings`, {
            next: { revalidate: 60 }, // Cache for 1 minute
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch settings: ${res.statusText}`);
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching web settings:', error);
        return {
            siteNameTh: 'สภาเภสัชกรรม',
            siteNameEn: 'The Pharmacy Council of Thailand',
        };
    }
}

export async function getNews(): Promise<News[]> {
    if (!API_BASE_URL) {
        console.error('NEXT_PUBLIC_API_URL is not defined');
        return [];
    }

    try {
        const res = await fetch(`${API_BASE_URL}/news`, {
            next: { revalidate: 60 }, // Cache for 1 minute
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch news: ${res.statusText}`);
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}

export async function getNewsById(id: string): Promise<News | null> {
    if (!API_BASE_URL) {
        console.error('NEXT_PUBLIC_API_URL is not defined');
        return null;
    }

    try {
        const res = await fetch(`${API_BASE_URL}/news/${id}`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            if (res.status === 404) return null;
            throw new Error(`Failed to fetch news item: ${res.statusText}`);
        }

        return res.json();
    } catch (error) {
        console.error(`Error fetching news item ${id}:`, error);
        return null;
    }
}

export interface BannerItem {
    id: string;
    url: string;
    originalUrl: string;
    title: string;
    clickable: boolean;
    linkUrl: string;
    active: boolean;
    order: number;
}

export interface HomeContent {
    banners: BannerItem[];
    popups: any[];
}

export async function getHomeContent(): Promise<HomeContent> {
    if (!API_BASE_URL) {
        console.error('NEXT_PUBLIC_API_URL is not defined');
        return { banners: [], popups: [] };
    }

    try {
        const res = await fetch(`${API_BASE_URL}/home-content`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch home content: ${res.statusText}`);
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching home content:', error);
        return { banners: [], popups: [] };
    }
}

// ===== Agencies =====

export interface Agency {
    id: number;
    order: number;
    name: string;
    title: string | null;
    description: string | null;
    thumbnailUrl: string | null;
    originalThumbnailUrl: string | null;
    logoUrl: string | null;
    iconUrl: string | null;
    url: string;
    category: string;
    createdAt: string;
}

export async function getAgencies(): Promise<Agency[]> {
    if (!API_BASE_URL) {
        console.error('NEXT_PUBLIC_API_URL is not defined');
        return [];
    }

    try {
        const res = await fetch(`${API_BASE_URL}/agencies`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch agencies: ${res.statusText}`);
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching agencies:', error);
        return [];
    }
}
