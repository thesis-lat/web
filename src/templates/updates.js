import { headerJson } from "@/lib"

const testData = [
    { annus: 2024, lingua: 'Latin', patriae_nomen: '🇻🇦 Vatican City Statte', repo: 'thesis-lat/template', descriptio: 'Descriptio' },
    { annus: 2024, lingua: 'Latin', patriae_nomen: '🇻🇦 Vatican City Statte', repo: 'thesis-lat/template', descriptio: 'Descriptio' },
    { annus: 2024, lingua: 'Latin', patriae_nomen: '🇻🇦 Vatican City Statte', repo: 'thesis-lat/template', descriptio: 'Descriptio' },
    { annus: 2024, lingua: 'Latin', patriae_nomen: '🇻🇦 Vatican City Statte', repo: 'thesis-lat/template', descriptio: 'Descriptio' },
]

export default async function onRequestPost(context) {
    const data = await d1Data(context)
    return new Response(JSON.stringify(data), headerJson)
}

async function d1Data(context) {
    const stmt = context.env.D1.prepare(
        `SELECT 
    repo, annus, lingua, patriae_nomen, descriptio
FROM templates
WHERE verificatur > 0
ORDER BY annus DESC
LIMIT 5`
    )
    // return testData
    return (await stmt.all()).results
}