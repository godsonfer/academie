export default function createSlug(title: string): string {
    let slug = title.toLowerCase();
    slug = slug.replace(/\s+/g, '_');
    slug = slug.replace(/[^a-z0-9_]/g, '');
    const accentMap = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ñ': 'n'
    };
    slug = slug.replace(/[áéíóúñ]/g, match => accentMap[match] || match);

    if (slug.length > 50) {
        slug = slug.substring(0, 50);
    }
    return slug;
}