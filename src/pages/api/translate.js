// pages/api/translate.js
import { translate } from 'bing-translate-api';

export default async function handler(req, res) {
    // Set CORS headers
    // Allows all domains during development
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Respond to preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Ensure the request is a POST method
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    // Extract data from the request body
    const { text, from = 'auto-detect', to = 'zh-Hant' } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text parameter is required' });
    }

    try {
        const result = await translate(text, from, to, false);
        res.status(200).json({
            originalText: text,
            translatedText: result.translation,
            fromLanguage: result.language.from,
            toLanguage: result.language.to
        });
    } catch (error) {
        console.error('Translation error:', error);
        res.status(500).json({ error: 'Failed to translate text' });
    }
}
