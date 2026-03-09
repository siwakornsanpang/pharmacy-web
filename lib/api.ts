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
            next: { revalidate: 3600 }, // Cache for 1 hour
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
