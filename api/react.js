export default async function handler(req, res) {
  const API_KEY = process.env.ASITHA_KEY;

  const r = await fetch(
    "https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/react",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + API_KEY
      },
      body: JSON.stringify(req.body)
    }
  );

  const data = await r.json();
  res.status(200).json(data);
}
