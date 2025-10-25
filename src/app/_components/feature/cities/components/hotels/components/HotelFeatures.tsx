const hotelFeatures = [
  {
    label: "Free Swimming",
    icon: "🏊‍♂️",
    description:
      "Kolam renang outdoor dengan pemandangan indah, cocok untuk relaksasi atau bersantai di sore hari.",
  },
  {
    label: "Free Yoga",
    icon: "💆‍♀️",
    description:
      "Perawatan tubuh lengkap untuk memanjakan dan menyegarkan tubuh Anda.",
  },
  {
    label: "Gym Access",
    icon: "🏋🏻‍♂️",
    description:
      "Nikmati alat yang lengkap untuk membentuk badan anda setiap waktu.",
  },
];

export default function HotelFeatures({ features }: { features: string[] }) {
  const matchedFeatures = hotelFeatures.filter((f) =>
    features.includes(f.label)
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {matchedFeatures.length > 0 ? (
        matchedFeatures.map((feature) => (
          <div
            key={feature.label}
            className="flex flex-col items-center text-center p-5 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <span className="text-5xl mb-2">{feature.icon}</span>
            <h4 className="font-bold">{feature.label}</h4>
            <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No features available
        </p>
      )}
    </div>
  );
}
