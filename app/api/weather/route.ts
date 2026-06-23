export async function GET() {
  try {
    const res = await fetch("https://wttr.in/Bulacan?format=j1", {
      next: { revalidate: 600 },
    });
    const data = await res.json();

    const current = data.current_condition[0];
    const area = data.nearest_area?.[0]?.areaName?.[0]?.value ?? "Bulacan";

    return Response.json({
      area,
      temp: current.temp_C,
      desc: current.weatherDesc[0].value,
      humidity: current.humidity,
      feelsLike: current.FeelsLikeC,
      windSpeed: current.windspeedKmph,
    });
  } catch {
    return Response.json({ error: "Could not fetch weather" }, { status: 502 });
  }
}
