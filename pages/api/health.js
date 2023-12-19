export default function handler(req, res) {
    const healthInfo = {
        status: "ok",
        description: "Cedrics Portfolio",
        uptime: process.uptime() // Uptime in seconds
    };

    res.status(200).json(healthInfo);
}
